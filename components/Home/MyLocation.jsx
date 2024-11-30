import React from "react";
import MapImage from "../About/MapImage";

export default function MyLocation() {
  return (
    <figure className="relative">
      <MapImage />
      <figcaption className="absolute bottom-3 left-2/4 flex w-[80%] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-3 px-3 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <h5 className="text-md font-medium text-black flex items-center gap-2">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="14px"
            height="14px"
            viewBox="0 0 395.71 395.71"
            className="inline-block"
          >
            <g>
              <path
                d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
              />
            </g>
          </svg>
          Paris
        </h5>
      </figcaption>
    </figure>
  );
}
