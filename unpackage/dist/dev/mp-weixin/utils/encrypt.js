"use strict";
var common_vendor = require("../common/vendor.js");
function aesMinEncrypt(key, iv, word) {
  var _word = common_vendor.CryptoJS$1.enc.Utf8.parse(word), _key = common_vendor.CryptoJS$1.enc.Utf8.parse(key), _iv = common_vendor.CryptoJS$1.enc.Utf8.parse(iv);
  var encrypted = common_vendor.CryptoJS$1.AES.encrypt(_word, _key, {
    iv: _iv,
    mode: common_vendor.CryptoJS$1.mode.CBC,
    padding: common_vendor.CryptoJS$1.pad.Pkcs7
  });
  return encrypted.toString();
}
exports.aesMinEncrypt = aesMinEncrypt;
