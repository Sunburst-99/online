"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
var api_user = require("../../api/user.js");
require("../../request/request.js");
require("../../utils/util.js");
require("../../utils/md5.js");
require("../../request/upload.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const user = common_vendor.ref({});
    const imgUrl = common_vendor.ref("");
    const ref_popup = common_vendor.ref(null);
    function getUserInfo() {
      user.value = store_index.get_user();
      let url = user.value.headUrl;
      imgUrl.value = url ? `https://www.decunt.com/cover/user/headImg/${url}` : "";
    }
    getUserInfo();
    function editAvatar() {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        success: (res) => {
          let filePath = res.tempFilePaths[0];
          updateAvatar(filePath);
        }
      });
    }
    function updateAvatar(filePath) {
      api_user.apiUpdateAvatar(filePath).then((res) => {
        api_user.apiFreshUser().then((response) => {
          store_index.set_user(response.data);
          setTimeout(() => {
            getUserInfo();
          });
        });
      });
    }
    function logout() {
      ref_popup.value.open("bottom");
    }
    function toLogout() {
      store_index.remove_token();
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    }
    function cancel() {
      ref_popup.value.close();
    }
    return (_ctx, _cache) => {
      return {
        a: imgUrl.value ? imgUrl.value : "/static/avatar.jpg",
        b: common_vendor.p({
          type: "right",
          color: "#888",
          size: "20"
        }),
        c: common_vendor.o(editAvatar),
        d: common_vendor.t(user.value.username || ""),
        e: common_vendor.t(user.value.email || ""),
        f: common_vendor.t(user.value.phone || ""),
        g: common_vendor.o(logout),
        h: common_vendor.o(toLogout),
        i: common_vendor.o(cancel),
        j: common_vendor.sr(ref_popup, "dcbcfe34-1", {
          "k": "ref_popup"
        }),
        k: common_vendor.p({
          ["background-color"]: "#473980"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dcbcfe34"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
