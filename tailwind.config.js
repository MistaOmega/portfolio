import catppuccin from "@catppuccin/tailwindcss";
import { join } from 'path';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideright: {
          from: {
            transform: "translateX(-50px)",
            opacity: "0",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        }
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        slideright: "slideright 1s ease var(--slideright-delay, 0) forwards"
      },
    },
  },
  plugins: [catppuccin, skeleton],
}