"use client";

import { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, Center, Bounds, Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

function ModelContent({ src, format }) {
  const loader = useMemo(() => {
    if (format === "glb" || format === "gltf") return GLTFLoader;
    if (format === "obj") return OBJLoader;
    if (format === "stl") return STLLoader;
    if (format === "fbx") return FBXLoader;
    return GLTFLoader;
  }, [format]);

  const data = useLoader(loader, src);

  if (format === "stl") {
    const geometry = data;
    geometry.computeVertexNormals();
    return (
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#9CA3AF" metalness={0.1} roughness={0.8} />
      </mesh>
    );
  }

  const object = format === "glb" || format === "gltf" ? data.scene : data;
  return <primitive object={object} />;
}

export default function ModelViewer3D({ src, format }) {
  if (!src) {
    return (
      <div className="w-full aspect-video rounded-xl bg-gray-100 flex items-center justify-center text-sm text-gray-400">
        3D model niet beschikbaar
      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <Canvas
        camera={{ position: [2, 2, 2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <Suspense
          fallback={
            <Html center className="text-white text-sm">
              Model laden...
            </Html>
          }
        >
          <Bounds fit clip observe margin={1.2}>
            <Center>
              <ModelContent src={src} format={format} />
            </Center>
          </Bounds>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}
