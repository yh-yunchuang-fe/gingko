/*
 * @Author: wudi
 * @Date: 2022-03-29 14:09:57
 * @LastEditTime: 2022-04-08 17:20:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /gingko/src/assets/getSvg.js
 */
var fs = require('fs')
var path = require('path')
const svgDir = path.resolve(__dirname, '../assets/svgs')
console.log('svgDir===', svgDir)
// 读取单个文件
function readfile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(svgDir, filename), 'utf8', function(err, data) {
        if (err) reject(err)
        resolve({
            [filename.slice(0, filename.lastIndexOf('.'))]: data,
        })
        })
    })
}

// 读取SVG文件夹下所有svg
function readSvgs() {
    return new Promise((resolve, reject) => {
    fs.readdir(svgDir, function(err, files) {
        if (err) reject(err)
        console.log('files===', files)
        Promise.all(files.map(filename => readfile(filename)))
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
    })
}

// 生成js文件
readSvgs()
  .then(data => {
    let svgFile = 'export default ' + JSON.stringify(Object.assign.apply(this, data))
    fs.writeFile(path.resolve(__dirname, '../assets/svgs.js'), svgFile, function(err) {
        if(err) throw new Error(err)
    })
}).catch(err => {
    throw new Error(err)
})