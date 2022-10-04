import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import svgrPlugin from 'vite-plugin-svgr'
// import { ViteEjsPlugin } from 'vite-plugin-ejs';
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginEslint from 'vite-plugin-eslint'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import envCompatible from 'vite-plugin-env-compatible'
import swcReact from 'vite-plugin-swc-react'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // This changes the out put dir from dist to build
    // comment this out if that isn't relevant for your project
    const env = loadEnv(mode, process.cwd())

    // expose .env as process.env instead of import.meta since jest does not import meta yet
    const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
        return {
            ...prev,
            [`process.env.${key}`]: `"${val}"`,
        }
    }, {})

    return {
        build: {
            outDir: 'build',
            minify: 'esbuild',
        },
        plugins: [
            // react({
            //     jsxImportSource: '@emotion/react',
            //     babel: {
            //         plugins: ['@emotion/babel-plugin'],
            //     },
            // }),
            reactRefresh(),
            splitVendorChunkPlugin(),
            svgrPlugin({
                svgrOptions: {
                    icon: true,
                    // ...svgr options (https://react-svgr.com/docs/options/)
                },
            }),
            // ViteEjsPlugin({
            //     // 여기에는 사용하고자 하는 변수를 선언해주면 됩니다.
            //     nodeEnv: import.meta.env?.VITE_NODE_ENV || null,
            //     apiUrl: import.meta.env?.VITE_API_URL || null,
            //     publicUrl: import.meta.env?.VITE_PUBLIC_URL || null,
            // }),
            vitePluginEslint(),
            viteTsconfigPaths(),
            envCompatible(),
            swcReact({
                swcOptions: {
                    jsc: {
                        transform: {
                            react: {
                                runtime: 'automatic',
                            },
                        },
                    },
                    env: {
                        // https://vitejs.dev/guide/build.html#browser-compatibility
                        targets:
                            'defaults and supports es6-module and supports es6-module-dynamic-import, not opera > 0, not samsung > 0, not and_qq > 0',
                        mode: 'usage',
                        coreJs: '3',
                    },
                },
            }),
        ],
        define: envWithProcessPrefix,
    }
})
