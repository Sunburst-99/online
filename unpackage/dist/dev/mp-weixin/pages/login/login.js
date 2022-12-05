"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_aes = require("../../utils/aes.js");
var utils_encrypt = require("../../utils/encrypt.js");
var utils_config = require("../../utils/config.js");
var api_user = require("../../api/user.js");
var store_index = require("../../store/index.js");
require("../../request/request.js");
require("../../utils/util.js");
require("../../utils/md5.js");
require("../../request/upload.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const form = common_vendor.ref({});
    common_vendor.onMounted(() => {
      if (store_index.get_token()) {
        common_vendor.index.switchTab({
          url: "/pages/home/home"
        });
      }
    });
    function blurPhone() {
      const regCN = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
      if (!regCN.test(form.value.email)) {
        form.value.email = "";
        common_vendor.index.showToast({
          title: "\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E",
          icon: "none"
        });
      }
    }
    function toLogin() {
      if (!form.value.email || !form.value.password) {
        common_vendor.index.showToast({
          title: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u6216\u5BC6\u7801",
          icon: "none"
        });
        return false;
      }
      let uuid = common_vendor.v4().split("-").join("");
      let word = uuid + utils_aes.Encrypt(form.value.password);
      let password = utils_encrypt.aesMinEncrypt(utils_config.key, utils_config.iv, word);
      api_user.apiLogin({
        email: form.value.email,
        password,
        keyCode: uuid
      }).then((res) => {
        store_index.set_token(res.data.token);
        store_index.set_user(res.data.user);
        common_vendor.index.switchTab({
          url: "/pages/home/home"
        });
      });
    }
    function toSign() {
      common_vendor.index.navigateTo({
        url: "/pages/sign/sign"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(blurPhone),
        b: form.value.email,
        c: common_vendor.o(($event) => form.value.email = $event.detail.value),
        d: form.value.password,
        e: common_vendor.o(($event) => form.value.password = $event.detail.value),
        f: common_vendor.o(toLogin),
        g: common_vendor.o(toSign)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b237504c"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
