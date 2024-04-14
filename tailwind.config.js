import catppuccin from "@catppuccin/tailwindcss";



// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  // 2. Opt for dark mode to be handled via the class method
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 3. Append the path to the Skeleton package
    join(require.resolve(
            '@skeletonlabs/skeleton'),
        '../**/*.{html,js,svelte,ts}'
    )
  ],
  theme: {
    extend: {
      scale: ['hover'],
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

        slideright:{
            from: {
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

