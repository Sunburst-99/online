"use strict";
var common_vendor = require("../common/vendor.js");
const user = common_vendor.ref({
  email: "",
  headUrl: "",
  phone: "",
  userId: "",
  username: ""
});
function set_user(data) {
  user.value = data;
  common_vendor.index.setStorageSync("user", data);
}
function get_user() {
  return common_vendor.index.getStorageSync("user");
}
function remove_token() {
  common_vendor.index.removeStorageSync("token");
}
exports.get_user = get_user;
exports.remove_token = remove_token;
exports.set_user = set_user;
