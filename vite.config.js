import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    vue()
  ],
  test: /\.less$/,
  loader: "style-loader!css-loader!less-loader",
  server: {
    host:'localhost',
    port:3000,
    // proxy:{
    //   '/api': {
    //     target: {
    //       protocol: 'http:',
    //       host: 'localhost',
    //       port: 8888
    //     },
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    // }
  }
}
