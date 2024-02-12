import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv, PluginOption } from 'vite';
import fonts from 'vite-plugin-fonts';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export const createPlugins = (rootDir = __dirname): PluginOption[] => [
  tsconfigPaths({ root: rootDir, projects: [path.join(__dirname, 'tsconfig.json')] }),
  svgr(),
  fonts({
    google: {
      families: [
        {
          name: 'Open Sans',
          styles: 'wght@400;600',
          defer: true,
        },
      ],
    },
  }),
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    type: 'module',
    server: {
      port: 3006,
      open: '/examples/index.html',
    },
    define: {
      __USE_SHADOW_ROOT__: true,
      'process.env': '({})',
    },
    build: {
      modulePreload: false,
      manifest: true,

      rollupOptions: {
        input: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
          dir: 'dist',
          extend: true,
          entryFileNames: 'bundle.mjs',
        },
      },
    },
    plugins: [
      react(),
      // The default options are listed below. Pass nothing to use them.
      ...(mode === 'development'
        ? [
            createHtmlPlugin({
              template: 'examples/index.html',
              inject: { data: env },
            }),
          ]
        : []),
      ...createPlugins(),
    ],
  };
});
