"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  _easycom_uni_forms2();
}
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  _easycom_uni_forms();
}
const _sfc_main = {
  __name: "sign",
  setup(__props) {
    const form = common_vendor.ref({});
    const rules = common_vendor.ref({
      email: {
        rules: [{
          format: "email",
          errorMessage: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740"
        }]
      }
    });
    function back() {
      common_vendor.index.navigateBack();
    }
    return (_ctx, _cache) => {
      return {
        a: form.value.email,
        b: common_vendor.o(($event) => form.value.email = $event.detail.value),
        c: form.value.password,
        d: common_vendor.o(($event) => form.value.password = $event.detail.value),
        e: common_vendor.p({
          model: form.value,
          rules: rules.value
        }),
        f: common_vendor.o(back)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-10dbb326"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/pages/sign/sign.vue"]]);
wx.createPage(MiniProgramPage);
