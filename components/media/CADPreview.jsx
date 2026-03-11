"use client";

import { FileCode2, ExternalLink, Download } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const formatFileSize = (bytes) => {
  if (!bytes || typeof bytes !== "number") return null;
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unit = units.shift();
  while (size >= 1024 && units.length) {
    size /= 1024;
    unit = units.shift();
  }
  return `${size.toFixed(1)} ${unit}`;
};

export default function CADPreview({ url, name, format, size, note }) {
  const fileSize = formatFileSize(size);

  return (
    <Card className="w-full aspect-video rounded-xl border-gray-200 bg-white">
      <CardContent className="flex flex-col items-center justify-center text-center gap-3 h-full">
        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <FileCode2 className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{name || "CAD bestand"}</p>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-gray-100 text-gray-600">
              {format?.toUpperCase() || "CAD"}
            </span>
            {fileSize && (
              <span className="text-xs text-gray-400">{fileSize}</span>
            )}
          </div>
          {note && (
            <p className="text-xs text-gray-400 mt-2">{note}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-center pt-0">
        <Button asChild variant="secondary" size="sm">
          <a href={url} target="_blank" rel="noreferrer">
            <ExternalLink className="w-4 h-4" />
            Bekijk
          </a>
        </Button>
        <Button asChild variant="outline" size="sm">
          <a href={url} download>
            <Download className="w-4 h-4" />
            Download
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
