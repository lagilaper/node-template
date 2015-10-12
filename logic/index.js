'use strict';

var path = require("path");
var supportFile = ["js"];

module.exports = function (param) {
    let _, fs;
    fs = param.fs, _ = param._;
    [].forEach(function (folder) {
        let files;
        files = fs.readdirSync(path.join(__dirname, folder));
        return files.forEach((file) => {
            if (!_.contains(supportFile, file.split(".")[1])) {
                return;
            }
            return exports[file.replace(/\.js$/, "")] = require(path.join(__dirname, folder, file.replace(/\.js$/, "")))(param);
        });
    });
    return exports;
};
