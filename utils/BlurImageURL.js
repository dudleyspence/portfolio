import { decode } from "blurhash";

export function generateBlurDataUrl(blurHash, width = 32, height = 32) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const pixels = decode(blurHash, width, height);

  canvas.width = width;
  canvas.height = height;

  const imageData = new ImageData(new Uint8ClampedArray(pixels), width, height);

  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL();
}
