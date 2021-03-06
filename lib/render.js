"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderIndex = renderIndex;
exports.renderModule = renderModule;

var _njk = require("./njk");

/*
 * @Date: 2020-06-12 10:20:55
 * @LastEditors: songlin
 * @LastEditTime: 2020-06-12 11:33:08
 * @FilePath: \codegen\src\render.js
 */
const render = (0, _njk.fuckinTar)((0, _njk.createNjk)('../template', {}));

function renderIndex(dirName = [], model, target) {
  Object.assign(model, {
    dirName,
    fileName: 'index'
  });
  render('index', model, target);
}

function renderModule(dirName = [], fileName, model, target) {
  Object.assign(model, {
    dirName,
    fileName
  });
  render('module', model, target);
}