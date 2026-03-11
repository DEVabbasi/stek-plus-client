/**
 * Normalizes a raw Drawing object from the API into a Project object for the UI.
 * Handles images, videos, and default values.
 */
const normalizeCategoryId = (value) => {
  if (!value || typeof value !== "string") return "overige";
  const slug = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "overige";
};

export function normalizeDrawing(drawing) {
  if (!drawing) return null;

  const imageMedia = (drawing.images || []).map((img) => ({
    type: "image",
    src: img.url || img.src,
    alt: img.alt || drawing.title || "Project afbeelding",
    thumbnail: img.thumbnail || img.url || img.src,
  }));

  const videoMedia = (drawing.video || []).map((vid) => ({
    type: "video",
    src: vid.url || vid.src,
    alt: vid.alt || drawing.title || "Project video",
    thumbnail: vid.thumbnail || drawing.thumbnail || imageMedia[0]?.src || "/images/placeholder.png",
  }));

  const media = [...imageMedia, ...videoMedia];
  const categoryLabel = typeof drawing.category === "string" ? drawing.category : "Overige";

  // Ensure at least one media item for UI components
  const safeMedia =
    media.length > 0
      ? media
      : [
          {
            type: "image",
            src: drawing.thumbnail || "/images/placeholder.png",
            alt: drawing.title || "Placeholder",
            thumbnail: drawing.thumbnail || "/images/placeholder.png",
          },
        ];

  return {
    id: drawing._id, // MongoDB ID
    title: drawing.title || "Naamloos project",
    description: drawing.description || "",
    category: normalizeCategoryId(categoryLabel),
    categoryLabel,
    media: safeMedia,
  };
}

/**
 * Normalizes an array of drawings.
 */
export function normalizeDrawingList(drawings) {
  if (!Array.isArray(drawings)) return [];
  return drawings.map(normalizeDrawing);
}

/**
 * Normalizes categories from the API.
 */
export function normalizeCategories(categories) {
  if (!Array.isArray(categories)) {
    // Fallback categories if API fails or returns unexpected format
    return [
      { id: "staalconstructies", label: "Staalconstructies" },
      { id: "trappen", label: "Trappen" },
      { id: "hekwerken", label: "Hekwerken" },
      { id: "overige", label: "Overige" },
    ];
  }

  return categories.map((cat) => ({
    id: normalizeCategoryId(typeof cat === "string" ? cat : (cat.id || cat._id || cat.name || cat.label)),
    label:
      typeof cat === "string"
        ? cat
        : (cat.label || cat.name || "Overige"),
  }));
}
