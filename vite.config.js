import vue from '@vitejs/plugin-vue'
// import path from 'path'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  test: /\.less$/,
  loader: "style-loader!css-loader!less-loader"
}

// const path = require('path')
// vite.config.js # or vite.config.ts

// console.log(path.resolve(__dirname, './src'))

// module.exports = {
//   optimizeDeps: {
//     include: ["moment", "echarts", "axios", "mockjs", "swiper"]
//   },
// //   alias: {
// //     '/@/': path.resolve(__dirname, './src')
// // //     // '/@components/': path.resolve(__dirname, './src/components')
// //   }
// }