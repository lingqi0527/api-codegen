/*
 * @Date: 2020-06-12 10:20:55
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-12 11:33:08
 * @FilePath: \codegen\src\render.js
 */
import { createNjk, fuckinTar } from "./njk"

const render = fuckinTar(createNjk('../template', {}))
export function renderIndex(dirName = [], model,target) {
    Object.assign(model, {
        dirName,
        fileName: 'index'
    })
    render('index', model, target)
}
export function renderModule(dirName = [], fileName, model,target) {
    Object.assign(model, {
        dirName,
        fileName
    })
    render('module', model, target)
}