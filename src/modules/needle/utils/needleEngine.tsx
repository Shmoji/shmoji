// https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive
'use client'

const isServer = () => typeof window === `undefined`;

import { useEffect, useState } from "react";

// Only import needle-tools/engine on the client side
let NeedleEngineModule: any;
if (!isServer()) {
  import("@needle-tools/engine").then((module) => {
    NeedleEngineModule = module;
  }).catch((e) => {
    console.error("Failed to load @needle-tools/engine:", e);
  });
}

// Make addEventListener optional
export type NeedleEngineProps = Omit<NeedleEngineAttributes, 'addEventListener'> & { addEventListener?: (event: CustomEvent) => void };

/** **Needle Engine Component**  
 * Import with `const NeedleEngine = dynamic(() => import('./needleEngine'), { ssr: false })`
 * 
 * @example
 * <NeedleEngine src="./assets/next.glb" loading-style="light" style={{ width: '100%', height: '100%', }}></NeedleEngine>
 * 
 */
export default function NeedleEngine({ ...props }): JSX.Element {
  const [src, setSrc] = useState(props?.src);
  const [engineLoaded, setEngineLoaded] = useState(false);

  useEffect(() => {
    if (!isServer()) {
      // First ensure the engine module is loaded
      if (!engineLoaded) {
        import("@needle-tools/engine").then(() => {
          setEngineLoaded(true);
        }).catch((e) => {
          console.error("Failed to load @needle-tools/engine:", e);
        });
      }

      // Then try to load the generated code
      import("../../../generated/gen")
        .then((m) => {
          if (props?.src === undefined) {
            console.log('setting src to==', m.needle_exported_files);
            setSrc(m.needle_exported_files);
          }
        })
        .catch((e) => {
          console.error("Failed to load generated code:", e);
        });
    }
  }, []);

  if (!isServer() && engineLoaded) {
    return <needle-engine src={src} {...props}></needle-engine>;
  }

  return null;
}

// Add this type import at the top if needed
import type { NeedleEngineAttributes } from "@needle-tools/engine";
