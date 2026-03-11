"use client";

import dynamic from "next/dynamic";
import ImageViewer from "./ImageViewer";
import VideoViewer from "./VideoViewer";
import CADPreview from "./CADPreview";
import CADViewer from "./CADViewer";

const ModelViewer3D = dynamic(() => import("./ModelViewer3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video rounded-xl bg-gray-100 animate-pulse" />
  ),
});

const IMAGE_FORMATS = new Set(["jpg", "jpeg", "png", "webp", "gif", "svg", "avif", "heic"]);
const VIDEO_FORMATS = new Set(["mp4", "mov", "webm", "avi", "mkv"]);
const MODEL_FORMATS = new Set(["glb", "gltf", "obj", "stl", "fbx"]);
const CAD_FORMATS = new Set(["dwg", "dxf", "step", "stp", "iges", "igs"]);
const CAD_INLINE_FORMATS = new Set(["step", "stp", "iges", "igs"]);

const getExtension = (url) => {
  if (!url) return "";
  const clean = url.split("?")[0].split("#")[0];
  const parts = clean.split(".");
  return parts.length > 1 ? parts.pop().toLowerCase() : "";
};

const getNameFromUrl = (url) => {
  if (!url) return "Bestand";
  const clean = url.split("?")[0].split("#")[0];
  return clean.split("/").pop() || "Bestand";
};

const normalizeMediaItem = (item) => {
  const url = item?.url || item?.src || "";
  const resourceType = item?.resourceType || item?.type || "raw";
  const format = (item?.format || getExtension(url) || "").toLowerCase();
  const publicId = item?.publicId || item?.id || "";
  const name = publicId ? publicId.split("/").pop() : getNameFromUrl(url);
  const alt = item?.alt || name || "Media";
  const thumbnail = item?.thumbnail || item?.url || item?.src || "";
  return { url, resourceType, format, publicId, name, alt, thumbnail };
};

const detectType = ({ resourceType, format }) => {
  if (IMAGE_FORMATS.has(format)) return "image";
  if (VIDEO_FORMATS.has(format)) return "video";
  if (MODEL_FORMATS.has(format)) return "model";
  if (CAD_FORMATS.has(format)) return "cad";
  if (resourceType === "image") return "image";
  if (resourceType === "video") return "video";
  return "unknown";
};

export default function MediaRenderer({ item, mode = "inline" }) {
  const normalized = normalizeMediaItem(item);
  const type = detectType(normalized);

  if (!normalized.url) {
    return (
      <div className="w-full aspect-video rounded-xl bg-gray-100 flex items-center justify-center text-sm text-gray-400">
        Geen media beschikbaar
      </div>
    );
  }

  switch (type) {
    case "image":
      return (
        <ImageViewer
          src={normalized.url}
          alt={normalized.alt}
          mode={mode}
        />
      );
    case "video":
      return (
        <VideoViewer
          src={normalized.url}
          poster={normalized.thumbnail}
          mode={mode}
        />
      );
    case "model":
      return (
        <ModelViewer3D
          src={normalized.url}
          format={normalized.format}
          mode={mode}
        />
      );
    case "cad":
      return CAD_INLINE_FORMATS.has(normalized.format) ? (
        <CADViewer url={normalized.url} format={normalized.format} />
      ) : (
        <CADPreview
          url={normalized.url}
          name={normalized.name}
          format={normalized.format}
          size={item?.bytes}
          note="Preview niet ondersteund voor dit CAD-formaat."
        />
      );
    default:
      return (
        <div className="w-full aspect-video rounded-xl bg-gray-100 flex items-center justify-center text-sm text-gray-400">
          Niet-ondersteund bestand
        </div>
      );
  }
}
