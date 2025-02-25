import { getPlaiceholder } from "plaiceholder";

export async function generateBlurDataUrl(src) {
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    console.log(base64);
  } catch (err) {
    err;
  }
}
