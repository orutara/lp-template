// const imagemin = require("imagemin-keep-folder")
import imagemin from "imagemin-keep-folder"
// const imageminMozjpeg = require("imagemin-mozjpeg")
import imageminMozjpeg from "imagemin-mozjpeg"
// const imageminPngquant = require("imagemin-pngquant")
import imageminPngquant from "imagemin-pngquant"
// const imageminGifsicle = require("imagemin-gifsicle")
import imageminGifsicle from "imagemin-gifsicle"
// const imageminSvgo = require("imagemin-svgo")
import imageminSvgo from "imagemin-svgo"

imagemin(['src/images/**/*.{jpg,png,gif,svg}'], {
  plugins: [
    imageminMozjpeg({ quality: 70 }),
    imageminPngquant(),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: output => {
    return output.replace(/images\//, "../dist/images/")
  },
}).then(() => {
  console.log("Images optimized")
})