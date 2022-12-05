"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "home",
  setup(__props) {
    const chartList = common_vendor.ref([]);
    function getChartList() {
      chartList.value = [
        {
          id: 1,
          name: "\u597D\u53CB1",
          url: null,
          record: "test12345",
          time: "9:00"
        },
        {
          id: 2,
          name: "\u597D\u53CB2",
          url: null,
          record: "test12345",
          time: "9:00"
        },
        {
          id: 3,
          name: "\u597D\u53CB3",
          url: null,
          record: "test12345",
          time: "9:00"
        },
        {
          id: 4,
          name: "\u597D\u53CB4",
          url: null,
          record: "test12345",
          time: "9:00"
        },
        {
          id: 5,
          name: "\u597D\u53CB5",
          url: null,
          record: "test12345",
          time: "9:00"
        }
      ];
    }
    getChartList();
    function scan() {
      common_vendor.index.scanCode({
        success: (res) => {
          console.log(res);
        }
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search",
          color: "#fff",
          size: "24"
        }),
        b: common_vendor.o(scan),
        c: common_vendor.p({
          type: "plusempty",
          color: "#fff",
          size: "24"
        }),
        d: common_vendor.f(chartList.value, (item, index, i0) => {
          return {
            a: item.url ? item.url : "/static/avatar.jpg",
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.record),
            d: common_vendor.t(item.time),
            e: index,
            f: item.id
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-92bb8f34"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
