"use strict";
var request_request = require("../request/request.js");
var request_upload = require("../request/upload.js");
function apiUpdateAvatar(filePath) {
  return request_upload.upload({
    url: "/userCenter/uploadImg",
    filePath
  });
}
function apiFreshUser() {
  return request_request.request({
    url: "/app/refreshUserInfo",
    method: "GET"
  });
}
exports.apiFreshUser = apiFreshUser;
exports.apiUpdateAvatar = apiUpdateAvatar;
