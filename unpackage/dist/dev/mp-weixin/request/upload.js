"use strict";
var common_vendor = require("../common/vendor.js");
var utils_util = require("../utils/util.js");
var utils_md5 = require("../utils/md5.js");
const baseUrl = "https://www.decunt.com/prod-api";
var upload = ({
  url,
  filePath
}) => {
  const token = common_vendor.index.getStorageSync("token");
  const time = parseInt(new Date().getTime()) + "";
  const sign = common_vendor.gBase64.encode(time);
  const signPrefix = sign.substring(0, 9);
  const signSuffix = sign.substring(9, 18);
  const header = {
    sign: time,
    current: utils_md5.hexMD5(time + "8a639fd7a14640958ac15600896f537d"),
    token: token ? common_vendor.gBase64.encode(signPrefix + token + signSuffix) : "",
    traceId: utils_util.randomWord(false, 32)
  };
  return new Promise((resolve, reject) => {
    common_vendor.index.uploadFile({
      url: baseUrl + url,
      filePath,
      name: "file",
      header,
      success(res) {
        let response = JSON.parse(res.data);
        if (response.code === 200) {
          resolve(response);
        } else {
          common_vendor.index.showToast({
            title: response.msg,
            icon: "none"
          });
        }
      },
      fail(err) {
        common_vendor.index.showToast({
          title: "\u8BF7\u6C42\u63A5\u53E3\u5931\u8D25\uFF01",
          icon: "none"
        });
        reject(err);
      }
    });
  });
};
exports.upload = upload;
