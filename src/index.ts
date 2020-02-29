"use strict";
const winax = require("winax");
const child_process_1 = require("child_process");
const path = require("path");
const fs = require("fs");
const _ = require("lodash");


function getTSPlug() {
    const dllExist = fs.existsSync(`${path.resolve(__dirname, 'ts.dll')}`);
    if(!dllExist){
        return {
            errorCode: -1,
            errorMsg: 'ts.dll文件不存在, 无法初始化'
        }
    }
    try {
        return new winax.Object('ts.tssoft');
    }
    catch (e) {
        child_process_1.execSync(`regsvr32 ${path.resolve(__dirname, 'ts.dll')} /s`);
        return new winax.Object('ts.tssoft');
    }
}

const TSPlug = getTSPlug();

module.exports = () => getTSPlug()