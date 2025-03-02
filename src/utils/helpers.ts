export function extractVideoId(url: string): string | null {
  if (!url) return null;

  const regex = /(?:youtube\.com\/(?:.*[?&]v=|embed\/)|youtu\.be\/)([^"&?/]+)/;
  const match = url.match(regex);

  return match ? match[1] : null;
}
