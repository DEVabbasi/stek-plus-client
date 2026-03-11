"use client";

import { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Bounds, Html, Environment } from "@react-three/drei";
import * as THREE from "three";

const SUPPORTED_STEP = new Set(["step", "stp", "iges", "igs"]);
const DEFAULT_TESSELLATION = {
  linearUnit: "millimeter",
  linearDeflectionType: "bounding_box_ratio",
  linearDeflection: 0.001,
  angularDeflection: 0.1,
};

const loadOcct = () => {
  if (typeof window === "undefined") return null;
  if (window.occtimportjs) return window.occtimportjs;

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "/occt/occt-import-js.js";
    script.async = true;
    script.onload = () => {
      if (window.occtimportjs) resolve(window.occtimportjs);
      else reject(new Error("occt-import-js failed to load"));
    };
    script.onerror = () => reject(new Error("occt-import-js script load error"));
    document.body.appendChild(script);
  });
};

function meshFromOcct(meshData) {
  const geometry = new THREE.BufferGeometry();

  if (meshData?.attributes?.position?.array) {
    const positions = new Float32Array(meshData.attributes.position.array);
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  }

  if (meshData?.attributes?.normal?.array) {
    const normals = new Float32Array(meshData.attributes.normal.array);
    geometry.setAttribute("normal", new THREE.BufferAttribute(normals, 3));
  } else {
    geometry.computeVertexNormals();
  }

  if (meshData?.index?.array) {
    geometry.setIndex(meshData.index.array);
  }

  geometry.computeBoundingSphere();

  const color = meshData?.color
    ? new THREE.Color(meshData.color[0], meshData.color[1], meshData.color[2])
    : new THREE.Color("#9CA3AF");

  const material = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.1,
    roughness: 0.8,
  });

  return new THREE.Mesh(geometry, material);
}

export default function CADViewer({ url, format }) {
  const [object, setObject] = useState(null);
  const [error, setError] = useState("");

  const isStepFamily = SUPPORTED_STEP.has(format);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        if (!url) throw new Error("Geen CAD bestand gevonden");

        if (isStepFamily) {
          const occtimportjs = await loadOcct();
          const occt = await occtimportjs();
          const buffer = await fetch(url).then((r) => r.arrayBuffer());
          const file = new Uint8Array(buffer);

          const result = format === "iges" || format === "igs"
            ? occt.ReadIgesFile(file, DEFAULT_TESSELLATION)
            : occt.ReadStepFile(file, DEFAULT_TESSELLATION);

          if (!result?.success) {
            throw new Error("CAD import mislukt");
          }

          const group = new THREE.Group();
          (result.meshes || []).forEach((mesh) => {
            group.add(meshFromOcct(mesh));
          });

          if (mounted) setObject(group);
          return;
        }

        throw new Error("Preview niet ondersteund voor dit CAD-formaat");
      } catch (err) {
        if (mounted) setError(err?.message || "CAD preview mislukt");
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, [url, format, isStepFamily]);

  if (error) {
    return (
      <div className="w-full aspect-video rounded-xl bg-gray-100 flex items-center justify-center text-sm text-gray-400">
        {error}
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
        <Environment preset="city" />
        <Center>
          <Bounds fit clip observe margin={1.2}>
            {object ? (
              <primitive object={object} />
            ) : (
              <Html center className="text-white text-sm">
                CAD laden...
              </Html>
            )}
          </Bounds>
        </Center>
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  );
}
