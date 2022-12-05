"use strict";
var common_vendor = require("../common/vendor.js");
const KEY = common_vendor.CryptoJS.enc.Utf8.parse("personalPwd!@#");
const IV = common_vendor.CryptoJS.enc.Utf8.parse("personalPwd!@#");
function Encrypt(word, keyStr, ivStr) {
  let key = KEY;
  let iv = IV;
  if (keyStr) {
    key = common_vendor.CryptoJS.enc.Utf8.parse(keyStr);
    iv = common_vendor.CryptoJS.enc.Utf8.parse(ivStr);
  }
  let srcs = common_vendor.CryptoJS.enc.Utf8.parse(word);
  var encrypted = common_vendor.CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: common_vendor.CryptoJS.mode.CBC,
    padding: common_vendor.CryptoJS.pad.ZeroPadding
  });
  return common_vendor.CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}
exports.Encrypt = Encrypt;
