"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_pinyin = require("../../utils/pinyin.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
const _sfc_main = {
  __name: "contacts",
  setup(__props) {
    const data = common_vendor.reactive({
      letters: [],
      friends: [],
      groups: [],
      isChooseFriend: true,
      isChooseGroup: false,
      params: ""
    });
    const {
      list,
      letters,
      friends,
      groups,
      isChooseFriend,
      isChooseGroup,
      params
    } = common_vendor.toRefs(data);
    common_vendor.onMounted(() => {
      chooseFriend();
    });
    function chooseFriend() {
      data.isChooseFriend = true;
      data.isChooseGroup = false;
      getFriends();
    }
    function chooseGroup() {
      data.isChooseGroup = true;
      data.isChooseFriend = false;
      getGroup();
    }
    function getFriends() {
      let list2 = [
        {
          id: 1,
          name: "aa1",
          url: null
        },
        {
          id: 2,
          name: "aa2",
          url: null
        },
        {
          id: 3,
          name: "bb1",
          url: null
        },
        {
          id: 4,
          name: "ee1",
          url: null
        },
        {
          id: 5,
          name: "ll1",
          url: null
        },
        {
          id: 6,
          name: "mm1",
          url: null
        },
        {
          id: 7,
          name: "mm1",
          url: null
        },
        {
          id: 8,
          name: "mm1",
          url: null
        },
        {
          id: 9,
          name: "mm1",
          url: null
        },
        {
          id: 10,
          name: "mm1",
          url: null
        },
        {
          id: 11,
          name: "mm1",
          url: null
        },
        {
          id: 12,
          name: "mm1",
          url: null
        },
        {
          id: 13,
          name: "123",
          url: null
        },
        {
          id: 14,
          name: "ww1",
          url: null
        },
        {
          id: 15,
          name: "zz1",
          url: null
        }
      ];
      data.friends = pinyinSort(list2);
      data.letters = data.friends.map((item) => item.letter);
    }
    function getGroup() {
      data.groups = [
        {
          id: 1,
          name: "\u7FA4\u7EC41",
          url: null
        },
        {
          id: 2,
          name: "\u7FA4\u7EC42",
          url: null
        },
        {
          id: 3,
          name: "\u7FA4\u7EC43",
          url: null
        },
        {
          id: 4,
          name: "\u7FA4\u7EC44",
          url: null
        },
        {
          id: 5,
          name: "\u7FA4\u7EC45",
          url: null
        }
      ];
    }
    function toSelectIndex(item) {
      data.letters.indexOf(item);
      let arr = [];
      data.friends.forEach((el) => {
        el.datas.forEach((cell) => {
          arr.push(cell);
        });
      });
      let arr2 = arr.map((el) => el.first);
      let index2 = arr2.indexOf(item);
      let distanceList = index2 * 61;
      common_vendor.index.pageScrollTo({
        scrollTop: distanceList,
        duration: 0
      });
    }
    function pinyinSort(arr) {
      let wordArrs = arr;
      let newArrs = [];
      let letterList = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "#"
      ];
      for (let i = 0; i < wordArrs.length; i++) {
        wordArrs[i].name;
        let fristName = utils_pinyin.Pinyin.getSpell(arr[i].name, function(charactor, spell) {
          return spell[0];
        });
        fristName = fristName.substring(0, 1).toUpperCase();
        if (letterList.includes(fristName)) {
          wordArrs[i].first = fristName;
        } else {
          wordArrs[i].first = "#";
        }
        newArrs.push(wordArrs[i]);
      }
      let wordJson = [];
      for (let i = 0; i < letterList.length; i++) {
        newArrs.forEach((el) => {
          if (letterList[i] === el.first) {
            wordJson.push(el);
          }
        });
      }
      let filterLetterList = [];
      letterList.forEach((item) => {
        filterLetterList.push({
          letter: item,
          datas: []
        });
      });
      filterLetterList.forEach((item) => {
        wordJson.forEach((cell) => {
          if (cell.first == item.letter) {
            item.datas.push(cell);
          }
        });
      });
      filterLetterList = filterLetterList.filter((item) => {
        return item.datas.length > 0;
      });
      return filterLetterList;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(isChooseFriend) ? "#f0f0f0" : "#999",
        b: common_vendor.o(chooseFriend),
        c: common_vendor.unref(isChooseGroup) ? "#f0f0f0" : "#999",
        d: common_vendor.o(chooseGroup),
        e: common_vendor.o(($event) => common_vendor.isRef(params) ? params.value = $event : null),
        f: common_vendor.p({
          prefixIcon: "search",
          styles: {
            color: "#f0f0f0",
            borderColor: "#666"
          },
          modelValue: common_vendor.unref(params)
        }),
        g: common_vendor.f(common_vendor.unref(friends), (item, index, i0) => {
          return {
            a: common_vendor.f(item.datas, (cell, i, i1) => {
              return {
                a: common_vendor.t(cell.name),
                b: i
              };
            }),
            b: item.url ? item.url : "/static/avatar.jpg",
            c: index,
            d: item.id
          };
        }),
        h: common_vendor.f(common_vendor.unref(letters), (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => toSelectIndex(item), index)
          };
        }),
        i: common_vendor.unref(isChooseFriend),
        j: common_vendor.f(common_vendor.unref(groups), (item, index, i0) => {
          return {
            a: item.url ? item.url : "/static/avatar.jpg",
            b: common_vendor.t(item.name),
            c: index,
            d: item.id
          };
        }),
        k: common_vendor.unref(isChooseGroup)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4ed3d3e6"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/pages/contacts/contacts.vue"]]);
wx.createPage(MiniProgramPage);
