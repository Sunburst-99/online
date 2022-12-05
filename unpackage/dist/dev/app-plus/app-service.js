var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  var icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$7 = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3], ["__scopeId", "data-v-a2e81f6e"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$6 = {
    __name: "home",
    setup(__props) {
      const chartList = vue.ref([]);
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
        uni.scanCode({
          success: (res) => {
            formatAppLog("log", "at pages/home/home.vue:80", res);
          }
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "chart" }, [
          vue.createElementVNode("view", { class: "chart-title" }, [
            vue.createElementVNode("view", null, "\u6D88\u606F"),
            vue.createElementVNode("view", { class: "title-right" }, [
              vue.createVNode(_component_uni_icons, {
                type: "search",
                color: "#fff",
                size: "24"
              }),
              vue.createVNode(_component_uni_icons, {
                type: "plusempty",
                color: "#fff",
                size: "24",
                onClick: scan
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "chart-list" }, [
            vue.createCommentVNode(" \u5DE6\u4FA7\u901A\u8BAF\u5F55 "),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(chartList.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "items",
                key: index,
                id: item.id
              }, [
                vue.createElementVNode("view", { class: "item-avatar" }, [
                  vue.createElementVNode("image", {
                    class: "img-avatar",
                    src: item.url ? item.url : "/static/avatar.jpg",
                    mode: ""
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "item-data" }, [
                  vue.createElementVNode("view", { class: "item-left" }, [
                    vue.createElementVNode("view", null, vue.toDisplayString(item.name), 1),
                    vue.createElementVNode("view", { class: "item-note" }, vue.toDisplayString(item.record), 1)
                  ]),
                  vue.createElementVNode("view", { class: "item-right" }, [
                    vue.createElementVNode("view", { class: "item-time" }, vue.toDisplayString(item.time), 1)
                  ])
                ])
              ], 8, ["id"]);
            }), 128))
          ])
        ]);
      };
    }
  };
  var PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-92bb8f34"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/pages/home/home.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$5 = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: true
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
      };
    },
    computed: {
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      inputMaxlength() {
        return Number(this.maxlength);
      },
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0) {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      onBlur() {
        this.focused = false;
        this.$emit("focus", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
      style: vue.normalizeStyle($options.boxStyle)
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
        style: vue.normalizeStyle($options.inputContentStyle)
      }, [
        $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "content-clear-icon",
          type: $props.prefixIcon,
          color: "#c0c4cc",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
          size: "22"
        }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
        $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
          key: 1,
          class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          disabled: $props.disabled,
          "placeholder-class": "uni-easyinput__placeholder-class",
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          autoHeight: $props.autoHeight,
          onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : (vue.openBlock(), vue.createElementBlock("input", {
          key: 2,
          type: $props.type === "password" ? "text" : $props.type,
          class: "uni-easyinput__content-input",
          style: vue.normalizeStyle($options.inputStyle),
          name: $props.name,
          value: $data.val,
          password: !$data.showPassword && $props.type === "password",
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          "placeholder-class": "uni-easyinput__placeholder-class",
          disabled: $props.disabled,
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          confirmType: $props.confirmType,
          onFocus: _cache[5] || (_cache[5] = (...args) => $options._Focus && $options._Focus(...args)),
          onBlur: _cache[6] || (_cache[6] = (...args) => $options._Blur && $options._Blur(...args)),
          onInput: _cache[7] || (_cache[7] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[8] || (_cache[8] = (...args) => $options.onConfirm && $options.onConfirm(...args))
        }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType"])),
        $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
          vue.createCommentVNode(" \u5F00\u542F\u5BC6\u7801\u65F6\u663E\u793A\u5C0F\u773C\u775B "),
          $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
            size: 22,
            color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
            onClick: $options.onEyes
          }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
          $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: "content-clear-icon",
            type: $props.suffixIcon,
            color: "#c0c4cc",
            onClick: _cache[9] || (_cache[9] = ($event) => $options.onClickIcon("suffix")),
            size: "22"
          }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
          $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: "clear",
            size: $props.clearSize,
            color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
            onClick: $options.onClear
          }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ], 6)
    ], 6);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2], ["__scopeId", "data-v-abe12412"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  /*!
  author:kooboy_li@163.com
  MIT licensed
  */
  let base = 19968, middle = (40896 - base) / 2;
  let EMPTY = "";
  let COMA = ",";
  let chars = (() => {
    let a = [];
    for (let i = 33; i < 127; i++) {
      if (i != 34 && i != 92 && i != 45) {
        a.push(String.fromCharCode(i));
      }
    }
    return a.join(EMPTY);
  })();
  let SDB = {
    "a": {
      "yi": "!]#R$!$q(3(p)[*2*g+6+d.C.q0[0w1L2<717l8B8E9?:8;V;[;e;{<)<+<S<]=9>.>4??@~A`BbC:CGC^CiDMDjDkF!H/H;JaL?M.M2MoNCN|OgO|P$P)PBPyQ~R%R.S.T;T<TBTqT|UQUXU}V[WCXgYCYDY_YdYuZ9Zs];]j]p]q^.^@^S^w^x_,_T`H`J`ga)a8aQb9budJddgoh9hqi2itj&jEjRj]jzk>k^l$l<mLmdnDoEoMoQoop3p5pWp`qSr.u'uLv]wIxXy_y~{z}`~r-$=-$X-$Y-%!-%0-%j-&^-&s-'t-(<-)2-*n-+6-+f-/M-/N-0.-2|-3u-4b-4c-4m-5E-5N-5Z-5l-6&-6+-7*-70-73-8F-8R-8g-:*-:5",
      "ding": "!2%%&_&x'u=:=h@NC`H?LQNkQ3Xo^Gn?osrUsNvAwKxKy9-!T-$6-$v-%O-&b-(+-9%-9(",
      "zheng": "!S#(#D/]031$456+=L?OIzYM[']I^g_.eUl}m~qJsHulwuxU-!?-,d-3D",
      "kao": "<dLWr5x7-!J-,7-/Y-/s-2'",
      "qiao": "#+$4&.&1'7'Y'z($(),B,{0c7y8<:H<8<YE{F0GdKYMCZP]Y_8_zd.d/d{e5fGfHfUmKmrmvp#t>t?uJv$vMyE|R}a-!}-#&-#8-#L-#b-$Q-%?-+q-,6-,8",
      "yu": "#V$l%S&9&I('(7(=)))m*#*$*B+2+F+v,0,b,i.W0.1F232L2a3(384>6P8n;';i;y<1>(>)>]@iB<B?BDBEC'C*CoCpELE^HIHJHTIpJIJ`KXL&L1LxMbMqNXNqPdPsQ<RFT?U(URV7WnX:Z?ZT[6[H]!]~_7_J_``Za#eXg;h#hVhuiyj!j#k9kDkMl#lClUlmmUnFoAp(pzqnrSsSt0vJwszp{_|N}!}$}I}t~(~,~.~w-$D-$]-%^-&j-';-'k-(3-(H-(v-*1-*Z-+#-+d-+{-.1-.2-.<-.K-.[-.e-/d-0=-0P-1:-1m-39-3`-3b-3e-41-5e-5}-6/-6;-6p-7:-7Z-:(-:2-:F",
      "qi": "!8%&%>&X&m&s'2'X'd'f(9(c(i(j)@)l+'+M.).+1y1{2=3K4c6&6'6)606<6B6`9`9{:a<g>`?`AgCLCuD%D2F2GyH&H1I;K~LkLuM&MYO0O3O9P8PbPcQqR5S2SCU0U~V%XYY&Z}[G^P`7cUc}dEeNgOj$j)l?m:n4p,sOuRv.y'{/|i}1~P-$B-%Y-)|-)}-*K-+G-+H-,m-.@-.M-/|-0y-2D-2c-4W-4`-4h-7a-7p-9c-9i",
      "shang": ")Y6V9cJvR8UqXJXa])asbQc,s,uSvz-#+-.;",
      "xia": "#Y#w&,&;'''I)1.u/j7=:[<'B[ByCtL'NmNyQOR([0`(cLh[iRkVt/t_u4uezFzM|W|{~d-&)-*4-.}-0a-5;-8S",
      "han": "#,.m/h:l<P>MFrGXJqNrOUPCPqPrQ|]@`+`2h1lBlZnXp*r;rWrkz9{4{B}x-#c-#y-$;-$l-$y-%Q-%n-(i-(x-)i-/!-3*-5B-9V",
      "wan": "#=$0&o.]0F4@5X5b6*628u9p<K?e?h@IChFqG!G7H2HHJzL=O5Q'RQ`;a:b<bGeHh&h)rMr^s'slu!-$E-%V",
      "mo": "!`#$#&#y$%%P'e(T*N3v5$517`8R=6?XA5E6FZF~JLM;MgP+RTRcU6]'](_j`s`x`y`za+qkuDyR|G-!e-'g-($-(U-*R-+k-,(-.U-.k-.{-8/-80-8K-8L",
      "zhang": "#~(#.:2o3N>k@,JhR`b$b`knmtujz'z0}<-#+-'I-*Q-16-7m",
      "san": "3T3q3w3x7~uJuwzA-'n-([-,s",
      "ji": "#r%''l'y)3)d)o*Z+'+9+G+M+T+Z+^+g+x._.c/R090d1S1W2;43484J4R5C5w6)6C6`7f7s878H8t8w9J9X9Z9{;8;<;B;C=(=2>6?YA$B+CHD0D8DbE:EQF2I*I|JEJnKKL)L:LkLzMdN'N5N:NiQ6QyRrUWVcVnWPWQWtX6XEXYXuY(ZAZ|[/]O]e^F^J^U^~`)b#b0c*ckc}dee!e$e9e>eyf+fXfrg)hFhriMjZlrqmr)sRt%uov3vevw|@};}N}g~!~+~F~{-!&-!u-#N-$%-&a-'u-(,-*x-+]-,W-.?-.V-._-.d-.g-/+-0$-0H-1%-1/-10-1^-1o-2/-2@-3'-4)-4o-5>-5H-5U-6,-6J-7/-7P-9e-9g-9h-9i-9j-:l",
      "bu": "0$192,FKJgT=UYZ^e+hhjmm8mFoGpGp}sjw]w{-'7-'E-/m-3#-4.-6=",
      "fou": "4I:L:O:Q~1-3:",
      "mian": "!G!d#4$U$W$]3Y5X6A6_6o9g9w@qB/CkG!H_Q;-!L-!M-!P-/_-7y-7z-8'-8,-8q-8r",
      "gai": "):5=5LD,ErI!J1Z'_/`TaYaac!lnpcw[|O}1",
      "chou": "!+#n$N+0/y0}2:4e5/6#9jB*B.GNLfUmZ+^3^5_4e%e4fWkan]nbo.o6oU}u~$~*-.X-/>",
      "zhuan": "%H'S'V.K0k1B1H1r2?7Z<r@RA7IDRsVk[J]Tb3b<c8gThai'mp-%+-%u-'p-(]-14",
      "qie": "%>+7+f,8.#.|0K0p2O>#DNE1P.ccd]eMlpt8y>-0&",
      "ju": "!Z$L$w%R*W,c,l/e1~3&3J8#:t=#=`=k@FBGC0DlD}FeGAIaIkJbMrN[OVP`RDTlU|W>Y`[$^Z`Ua*ccc{dWd]dae#e@eFeff8fSg*g<guh~l'lXmIoOq(rps%vXw_x|y;zb|m}o-#/-#:-&4-&Q-)<-)?-)d-*z-+0-/.-/:-3[-48-4S-4k-5.-9H-9K-9x-:@",
      "pi": "#M%D'C(5(6)L*F*K+;.n1C4M8}:y;/;2;A<,<{>a@'@2@KA%C|DQO+O]O^PvR!REScU'UfZw]m`l`na'i[l_m;p<pYpyqCqyr*s1s;trx4{8|*|=|p}F-!!-#,-)@-,H-.p-/#-/3-2#-3>-4F-6'-63-91",
      "shi": "!E!Q!e#?$p%$&+'$([(](q*^.&/5/n0[1w204z<gBNBQG)I:ISIUJ3NlN{Q>QQR9VYW2W@W^X2XNYxY{ZI[:[<[v]X^l^{^}_p`DaDbmgqi8ixjdk!kNkpl(lkntoMo^ocoeofp5ppq%q&q*q4qbr=t9x/-&^-&_-&}-'<-'@-(*-(8-)!-)H-+,-/<-0?-0d-0o-0p-2:-2O-3+-38-57-6M-9C-9E",
      "qiu": "*6*7+a0r3k4D5]6j>7CaCeF`HEJXMhNgNjONP;QMQ_RfSWUUX?XUXqXrajc$d'jpjskXl]n@o.oup:r?-#5-#6-$8-/'-/k-0W-0X-1,-2Z-4v-7&-9U-:Y-:Z-:]",
      "bing": "!n)F*4+/,>.75@DsOcZ7l`puqar||>-!:-!q-#,-#G-''-'C-(D-/O",
      "ye": "$>$E(0,a6g=;@?HfSb[]_]lUlfn(oip=rmtDtTtevTx?-!O-!R-$5-%N-'F-'e-(T-*o-4Y-61",
      "cong": "$'&Y1>8==g=l=p=vDIE=I2JUK0LsRZZk]$a}a~sKtBuKu_-*)-*V-+Y",
      "dong": "&&.r0b5D?7?C@JD|G;I#KwQ([&jV~^-)T-/=-0)-4g-5/-6T-9,",
      "si": "'?(b)^)g)p*+.</#40415O6i8l9~;.<|<}>+>0KxL+NLP7PiQnReS&W_`tp1pvp{qTqnr8r`tIuzyB-&6-&R-&^-&c-&s-&{-(:-)L-)q-*8-+.-0.-5j-6`-9N-:o",
      "cheng": "#0$,$P&W*O*[*w+A+{,O,v/l5[7#:`?}FQOoS(UKZV_#cHcJk#m$nhrxtkuxv@vWx=xB|2-!A-$h-'w-)o-*>-+B-/u",
      "diu": "r2xL-&&",
      "liang": "3A3D3{6K@0CRF{Q%Up[,_Oe1h!h2hCiBiHojss-!=-)h-.J-.O",
      "you": "(r)O*I7o8W;L;f=5=M>VDKFoFsFwG/KaOOOSPSQLY8ZN_;`qh%hMjWjnk6kPlYmEn3n>ncodp~r3x&x<-),-.y-/1-1p-1z-7N-8P-9D",
      "yan": "##%F%L&%&F&T&v(Z,j/u1?2$5t7V;!;h?<@@AsCVCYCZD3FmGpH.JlN_PVQAT$UxV9WUX/XkXmXnY?Z3[U^1^C^E_e_~`B`C`RbDbPc;g/g7kIm#mNmsn5nHnsnyoPoVo`x+z7zkzmzn{A{`{e|}}2}b-%'-%,-%B-%v-'0-(#-)~-*$-*F-*j-*s-+C-.4-.H-.Y-0V-3$-3*-3B-3n-5#-5G-5u-7K-7r-8T-8W-8_-8`-8a-8d-8j-9L-9Q-9w-:1-:N",
      "sang": "'EVNts-%2-%{",
      "gun": "#<&#'U6F6z9dJ>JpTFTwUu]4h<iF-/2-/g-2<",
      "jiu": "+E,*42464]8mB:BCBHBMH7cQnGz){Z-#}-#~-,l-./-01-3!-5w-6I-79-7c-:$",
      "ge": "&!/30*4?8r>:?B@}AbB3BwECHxJ1NwOrP'U9UPXM[X[hhLhmq`tetlu.xSyUzTzU{W}4-!S-!s-#F-#`-#j-%f-(A-*%-+t-.3-/K-/U-1u-3T-3z-6g",
      "ya": "#B%C&{'I*{,a.g=UDEKqO;T1WEWGY.^[g=i!j4lUp=s=v7x;}f-3C-3c-4U-6O-6V-9o-:;",
      "pan": "!&!>!?!H!o'L'x2A76=F>R?$AIH<IrRoT{WBY[d[e{f0rvtpw=zx-#E-$J-4D",
      "zhong": "#%(n*8+>+m/V2T4{6b99>j@`BnEkK*O:OBP^R2RKSzTKTNTO[@e^f>ohparHtQv5wbyF-3_-9@",
      "jie": "#S%@&{(.*d+=.G0e4J5,599D;k=(@/CfD,G#G`J[LzOFP&P:PTQ=SKSQSqT/TITPTlU4U7UPVQXOXSX}Z%ZWZh]/^K^~_5ckdve=j^qGtNtXz,|1}.-!m-!u-$U-%c-&v-+i-.l-/@-2&-4{-5$",
      "feng": "!@%N'40m5v7R:3C$FdHnN.PFSaWI[R^c`?b.c5k'n+n;r[u5uXxs-!$-!4-&%-&J-&L-(w-3(-3,-3F-8)",
      "guan": "!'$b$j$k(W)B,Y/f0E6:9&:]:gBVFqIEWSW{X+X.a?bifMh?kmsUu>w7zOzS{,{2}{-'K-(N-0q-1N-1j-2e-2z-6D-7A",
      "kuang": "!Y!z$Y%1%r%w(G+}/O/z5'538V8vZ<ZG^y_=aNbpgHgRgXg`j+lHlhn/qUrevy-4>-8>",
      "chuan": ",40jA7BYB`BhBxEvale[hIkJp%wQ-5+",
      "chan": "&6'W)K)q1N6D7$8*8A8[8_:6;xCODJIHKQQ2RGR_R{S1UeW!W`X3ZMZy]B^+^7_N_bfbi|n2n6o@rTr]uWw3xYz%ze{7{g-#Q-%D-%~-(%-(S-+Z",
      "lin": "$B&['t0:393O5{8!<WA?B%GsKEMOaWb{fEf]fgfxhlh}iVk{lgn$utzg|9}C~[-*a-1G-2t-7_-7n",
      "zhuo": "#'&Q)a+l,%,V,]102E2`8?:J;&=NE.HtJ:L|SJSsZx[+]6_Fd!nArfvLvOy|-4J-5d-:x",
      "zhu": "!a$6$h%^%v'f)!)/*h,@.4.S.T.[.w/P/o0]0n141=1a4n4q5.9+:s;W<EBrD/DVDpE_EmFYHtJQKZMMO`O{QTS>S]SrU;V<YLYoZ;[S_$_B`[aCbhdVdjfRggjMjrk1ljq6q{r}vbwExIx`|x-&r-(~-)=-)]-+2-/H-0E-11-3s-6(-7T-7V-8x",
      "ba": "%#.a3#:y;2;N<z>sD5E4GTO$WNYk`LdDdNgjozp?wr~~-!a-&.-.D-.`-/&-/0-1t-1v-1}-9=",
      "dan": "!K%$%5)r,S0N1h4V8A=A=B=H=~>q@9ATAVH*JDOkPUTLV?VoXGX~ZK_'a|bBc3f{mHn&nKn~~t-$I-'G-'s-)*-)a-,C-3Z-8H-8b-8i",
      "wei": "#o$M%}&0'#'D'M6/6p6r7+8y9f;6>n@gC+D!DOE+FCGBH)I&I(I4INJ]K$KJL7LdMDN0PwQ$QDQHR?T3T6V`WkX$Z)[#[^^*^4_I_^e;fefig@hbj>k<k[m}nvs~t4uGzz{G}&}'}7}Y~n-!#-#Z-#a-#i-#q-#v-#z-$T-&7-'J-'X-'z-+a-+b-+c-.P-/,-/F-/P-0N-0O-2(-2W-2p",
      "jing": "#C*?*u,2.8.9.A.E.P.R042v3F3Q5(5q6!9@=_>g?:?k@<E;EtExFiG8HlS/Z`]ge(jTjwrhuYyi|+-!=-!@-!C-!D-!F-$N-$m-%b-*m-03-2M-4:-4a-4d-7e-7o-9I",
      "li": "!!!0#A#E%7%_%m%q'|(K(L(Q(^)u)y*%*H,&.$.J.{/c1.1:2Z3$303G3b4)5}7T8Q8g:7;4@*C%DPDbEEF%FDFWF[GUI[I`JFKIM1MKN4OWOnP#PNPlQaR[S*S:STSVS_ULU_VWXhYY]&^,`9`}cPdbf`hzh{i5jDk+l7l;m6n=oBoNogokqAqururzs3tludvuxjyU}V}W}X~&~8-!+-!5-*}-+A-,^-.3-/p-/v-07-1W-1b-1k-26-29-2x-2~-3Q-4X-5I-6F-6l-7f-7k-8A-8Z",
      "pie": "$2DmW]u~",
      "fu": "%8%[(u(v)U)j*k*o+:.'/$///_0$0=1j3C3d4a4j4u5B5k5p6q7B8L939<:0:o:}<&>N?#@!@D@E@nA3C!CWC}D*DFE'E,E]EpFFF|GKHKHjJXKsNSODOGOXOwPIPMQEQIQWTETsTvU.V(V6ViW+WKWMXpYS[C^H`Va4a{b4bXc(c7cRd=dZegh*hPhRiAiLlIm(m*mmnQowo|pFq<q@t#t5{s{t|?-#]-#x-$`-&(-&.-(n-)F-+/-,P-.5-/)-/8-/X-0^-1|-2[-2}-3%-34-3N-4H-4}-7x-7{-8#-8*-8o-8p",
      "nai": "<p<q?L@=CcH4R'VHj[o}sk-9'",
      "wu": "$A%*&l)+,D,o0a2tAMB]D#D<EPFSKvMVPLQzS#Z>ZYZZ]U_6_9d9fYj6j~lWm)mep)rQrbrctvwkxc{y|U}6~?~C~`~m-!Z-*'-+R-/j-0j-3i-4/-4@-5,-5f-6j-6s-7)-9G-9W-9X",
      "tuo": "%U%V&z0L2J4v?{@$F_H6MUTbT~Y'Yc^QdHdQnVq+r`x1{{|;|<-&d-(.-(z-({-)1-)J-)K-*:-*e-*p-+$-+3-.b-/%-/[-0b-3O-4,-6_-8}-9$-9?",
      "zhe": "#'%+%E'P2f2|<f=VHtJ~NoP4PKR9RRRSU%VXW<Yq]*]:^%^0_ucKe`h(h0hei@iUj:j{kurAtMy!-({-/f-5W-75",
      "ma": "#X%3'8(e)h;0GsK?N}R+RTRUkku/z2-(u-)N-+!-+9-,r-0n-5P-8.-80",
      "me": "-8/-80",
      "yao": "!T$R'T(g,3,:,=,F,I,J,e,f/C0^4<7o8Q8s<a>_@eB>CADvFAI0I>J:L]M:M~TgWHWfY/Ya[|[}^6_ngmi6k`kll*l9r!tdwhxRzv}!-!j-%=-&9-&T-'(-'=-*&-0u-1I-2f-3;-3]-5F-5Y-7+-9T-:%",
      "zhi": "!7!t$s%=(J(i(k(s(y)2)I)Z*2*>*A*T*^*c+(+)+J+Y,G/k4Q4b5T5W5s6~7^7|9(98;(<0=E=Q=b=}>L>|?+?QA<AJB1B2B5B6CzD$D?E8GeM7N/O3P1P]R@RhTQTTTxTyU{W.WgXCX[XcY9ZB^l`@`A`haAb!b=bbbwdAdYdueTeWf,f_fag6glg}i1i:jDlqm6neoyqrr=r_vsxAy3|)|Z}R}[}j-)!-))-)Q-*?-*L-*Y-+O-0:-31-3S-3m-5+-5^-6a-8m-8y",
      "zha": "!l%Q0>4^4g=0D{OPOZX]Yb[(]G]W^ng=o;t*xHzI{N~J-&t-/9-/a-1{-22-9]-9`",
      "hu": "(1(~.j0Z1M3!3^545r757G?0AMCtCxD<E$GxI+K%K;NGNHNPNWQ^R)T2X`Xd]<]x^^``gVi3mqo)snt+tK}Z}q~B-$4-$k-'O-,j-.s-0<-0c-1`-2v-32-4?-4x-5)-52-5?-65-6n-7!-7?",
      "fa": "#k%O/'/N:q;*;3EeKkLvo1oKstzV{V-,F-,J",
      "le": "%f.U1_>5C_{u-$*-'1-(A-1!-1d-2i",
      "yue": "$S%!(a){0^0|242S2_373H4<8sAlM{O,O.ZaZc_>cid2dCdFfZgApDqBw2whw}zczd{[-,V-6:-6B-8Y-:^-:m",
      "lao": "&)'n,71s3<5>9M<b<c=&=3F'HYP3Rvg.g4hin`oDr(v/x8xa-%8-,9-/W",
      "yin": "&#&j'a)Q*a,^/B2{5G6{7V?3DJEGEcF=FHIRK4K8MuO2RLRzU=Y$Y*Y2Zu[M^9cXczh'monipNp]qer/xFx^z{{||/|l|w|~}0}@}Q~W~f~p-!b-!r-$&-$2-&m-&q-(6-)^-+:-/I-5h-9p-:!-:?-:E",
      "ping": "%b&'.H0W1Q:T=f>~CXE%F$H(JWMaOQP%Yg^jgrh>mAqa-$^-(w-/(-1w",
      "pang": "!o'A1+=/>R?$?=A/B|QmWsd@jf~6~|-0k-2g-:K-:M",
      "guai": "0,;%",
      "sheng": "!D!^...t7*7q859e=[=x?*E(KM]^aMb1q2t2|#|Y|u-4_-9B",
      "hao": "*:.,25<x=ZEMJ$L3L5LWLtNYO<SG[0]z`Y`ym,mhu#y]-%>-%|-0i",
      "mie": "!`(D1G1dJxL>SNS~W]vt-1e-3M",
      "nie": "1&294(4,=G=|B)B0E!GDMlSX^=e)e?eAezforAs$sJu*vfw9wByVyY{&|c}(-%L-%x-:#",
      "xi": "!>#6$3$d%/&(&g'J's(!)P)n*l+7,,,n313z434i5j6H7?7W81878g979U;V;n<2<5<6>c>d@>A6BABBB}FUG]HeI9IbIwJ+JVKzL2NdPjQoQqRYRqSiT!U)UzW9WFWiWlX7XfXjXlZH[K[m]5]F_@`.`/`W`_a(cCcGcfcwesf)fulGlplwm&m4m_n:oIokp2p7pbqLqMqvsYu+ufv&w6wSxJy,z[{5{b}9}?}P}U~#~2~q-!%-&?-'2-'`-'r-(1-(C-*C-*O-*{-.)-/x-0_-1+-1J-2X-2q-46-6*-8I-9O",
      "xiang": "!;)*+50U5Q6Y8b9u:U;E;J<4APC{HGHvL<N~RbS4T.VgVsZ(_0`PdqmGmYmZmfqiq|v(w4z&zXzt|H-$3-$9-%R-&g-'+-'{-(&-(?-(b-*w-+_-/C-/~-1<-1L-1g-23-7g",
      "shu": "*V*x.0.D2B4#4K5%5^6s9/;,@[BPF(GuIBIeK7LUL`MLNePDShT*UHW'W0`=bOc+e%e0gIhOiOjQmSqIs_u[|I}!~Y-/A-1Z-1a-4G-4p-8@-98-99-:e",
      "dou": "$#,[,}1E@#FEKCOI_E`5jym%mMnMpCrIwpzH{.{~|]-'9-(F-.%-.&-.*-.,-..",
      "nang": "Sd-(&-()-(^-9b",
      "jia": "+L/23l=!?)?u@jF+FuI.P5P>TaU4UI`]a$a]bxdRjGl{m/q#qOrXu,x$x>y`-$a-$e-%c-%d-)B-+5-3J-3q-4(-7i",
      "mao": "!M#i$i*:/66e:u<eDDE/E2E3HVJOQ9QNRXT}WY`|a&aSbrgPmkn!nJq>qcsVx,y%-,B-,O-4|",
      "mai": "?W?XF>K^LgS{aKaxj(l+~g~h-!'-5{-7t-7u",
      "luan": ";D?dAzA{L=NDW~o{r7w@-4'-6G-6h-:y",
      "ru": "/M7F8G:1>AEgIYJ6KlLhQJSHU:VGW,inlEm`oSr+x_-%E-&!-1]-3)-3K-3x",
      "xue": "$?,(A=C@E@IGLKStTnXd[p_[coe,hdibig~/-!_-#M-18-2k-6%-6^",
      "sha": "%4&G052u4O8F8~<<<CFaG`H+K<U]t}xPzazi~S-,[-.h-/q-/r-2=",
      "na": "*0.u.x4E9#>WIYIuTJU!Zt`m`pgNlNlypHu7wcyZ~0-!d-.x",
      "qian": "'K.(/~0A0t1'2*2D2R2p6+7[8J8q:G;h>b@vA~CnD(EIElF:I%IjK>KLNNO&O8P}VR[*[u]u_q`!`&gSh;i~kjk~p9pEpOq;q?r6sPtYukvqwPwgwtwvx+{x-#U-$z-*+-*/-*=-+U-,y-,z-0x-37-4M-6z-8G-8M",
      "suo": "#*1Z1^4Z797U:?;cFaFbJ7P{VJcuk)tatju3u9xi-/b",
      "gan": "!3%)*1*t.Y/x1*1}3%4s91>GCmE#T>Y^bJbTcAcTcti}nE-+e-.Q-1T-2w-3*-:i",
      "gui": "!q#o$.$C%x%})0)s,E/?1K1T?NERJ;N%P/R*RpU<V{WVX0XPZ!_*aHbod<dng>gEi#lilxuyvlzY{P|M~#-#K-*;-.7-.:-.=-/S-1F-1U-2%-2r-34-:Y-:]",
      "jue": "$Z$l$o%6,%525S8#9NA^D=KiKtNnO6RwRxU!WWWbX%X5X>XBXZXiY4Zj]N^f_}a0c[chd<fCfDfwpKv)v:wCyo-)0-,$-2r-3<-3=-5g",
      "liao": "$:,A,m,x1g7n8%:@:C=OA#ADJcM(RnRv`1b8f$fJizl&mnopv,wNypz.-&@-&G-,)-5t-77",
      "er": "3><m<p=8=T?HEyLoS|U8Z6aBaGbjd3gshtjJl2q_x9|L}M-'/-(=-)Y-,Q-,R-/D-2)-3j-6b",
      "chu": "$e%s(/)M.%.)114y9=<~=%A_DCG=IdIoMMNOPQS'XRXe[/`E`Oa,cmf=fTfcmaq3rnxlzW|`}p}|-59-8O-9|-:)-:9",
      "kui": "#f#o$C'D,Z,p0v1m22=m=o=s={?NAFI6IJKnLyN1N;NbQY[edpf*fvk;mXt;tJ{0}7-$A-$d-%6-'a-'o-(P-(`-*6-+P-.B",
      "yun": "!F'N*;/`/|0y4T6z7!7<7C8z9|<y=?@_D@FLG7IAIVIyK_K|L#L0MIM`QcV@a3b)b@bYc=j1kQm!m7mVmgnRo0o8pVrO|'|d}5~7~i-#?-#g-#n-#{-$(-$/-'N-(p-)'-:'-:0",
      "sui": "!q#G#J%G&f)$)t+R+h+p5m7>7h7x8D9V:4AQCyFOFPNxV}Zm]c_QazkFkHl.uqv!vF}*}/}G}H}w-#$-#r-+|-,/",
      "gen": "CQEHdc",
      "xie": "';(f*&3c4k5+595I5h6g6v7&8>8T92:B:M<3>l?T?V?ZA&LRLTM0Q7QKS+S@SBStTRV*V^W4XKXOXS[B[y^<_Z_mflfnl,lU-!i-!v-#1-#D-#h-$#-%c-/S-2%-9Z-9q-9t-9~-:b",
      "zhai": "%X)3,92q<?a@b]q=-9c-9d-9i",
      "tou": "4G6sMyjqrItA-$b-&r-+h-8;",
      "wang": "!664:h:i:j:k:mFvGmO>P*Q,Znh5iGj+jM-.N",
      "kang": "%<+U2v3tg1lJpgugwmz={L-17",
      "da": "!W.u/(/S84;H=<EsF*LHS0VCYldzi{j0j7j;k?kZt]tqvZ-!g-!|-#R-:S-:U",
      "jiao": "$y$}'~+k,A,K.`/I1o5;8?8]9O:J?E?j@hA9AKB(CaEZE[KTM5NZP!RkR|WWWbX%X5X>Xs]Q]fa`d0dhe3gvh_hfi;i?lvnkoHo]p#q]v*xW-'%-(B-*h-+;-/Q-1>-20-3|-5k-5s-78-:a",
      "hai": "5L?Aj9l/lnnro<-'!-'~-)Z-)b-+>-+p",
      "heng": "?J?mMZT9vc-3o-4$-6e",
      "peng": "%c&'&S'+'Z+,.V1+1@5@8P>~AACgE%FdJRMkRiRjU3eSgbh:s9v{zL-$+-$0-):-*A-,X-,b-,q-4K-6y",
      "mu": "!1#N%]+V7`7n:@?.C5DeF~G%O=e/qKqPx!~3~G-#9",
      "ting": "/s5l<t=j=z>%>&?qC)FnI7PWQ8ZJ[El=rUxKz`~K-!~-$g-%e-9F",
      "qin": "$j$k*'*Q.d5c=>>MD1DAGZG^GkMRO8Q}RJS7TVWJWrZQc]pXpkriwix{}c-!]-$~-)f-+E-/c-33-4L",
      "qing": "&/&Z'i046+60:ZDaHzQ#Wr[%]%_Agph+i7m<s4vi-!;-!<-!B-$7-%P-/}-2B-8X",
      "bo": "%h&^'x(B(U*L+l081c2%2,3~4m:S>;>t?fA!BuC,DrGWH=I'J{L4MmO^U+U,U6VrW5ZL[d]Rd8d_eKf@m3pxq5qFrVtow0wxw|x(yT-'4-'^-(E-(V-(d-(g-).-)[-*^-+)-+~-,$-/0-1=-1}-42-6k",
      "lian": "'K+D2+2P2V6w7b8k94;s<T=Y=n=q=t=u@+AZAcG(G,HLJTKDLELOMsMtQtS=U`UaVUW#We]0f2j?k(n0oPsZsyt`u@vKxfy}-,n-0U-0}-27",
      "duo": "&U5|:!BtU0Uncrdfdid~eYg!g#g5plvUx5|E|J}*}3}S-&~-(;-(z-)1-,i-4]",
      "men": "#{$*+XGRNEsuwVz1z6{>{M-#!",
      "ren": "(o*,*e+#4A4U5)5y8x9$>?@AD)E}FGGDTUU2Y!ZC^I^Vg&gFi&p/p;pRqp-!W-![-#[-#w-&i-'#-(2-.^-3{",
      "shen": "!U![$8$r$u%j)#)9,12e2g3T3U3q3w4l96:p:~>i>m?t@BFkHwH}JGK!LCPGPHUNX)Y1YHZ*[2^)_%_L_S_VfylPqRrj-$W-)W-.m-/z-0@-0|-1)-2N-4A-8b",
      "ze": "#R#}$n(+*p/,0J1I=0BsKAS?Vz[(].a@b7b]c:jO-&t-6.-9s-:,",
      "jin": "!#$j$k%M)8)G.U.m/J4W4`6L70:/B6F&F;GcGkJYM!TWW%WzX<X@]9_sb&bIc#j2j<k8olomp>sTwGy2-!^-'m-(Y-)$-7D-88-::",
      "pu": "$5*k+j0$8LBTBUFXGGGaH~IsIt[D]]_|bEfInprtupv=xbyqyu|[-/m",
      "reng": "(_DGiu|z",
      "zong": "&Y'h+?3P3]4$5z6E6Q6n6x7(7M7X7e7t9%9n<J@MI=J=QU`eePeRf1t!v_-)z-*5-+K-,`-,f-.8-09-0G",
      "lun": "&n'k*|6:9&='@4D:GLPk[1^`eBhAi)s.|k-04",
      "cang": "15B$BpC<DUI~M#R3b/w8-50-6P",
      "zi": "!i!j%()R*/*X*b+E/)2l354F4d6I6W8O9s<u>z?!?MB'CwE5E7ENE`F4GHHuJbL;NsXHYOYP[I_caFa[bzb~cZcpd(h3hQiJmbp&pmsGtRtuy=yO-$s-$t-,I-/{-0r-2P-4e-9)-9f-9i-9u-:D",
      "zai": "#^7HGHb+g|i9n^",
      "ta": "(d)i2~VAZr]wdBe7etfFfOfpkdkiq+sBt]tex1{'{5{;{={R{o-!s-#*-#B-/?-0t-2d",
      "xian": "!:!O#5$<&#(F(h)X*3+D/D0V2k3B4%4|5A5c5t6,6]7J7r8Z8c8q90:%;];d;h?&@oAnA~B;BvDSDwFzG,LOM'M*MpOKO_O}PJT+T0V_W:WRX,ZXZo[O]d`>awbKb^cYdgd}f;fhgBhHnfo'oPqvr#r$rFrqs<sps{uww'xJxMy4zBzC{H|K|a|e|s|v}J~v-#T-$!-$$-%.-%H-'D-(M-(o-/T-1l-21-55-5x-5y-6$-6q-7G-7h-8$-9P",
      "cha": "'0*049B=C9CjD}EYEdTAYyY}_1enr't7t[vryDz!-!U-'Z-(O",
      "hong": "&*&8.*.>0o334=4P4f5i8o8{;z<!<==CDyF?HoHpL*LXNtXtXy^L`'`*`,gUhNhwi+p[q[rGrYt:z?zXzrzt{I~U~e-!n-.(-.a-3v-6i-8<-8?",
      "tong": "!r$@%o&>*]+m.?/Q/i345D5N5`9PA@EjJPO1T,Z,cFj|ndq:qYqjxC-')-/L-2*",
      "dai": "0,1n4x7%9AC?OMQ]TdW=Yd^xa7aLbqdff'gCgLg[i%jIk4p0~z-!0-)E-/>-3I-8N-8e",
      "ling": "%d)D*M++.5/+4p6@9];K;U<.=KBqD[GiJJJmL%M|OiT(TcUjYVdLgZh/n8oWpts0x)zN|q~;~O~]~a~c-!2-$L-%`-)C-/$-05-2C-3L-6Y-7E-7q-9z-9{-:A-:T",
      "chao": "!k,h,r2u6?9b;5<wXDY=]?cdh`mlpSwa-7w-8v-9#",
      "chang": ">J@mA+DTGMH!UlUqZfs&sWy+z'z(z0zh{1{a-#d-.0-02-1X-2H-2T-92-:d",
      "sa": "8g?^HDK{LYY@fnpQuwwS}A-!c-!s-&,-&P-)&",
      "fan": "%0(M/1/40i2A2d6R7i8$;o<[AIBcBfE0KNLPM>N!SOVqXva=bcf<gEg_hThkj5p'v#v?wT-&=-&Z-&n-&o-(5-1E-5r",
      "miao": "!J#m*=.10s6e6u7n9z:@D`M$l3-4s-6u",
      "yang": "!R#!(C)Y*R4t;E;J;P?5OxQ/YX[T_0gahGqDswt,wX{}|.|y~:~}-!p-&8-&M-&k-',-)G-0]-3a-3t-62-6X",
      "ang": ">Xo:-+g",
      "wo": "#l&A,R,_6}>I@OAlB!G*HQLgP[Qbe:-(p-:4-:I-:L",
      "jian": "!%#9#`$<$D$I&N&b','r'}(&(<(X+D.p/9/g0#0/0Q181k262I3_5U6Z788(899v:9<F>$>S@fB4BoCICSCTETE~G<GrHiI{K5K]L!LVLwN=RGSEU5UcVjVlWAWRW}X#X,YT[.[F[c],][]}^!_Y_v`K`Racaybkc|d?dKdye8ecephvp/p;qXrMrZs(tFtHu!ubv4vDvNvovpw.w1w5xwy:zCzD{J}d-!V-#;-#>-#O-#X-'A-'S-(7-(k-,h-0Y-0`-0h-1(-28-2h-37-40-4R-5@-71-7F-7I-7J-7W",
      "fen": "#|%A*9./2x3=3r4S9';M;q;~ARD4IxKmO?O@TGY,`^`ff|hjnOpUvY}K~5-'W-'}-(c-(r-.w-1M-2Q-35-85-8n-9.-9:",
      "bin": "%A8I::A)AiNc`X`cahailKvjya~l-$p-%G-%k-,'-,1-,E-,_-,p-.!",
      "di": "!u#/%W')'.'{)<)_*U.v/*1=2c4+6c:);X<?=b>;@WDXD_FMG9G_ICJMJrJwJ|M6Q+QVR<TtX*X8XIYW[:[A^q_f`dcee_f/gYjKjtjukLkekwldp0qNuIyj|5}#-!X-#=-$H-(y-+n-,>-0>-69",
      "fang": "!I!n(l4Y9*>TBjD;O!Y;^ed@lLp@siwn|,-,?-.v-1s-3E-51",
      "pei": ">Q?(JBSwUrUsauc2hyiPnBn{s5y7|%|f~M-)#",
      "diao": "$#&a,C,k.B1]5FJML|NhOaXxZ8Zv_M`ro~p_r!r:s*s[vawUxExR}v~D-.c-//-0%-2L-2{-3&-4O-9>",
      "dun": "!<!A%J'3(%Pxd;eZf?fKfVjikGkvpLw`-$G-%X-*c",
      "wen": "+C+`+z4B4C5X7!7<839)9|=d>^?gD'G!O'O(R/RO`ahShWiNu6zlzqzw{<{D{Q{c~4-#?-#{-%(-'f-)(-)4-.r-0g-0z-2V-36-3G-9<",
      "xin": "!=(F?zBID7FkLZSyVtY3Y<gBiWlOo[pIrNv1w,xtyn{w-%/-(q-(t-)$",
      "ai": "$F$|%l%~&e'M(:5=CbKGL6MN[K]k]{b2g(r9tWv^yK}1}8~s-!.-!3-'U-(m-1[-3l",
      "xiu": "**3h5g7u8,9T;Y?i?yB*B7DuQ{ToV0V1`ur%rBtSu=u^uvxp-&K-'l-(X-,@-,U-/Z-13-3}-6d-9^",
      "xu": "!$!*!4!Z#j$l%;)W+@+H3[5K5e5x6T6X6s7)8X9[9_=X=e?4D/IeJ)JXJfKrLxM/NQNTNUO[P$Q:UDX|YBYJYs[8[Z]C^^_3_ia^lUmwnLo*qovn~E-$<-$>-%T-%U-*[-,w-.G-.W-1_",
      "tang": "$f'@)f0{3V3j3o;l=)@zA4J4LJQSR$RAcMc~eef&g+m]o=tiu)uTv'wDx[yWyd{1}:-#I-']-'h-5:-96",
      "huo": "!V$S$^(*)>)S*Y*_*`+|,W10=$=4AuCJG.IhMTSI[g`0a<bacnlTpesrvhwoy6yyz5}y~R-!,-#S-*0",
      "hui": "#J#[$G)N*i+s1;5R8.869I9}<9<:<L<^CxEbF1K2KeL8L9MFN,NuO7OtOuPZR*RyT_V:Z$Z2Z_[L]S]n^#^X_!_<`FaXbyh4iEjUk*qouqvI{6{j}3}S-!Q-$c-%C-%l-'R-/V-1#-81",
      "kuai": "/w3}?]AWIJIql|n*-)0-1P-2.",
      "cui": "'g,w2z3L4[697>:4<%<@?R?U@.AEANAhG{THVmd#uQ}Y-$|",
      "che": "$;%I&?&@=JFjP@g<h~jA-$M",
      "chen": "#t&M&t'`*[+A+{5{>FA}EKFRFcK:LmRBTDW6Y7Zz[Q[o^;_V`$arb;c`cad>dKeagKimjHmDo@pAt(|C|o~H-5T-7]-9l-9m-:=",
      "xun": "!x$Q*p,^4;8MAjEnF:KLKSL[LaMcRzS%XwY#Y)Yt^R^T_+j%jajlkclsmzoTv`-%A-(}-)U-+%-1?-1H-24-5A",
      "chi": "!]!y$).X.y/A0+02133,5W<#<$<D<H<|=@>>?2?D@SE9E|GeO%OHORR;U/U0UkVMYFZ9Zq[t`8aRcBc^d+dfeGj@jBkKkfkrkyl7q7q^qusx~9-&l-(4-(|-+&-.R-3Y-4!-4r-4w-4y-5]-6Z-8(-8C-9k-9v-:<",
      "xuan": "!m!x#d$['5)k0R5?7J7d7w9K<G<_HMHNJ8K#L/MQMfPEQ?S<T)U$[;[W]_^&_abRgDi$jkl!q,ratLu?x0yl-#'-&2-)U-)k-0f",
      "nu": "%a/.?;-)>-+4",
      "bai": "+&.;3;3M51L^W3b:b_-#k",
      "gu": "!/$J'B)A*~+P.z010?0u3g75:r:v;Q>K@(AfE)G>GhJ,LSOdOjSeXFYR^h`%a]bxgdgehYi,iXk,nYprpws]wwy.}h-%@-%W-'Y-(Q-+`-/;-0'-2I-3^-5?-6S-7%-9*-9+",
      "ni": "!h#P*G2m73=i>$>}@pABA{DqLpOLP.Q!XXZt`~d`h.jhmCpnx3}L~X-(e-0,-2J-7`-:+",
      "ban": "*E2s5!9;>PBgBkQ*QvVKd[iciipPqEwfzx|$-!h-$F-%Z-.n-35",
      "zhou": "!+#U$x&y062.2@2C3+384:777o8p9:<B>B>o?#B^F@GoI$LfY][a]y^r_4_Manc0gkg{h,i0i<k7m>nCqg~Q-);-)`-)t-*r-+[-0(-3~-6f",
      "qu": "$L'o(}.2.F/@2U3?4o5#<1<U<~>u?/AxDlG:HhKbM}O[OfOpQdRDRlSkSpT'T:U&WxX!X&X=YeYjZj^tcjcld%d*fqf}g2gWw<zfzu{i|4-)3-)5-*W-+'-,S-.~-1'-1;-3W-4l-6E-6[-7}-7~-8&-8+-8U-8u-9A-:/-:H",
      "ci": "'=(A)%353a5579ESEUG6L;OsQpS3Yp^saqc.c_dSiYiZiaij}m-&y-'*-+l-,%-/+-3V-5C-5D-7'-:6",
      "beng": "(l5@657k9iGnO*dtf3jYk2uiygz>-#)",
      "ga": "g=onsfwH-.A",
      "dian": "&p'v,j1iIiKRPXdXeVewq!x%|8~@-!E-%3-%4-%z-*g-8Q-:8",
      "tian": "!:#;'1'H,j4w6D>v@:BRBXGvWmX9atnTr#rFsXx%xM{%{n-!>-!G-'$-3f-5J-5S-8:",
      "bi": "#L#M'!(w)L*@*C+;.n.o/E/Y0(0)1/1<2r2y4M4m6>7Q8@8};7<,=a>a>r@lA[BlC|E*F.FJG~H:J<JdKHLLPPR!TiUfVhW$W)X^Yh^v`<a!aEaUbMblc/d|e~fPfQi[kBl)l^mjmym{q1truFvQx2z8z9z:zP{B{C|V-#,-#G-#p-&u-'j-(f-)I-*X-+x-,N-.T-/*-0Z-2S-45-4}-5b-5n-8~-9S",
      "zhao": "#'$K.e00:V;#;?>*>1>2GdYf^ucScxorp<q.t6wL-)8-/G-3&",
      "shao": "#+*y/r4r6%9>C&CqD^FyHSK}Tjh$la-#&-$)-,Z-/`",
      "zuo": "(|*S+!+n/,/p4*7{?'D{F^H`HaJ?Th[(nWp||7-&t",
      "ti": "!g#e')'?)Z)|*v/8285f6|9Y9y:{DXF!KgLIUzV&V'[qd)d2eJemexf~g8jxk=kLo&rDt)xy-%$-%r-*2-+m-,0-,L-,]-,a-/^-0B-2U-4;-4w-4y-5L-5M-5i-6r",
      "zhan": "$H&b.33*6=9oGQLMN2N`NaOeWyYQZ/]h]l^B`#cghUhgiSl0n|zK~V-%~-&*-&N-&e-'|-*b-*l-.Z-1S-2y-37-60-7=-8i-:h",
      "he": "&c()*(0z2i3@4?8r<N<ODdFIGFGzJ1R(SMTmV2WOYGYIYw[z^i`x`yaTbtcIloovq0vgzRzU{){X{m}Z-!7-!8-!9-#7-$P-%f-'&-(@-.|-1u-5$-52-58-6?-7#-72-7v-9n-:>-:`",
      "she": "'y(`BJBKBLJuNpOgP(S5Y>^dagakc'cDg~{!{^-#h-)u-7l",
      "die": "!g!t&w5M9G<k<l>pB5C6D~PmQ`R@V,V]YU[7_WcbdOdXdreigojNz+-#1-0S-2R-3d",
      "gou": "/01%2)3g6t:&<h<i<jD>DhO[U#VBWwX;YNY~_(`ob5bgk_pMqHwl}k-#A-#m",
      "kou": "!P!Z#r$$,P.2/W1OD+K=KFp$-5K",
      "ning": "$P=R>!DpLevm-,~-64",
      "yong": "%p&>A]DcIPP=Yre2e]l@mJmio9rHuVyh}n}~-%*-%s-'x-/y-0w-15-2A-2o-5`",
      "wa": "%K,),?,E,`=N@r@xOyTuW1lc-#W-#^-#t-8w",
      "ka": "?8U@qV",
      "bao": ",<.~6h?,DgGYHcK`L4MJN^OJTeUdV4V5Vf`ib*d8q/w%x.zs~>-!6-&x-&|-(9-)/-+j-,M-/7-1~-3/-3A-6Q-9r-:B",
      "huai": "=7N3N8VDVSeE-:f",
      "ming": "!C!w#zEDJ'R,WuZ0m^n_q}xT-3.-6L",
      "hen": "Y|-!y",
      "quan": "$b%u/K0B5<6$7:9mEqI3NAP|SlXLZ#_)dkeIgzi=o5qxv%xO{#-#_-%M-&$-)V-*3-,e-0L-2^-9}",
      "tiao": "!~(t),,J,g/!3/4.5F=S?PCdD^H0J@JMJNPnWdZ8Zv_McqdwjCr!rdtyxR-#%-,G-/o-1&-2;-9y-:C",
      "xing": "!D#Z&$0Y0g6J@YApBFEuF7FhHrP9T#XVX_[_lMluo+pBqZqwrhwZx6|D|S-'V-(/-)p-+D-/5-0D",
      "kan": "!N$=$g%?'^.QG&T%h8ho{4{q-%)-.+-:R-:X",
      "lai": "#8#F/X0%2/2MG'H%MSW7Zqaob,c&c4k.mBsgxd-$q-$w-)y-0*-4B-4f-8%",
      "kua": "50?>B~Z=d9dlq~-+s",
      "gong": "'91*44474=8o;z>[OBXQXba6bZfzg$gtrG-!z-,T-:L-:Q-:W-:u",
      "mi": "!s#p$A(w)')w*C1d2b2}3p407c;>;F?bClH{J#K'K/L}N#N6PaU*WZW[WcX1Z.[j[l_g_rjXo4oXoYo_r,z/-!K-66-7X-7Y-7j-82-9&",
      "an": "!(!.;)?I@XEzGlHWHgJSUxZS[N_d`k`{r1s:x]zy}+~=-!w-!x-$1-(l-/E-4I-4u-6v-8c",
      "lu": "!)#Q$_%|&L&d'])E)J*}+[+o071X1v2!2#2G2H3I6S8^9q:f?9A,AtBmBzCFCMCND.G@JcJeJtKcM[N<NINVR>SYXh[~aVb|d$dseCf#gxh^h|i/i>iTk5nwpis2sascu8uMumvGw&w+yr|A|t~x-%J-%_-)+-)r-*N-,3-.q-.t-00-1i-1r-1y-3w-4E-4P-6!-6>-6U-7;-7C-7M-7b-8l",
      "mou": "!|7n:@Oq[[_Ue6t=-#9-3y-8!",
      "cun": ".N2nA>lS",
      "lv": "$()(*r+~0`5Z5~6S7_7j9q:*@wA(A8A;HkM,NKV=VZm'rJw#xDz_{T-*u-+*-5a",
      "zhen": "!X!b!c!}%Y'%)5)T)b+I.A0X264N4w5Y7D7L9,:2=I?%B9H5I5IWJ&LnTpUSWaYKZb^pa2afbWc%g^hZi4iqkOnNoxq$r~s`tOu$u%wJyS|0|_~L-)D-,o-1f-3@-6R-8d",
      "ce": "/%/U/^/t0G1W36F/H3HPJA",
      "chai": ")&>HCjEJNzS9T[Xz`jp4wY",
      "nong": ")v*j+q8C?cAXL,V~]iioipoL-,{-9a",
      "hou": "#c$t0q3Z<M<UEVHq`MjgltmWq|t@-'T-+r-/B-0C-1O-2!-2,-9Y",
      "jiong": ",M4~5uB#B&MeMjVIjFjjqi-$}-%h-)6-)X",
      "tui": "+y=N@tJ^MAM^P?PYQkVL^.eof7jb}D-$n-$o-$r-%m-)l-+u-.L",
      "nan": "@^G$HOQe[PcEk]}_~'",
      "xiao": "#+&4&:+i,N.l/q0!0O0c1(1b1u5a9R<;>@AGFyHCKyL2LtNBNMP<RPR^S!S[Y5YzZUZl[ke*jom9r@xh~I-&3-*`-+8-+q-,!-,+-.I-3X-3p-5Q-6W",
      "bian": "%`&}+8,;/=0S2A2W3W6k6y:$:+B/C4DLHUL{QBV+WTW}[5^/aJbfi^idieifihikiliviwkSl4l5oatPzO-##-#<-0I-0J-2`-3R-5&",
      "pian": "0l6y:$<I?K@5WX[9_haIaZdtejsq-)O-)v-*(-**-+?-+N-+w-.z-5&",
      "cu": "1P3)7S?xK)XAZDcjcvd%d*eOehf%fAfBo$-%<-7O-7R-7T-7s-8t",
      "e": "#3%:%B%Z%y'<(9@bDRF}HXKfO#PBQ)WpY+ZF[?]L^2^___`NgMgii(j8kRkUl%mRpJpjrrt&w*xoyCzn{f|!|3|:-$?-$R-$S-%%-%&-%t-%w-'6-'L-(G-)n-.f-0[-0v-1h-2Y-4&-4<-4=-4z-6o-7$-9[-:3",
      "guang": "%w?@B#B&EWgwj}r0-89",
      "ku": "%,&5*D,@,T5:9E>{DoU1UbVTdPllnm-+o-/R-:p",
      "jun": "&].=/`0<0CFlGCI1O/PeTXWhaeg?m1p^qfr&t'wj|Q}^}l-$j-'8-(J-)m-+F-/]-2?-43-44-47-7U-7^-7d-:Y-:]",
      "zu": "(x*J+10H4}95GqHbIkYm^kd6eLtdu2u;yk|6-!f",
      "hun": "!F#O#W#]F6I8JyXT[=_2hczo{d-'>-(L-.C-9J",
      "su": "';+1+3+],X1U3.324X7K7U:?>,>/@{DWFwJsM+M]MiXWYE[r^o_lcyf(k$khksnZrR-':-*_-+L-/i-1@-5p-6~",
      "pai": "0'1z1|IOhBjLtV",
      "biao": "'c,!1D@3A,A1AoJoM=T@UoVa[3]#b?seuZw$ycz#-&&-&+-&5-&D-&E-&F-&H-&O-&W-&X-*~-+@-+W-,;-2j-7Q",
      "fei": "%[//1!6M9a<A>O>e>r>z>{@GDFGjH$KhP_PuRuUtZp_GaObsvEyP|g~T-!/-!H-!I-&Y-&[-&]-'H-(j-*!-*,-0+-2F-9;",
      "bei": "&i&r)`0'3f>wA[DfJ9M8PAU'V;ZLZwa1bVgch@iDlbm5mQqWrPv[wd|=-!l-#,-#C-+k-4N-6x",
      "dao": ")=)H)x+B+K005F8h<B<`B_C7GwR7T4T7Umeqg9iwkYoq|b}=}O-.]-1n",
      "tan": "'/6D8A:_:eBOBSGtM@TkW(WJZ~]Z]a_R_xa.a>bdm?n~o,oJqQsMx#y8-$x",
      "chui": "&U0D@8GPsFtny0|n-$u-:_",
      "kong": "%.&V,/0@;gg,sA-#(-4[",
      "juan": "!{#2#H5J5V7Z9S:|;=?w@7AaG[K3SfUM^&mTrZras6u0vHy5yXzt}^}l-#'-&k-'.-6m-:w",
      "luo": "%T&!&='n/>0M2]5>8f9M:n;@@)@UAwF8H9HYJ5N9OrRHS6UvW~X'Z1dbf`g'kAl:uEw>y/yf}s-$f-('-)_-*P-*k-+=-+X-/K-4#-6)",
      "song": "&P.@===yGOY0Z]^b_?jcu1-$@-%[-'[-)e-,c",
      "leng": "#>&h++L@eD",
      "ben": "/&<(DxRuaUblk/sIy&",
      "cai": "#T677P8aGSK+U>a5b[dxeQob",
      "ying": "!R$v&C&|(P)c+_2K2^6U7/8`9^:>:X:Y:c=?A:ASDzEAF7F9G0G1H@HAHBHZJKLqMwOmQ0QPQiR0S8SgVPWv[i]M]|adbHc@g:j/m2twv8vky?~_-##-$.-$i-%g-%o-%p-1V-3g-4q-5*-53-5o-5~-67-6C-74-7>",
      "ruan": "&u(>6^<o@QgQhDi*|(",
      "chun": "#_0_4L8|>U?sA7C~G3G}HRITJZQgSUb(hKn}o/sL|T-0#-0Q-4i-4~-6{",
      "ruo": "0P1#DnI}mP-0e-0{-5<",
      "dang": "!,#s%2'((2/[1f2&CDF3GbKuN(S)UCW&]b^A_kd&kEvWxB{9~A-8[",
      "huang": "'w+e0f1q7O>=C1F#H|Q@RtSuYv[V[f_Xd,kWt3txu}yI},-$,-'P-*.-0T-1A-2]-5q-86-87",
      "duan": "${'&.I1`2X6a:#<r@kI/V/fdt.tGyG",
      "ou": "*$=*@VA*KPM)MG]3^Yu:-3H-5[-6N",
      "zan": ")},'1A1t1x3`W?^'^?apbCc<d4d5e}n1n7n<smuaubv2v<-((-4C",
      "za": "%k4^4gAvA|Vpj*q8}r}}~)-$'-.u",
      "lou": "$(0x1V=+=1C>IMK(QfRI]1a*g3kxu]yN|F~x-#J-+}-,*-5a",
      "sou": "#v2BC;IQJ(L_M?Qum[o3t~uAyH-&:-&<-&S-'c-(R-*<",
      "yuan": "!9!f)V.i0F6f7':.;m>CD3DYE?I?I_InLGLdO5PRPzQFQXQrT&TYUiUuV3VF[xa3bYh]iQj=k@kgl8lRnPphs'u(|^-%1-)9-*G-.o-30-3U-4V-5%-54-6K-6]-6}-8s-9!-90-95",
      "rong": "+Q+S5E7@9C;^>FEFEfF5J/QhQwQxSDVEghthyb-)R",
      "jiang": "(43u3|5P8:9L:F<>=.A2EaH^ILK.LAQjRM[w]=^W`6ngo>oF|H-#P-%5-12-2_",
      "bang": "&<'A+%5_749B@uC8IcO!O*OvPt[s_olQlVt^y^-#3-,#",
      "shan": "#:'m)K)q+W.s7g7}:D;p;r?pALATBaD&DtR}S,TCWjY%[b]r^ObFc?cVd^gGlAn#p!qtvBwRz4z5z;{@|P|X-'q-*J-+V-/l-1C-1D-2s-2y",
      "que": "&5&E&g'6'7(1(N:P:RI]O6c}z}{*{l{p}a-4Q-6t",
      "nuo": "+<+u3e3y4&<oU/U0[Y_DelkCt<y#}_~'",
      "can": "+W1A3ELBO4Q.SjSn]2uJ-&`-'3-*T-+M-8^-8f",
      "lei": "$X'F'b(,(H(I)7)~2j4h5H7Y8S8Y8j:=:d;t<s>5JiKWL.M4N*N+N7N@SPZ:^(^zhxnoqls?vPvvw:yz~<-!*-$O-$_-%7-%}-1Y-6<-9R",
      "zao": ",y,~1R3sC#LlMPOC]`d1f4fNk%ktoCwA",
      "cao": "3m>9C=C[EwJ_R:VbV|n)uc-*D-94",
      "ao": "!T'Y<Q<V<Z=wC]DBK&R=T]Vy]7]8g]kom9uBuMuNz*}>}I-*S-+S-0~-2b-5X-8{",
      "cou": "@ThJiK",
      "chuang": "'_,H,L,q{+{E",
      "piao": "$+).1D7a:;<RF|LiRCo?{3-%9-&A-&B-&V-*U-+W-.S-1.",
      "man": "#{$*$c5X7]:<JkJzN)P2R6R]SoVw]>_tmuuCuUye-#!-%;-%y-'i-(Z-,t-,u-1*-2m",
      "zun": "8':^U5]Pk|qqv+-1B-2u-4n-5|",
      "deng": "$7'q.M/H1pCCW|`:f9l>mxv6yx}E",
      "tie": "=VH8OhaPbndXq'qzv>vRx'-&z-'Q-*i",
      "seng": "-,v",
      "zhuang": "3:3nF)F]UBUZ",
      "min": "!B%9&`.}/<1l6O6d:,:wDiSSb'pqs7tEzEzZ{K{S-1$-2n-3P-8q-8r",
      "sai": "2'@cb6c9-%#-0_-2X",
      "tai": "0+27>h>yB8BeD]GeLjdIl[nSpfw^-&/-)E-+7-/6-2$",
      "lan": "17212Q4/8K8i9x;+I<JCL~N$N&VVVxW*W;WDWoX(X4]K^:_{fknxw/wFytz~{h-#Y-%K",
      "meng": "$/$T$`(?C.CKFgH'IZKONvPgQZRaSFn'n,rKsby<~?~k-!(-!)-%F-(!-,O-/t-08-68-7@-8q-8r-8z",
      "qiong": "#@#x,+,.,d,|/:/FB{EBM%MBP,P0cWdolFqs",
      "lie": "5}=]?oEOOzU?csf^j`-&0-,x-.#-/J-1c-3r",
      "teng": "2>2F7I@sAHM9N?R1Z@[`l1~u-)S-*B-*v-0s-97",
      "long": "!p$a%n&=(R(S,u.!.6/;1*162N=P>'?6E<MxS^S`W8`4bSffu`w)|B}%}T~y-!1-*t-6@-:J-:O-:P-:V",
      "rang": ")z+t,$8bMn]s^8^Nfm-.$",
      "xiong": "?F?GCrY:YiZ4^a^mb'}e",
      "chong": "*86b;:;|B@CBEhNfQRS$T5V)f!ohqhxZ||",
      "dui": "&k'O(m5nLb]H]vhsj_v0v9ys{v|j})-$[-3h",
      "rui": "#h.h6N8+D6E(KUKVKpMWMXO)P~r<rwuqxx",
      "ke": "#u%T&5&~'B'Q(*(;*<+.,U,r6[9t<7C3DdHFLFOTQ5S}TmZi_Hd:gni.o2psqds/wyxQy)zM-$Z-${-%i-%q-){-+I-+y",
      "tu": "*)*.*x,6/a@dFNG+GVHsIfcbe&j,jvnjp6porIs!s}wO-(h-)j-4*-49-4T-5!-5O-5z-9M",
      "nei": "?~@;lNsE-'5-(I-/e-0!",
      "liu": "&B&d'>'[,A6;9l;1;;</IgJ*MERWUTe|kbs#tctzuHu{xuy[ym~%~j-&>-&@-&C-&U-'b-(W-)M-)c-*@-*d-+T-.9-0m-5=-5_-7.-76-7[",
      "shou": "6.9h@yC2uA-(_-:s",
      "ran": "7v>ZDZIFOEOYTST`Tz-,A-,K",
      "gang": "%.&q/{639!:N:W:x>Ep+s)ttwe",
      "gua": "506}:z;%>xU<V#Z5[>^|cnedr#rFxM-&'-&1-*9-3k-6c",
      "zui": "#G)C+15&8d;$KjRdXHi]nInqo!s$s8",
      "qia": "%{'I?1HyU4dUnU-!{-+z",
      "mei": "!L!_#)#a({)]+X0h3p;I;T?S?r@PE&FfI@QGTZdMg0mOnlrKtUtZyMyQ~N-#^-.>-.F-5(-7(-8V-8h",
      "zhun": "+$,56(>UT8YAZ{_Pj.",
      "du": "#K#b*f.T.^1,>DCsFBR&SZSmUyWqZd^$^D_E`3b%bNc)mMo(sDs|v}yL{!{^-!Y-#V-#s-#u-*E-,,-8]-8k",
      "kai": "II`7gysvtbt{vCxGxvy@z<{({U-&;",
      "hua": "%;&K'B3S8/BWD9D:GgIKK[MzR#XKZ&Ze[4[>]A]o_&`0p(p)rbsdunxN-*]-+<-5m-8=",
      "bie": "FTNFObRmVuf6-19-2l-8|-:[",
      "pao": "%e(@(O,!?|H>M=TeTfV>dDdTgfq/x.-!N-!o-7Q-7S-7|",
      "geng": "56575d6m7,9Q;j;u<v=DFVGfavc1m0-%b-+v-/h-25-4j-6|",
      "shua": "<nZR",
      "cuo": "#1$z'G79?nFpFtImJ2J}NR[(erk0kzn7o7rEs^t[xqy$-7H-7L",
      "la": "%_'R<*@>AbArG?HYM3PfQ4Q[SRi_i`l6v|z$-#0-,k-0F",
      "pou": "0$UO",
      "tuan": "1H4'V8a%u<-5V-6#",
      "zuan": "1B2Y808N8U8e:Kb3fjftq)vxw?w~",
      "keng": "%t&3&RZOr>t1uOxg|&",
      "gao": "#R#g)4)6)e*m+N+O/v0~3i7E:5;O;TA'B,GILrMHZ[_:m+ryu#xny]-#o-'_-,4-,5-5R-5v-93",
      "lang": "&7*n/dC(F{IXJ.JHPOQlZEg%lzl~m.rLu&xzz^{]-)h",
      "weng": "#q:b;}=rJ0L(Qstg-56-7,-9_",
      "tao": ")?58617A7N9W9kG|PoUhX{Yn[{^MdwhXjPjenzs+|r-!k-!t-#@-#l-#|-&w-'d-'y-)P-)x-9/",
      "nao": "%z&q'*?a@&@ZAkP6R~YZ]Ju|x@zJ{O-.'",
      "zang": ";S?_AmAyB$I,K@M#abambLbUb}rC-)A-++-,.",
      "suan": "(z.b/m0;1BI^nn",
      "nian": "':*5*P1Y3*C/K6evf5f[h=iCiS-/4-0;-1x-2K-4%-8B",
      "shuai": "7>:4RNTH",
      "mang": "!5!6&<&D.ZCvEXEiG4G5M_OvRaSAlDp.rsx:-)g",
      "rou": "*!2w3X>3?l@aHdQC]tekhEt$-#2-#f-*7-0R-4t",
      "cen": "+W.m1A",
      "shuang": "(V7;CPuh}z~b-*M-*y-+^-5c-6A-7B",
      "po": "%g%i/70I3'7i<,IlK,jLn%n[o1oKotq9uswMwz|=-$K-%a-)7-,N-.E",
      "a": "@@s@x}|:",
      "tun": "AYAeC~OlVL`G`IgJ~Z-&h-(0-.j-1q-8J",
      "hang": ".k/T5*9HBiDHOAT#UAa9j3lJ-$C-%]-.i",
      "shun": "!x$&$1$9BZKo-$:-%S-,g",
      "ne": "!vY6^]",
      "chuo": "'j0^6?8&9bd!e'e<h6iIirisk:narfu;w!-'B-:&-:G",
      "wai": ".O-%:",
      "guo": "$Y1K3R68=W=c@6@LA.GJK9N]Q&Q1RVUwV!h7j'kTm=pZszvVxm-'?-(K-(a",
      "qiang": "%.157p82;G;R;Z;a;g;w@HCEJjKBLDMvPhVd[ndGeuf.tkuPurx~yAyw-50",
      "pen": "<XHm",
      "pin": "$V%A(8+w=^LcMaSLa;be-%I-%k-&#-(s-*q",
      "ha": "4_NyP'QOqdxQ",
      "o": "/}",
      "huan": "#.#x4!565b6l8;:(:I;b><EoH#H,I_M<^>`Q`b`va/hpj9k3l/lsn9tCvSyJy{{:{r}i}{-*|-,|-/n-0A-0K-2>-3?-4+-7<",
      "ken": "&#>8>Y>fUFV$`S`wsh-:?-:E",
      "chuai": "A0ACeb",
      "pa": "/b<zBdDrI)Trd7wr",
      "se": "+b+r,#3688CULD]Ehnr4tauuxVz[{5~2-&I",
      "re": "Dn",
      "sun": ".f/L0T1rF<J%L$LNt|}]-&f-&p-5A",
      "hei": "-8D-8E",
      "de": "OMsoy(",
      "kuo": "*Y*_/GH[H]O~r#rFxMz|{k~o-#.-#H-#e-$V-,V-,}",
      "ceng": ".Lf:-*f",
      "ca": "(E(Ykq",
      "zeng": "$~'p.L5z7H7z9n:E;9]DbAc>m|roxk-.6-1K",
      "nin": "?[",
      "kun": "#7&H);*s+*5oGEPpUEUJUgV.`wo%sCy*z]zj{Y-)w-,<-,=-,D-0/-2G-4^-5'-6w",
      "qun": "0<;_;`UVU^e.k&-7U",
      "ri": "TMp/p;pd-)%-+(",
      "lve": "+4rgrlxr",
      "zhui": "&U((.h66729r:'@C@|[!b>c6j_o#s>sQvdy1})}Y-)s-+J-4Z",
      "sao": "$O7m8<:A:HAdR4-&<-*#-*I-+Q-,:-0l-1R-2a",
      "en": "J!",
      "zou": "0&6GG=[)_CcNcOlem@mcn.|h-*H-+1-/w-06-2E-83-:.-:7-:n",
      "nv": "2h=TSvSxp8wW",
      "nuan": "-'M",
      "shuo": "$m&+'$0cIvZaZc_>qttmv~x*",
      "niu": "4H9.FxpTwq-!`",
      "rao": "+i8)9FF,KdVvk}}B-'v-(>",
      "niang": "nuoRoZ",
      "shui": "#I)7*q*z@1U[ZaZcZg_>_KzG",
      "nve": "&ONJ",
      "niao": "@%E>K1T^UGVO-2{-6H",
      "kuan": ",s,tAqw(-,&-,2",
      "cuan": ",',Q,s,t,z1)1[fLfsrZw;yv",
      "te": "?vRgr{xe",
      "zen": "]V_y",
      "zei": "S;a_bv-0M-1Q-2+",
      "zhua": "2(AU-,Y",
      "shuan": "5<@]z3{?",
      "zhuai": "#1dmi'",
      "nou": ";v=,tfv;",
      "shai": "/Z121J1e2[[K",
      "sen": "Ve",
      "run": "$1AOz@zQ{F",
      "ei": "ZH_@",
      "gei": "5C9J",
      "miu": "7n:@]+_w",
      "neng": "?LR'",
      "fiao": "WL",
      "shei": "Zg",
      "zhei": "j:",
      "nun": "-84"
    },
    "m": {
      "yi": "-:~-:<-:;-:4-:3-:#-:!-9~-9T-92-8u-8R-8N-8I-8+-8(-7O-7M-74-6l-6c-6L-5z-5)-40-2U-2Q-2>-11-0o-/_-..-,o-,B-,3-+q-+[-+<-)X-(o-(5-'w-'k-'=-'#-&6-$'-!?~=}E}1|x{Zz|zzxix6x.x%wKw,v%uPs_rurorEr8r)pppdpXojoioVnxn<mLm=l1j{jvjkj/j(i^i]i6h6gYg0g)g&g%fbf2f1f0f/etepd~dpd;c~c`c@bhbbbTaE_T_>_,^g]|]{]`]/[!Z=Y5XVVTTgT_T7T1SxSsR~RyR;QwQ0Q!PDP6NbN^N,MZMSLXLIL6L$J9I}IUIIHMG?EaEHE4D!CwCFBkBTBEB9B5@2?Y?K?I>K>H>'=a=R;m:~:48c8!7,5g4q3&2}2Y1j1f1`1M1/1'0t.O.K,_,,*x*f(c'G&.&&%b%Y%G%$$b$6$/#x#T!9",
      "ding": "-:}-8q-)?-%!vipfkGiydzY2Ik6u+B&^&[%_",
      "zheng": "-:}-9O-7L-0#{1{,yjuvsRm*lNlIi;eheZe8e4e3d/`x_v]3[+ZSY8Y2XlVFTYT#Q1C@A!4W3w07.),]%*#C",
      "kao": "-:|n{k][#TbL>>R3p/,",
      "qiao": "-:|-:(-6A-5v-4=-3(-2[-.@-,2-$H-$5-!q-!=y/y$xkx4rSm+m!k]k%j:iSi(hqbvaT_wVuV6V$T%KgGaF^FKFGEpDSBCBBB;8<2b1C1>.}#e",
      "yu": "-:|-:p-9^-9P-9J-9H-80-7t-75-6'-5g-5b-5H-4U-3F-2l-20-1F-+K-)O-)+-(J-%a-$p-$K-$9-!7}]}W}5{7zizNzEvyvwv9v3tytjtetcsqsos@rsq|pyp+p%oQn6m%l8kyklk8jfgvguf%eGdWbtb(aLaKa:`1_1^:]e]d]KZOZ!YmXiTDS`SUS7RpQyNvLAKsJKJJJ;IAH|HmHVDVD:D*D#D!CrC[CDC,B*@K=Q<><<<1;h;_:v9G908=7M7I7A535#2{2R1b1:1(0;/q.(.&,1+G+9+7)n)h)F))(+&*%!$M$D$=#V!A!0",
      "qi": "-:{-:r-9{-9E-9;-99-82-8$-5f-5(-3D-2{-1:-0G-.j-(Y-(A-(.-'v-'C-&%-%m-%I-%F-%E-%:-$D-#N-!Z-!B}$zvyHwbw;w1u~t[tFn;n3n$m~l^kkiBg/dpdTcKb<aBa&`3`2`'_b_)^K]OYRY@X?W1TgT1SkSjS1RxQ4PbO@N]MyMCL]LZKhKOJ~JcJ]J[J>J4GyGJE<E,CyCkCjC<AEABA6@a@7@$?+>W<Y<N;5;49h9*6f4x3D,m+N+8)a)](`'4&V&1%K!C",
      "shang": "-:z-:t-7k-3C-%S{p{*y:oAo@c8aA`@]}Q^G.BxBZ@P:h9>8l1T",
      "xia": "-:y-:s-9u-6I-5e-3w-+T-*+-(v-'m-%n-!!}({Mwtwpm/logkeB_3YST)P~M<Jm4X3z2i.L.,,}*C)1%V%J$8",
      "han": "-:x-8S-7J-3>-1A-/j-/i-*P-*J-(^-&C-&9-$k}[{Xtrrbp,n8lJl%dqbm_c_L]cZ(VLV%T]R_R^QRQQPOK9IJCH@l@^@?=k=Z=?<l8k7X6'3I3@1Z01.g,t**&{!p",
      "wan": "-:w-:E-5=-/S-.f-+)-+&-&1{0z*x=wlwkv6tJt3ptpen%iGf_f?d[b.b,]1Z9Y|YmY=QOQDQ@Q,NVNNK1J%G9B2@h<m:X7}7<5:3]+&)t)Z%z!n!7",
      "mo": "-:w-:5-0z-.(-#S-!l~j~b}!yQy#v!r_rMr$qno}o?iji_hR_(^d[cVzVkVjUHTyR$O4M[FrFMC$C#B~?~?o?e8m640`.8,%#m!x",
      "zhang": "-:v-8k-8]-8L-3=-1byErnkDimiIh}hsfnfmfXey`Q]hYEPRNeFt<y<p8Z8Y,$(V$`#}#u",
      "san": "-:u-8d-7q-5p-3c-*Q-)m-)l-)k-)j-)ix:iHg#T5AeAdAZ7s/%",
      "ji": "-:r-:O-:<-9p-99-8x-8w-8'-8$-6t-4W-41-2w-1:-12-10-0*-/l-/^-/W-/#-.d-.^-.0-,9-*z-*`-*U-)d-)P-)0-)#-'6-&c-%s-%d-$V-#x-!{~z|~|f|.zxz?z(z'xlw;v^vJuZuLs$qAp=p;oJnfnEn(l$l#kRjsj0iBhYh!gEf=f<eseMdxdaczbAb*a!_K_)^k^F^C]@ZRYCXHW1V`VBV$UtU^TgT1RnRmRlP]P[PCOAO@O$N9N5K,JNI*HrHhGoGTFfF3ExEXEPE8E'D[BdB:@O@B>y>]=x<`;t;(9.9(857&6{6d5m3D/;.j+?(>(!&8%{%t%4$X$,#H#>#'!w",
      "bu": "-:q-7F-,M-*w-*t-(d-'K-&D{B{?{6zPtOm#izh'gfd,bi[rY}Y{YfQHM,C>C;C:'=",
      "fou": "-:q-(cvCBj4H",
      "mian": "-:o-42-1d-0w-,S-,H-$`tktQsZqpq#aDNWJ^E=D~@p?|;k;,7G/o",
      "gai": "-:n-9w-6e-+u-+t|'uYm@dy^AW%T`QYNaHZGNGM:M8|'{&6!,",
      "chou": "-:m-:l-8m-5_-4=-2A-(m~{t/r!iKhld$b3aS_%[_Y%W~N?N=LJJkI|E?B_0h/O.s.p&3&!%l#v!m",
      "zhuan": "-:k-7o-3G-3+-2y-.I-)n-%+~EzRyPreq<oXoRc0V28t5%)5(f'.",
      "qie": "-:j-7Q-/`-+P-*@-#uw1u{iCcpbkaia8`fZoOZL]I~>;<`,E%g#(",
      "ju": "-:j-:?-9m-7n-62-5`-5S-4x-4j-2l-19-0%-.Z-.:-,.-+n-)H-'d-$|{/ztx_uct_tNt$o{nvnqnOnMmqmil`jYj9j7g+e%d<d3d(an`}_E^j];[I[C[;Z^Z@YdY$XMUdUVR3M^M9KxJyI{IzIrHSHDF:EcDPDCC8AqAi?b?L?(>:<g<I;[:o7)4L3o3<30/4/..P.A*e)m%5",
      "pi": "-:i-8@-7|-7P-2Z-.R-.9-+>-(h-(c-%5-!.-!,~|~X}2|L{2xhvCs<rwnumblFk7hWcibx_U]G[q[eXcUgS+OXN3N2HPB&B%<@8>7*6e4n2x.Q.G,n)Q'(%k%h%@$p#R!U",
      "shi": "-:h-:g-9q-9l-9N-9M-8t-8_-7R-6k-6]-1X-0m-,^-,:-+_-+6-++-*>-);-()-'{-',-%.-#t-#7-!W-!>{>z|y{x<wQvqunu<r4pbpap[pVpMp*oun~ninhm;m7l0l/kQi{iuiQg!f}f|eCdodTc_c[aU^*[.ZyXYS6RXRUQ{QzQhMWLxLrLlL5HiH[H,ELBiAJ>n=}:{:s:W:5:'9v7C7?6n4=4%28.3.+.#,0)$&3$}",
      "qiu": "-:f-:^-8m-6#-)u-)9-&+~*|FyTsQl4j2j1cFc&]rWkO%KIHeF8BpAn@s@b?J=o;^:l:k:j2D/T.k+D*'([!P!(",
      "bing": "-:e-:W-8h-8b-6u-5B-4T-3Y-1;-0a-0[{mp1ngnZhbhah&cm[vY,W5R0QpN/MQLQLLJnJbGXE:@~4E)r%,",
      "ye": "-:d-9z-9.-9&-4e-2_-0U-)7-(u-'%-$W-#,-!]{:zIxqxdwgoVm$jxjw[hZzZ!YyY;X:X6UhUcUUUSURQUPxP@P?P,OmOkMYMXIQHsHpCXBh>i<o8q7w753l3M2N1H0M0,0)).(T'b$V!a",
      "cong": "-:c-8f-+r-)K}w}ptPq6eUeTeReJdZcnbUbIa3`^`.PTMxJ`HyG2FgF[D?<G9!8v8L8D8#5V3+1n0H)X(e(a",
      "dong": "-:b-6R-4n-3,-0`-0P-0>-,u-,G-,/-'I|/{)y&u^tXr*mSm>lKl?eNc3_H^LZhX<QrNILfJGA8A+>L<j:n4#18.0",
      "si": "-:a-9B-7T-7R-7N-6H-5f-5X-4,-3y-2+-1[-03-*#-)x-)5-'F-#m-!u-!M~)ugtdsJqDoaj.gUd%cHa2VMSDNOMeL{J~I/H!C'@X?O?8?*>^>J=,7[6?1</R",
      "cheng": "-:`-:%-:$-68-4_-2z-0K-0C-(@{H{A{,zYz#ywu*pSlth%eZb^al`(_v^t^U]A[zZFYPXDWQW,VRVQVFQJQ)N}MnLtJPJ@IyF=F<F9EeETA!?0>e=_=G<8:?7f7d6/05/f*6*2)c%x!'",
      "diu": "-:_-:[",
      "liang": "-:]-:Y-9)-5x-5[-5>-5%-1G-0B-&J-%y-%7-$Ly2bWY7Q*KJIwG%<e:_",
      "you": "-:Z-9#-7w-7=-7'-6X-4;-2*-0t-*p-)f-)c-):-'~-&u-&>~n}bvRuAq=pZo8o6m1lyh[hZh(d]d$c|cqbY`,^xXkTaS4OVM;LAKGK=H{GFD}DJ@8@(?V?>=g;C:b976B/j/i/O.b.D,?,>+Z+Q&g&d%O%!",
      "yan": "-:X-9d-5]-4]-4O-3;-1u-1Z-1Y-.a-.[-+:-*O-*F-*/-*$-){-)z-'%-&=-&2-%'-$N-$G-!L~~~a~Q~5{GzAydy7xLx@wMw>vPv>uFu@titfrgr?r9qwqfqWpKmhlEl'kuktk0jUjKjJjIjGg<g*f'f&c$a7_5^~^8]w]?Y3Y'XhXPT3R8QZQ.P`P/O}OrJsJ<IFIEI5FeF'E^E.D`D3C_BhBG@,?P>M<V<&;K;D:i:H9R8y8S5O5I56544k4j3u3X3J3B3?3!2~2U1t1E140Q/U,w,g,d*Q*()V'$!3",
      "sang": "-:V-$J-#}WgK{KzGV",
      "gun": "-:Ub6JY9W93",
      "jiu": "-:T-:8-:7-9|-9v-5A-2p-.H-+|-+e-+]-+A-*(-'U-$wvdo(gogdgc`IZ2XkXBXAW9TGRhO#NTM+LsKwFxD;BW@v@Q5$/b+:%X",
      "ge": "-:S-9Q-8R-7!-6|-59-.O-+l-)(-)$-(e-(D-'4-&Y-&?-#s-#`-#J}6yhfLaO^^^R^=]_ZkX*WHULTML4GsE!CW9l9`/T.f,C+k%Y!,",
      "ya": "-:R-9>-9<-9:-7m-5K-0W-.$-*H-*G-*A-*?-(s-(H-&n-&'-%;}L}@}9{j{5zbxTuBu3t%q2n,lVlUhKh?[`[ZZZY:XLN'KlIsIFA0A,<r9,8//g.^,[,E+/)}'b%h%J$x$K",
      "pan": "-:Q-0S-/B-)R|Ys3i1[O[AW]U=MMGu?t>}>k:c9s84684l0$/w&C&/&,!*",
      "zhong": "-:P-8A-83-7x-4Z-0j-/C-$Tz8ysx$vMvHs^o)i)eqe0dddYS`MKC2@=?G4w2k.T$F!>",
      "jie": "-:N-8i-8<-5$-4~-4W-4!-3j-2]-/@-/?-/)-,r-,a-*j-*i-(e-&c-%d-%H-$m-$8-#q~zzKz7vevOuit>sasVsCs(qSpIoJnpnln*m|lCkvkbjrjqjgjbhihIeEbr^S^;]_[,YZY+X{XwX?W_UmUOUJS9RINXNJL0KxKoI~I1HqHgHfH8EOB,>j>;:z9b882?/'.6+0)H)8&K&J%g%]%M%##D!~",
      "feng": "-:M-8:-5L-4N-2Y-0]-0&-0!-/{-/y-%p{Rz9z5w}w9v7odoYl}l|l5W4MkKPI.E[?m?h=S;Y;#:R8e5Z4i3V3*2g1h/1,O)u%C$B",
      "guan": "-:L-58-1=-0l-*vphb@b?af`LXqW*SRJ+G*D(B2>w<v<W8G5Q0E)W(4'e$_$0#Y",
      "kuang": "-:L-22-0V-,b-+V-+N-*v-&o}&xNwFm_dJcW^z^y]>RWQkP#L)?N>=0X.X.U",
      "chuan": "-:K-7o-3G-2t-.K-$]}Tz3jFjDPMIRIDCbA?@i,H+<)7",
      "chan": "-:J-91-2y-2R-1~-1/-/:-.k-.J-.*-*~-%$-$F-!n~P~@xBszr>q3l>kJkCkBjXh{hpgWdu^r^lXsX+W;VqVhU#S9RYJsJXDEB#=v:^967o7n71655d5B2V1I,#&v&u",
      "lin": "-:I-9U-2g-0e-00-0/-)v-(l-%PxDlbk,gIgHc=bob)_=_6[MVGS?Q+PGN!FIEmED<U7j7H5h3819+u)S(I'+%o$Z#M#K",
      "zhuo": "-:H-4t-.`-.<-+#-)X-%U-%T-!G}+y@v,tYeu[BZ,Y~V3UxU[StSHSESBSAS>Q>L#JuJfJ3J,IoGcDh@j=|=h<b<J7%6S5[4}4N3_3#1>.h)e)N",
      "zhu": "-:G-:B-9]-7d-7G-7?-6Z-.&-,t-,n-#T-!z~4|=xpx3qVq!ploNnWnIl*i>[[[WT&StS;OqO1O0O.N>M#LzLFGWFmF,DhDbD^D0BH?&>Q;b7t7Z6s5x5>4V4A3y2^2@1+0x0?,K*K%B$J",
      "ba": "-:F-8l-7`-1E-)^-)@-(b-&M-&I|_{[x>wCv0mumIj,fq]o]I]6]#[GZ)O+M'D,5?4R0+.m+@%N#/#!",
      "dan": "-:D-8~-7{-7H-2r-2J-/V-,,-+G-*~-*{-'f-&2-%C-%B-$v-$F-!m-!b~[vTsjiofTfOfEb$aga>_q_P]4[VXuV@V?UjRiM/BeBSA*@)>r<?7.1I.@+#'O''%f%:$H#`#N!F",
      "wei": "-:C-8{-7p-7e-7A-4s-4V-4Q-3~-2x-2$-*h-*b-*O-)O-'q-%q-%k-$s-$S-$@~.}o}m}S}7y1xJueu7u$snsUsHoqoQnxn_m9m2lHl7kskZk=jljTiniEi9gme=e:avaPaM`?_JYnYUXbX1VEV1S^PuO5L*JqIOINHkD@?g>c>C=n=$;S;N;0:N:08?837i6R6G5|4]4>4$2]2O2F1]0u02/$.r,[,P,I*~)h);'f&H%!$N#X#U",
      "jing": "-:A-9C-9+-9'-5r-5%-3A-2O-1N-0K-0C-/9-.~-,y-,k-,[|i|g|cyIvQt:t8t+pojAh|fdfZeeeWb/___NUoT+S&S%Q:Q3PIP0KZJpEvBsBn@I@H>m>%=><87]6#,r,'(^(B(<%($u",
      "li": "-:@-6_-5u-5k-5Z-3s-2&-1z-08-/Q-/=-.o-.G-.'-.%-,l-,&-*L-*I-*:-*.-*!-)|-)Z-)X-(z-(2-&U-&0-%g-$C~g~`~A~>|`yrxEu+tat#rjqYq,nAmkm5m.lzjag@b]bXbRbB`l^&]q]gWYU@U3TsTlSpP_P>P%O&NmN^MqMSLnLcLYLUK!JoJdJMG1ECDuDjD_D8D.C/C+?k?[?Z=Y=U=/:/8z7@6C6$5H0a0U/>/=/#.z,~,u*V*$)z(t(_'x'u'l'W%R%F$l#P#A!Y",
      "pie": "-:>rVV]V[PHAD8>",
      "fu": "-:=-9c-8[-8#-7z-73-5y-5m-5j-5U-46-3v-0d-/|-/J-.R-+h-(=-(6-'[-'S-&E-!s|<|!{]wvwWvVvRuru'tDt,sbr5qJq/pmp3oWmgmFi~ifi7hzh;fwfkeje?c{ct^w]l]J]&]%[Y[QZ+YfV7S}SLS)ORN+M]MGM)M'L1KWJ2IYIPHKA:>~>Y=W<w9c7T4S3d3/0.+2*t*!()&m&b&N&G&@#h!)",
      "nai": "-::-6v-4iw:vhv)qxq(g6WVV{M$AC;<%`",
      "wu": "-:9-:1-9D-97-8>-8%-6;-5|-4k-2k-2:-1q-.T-,|-,C-+y-+/-*V-(U-(T-(J-(?-(+-&)-%K-#v}4|^zLykxvvxv4u%tjthsurTownkn9n+lmkzk_j6hFgQfudbd`d@c'b[bZbKat_]^[]e]d]]Z4WGTTS7RoROQENvNtNoM&K#FLCVC=B3@[@Z@S?{>T>*=V;^:,874(3C322*1w/V/A+3*4*3(|(P')$h",
      "tuo": "-:6-8X-77-6h-6.-'a-'G-%[-%$|Sz;v8sNrRmck'gzet]i]`[H[F[EZMYuV1NgN^MTM8ITI+GbFBF0AvA_@d?`?_?^<k.K",
      "zhe": "-:6-9[-*K-&L-%9-$o-#T~h{Er^bp`6]H]'W_ViQGQFNgM=JWFwC%=m<E",
      "ma": "-:5-9Q-3o-(r-&!-$%-#4-#3vUs1rWqNhR[cVzNQH2:2/&.c,4+5(x$[$Z",
      "me": "-:5~t~j~UhR6I",
      "yao": "-:5-:,-8;-6D-5@-4?-3_-2q-+m-)&-'7-$b-$2{}zBwUvGu_svs=pro3o,n/m,l,k#j~h^e;e.cqcRa%[oX2WrW@VdV$PkP'NGN#LuI;HBH9G5C!BA:B9J444&1|0f0(.E,;+r*D(~(l%S$%!t",
      "zhi": "-:2-9Y-6f-5^-5C-4|-4d-44-3y-2,-/}-/0-.U-.+-,v-*e-*>-)C-(W-'v-'8|||{|T|:z~z{yFy@x$v%uNtsrGp&m7l0j+iridiahyh5h3ggf5eYeKe4e3dmdUcU`6`*_$^{^E]Y]F]E[u[HZtZpZ]Y{XvWpWVW2V{VvVtUKUJU>TjSMRwRgQ`Q/NOMyMcM2LqLhL6K~K7JjIuI]I*H+GHF_D|DnCAC6BiAJ@t@O@N?v?T?3>V>3<L<!9e9S9B8}8@7~6>4`1_/9,x,^(R'w'[&3%c%;%7${$z$k$E",
      "zha": "-:0-48-.N-.=-*C-(w-'X-'?-&K-$j-$O-$Aw/pNd6]s[m[XZdX4WIW#O2M7M1M0LvLlI?H4Fv;X:67u5#4@2N/p&d%.!M!H",
      "hu": "-:/-:'-9j-9F-5E-0Z-+U-+L-'h-'W-%n-%Z-$_-$4-$1-#>-#2~k}v|;x1x0x,uGt4sEr]r[oxm[iphxfxfgdFd*d)cGa{^V^6^4^3^/^.^,^']y]9[xWWW$SXRFR<OjN(L8I%I$GEGCCR@9@&?f?7=t<.<+;$9E99986Y5s483S2;1a.J,S)b)+']'['I",
      "fa": "-:.-8!-6y-3Z-0R-)]|A{vy)uwm4fKL@FO?X?:=z5R*[)L%8#.#+",
      "le": "-:,-9R-8r-,J-)2-#1d}]qH`G5@z??/b+A",
      "yue": "-:,-1g-1e-1`-/P-&j-&@-%A-!DvAqrn1m^jec,bubS^]]g]8Y_U@OpOoOWN8LcH`G5FTDj?'5e0J+*",
      "lao": "-:,-6~-3!-,j-,i-,>-'$-&N-%z-#p-!}uSr`ljk/cY_f_eYtVZO:L=G5F!=O='8%7a3{/^./*<$f#c",
      "yin": "-:+-7}-6^-0t-0;-*c-(j-(V-%o-$d-!T-!+~l~+~$}`}$|&{w{YzXz:w_u=t0t&p:n}lnlLl<jdg^g>fya@`i`B_u_t_0SMO[L:KKEkE@E1DKCwC_BYBGA5>l>d>U<5;~:}:i9}9V6^6]4).],|,j*I(U$7#k#_#:",
      "ping": "-:*-5i-0]-/z-/s-'u|Qz1u/ngnZmTi[iJi4heh&`0_zMfEU?6>6=A<D3)*v'F';&_",
      "pang": "-:)-*B-#ww}r|o2h9h*ere<S2@<?y9p4i",
      "guai": "-:&-)_wVcuc>[KMbLw",
      "sheng": "-:%-:$-4H-.X-.Q-,?-+0-(9}=x{x7u*k}_VS[RGQJQIOeMuIyG~E{BzBF?%;k;@:q7G2u/M.N*h)i&y&s&`!'",
      "hao": "-:!-65-3k-2)-)6-'j-&_-#k-!t-!Y-!#~xxRvacOblRDR'QBPePaPWP7J!A~Ao=]<Q9j9U7S6c5N5@,/,)+}!y!q!h!f!c!_",
      "mie": "-9}-),-':-&Hq7hk^uWeDr9m64504!",
      "nie": "-9}-%*-#e-!O~m~D~5~2}#q'q&mFkTjujLivZ&YVY5X[WCVsT|T<MVG@DW=@:Z%+",
      "xi": "-9y-6&-5l-3i-3#-1B-0,-+?-+*-*n-*R-(P-'x-'>-'6-&/-%]-$X-$:-!p-![~T~8y?xWwnw'tgs;rCr@nsncn`nRnHkgk9jpj`jZiqiOeceOe9djd_dEcscgcZcKc/bqbeb8ay`r`p_s_r^V^6^4^3]_]O]HW%R:QKQ9Q6PEOzNON)MdLZKSIdIGG{GUFkFRE|EjCzCuCmCMCJA4@e>X>S=f<[;i:+9h9)8p8/8,7N3e3R3K343&2Y2+2)2%1q1P1O1N0}0P/E/?/*.{.t.#+p*r)|(#'h$1!k",
      "xiang": "-9x-9,-9(-6}-3*-1}-,4-,$-*0-(x-&r-%L~Ww~uXk5j)h7gqe'abQXP5LWH^F1DH;!8:*E'g'T",
      "shu": "-9s-61-5g-55-54-1|-1F-)Y-'3yNyGu[tGq4oNoCnWnIg}gxdWchcgcIbt^X].Z.Z#Y>WBU9T'S|PvPtP*OhO1O0O.N[NBMtL`JtFuFYEpBuBKAaA`?c<O8[8H7m7Z6m5q3Q1k)f(i('%h%e%d#O",
      "dou": "-9r-61-1T-1P-(~-(N-&&-%|])S]SPN&J}EwAm=d;n6<.$$v",
      "nang": "-9o-1s~d~;~1_QWwU{TkOwD+<n5b5;",
      "jia": "-9n-8<-7Q-6w-4X-3X-2]-,}-)S-&?-&4-#F|}{MwIwDsrs,pvpImei,e[eBd^cA^J^G]L[d[Z[,ZWZ8UhSYSVM`M_K/ILHNH:G^ENAz?H>&=L/3,E,B*n*d&f%0$8",
      "mao": "-9k-1,-1(-0|-0z-*dzLwksLmOkzi?a=_?^(S/QvPrN4M@I'B!AcAW?9;F/Y/#,J)E#$",
      "mai": "-9i-7I-,{-,*-*}-#${Kx5",
      "luan": "-9h-9Y-9V-*^}C}Bvmu0qXq:q$m)jOZ[TvOuL2D69K5J59#4#3",
      "ru": "-9f-6K-2C-1K-(N-#{-!$vkv[s7qyq)jciX]kZgUTP+NzL(E0@W>7;Q9u6b+^",
      "xue": "-9e-.x-(Q-!9|Bxbq>q+mmmMjzf=ckT/SlKvFc?!>u9j7>5y1&.B%L%<",
      "sha": "-9b-4c-3?-2H-/,-.t-*+-%t-%^-%H-%4-$R-$0iCgkZEZDW<N{NrK`H?FlCaC3BDAl?w6{2P,v$g",
      "na": "-9a-1*-*|-(R-(8-&T-#_v=tx]0[LZxZgYWWL",
      "qian": "-9`-9Z-9W-8T-8B-7l-7(-5q-4w-4^-3g-31-2<-/r-/[-.u-+4-)}-&4-#u}/}.zaySy4xZvgt7seqtq`q5n'n!k{kVdObgbLaN`f`<]Z]N[J[1ZCYLY=Y!X7WSVgVbVUU,U+U)O_NwJ_IbH3GiGPF%E7DzD'C~CeCZC7@]@M>$<%81806O5S4B2Z/J/B/2+%!l",
      "suo": "-9_-9=-3]-&8-%x-$&-#j-#gu&s(as^$ZEZDW:PjKaJz:E9y+|)w)v)!(]",
      "gan": "-9Z-8S-7J-5&-0=-/u-'c|Ro'o%o#o!hfh_dqa5U~T]T6R_NuMDKLH6FNEd@??;<:8f7_7/55+;*w'#%?!T",
      "gui": "-9X-6q-3{-/(-/&-.7-.5-+Q-+J-+I-+F-*%}3{zv2u;s?rhrIp|k$jpj`iLhLh,gmf;cMVxVVTiThRCQ2O%M9L.KeIeI`GTGAG<G;FWEQE)DXDQC*@v;;:H4t,Q*A(r(D'q#X#0!|",
      "jue": "-9S-50-3f-0X-/R-.?-+@-*,-)X-(Q-!a-!R-!9~I{PxbvAqRqQnLnJlPl@k$j}fmf>_k_Z^b]7Z`Y~Y9V^V;TnSgKTF7F6D[CvAG@:?!5P2|1d1>0S0G000/+z+M+)+'*](n(G%L$3",
      "liao": "-9R-2|-!rrLovomo<o5o4nKkLk+k*g]gG`/_^W9VaV9S{SZPLO~FxFA8Q8%4f1;0V0R+q(H%[#g",
      "er": "-9L-6v-6T-1r-1a-1_-/1-'B-%hoHoGoFmAg$f~NiLCLBK6FaAt>[>90%*F",
      "chu": "-9K-5N-3d-3R-2K-2!-0$-/m-/Y-/I-,t-*)-!o{$x!s>n5hjgXcj`g_SWxW$VoTNS=NEIjI&HoHQF|E}EsESE#DsDdCzCG?@9r9q6x4N/+*+(,&;",
      "kui": "-9I-3{-/4-+I-+F-$U-$;-!xwow4s/rBo*mQjVjHb]a.a,_y^BXgQdPyI2I0E&BV:S7x2l.q!/",
      "yun": "-9G-7r-3q-1p-+}-+x-(0-&^-$^}xwEvsvEqOb}aca4a)`c]2[yRNQTP}MwHWF@BmBaA&A%@0=3=!:!7W2h2:202(2$1b.Y+(&P",
      "sui": "-9A-5#-&F-#U{3wytvr1nwn4kpRqEWC1C0Ab=H9[7+6z5}2C1g0~(/'p",
      "gen": "-9@-9?-&pX=X'L7",
      "xie": "-9=-9!-7[-4J-4A-4/-39-1{-0s-0c-,w-,+-+'-+!-*k-*Z-)7-$(-!C~e{ry_wrw8w1u)sOq]opnenVnNm$jrgJeFcT`z`p_BZ~ZWZ8X9WnWMV*UiUFT}SWRePXMZLIK@JwI,HOH?H/FlC]?K>p>A;P9h7B695{5!4Q4P3b3E2,0w0s0O,C+k+e)8",
      "zhai": "-9;-6B-4f-4*-3E-*K-*C-&c~zw{p{os[u[2YxW/UwU>SiSfH#EL#t",
      "tou": "-98-4'-4&{$wNv'sqs@aK]*T0SQ",
      "wang": "-97-8v-87-1JvYo7o1o0o/eoeiefe[dldJa}]>RTQ(OEODO=N1JD@J6;+E",
      "kang": "-96-8)-+X}|rmkKg|dG`8]f](G=8_4d.a",
      "da": "-95-.N-+f-'f-'R-&m-#~-!J{hxrw[v*d'ag_q]nWZVJ@f?}:<4Y0p&@&4$#",
      "jiao": "-94-6n-6D-2q-2j-2I-.B-.6-,6-)B-(<-$H-#M-#K-#?-#(-!^-!=~IuUu1r=r6qcm+m(k1k%k!e.e+cJbl_~_i_KZjZTZ5X&W9VlVCV(ToTJT?T,SwSuSgSSQbPgP2LOIpG!>!:l:k9Y8w8<7b5[5C443,2b1>1*.9+l*X(5#e!v!^!V",
      "hai": "-93-'V-'0-$#-#h~ey]vOq;pL[!A3=N3[,C",
      "heng": "-90-&B-%QuJcXcLbaVKL/FiF&<|42*B",
      "peng": "-90-5,-3J-.F-+o-!~zgyqyYfUe|cyc+`%[tZ?Z6YkXpWvW4OTKCJLIlIWGGFn?6<R<D8e8]7Y3Z1h$a!u",
      "mu": "-9/-8H-/~-,=|Ey9usuSu%m<i&i!`[`Z[TPVPUO7O'I(FrFqB1AwApAX@#4h/a/_/X/L.S&U&Q&E&:&9&(",
      "ting": "-9*-68-60-4C-*M-*7-(]}>t}sxk~hVhJh)gBg?g;dzZ<K]KHH~H(@u=6;]6u453`3^*.&^&[",
      "qin": "-9%-64-1^-,8-(g-(f-&#-#f-!Q|w{Fshs.p.p(o~oyogkmkVk2k)hOgbdO`C_G_F]N]5YlX,X$V/UlS@R=J|E`Cg@3:$7'6(*J)R)M#l",
      "qing": "-9%-4b-3<-2(-0A-.b-,O-*S-%1}V{1wfp7hQgwgeb4`9YLUpUoQ5PsJ'G/EME/DcBnBFA7A.A(<';w;B916X&x",
      "bo": "-9$-8Q-7`-73-6,-2v-2f-.e-.]-,Y-*y-*w-&M-%#-!h~oxbq*k3ibeu`s^|[3ZJWyV=V5UgUfMFM'KYHKEVEUDFBj?E?,=e;};W:L2//l.?,9*q'`'^#2#1!Y!8",
      "lian": "-8}-34-.;-+E-+D-#V-!XzUwAvusMrKr/iegjd&cS`F_{^fW.T=SrJhI#GiGSE7DfCHBlBP=%;6:C8j8A777$6p5p5l4<2f1y0z)x)3(X",
      "duo": "-8|-8X-02-/2-/$-.c-.V-'`-&y-&e-$O~}~S{|{{z}z]xzxywiwhwHvtvlsNo+lOh1ae_oZrZqYJTET>T8T.O)O(NfN^MrMTMSM&KuIRAh?`?^&D$i",
      "men": "-8{-8G-53d8bcbCaz_9_&]VYgS^PZIh@>3=1,+((W",
      "ren": "-8z-8y-8s-8U-8F-88-/d-/cx;vSu`n:n2d|dwdv]XO,NiLPLMK6J7/]",
      "shen": "-8t-7V-6i-6/-5d-1Q-)l-)k-)j-)i-(V-'i-&}z^u|u>ttsys.qmp_pHorn7lui(fp`t`b]b]4WPTFR4P9P3M:J7J(IHHRA9@+=D<0</;f;e9?671?*g&~&w&q&e$G#{",
      "ze": "-8p-6B-4*-/M-.{-'X-%d-%2-%.-#9rcl:iAi#hU[~[2Z$UwRKR7G)C.@q?n?A>n:(9U7C5[!e",
      "jin": "-8o-8j-8d-7}-6<-35-2^-2=-01-,y-,k-,[-*X-*'-%o-!F~y{Fzkz6y<xPvFt7rfr9q~p(nyj'j!gbb+`CWfSOQaQ_N7HEG8CTB[>E=q=M:I9$6~6g3h2M0i*Y)y)K(z(d(@(*",
      "pu": "-8n-3$-+k-!S}^}O}<{BzPy(]p[rY{V0UvTeTdQ;PiPPP&O*M,FZE_AS=`:17k6T614r3a+v(C$m",
      "reng": "-8g]m",
      "zong": "-8f-5:-4y-43-3KzFpikxkrkNeJcdaraVY^XXX(W&Q|O>MxJQIKG28L8D8#3+1n1c0{,b,R%E#w",
      "fo": "-8e-8;-73|IJl",
      "lun": "-8c-7i-6S-4u}l}Y{.t*lSlRb9[{YMJa?j<6:3",
      "cang": "-8a-89-7h-5;-3e-07-+OkeD<?i9n6J,**{(p",
      "zi": "-8`-4m-17-.h-)%-(W-'t-'r-';-%@-#r-#cupuoudu9qTqNqMqHq1q.l;k[c;NnLKK8InH=Ez?s>W<];o:Y9g9_8a7;/G+J(!&Y&7",
      "zai": "-8`-3V-2G-1!-&v}8pOl.]j]>L3>f;>:.4|4{3~&Y&7",
      "ta": "-8^-6E-3^-#~-!&~Kz$yyy6vep}lc[HZXW`V&HCG}EqA[?}<c:<9w8^7(6w/`.3+d+V",
      "xian": "-8Z-8Y-7b-7,-30-2m-2d-2b-1i-0O-)o-'c-'E-'*-&O-&2-%6-#u-#:{`{!ycxXv`v&uKu>u.t`tZs~r~rOrNr9q`pUo;o:nBmylxlhjthhgCfhf+dI_a_X_R_'ZPYQXsWnWiVhVXVSU6U'QlQNPKNFMhGiFFEtDRC~ArA@>S=E=7:]:C7Q6*574*0l.=,s,G+f+c+U+O*|*s*T*,'3$c#b#Z",
      "cha": "-8X-6Q-4D-/,-.t-)e-$A-$$~s{yvbu?o|m}kqj3]a]OZ7Z.XZX5WJW1NsM0LvK?I?GjEB@k,<%s",
      "hong": "-8W-)w-).-(X-(K-(;-&{-%}-$)~i{kvXu6pqpjn=j[fvfBa*``XeVNQ[@E?y?<>@=b=S;J;B:R8J7U5(3|31+>+4'T",
      "tong": "-8V-7/-6R-4Z-2h-,/-(}-&|-#Z}o|/mNm>m3h:f(c%`P`)Z1Q]P<O<K|KUG+F+AV=P7l4C4#18.~.0+s%%$s",
      "dai": "-8P-6G-3W-)g-(B-(4|3{(w[m`ikiViMiFg[edd!_/^1PAMJJCC)ByB+5c,2*y)?'!",
      "ling": "-8O-7X-0?-/D-)G-(#}h|>wwuqtKqdmdmVlQjhekY<R)OQMRJeJ5DND)?/<77=5'4O0v0=.I*z){'H!z",
      "chao": "-8M-8D-.B-.6-,6-(S-!yjQj?j>ffd9]<VlQiOBGFG!C{9+7z4g303#22/v",
      "chang": "-8L-8J-7j-5D-5+-5!-3|-2~-26-1b-*P-)~-%i-#8~v}%z=yZtWrdo=iDgReLd>bDaxT:RBQtPcIiAT<T<P2t,`+6)^)4(h'B&z&R%w",
      "sa": "-8K-+2W<VPU:Dw?'>X7s5L",
      "fan": "-8E-0)-0(-0'-,1-+R-)a-!hy%v_tDr;r:iwhwdi_h]l[ARvRtNpMLKXJrJAG,FD@w@g?4955t5_3n2E15.l.[(A&O&/&,!.",
      "miao": "-8D-,m-)v-$?vDscrPh>gtgSX^NP<#;A+K",
      "yang": "-8C-7<-6{-3[-15-,f-,@-*g-'Z|J{xwTukswmrl6l3e`d4cEaA`m^}]T[lXRU<T*RVR2PmNRMHL9I7HvG`FpB|A=A2A'>z>`8N6A4y4D4.2B+6*O)4%Q$|$@#F",
      "ang": "-8C-*gn.RLQoN0!5",
      "wo": "-8?-4s-4L-*l-(/-'&-%q-$atCtBsfi8^TZYYbYSXKV#SRN8I>@1=#<m<h;V;U7!6`3.,N'|",
      "jian": "-8=-6J-5W-5P-4g-4:-3g-2s-2i-2L-14-0L-0<-.q-._-.W-.P-.4-.3-./-.,~6~'|bzmzaz2xovfuRuQp4oDiHhcg8fNfHeDaq^Z^Q^<^9[8Z>YqXmXjX7WmV!UGU'R{PpO_MoM(LEK3JgIfIJICI)HEG]FhFCEKE2DLC&BMBLA]>a>$<z;l;a;&;%:Q8T7P6H625k5f5a2a1l1Q/u/Q/2,g+%*W)<)6!2",
      "fen": "-86-3}-2n-/a-(`|v|q|]xuw7vpv;n&ithog,dDa0_gR>OYOSN.K&J*J)F)A>@66}5i4v391=16+{+.",
      "bin": "-86-3S-2EpAe}W?UNShJnImGXE:B^BO@r9I6q6Q6M6,+.(j((",
      "di": "-85-7@-5a-4F-3:-*D-'}-&t-&$-%R-%&-#O-!(}0|h|d|@{Q{L{8zMyFy;x|w?tqsmrimUkIjoi`hBg:fofjeld#`7]g[g[=YFX]XGW2TLT!R[NfN(MrM3KAK:JCHiG7AI=g<};T9f9=3F/K.V+=*5'1%c##",
      "fang": "-84-4}-+^|r{Qzcv5er^%TZS:S(RER6N/@<<M/Z'P",
      "pei": "-81-7$-5o-'lzyvZvCuCtOs_k7iid7[eU5S5S,M'LyJUAj?u=F<@.`*=)d",
      "diao": "-8/-0@-/f-/G-)1-)!w$njfzfYe~]gYHI|@m)U#p!?",
      "dun": "-8.-(a-!2}}|sy!x~x}hNdPb2_mVYV.T2HnF>@'8*4c1@/!+m",
      "wen": "-8,-/X-(M-(C-(&-%Jy`vNf)dfde]:X.WRSmQsKNHWH)C$B`@>;z;R:*4s+1*8(}(&$;$.",
      "xin": "-8*-7f-5d-5G-!3-!0~%v<r,qFgTe$e#dHawa>SCR9N@N%D$C^4a3$",
      "ai": "-8&-2W-09-)h-'!-&q-&5-%Y-$'-#]-#E-!;{SzIyfxUtgtUrxr'kaa9_7_,ZNYaT&T$QqP^P.CxClB.:%9t6U3.03(k(;#]!s!j!]",
      "xiu": "-7~-5c-5V-''-$/~|p@mfmPh2N~G09~9F8I4+*P*#(N",
      "xu": "-7~-7Y-6Y-6!-49-0x-,F-,E-*Y-)T-)+-'p-$e-$Q-#7-!o-!W}7{Wy,x+v&uxspsArFhHeXckcKc:b(`g^YY4XMTKT@RbRZR!QcP{O^OOLGI9GfC|CtCiCOCKBw@5@4>?=t<>;+;):P9r998W8B433W2H0m+t*N*?&;%T",
      "tang": "-7y-5+-4M-3l-3U-1v-.2-&.-${-#.|XzpyukdilaA^cW^V~OsJFH%F{F<@P<T:h:G8n5D3i23100A(u",
      "huo": "-7v-6r-5T-.Y-.1-(p-'W-'D-$e-!%~V~Fw^vouWf.f,b'^OZ/Y4UPU4RkO|E9@%>/:f8U6y6Y6+525127+_#@",
      "hui": "-7u-7#-2u-1{-+H-+.-'/-&j-$[-#=-!f-!U-!D~p~,~&}u}Fz]xztEsgr7q]onn?n>i*gmg7g5f6f4f3e,e*cDcCc<c(bfau`H_x^sZ|ZQX>VEQSQCP|PQO]KeIOI3GRF4EiEZEQDqBVB>B=B7@n?D>h>g=y;+:S9X897x796y6:5,5)3t3q3k2h0y0q+h*9)G(=(2$~$)",
      "kuai": "-7u-6@-2M-/p-&f-!8}:|ez&y'jEgMdXUkRrO]Cq=y79.*+g(2",
      "cui": "-7s-5?-3N-04-%I-%>y8lYlWkhdSbE`TV|IxH*GHAg<48P6a331g)p(b%I$L!d",
      "che": "-7n-5`-4I-,%-'y-&*|?vln|nGene/]QY.XcVsV>V<7`3r3b3E0C",
      "chen": "-7h-4_-3e-2'-#|~ZyWyAw]pGoBdRa>[aY]THS~QAP$L[K_K'J(HUG3D]@+@*2n05)l%P$?$$",
      "xun": "-7g-6O-4.-,Q-,A-,)-,(-+5-'3-!k-!P~u|y{=yixYxAw#uHqKq9o`oOmEj@j&j#g=ebe>c]`uXUTfRcP(NqL_KbF`BvB@Au@Y>5=r=l8+7y6V583O2h1{1D130j0Y0Q.5+b*H(L&T",
      "chi": "-7c-7M-6b-6P-5E-3@-,W-,K-+_-*]-)<-)3-))-(:-&W-$z-$I-#l-!g-!=|@|)yLw/vBs6n|fsf$eweve6cBc9`X`7_|_2]`[f[!ZvZ/W+TxTCSNNcMPM3G1ChC6C4BX@T?Y;:8g4~4;3U1K.O'A$Y$U$E$2#G",
      "xuan": "-7b-2N-/.-)o-)'-'(-$Y-$Mz)wsv&sWrqr.p]f[cobMaQaI_I^nX_SyS'RAR,QeQ$Q#PNK@HxHwEf?#;I8d4M3x2e+L*s*)*&)B(Z'~%/#E#<",
      "nu": "-7a-3r-,svjq?ilfed1Wo",
      "bai": "-7`-6z-(1-&:hJ[?[>ZwYeX}WAUfUCTAMFLN,n'D#*#)",
      "gu": "-7_-3T-2e-0F-)I-'s-'N-&<-&;-%G-#y-#@}gzfx#uhrUq@o&lXl=j5j4d*`~]_]9TSNaM.K<JIHFGzF$D{B<@K?R?=<X6P6./P/@$Q!L!G",
      "ni": "-7^-7]-7.-4v-2>-27-+8-(%|Nzsznv/v)t<rkqkq0nznbnEcvb5`{_,]0[i[<Y5UQS$QuQ7PSMPJ&E6@y?)<=9x6o.F,l%b",
      "ban": "-7Z-.!-+,|z|Yutn0d2]R]M[OW]W[T[ScSbRJOSN;MM:c/x*>'Y'R$*#[",
      "zhou": "-7W-6M-2X-0{-'|-'z-'Q-'5-%X-$i-!G~{v.t/pgjCiceIY%QnQLQ<I|>8<S494'*S'9%W!R!I",
      "qu": "-7U-7E-7+-/H-,q-+S-+=-+7-)t-)s-)W-'e|Vt^nnm{m]k?e%`&^0[^SzSIOnOOD=D4CzAL>)<3;[5U3G2o0D(K(8#9",
      "ci": "-7T-7B-6m-47-17-/+-/'-'t-'r-%@|*q}j3h<`hN|MILHD&C??56Z*p*k'E'6%=!{",
      "beng": "-7S-#w-#+{R{#zgyXw!lBkYX0>v)d)[',&k&j$a",
      "ga": "-7Q-'M-#A-#/-!4wIwDoEo>o.RaOM+C",
      "dian": "-7K-7:-3m-18-**~M|P{lyBxfw6v~t6t!kXj]jNjMh@ao^!YOTrTWT9I_GqG_FPF5B?<a9k764?*u)s&c&`%1$W$$#L#=#6",
      "tian": "-7K-56-1>-(7-%`ylybwYvit=nodgc2b:Y#WPQ?LSB{?U<A<$;2)g(q(.&}&|&h&`&L&F$W",
      "bi": "-7D-78-73-5F-45-+c-(h-']-&k-%?-#Y|jzVxgwLvnv:u}twt1r3qonrlFi|huhthPgLg'fRfQfJeme!crciaJaF[YT;SqS+OXO!MUM!K;I<HPB)B(B'B$A|Af?x?C:u9Z9D7q6e2`1p.%+y+x*`(:&W&V&G&5%^%H$T$S#'!o",
      "zhao": "-7C-1k-)A-%X-%T-!y|#v+j*]B[@S!Q}P8OBM{J,E*?S6S4T2G0r0:09.7(m!F",
      "shao": "-7C-,p-+~-*a-)A-&Vu,oIf^Z'R|NhM?K(7v3m2s17*m",
      "zuo": "-7>-72-66-4E-'L-&,-#!|lmtmsj;h0d6YTV4R%M7M&)e",
      "ti": "-7;-5N-5'-4R-/!-.n-*;-%H-$y-$3~w~rw?smsPnmnYnVl2foeCe6bnbjb#b!aU^)ZHY*X]XGU>OaONL$JxJCCQB]=0;T8O*5)A'r",
      "zhan": "-7:-4>-2y-*s-!IrQnamRl>l)kCkBk.j|d+b0^M^?^5W|SJSGS0RsMjLiL<KmJ?HLFCDEAyAQAO?Q:|)q!F!4!$",
      "he": "-79-,_-)$-(v-(/-'o-'Y-'W-'&-&R-%<-$Y-$W-$1-#d-!c-!!|,xVuyp6mJb&[jTROiOZMNL8I@CsA^?]<i;M7R3P2m2'2&0k0e.8,C#^!W!<!:!6!1!,",
      "she": "-76-*E-*9w/v|oVfP`_`;^h]'ZyZbYjX:WEWCT|EEDACJ?@=<<f;s9Q5Y,W&*&)&$",
      "die": "-74-)M-'>-&t-%H-$j{szSmDl/kIi3c}cPa`^IZbX:QwP!M2HsGUBcAK?I0*/}/n'_&#%q%j%i",
      "gou": "-71-3p-0y-+z-)H-'p-%W|C{uwdwcuTs0mnfM[CX%VcN6M^Gm?q:925.C*o%2",
      "kou": "-71-0f-.C-,g-)J-)DpCp8fId3]^[|VpTV9@",
      "ning": "-70-6>-4a-29-0.-'H-!)r%q!p2p)p'p!ot[4UMM5F/E5?17J6k.<+a&i",
      "yong": "-7*-5t-3M-,U-,T-'T-$t-$+-!:{Oz!yCxcrlkUg{gAe{ceb{bzapaC`w`n`:[6XTU}M4LaGQ@}>x=9:p947:5T/{/i&p&l%)#S#8",
      "wa": "-7)-/n-,e-(/-'P-'&-&x-%h-%A-#y-#nu5tbt3sGnCije[ZaWUTq>.:;8h'V'D'>&A",
      "ka": "-7&-*r-'O-'M-'4-$u{g",
      "bao": "-7%-5h-21-/>-.e-.]-,!-+{-+s~ozPzOz@sBqBpcpMp$ohoee&d:[w[kPPP1P&M]614J2<0_.u.h*G",
      "huai": "-7#-',|mx^xIe_dC_:^oGhDX<25z",
      "ming": "-6x-0g-06-(|-'guEs&`aXxR@PhOFH<>0:7,8",
      "hen": "-6s-&p-!3eac6[0.:$y",
      "quan": "-6p-1H-/.-.#-,5-,#-%%}X}Q{4w5u:t;q[m?jRf`c0b_b%['Y`WKNxJ:I[H_GLFjD>?F>F:a5841/I/H/7.o.n.m.O)2&I%'",
      "tiao": "-6o-%Xr#pWmjmWh4cRZfSQRdQjOLO'NYK.Fo",
      "xing": "-6j-5.-1<-/U-&g|0{auft{t5qljAh`f*cxb>aZUYR/P4Nl>Z<u9d2d.N,L)@![",
      "kan": "-6g-4G-0r-/r-/]-,D|n{!zGyDlkl)k{b7^D]ELRG]E2CeCc",
      "lai": "-6d-5Y-5<-%_u!t2lil_h$eSeHU2NUJiJ0DT=&<)6r5v5r,i)k%R#P#J#?",
      "kua": "-6a-'.{iwJuGcGZiQcI:",
      "gong": "-6`-6N-1D-1?-,~-+g-+d-)w-%}-$)yepTpQj<j8i2g4f{c1a*``[)[(T^N`L?@V7U1u*R",
      "mi": "-6[-0v-0n-0b-'9-#'yzqZpmpDp9m6i:i.hrfifafAcb^dVnU_TyTON2HIG$E6E+@L?{?Z?C>G<9;H9<8o6o6l5n5G1z0B,a+T'h",
      "an": "-6W-5J-4<-2D-*P-*J-')-%e-$x{b{&z_sYpwn@n8mXm:hXg~ZnXNQ.PnL'L&A1>M.g*w$V",
      "lu": "-6V-33-1C-.H-,N-,<-*q-*o-!N~q~_};|G|5yVyUxMtVmChGgZgFf9f8^7XzW)V)UzUAU/O{MpLeJ#G&FyEuDvDaARAM>s<K<;;p9:9'8.7L6@6)4p1m0T+W+H)Y(Q()'m&n!%",
      "mou": "-6U-,c-)x-($-&azLcVTTMEKs/a",
      "cun": "-6J-/Z-(~x'qLocdn[%Nj7^!O",
      "lv": "-6F-63-4#-38-23-,'-*x-(t-(F-&G|+nTnSnPl(e^`A`5ZcZ*YwS.K*HTDsDoAYA)9M6D3A0]+I",
      "zhen": "-6C-67-4)},ygybuMs*p5ndiUiRi<fc[nZlZGXWWOSTR*OJN$MhLVKjK_IHHuHLHAG_FVBb=~:y:$8$72,+*_*^({(q'8&Z&<%9",
      "ce": "-6B-4*-1%-1#-*=-*2wZgrc!aY_jZ}TQLl={;O&8",
      "chai": "-6?-2@-$h~?j3[UL}.i$'",
      "nong": "-6=-2S-0p-&b-!Eg.ZmZAElDG=s7#0o#W",
      "hou": "-6:-5*-*8-({-(L-(K-'p-$l|%zQi=e]>b._,A$C",
      "jiong": "-69-3'-1.-1$-0}}z|K{;]~]}?M=J7e4t4I3c2T2S1W1.",
      "tui": "-6.-6(-3&y'tmo$ftfodrY(F>24",
      "nan": "-6+-*|-$r~'~#v=tzstrb^e[sXfPqN*M6H}:d29&a&?",
      "xiao": "-6*-5v-5R-3a-.x-,d-'j-'1-&l-&P-$}-$1-#D-#?-#&-!|-!v~c~J~CuUtHqGpPpJoKlGh/fFcJ_iX;V:TPT/SoSnQVQ'P;MiMaLOK+DOCYCLBAB4>B===8<Z8E6!5+5*4,3L2&1L,o+r+o$t$o!i!b",
      "bian": "-6)-+9-*u-)UwzmKg1eAdVaX^#]=XSR#@A@@4Z26/o,@+`+,':%8",
      "pian": "-6)-4P}ysI^#I=Ht/y/0,@+`(j((",
      "cu": "-6%-+$-!csFegd(_YEsB},X$I#z!H",
      "e": "-6$-4K-2k-+j-*T-*N-(_-(E-(*-'A-')-&X-!j-!A}s{nzhzIzCv$uzuBtotUtTtSn]n)mGm'm&l+gnc'bOata?^+]DWsWdWNUbTMM}DZCEC(>M=5;9*7)`$V$O!r",
      "guang": "-5~-2}-1h-'@{~uIhXhTgOZsVKL+>28)5/4b4_4^3s.d+Y*U",
      "ku": "-5}-/3-&Q-$6~R}PzrhDh+gN]dZiZ5OPMgL!I%3N.>$9",
      "jun": "-5{-2T-0q-(n-(G|u{NuHollq_;Z3U5TzQPKMJH@F=l6V3G1B*1&'!Q!K!J",
      "zu": "-5w-5?-+1-+$-&S-%rlYlAd(S#M1Ix0'*e",
      "hun": "-5s-4o}_t9t'o9dMaz`oYDR?Q~JYJRBf=u<d<(;=:t:`9{3O36*9)G",
      "su": "-5n-3x-2c-$*~9}/{3y}y|wjs#p@a(a'_lVnKKJ2H;G(F~F8DYBo?2>>=4:&9z828&+F*L(F&r",
      "lia": "-5[-5>",
      "pai": "-5Q-&sg9eP[NY?JU?p>+;j;8/t.w,q",
      "biao": "-5O-36-2/yJtIryi%f!VfNhLjFzEG<.9C66511o0c,k#|",
      "fei": "-5M-.m-+M-*4-(i-%8w%vZt@t?nXh8gpgPbH]xSdQxQ%P:OPNLLxJVH5FOF)Di?W<C;x6K.`.H,p%3$]#a",
      "bei": "-5I-57-4B-4%-3b-37-,Y-+a-+%-(1-&:w|qIh#bdbGajaR`$X3RMNLNKLyK^K5JUJSIq3:/S/).R,y*/)T!@",
      "dao": "-52-/g-/e-/6-)E-#K-!5xSo_oLmvlvk;k:jiiKhld{b=YoYcWqUZO'JkIaGZEIE?AA3;0g'd!+!&",
      "tan": "-51-3^-3/-2R-)4-%$-#P-#I-!n-!m|o|a|U{'xxxsxaxKtAfTfOfEdtcfb$_p_W_OY/W=UDTuR5PJP=HYF5EnCUAk:w9H7|7{7.5E4K1G(3$}$^#~#7",
      "chui": "-5/-(O}T|9{Va|Y[WcKtJ6ItGl4o",
      "kong": "-4{{+qPlfcNb;Y)Iv<n",
      "juan": "-4z-,h-,P-,0-*[-((}X}Q{Iw<w5uVtut;jpj`j%iYf`byb%`4Z%Y`OGL%K@J:I[=2<^3M.!+j'C",
      "luo": "-4r-1y-.|-'4-%(~<~/o^mHZ*YbW(U@U3U/T{TlOvI^D9>q>O>N;y8^6F3{/(,T+P*M#y#5!Y",
      "song": "-4q-3I-0D-)'u8pulDk^kOgydYdAb`a3a$`D_MZ#XXW0N<N:MmM>K%J`HyEF<B9!6v",
      "leng": "-4p-0T-%uzdz,lQa1J5I!",
      "ben": "-4l-$E|q|pwSwPw.w(YXV8O3LQKXI4?B;|8]4v/8&=",
      "cai": "-4h-4,-%N{%tLp?f#]t]qY0NkJZA},Y",
      "ying": "-4`-3.-%1-$>-#*-!K~Oz%x#s{sXs9s%quqqq_q%kcj[jWhCgDexdha/_AVwV_U0U&R]R.Q:PwO?MHKpK]J{HvHdFbDMDI=_;E:U:K9d9O8K8F6j6i6N6=6&5~5o5j5M5A2w2r2_1x1)0b*:)*(y(S'i'5'%#j#;!B!;",
      "ruan": "-4[zJxQsiVWOUE0):'}",
      "chun": "-4Y-&7sda^RPR(PlOONDIBGrFQE(=T<,:[9N8u/6)C",
      "ruo": "-4S-)[sskPf]Z:YUI8;y3'0^",
      "dang": "-4M-2P-1V-/k-!1}*{fx]swpkl6kdf:aAZUUsTpKiEYD5@|8:7E5D*;(J(6'?%}",
      "huang": "-4@-1L-/w-$PzDz.xtw&s[pEl9jBi0e@clcQa_a#`dXTQgQfPBOEHbH7D{@9:x9i8)4:2c2.1J0X+w)((E#i!}!g!Z",
      "duan": "-4+-.Uz+s`SFS<IMBIB62j)0",
      "ou": "-4(-+=-+7-(q-(K-(3-#;yTd?`EDpC}CSBJB8?l8s1Y'M'0",
      "zan": "-4$-2.-1x-1o-'2-$c-!e~:p>[$XOVUU8U*TwR1Q&PYKrEy6E5K't'k'c",
      "za": "-4$-+Z-'b-'X-'2-$c-!c~B~:~5i}]s[$NyKr?r?a",
      "lou": "-4#-38-.}-$7-#ByMu4tRo{n[kjkEg_`5X)W'HaG#:O9&8~1i'2$5#o#n",
      "sou": "-3z-0J-)Q-)N-#z-#R-#QgsghZ#YvWlW>W0V:U`UBJ/DgCn:#,5#s",
      "yuan": "-3u-1n-1)-0h-.z-*3-*1-)y-(0-&^-$Y-!<}{}t}Z}R}N}M}D{t{_yawlv6v(sSs:s)qhpep<f[cwbyb,`qXoX8NNJ=HxH>H0ErDk@/<m<*;{;v;r;g:e:F:D5]04,M,6)/",
      "rong": "-3t-3`-0u|ts8s'qzp~pFlwkokcjj^WX#WwOyLmHGH.H&GQAsAU9|6%3T1v0b.2)#",
      "jiang": "-3p-2a-,7-+Y-+Wz/xew~w+vvvru]oToSkMfrfWfVfSfCVyVeKdGDEoDeBQ@U>P>#;L9A8M.|,&&B%y%n%m",
      "bang": "-3n{^ypiNi5h~hme|Z?YrWvS2KEJTJSH@=j/m++",
      "shan": "-3h-3)-2R-/F-/<-.a-.E-*~-$q-$F-#H}'{Gy+y*ulubr2nDj|i(f+]zZ;Y3XuXsWaVhV?UySvQ8NrL|LlIVFSEhCI@`7|7p7O5F4B2Z211~.4*b%U%1",
      "que": "-3f-*_-*W{Pyty$lgbNa+`KX!T8T.JBH$@j4e0|)O#q!N",
      "nuo": "-3Q-1w-$ftxa6_#_!ZLXnWoWbWLK0HJF2Am",
      "can": "-3P-2F-)l-)k-)j-)i-$D-#H~:r(q3amah`W`V`U_[XsVqVhO_BtBg;/784z1!0L(9",
      "lei": "-3O-24-1t-,J-)q-#1|(z0xOx?rrU|U;G'E]DyDxD/?$>I=+<F5X'z%u$)#Q",
      "zao": "-3L-/h-&(-%w-$5-!@`JRfMsLkK>JO7F5&2>1#(](7#&#%",
      "cao": "-3L-#GnGk@`v`k`^_DVAUqOgOfG:8x",
      "ao": "-3H-/n-*&-#X-#W|H|4xnxkv}vyvwsDs2rZmxmakAjnga`O_@]I]![DVuUeTBM*K=?>9;7M741m1^0Z,!+~(Y",
      "cou": "-3D-0:Hl;1",
      "chuang": "-3B-/b-/K-/5-.s-.i-.L-$T-!dhvhMd=`|W7O<F+0#/r/k%D$+",
      "piao": "-36-.D-,;-#Crteze7`]RuO*Br9/.v'Z!X",
      "man": "-32{KyKujtlrpn^i'bc`M`=VrOdG9Fs:V9P928b7<701V,(",
      "zun": "-3%-!ix}oPk&[%YzVILEFU5k",
      "deng": "-2z-/t-!VxwrHk(_v^@E$7d6/5.1A(O#,",
      "tie": "-2s-'yigd+",
      "seng": "-2o",
      "zhuang": "-2hx9x8x2w)vWv@tphvhShE^a^`^_VDKcKBG6:`8X3H.e.Z",
      "min": "-2`-0Q-/E-,X-(&|1uumYl]dfded8bJaWaG`S_`[]YhTUTIT(RSRRPzAH>|;z;+:t8(+1*c)o)j)=$R!D",
      "sai": "-2V-#b-#)-!/yod%a2XaAxAb",
      "tai": "-2B-0_-)=}e|Mw[wXwOvzqvqCdodQdB`e[pU]SpR]MeE>@f@D@C>{:=4G4F1$*f",
      "lan": "-2?-1@-)}-%P-!'~3|hx`xXt(qgqaqUmwkwhgb)_8_'^p[5X/UXU(TmSaS_PpLbHXDDD2D1=^9L8i7K6W5`5W5=5<46121%0n0d0I0@0>($'j",
      "meng": "-2;-0k-,Lwaw`qEo2hnh*_._+^qXtUaP)O9K$F;EAANAF:A6h,Z+]'/&X#B!#",
      "qiong": "-28-*fr.pza]`!K}F(3(3%2L1}*))J(G's'f",
      "lie": "-25-0N-/O-,z-,w-,`-'<-&G{D{CuDjaj=djZeZ_YiUEL;JMA{>_=p403f2A1$0a0[.x,h,V+k+[",
      "teng": "-2%i+9]8r1e%6%&",
      "long": "-2#-'J-&]~^|7|6xHxGo2n=k6j_j^g.e([9U.QmOxO8LgKDGYDU>t:g9T9%5w0N*Z'n#f",
      "rang": "-1}-,$~Nx[xC^mU$5b0K+S'X",
      "xiong": "-1m-1j-/q-+v-+p-&zwsdLc?Sy@;>42w2r2#2!",
      "chong": "-1l-0Y-#L{*p`oflelde0dc`+_dX<W8?z=K=98X0F*@%&",
      "dui": "-1g-1e-1`-%L|$zlymobo]oMcc_n_m_*TET>T2NB6[6G5|5u$P",
      "rui": "-1g-1e-1`-)LxFas]0M~KVF.@G)'&t",
      "ke": "-1f-/*-.w-,]-,R-+;-)>-'o-'0-$!|Dzqx4u#p^oUmomIkvknjqc4bra<a;XJWsT4M%J1G|F}CcBCBBA/;u;G:>6U4U0!/N//*j%>$O",
      "tu": "-1c-1]-0H-/o-(y-&3-%?}n}c}J}I}A}?zezZyvxipvnUlskikFh.gVeVc}bsZ.YYX@W2K?EL@R=C=::r7u(i$r$>",
      "nei": "-1I-1*-&TtvA<A;=H",
      "liu": "-1C-/N-.8~fy^s5qik`gl^vW9S4S*R}L~LpKnKQH'FHF#>(=w::8Q7V631r1[*a)~)%(v(?&S&>&%%r$(#d",
      "shou": "-13-)`-)V-%l-!o{ox)x&pxo[]v]uYITcTN<t.1+n+X$e$&",
      "ran": "-1+-1&-(!-##umsKMBF'2y1Z1F*i",
      "gang": "-1'-0^-/L-.gzjz4mzmplT^a^`^_]fYKWDNZJEGe;L2z2v/W/:.a%Z",
      "gua": "-0~-/8-.r-.S-.A-*m-)F-(/-'s-'&-%0|Ooz[/ZuY6LSK[C`2='a",
      "zui": "-0i-*6-'d-#U-!w-!*k<jmQ=O`OGLDG[F]EgEbD@6a(%",
      "qia": "-0M-+;-*r-'6})m0iZc.a<[j[7YAXJUhBq>,",
      "mei": "-0I~j|vz>yRv#sks]sTs4r<p/l&k|e)[bZBU%S3R&M|LoKFHzHjGgDrBfB0B/?~?o?d=I;?;7;32Q2J11,=+$*0)D$w",
      "zhun": "-0E-05-%L}5zwpnnFdPRQ<,:@",
      "du": "-0+-.`-+B-)p-#0z<vKv1uTqjh1SsQ4PvN_IcDlBRBNB+=(;n;Z6</s/h/5.y..+i)I'y!E",
      "kai": "-/x-/v-/%-.M-,I-#J{ey~w0n3kag2dEc#aB`y`r`GXCPfHfCxCu6U4m3}",
      "hua": "-/T-.>-+b-+(-(_-(.-&h-#%{@wGuWs}s|rJrDlaWTV}V+NAMvKfIgGKFX9a7c,7&]&+%~",
      "bie": "-/A-/;fGe2`#M'M!$!#I",
      "pao": "-/>-+i-'^~o|2w=hA]$[P?.4J4H3d06.M'^%A!S",
      "geng": "-/7-&A{TzHlrh=ZIOlK4IX=X2p&M",
      "shua": "-//-%j",
      "cuo": "-.y-.p-*5wukWkSh!ZKY&WuV4(o$j$'",
      "kei": "-.woU",
      "la": "-.v-%3-$n~L|8[RXFXEWnUEU2R`MOI6DT:T0['o$A",
      "pou": "-.l-'_-&[{]twtO]+]&Z+YGJS/<",
      "tuan": "-.I~!}~}K}HyPy&f7`>[}XIVmGLE;;.:m8t2[,F%v%p",
      "zuan": "-.)XOTt",
      "keng": "-,x-([|t|kvIZCXlVgBF/C",
      "gao": "-,Z-(I-(>wRlpWjNHGxGwGdG>E~E3Dm,)!y!t",
      "lang": "-,V-&J-$~{Jy[r{llgiSeOIOHO;KRHHG4Cp=[3Y,z*%(s",
      "weng": "-,@-#oyxv{kfU!Pd9o'N'&",
      "tao": "-+m-)E-'+-%DwPwMw*r}i/fl`j[oYBWXL,JkGtE?><=)<t<H9^6_(w",
      "nao": "-+`-'n{cz[wqt.rzq8l{jyjSd0b~bPad_QZVW9VOKkFJ<J,D+Z+Q),",
      "zang": "-+Oynw)g(/~",
      "suan": "-+C,{$n",
      "nian": "-+3-&i-%b{9uOhdg3dNbTa~[SYVVHV,U7HL=;<0:C2q",
      "shuai": "-*xixiWW3+I&o",
      "mang": "-*<-)*-&Zx(u(o2h*dkb|OENdNSAF@c=i8`/[/D.$$q",
      "rou": "-)uslpsXdMAHc;d2K)>'v",
      "cen": "-)l-)k-)j-)i{Un#kH@?=1",
      "shuang": "-)byOqeq^`NDB>t8R5w5^0&",
      "po": "-)8-&M-#6~]|ZvztMoZmlmZg9W]TXR+O*E%?E>q>o>D;*:J8;6F3v,9*l!`",
      "a": "-(s-'o-%O-$0",
      "tun": "-(k-(7-%L-!`}}|snFhNdP_mRQPFOC@x=335",
      "hang": "-([{dwSvIj)dGS8NML/@.",
      "shun": "-(ZHnF?",
      "ne": "-(R-(8-(%-&T]0%a",
      "chuo": "-(Q-&@-%=~Hu!t~t.ssqVa|^2Z}UuCC<q<J",
      "wai": "-(/-'&-$gwml7C95z",
      "guo": "-(/-'&-%)-$e-#<~.}r}k}f}d}a}U{<zTy>lMi@i$fDf@b1`Y_4XyW6TMMzJ$I:GOD{=#<W;U9#7!,c$<",
      "qiang": "-(,-%f-%M-$.-#[y=y3xmrXr0k>gKfVfSfC^P^N^>[zWQW!VySKMlIvGkFdEJ:)8{4[1s/|/z,f,.*{(p%m",
      "pen": "-('-$E-$=-!6CN;'6}'Q!=",
      "pin": "-&~~Yuatnrvq{[AZ{H]@_/c+!)r",
      "ha": "-&wvz",
      "yo": "-&`-%c-$B",
      "o": "-&X-$a-!H-!%",
      "n": "-&)-#a",
      "huan": "-%v-$Z-$Y~G}D{_zWw@w2r.q[pYp0okm8l!h]bVaH_I^iYpXQUnU1KyK2GBD%CPCB>1=c<~;c8V7D734/3>2I.[.;,3+R*})9(1'b$d$:",
      "ken": "-%V{qxjc*_CX~*I",
      "chuai": "-%=XIW}Ch",
      "pa": "-%/vLisihd.]oX|NC@r8608)P#!",
      "se": "-%,-$,yogK_<Z}VnUrLTGJC5C3>W<x;q7h7g6|6t60)p)&(0#r",
      "re": "-$fa[YU;y3g1X",
      "sun": "-$DqKq9]EYsW{WzW;H1Gv.',:",
      "hei": "-#h-!l7r",
      "dia": "-#^",
      "de": "-#5}0hBeQe5e1c)bFakR[JW<_##",
      "dei": "-#5eQ",
      "kuo": "-!`g`]W[:[/ZsUI8U6L",
      "ceng": "-!_ntnQk4OcObF*",
      "ca": "~s~B[UUWU:",
      "zeng": "~7y5y._}OcObF*1R(M'*",
      "nin": "~(c^bQ[*",
      "kun": "}q|Wzoz`x/x*t'l[lZbwZ0RHQMJv=B8C371U,e)_(g",
      "qun": "}jwxpRl~iPCT",
      "ri": "}iRjA=",
      "lve": "}Go^Y1&2&0",
      "zhui": "|[y0w#t]aaXIIt?s'<%|",
      "sao": "zus+`k_D]UYNXrWtK(AP:8$4",
      "en": "wBmBc5WF20",
      "zou": "w3s>Y%X`W~J/J.Hl",
      "nv": "vkc7OM@!",
      "nuan": "vcPo;`:m2X2W",
      "shuo": "v]a'WhT'S|OKGnCn>>470W+p",
      "niu": "v?q=dKd0]S]![DN?@8@!4u/e/d.W",
      "rao": "u2rA]PU?KkFJ",
      "niang": "t|r&qb",
      "shui": "t]iTZMYuA$A#@{=.=*",
      "nve": "t)%S$%",
      "nen": "sirarYc^",
      "niao": "s!r+qsnwFq9x",
      "kuan": "pBp#ooK)CoCfCd",
      "cuan": "jPV'U*T~TwDtD7BU@o6E5K1S0<",
      "te": "dsdr`R/F/9",
      "zen": "d5VU",
      "zei": "^H",
      "den": "][]C",
      "zhua": "],ZYV#ER0:09",
      "shuan": "[&L^GL<s",
      "zhuai": "Zz",
      "nou": "WoGpE0+^",
      "shai": "W<TsQWOt",
      "sen": "J8ISGI",
      "run": "FE<{8'",
      "ei": "Cl",
      "chua": "Ci"
    }
  };
  let DB = {
    sToC: {},
    cToS: {}
  };
  let sToC = DB.sToC, cToS = DB.cToS, ungroup = /-?.{2}/g, rg = /^-/, fromX = (str) => {
    let result = 0, temp = 1;
    for (let idx = str.length; idx--; ) {
      result += temp * chars.indexOf(str.charAt(idx));
      temp *= 91;
    }
    return result;
  }, fn = (a, f) => {
    let p, gs, i, ch, num;
    for (p in a) {
      if (a.hasOwnProperty(p)) {
        gs = a[p].match(ungroup);
        for (i = 0; i < gs.length; i++) {
          ch = gs[i].replace(rg, "#");
          num = fromX(ch);
          ch = String.fromCharCode(base + middle + (f ? -num : num));
          if (sToC.hasOwnProperty(p)) {
            sToC[p] += ch;
          } else {
            sToC[p] = ch;
          }
          if (cToS.hasOwnProperty(ch)) {
            cToS[ch] += COMA + p;
          } else {
            cToS[ch] = p;
          }
        }
      }
    }
  };
  fn(SDB.m, 1);
  fn(SDB.a);
  SDB = null;
  var Pinyin = {
    getSpell(chars2, polyphone, spliter) {
      let cToS2 = DB.cToS;
      let res = [], pp = typeof polyphone == "function";
      chars2 = String(chars2).split(EMPTY);
      for (let i = 0, ch, ss; i < chars2.length; i++) {
        ch = chars2[i];
        if (cToS2.hasOwnProperty(ch)) {
          ss = cToS2[ch];
          if (~ss.indexOf(COMA)) {
            ss = ss.split(COMA);
            ss = pp ? polyphone(ch, ss) : "[" + ss + "]";
            res.push(ss);
          } else {
            res.push(ss);
          }
        } else {
          res.push(ch);
        }
      }
      return res.join(typeof spliter === "string" ? spliter : COMA);
    },
    getChars(spell) {
      let sToC2 = DB.sToC;
      if (sToC2.hasOwnProperty(spell)) {
        return sToC2[spell].split(EMPTY);
      }
      return [];
    }
  };
  const _sfc_main$4 = {
    __name: "contacts",
    setup(__props) {
      const data = vue.reactive({
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
      } = vue.toRefs(data);
      vue.onMounted(() => {
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
        uni.pageScrollTo({
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
          let fristName = Pinyin.getSpell(arr[i].name, function(charactor, spell) {
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
        const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "contacts" }, [
          vue.createElementVNode("view", { class: "contacts-title" }, [
            vue.createElementVNode("view", {
              style: vue.normalizeStyle({ color: vue.unref(isChooseFriend) ? "#f0f0f0" : "#999" }),
              onClick: chooseFriend
            }, "\u597D\u53CB", 4),
            vue.createElementVNode("view", {
              style: vue.normalizeStyle({ color: vue.unref(isChooseGroup) ? "#f0f0f0" : "#999" }),
              onClick: chooseGroup
            }, "\u7FA4\u804A", 4)
          ]),
          vue.createCommentVNode(" \u641C\u7D22 "),
          vue.createElementVNode("view", { class: "input-search" }, [
            vue.createVNode(_component_uni_easyinput, {
              prefixIcon: "search",
              modelValue: vue.unref(params),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(params) ? params.value = $event : null),
              styles: { color: "#f0f0f0", borderColor: "#666" }
            }, null, 8, ["modelValue"])
          ]),
          vue.createCommentVNode(" \u597D\u53CB\u5217\u8868 "),
          vue.withDirectives(vue.createElementVNode("view", { class: "friend-list" }, [
            vue.createCommentVNode(" \u5DE6\u4FA7\u901A\u8BAF\u5F55 "),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(friends), (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "items",
                key: index,
                id: item.id
              }, [
                vue.createCommentVNode(' <view class="items-title">{{ item.letter }}</view> '),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.datas, (cell, i) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "items-datas",
                    key: i
                  }, [
                    vue.createElementVNode("view", { class: "item-avatar" }, [
                      vue.createElementVNode("image", {
                        class: "img-avatar",
                        src: item.url ? item.url : "/static/avatar.jpg",
                        mode: ""
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode("view", { class: "item-name" }, vue.toDisplayString(cell.name), 1)
                  ]);
                }), 128))
              ], 8, ["id"]);
            }), 128)),
            vue.createCommentVNode(" \u53F3\u4FA7\u5B57\u6BCD\u5BFC\u822A\u6761 "),
            vue.createElementVNode("view", { class: "letter-nav" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(letters), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  key: index,
                  onClick: ($event) => toSelectIndex(item)
                }, vue.toDisplayString(item), 9, ["onClick"]);
              }), 128))
            ])
          ], 512), [
            [vue.vShow, vue.unref(isChooseFriend)]
          ]),
          vue.createCommentVNode(" \u7FA4\u804A\u5217\u8868 "),
          vue.withDirectives(vue.createElementVNode("view", { class: "group-list" }, [
            vue.createCommentVNode(" \u5DE6\u4FA7\u901A\u8BAF\u5F55 "),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(groups), (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "group-items",
                key: index,
                id: item.id
              }, [
                vue.createElementVNode("view", { class: "item-avatar" }, [
                  vue.createElementVNode("image", {
                    class: "img-avatar",
                    src: item.url ? item.url : "/static/avatar.jpg",
                    mode: ""
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "group-item-name" }, vue.toDisplayString(item.name), 1)
              ], 8, ["id"]);
            }), 128))
          ], 512), [
            [vue.vShow, vue.unref(isChooseGroup)]
          ])
        ]);
      };
    }
  };
  var PagesContactsContacts = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4ed3d3e6"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/pages/contacts/contacts.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(options);
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn2) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn2);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn2 === "function" && fn2();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn2) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn2 === "function" && fn2();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$3 = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:139", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config);
        return this;
      },
      run(fn2) {
        if (!this.animation)
          return;
        this.animation.run(fn2);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$2 = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      isMaskClick: {
        type: Boolean,
        default: null
      },
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          clearTimeout(this.timer);
          this.showPopup = false;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:280", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 2)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-7c43d41b"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const user = vue.ref({
    email: "",
    headUrl: "",
    phone: "",
    userId: "",
    username: ""
  });
  function set_user(data) {
    user.value = data;
    uni.setStorageSync("user", data);
  }
  function get_user() {
    return uni.getStorageSync("user");
  }
  function remove_token() {
    uni.removeStorageSync("token");
  }
  function randomWord(randomFlag, min, max) {
    let str = "";
    let range = min;
    let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let pos = void 0;
    if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min;
    }
    for (let i = 0; i < range; i++) {
      pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
    }
    return str;
  }
  const version = "3.7.3";
  const VERSION = version;
  const _hasatob = typeof atob === "function";
  const _hasbtoa = typeof btoa === "function";
  const _hasBuffer = typeof Buffer === "function";
  const _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
  const _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
  const b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  const b64chs = Array.prototype.slice.call(b64ch);
  const b64tab = ((a) => {
    let tab = {};
    a.forEach((c, i) => tab[c] = i);
    return tab;
  })(b64chs);
  const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
  const _fromCC = String.fromCharCode.bind(String);
  const _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it, fn2 = (x) => x) => new Uint8Array(Array.prototype.slice.call(it, 0).map(fn2));
  const _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
  const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, "");
  const btoaPolyfill = (bin) => {
    let u32, c0, c1, c2, asc = "";
    const pad = bin.length % 3;
    for (let i = 0; i < bin.length; ) {
      if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255)
        throw new TypeError("invalid character found");
      u32 = c0 << 16 | c1 << 8 | c2;
      asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
  };
  const _btoa = _hasbtoa ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
  const _fromUint8Array = _hasBuffer ? (u8a) => Buffer.from(u8a).toString("base64") : (u8a) => {
    const maxargs = 4096;
    let strs = [];
    for (let i = 0, l = u8a.length; i < l; i += maxargs) {
      strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
    }
    return _btoa(strs.join(""));
  };
  const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
  const cb_utob = (c) => {
    if (c.length < 2) {
      var cc = c.charCodeAt(0);
      return cc < 128 ? c : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
    } else {
      var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
      return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
    }
  };
  const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  const utob = (u) => u.replace(re_utob, cb_utob);
  const _encode = _hasBuffer ? (s) => Buffer.from(s, "utf8").toString("base64") : _TE ? (s) => _fromUint8Array(_TE.encode(s)) : (s) => _btoa(utob(s));
  const encode = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
  const encodeURI = (src) => encode(src, true);
  const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
  const cb_btou = (cccc) => {
    switch (cccc.length) {
      case 4:
        var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
        return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
      case 3:
        return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
      default:
        return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
    }
  };
  const btou = (b) => b.replace(re_btou, cb_btou);
  const atobPolyfill = (asc) => {
    asc = asc.replace(/\s+/g, "");
    if (!b64re.test(asc))
      throw new TypeError("malformed base64.");
    asc += "==".slice(2 - (asc.length & 3));
    let u24, bin = "", r1, r2;
    for (let i = 0; i < asc.length; ) {
      u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
      bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
  };
  const _atob = _hasatob ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
  const _toUint8Array = _hasBuffer ? (a) => _U8Afrom(Buffer.from(a, "base64")) : (a) => _U8Afrom(_atob(a), (c) => c.charCodeAt(0));
  const toUint8Array = (a) => _toUint8Array(_unURI(a));
  const _decode = _hasBuffer ? (a) => Buffer.from(a, "base64").toString("utf8") : _TD ? (a) => _TD.decode(_toUint8Array(a)) : (a) => btou(_atob(a));
  const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));
  const decode = (src) => _decode(_unURI(src));
  const isValid = (src) => {
    if (typeof src !== "string")
      return false;
    const s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
  };
  const _noEnum = (v) => {
    return {
      value: v,
      enumerable: false,
      writable: true,
      configurable: true
    };
  };
  const extendString = function() {
    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
    _add("fromBase64", function() {
      return decode(this);
    });
    _add("toBase64", function(urlsafe) {
      return encode(this, urlsafe);
    });
    _add("toBase64URI", function() {
      return encode(this, true);
    });
    _add("toBase64URL", function() {
      return encode(this, true);
    });
    _add("toUint8Array", function() {
      return toUint8Array(this);
    });
  };
  const extendUint8Array = function() {
    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add("toBase64", function(urlsafe) {
      return fromUint8Array(this, urlsafe);
    });
    _add("toBase64URI", function() {
      return fromUint8Array(this, true);
    });
    _add("toBase64URL", function() {
      return fromUint8Array(this, true);
    });
  };
  const extendBuiltins = () => {
    extendString();
    extendUint8Array();
  };
  const gBase64 = {
    version,
    VERSION,
    atob: _atob,
    atobPolyfill,
    btoa: _btoa,
    btoaPolyfill,
    fromBase64: decode,
    toBase64: encode,
    encode,
    encodeURI,
    encodeURL: encodeURI,
    utob,
    btou,
    decode,
    isValid,
    fromUint8Array,
    toUint8Array,
    extendString,
    extendUint8Array,
    extendBuiltins
  };
  function safe_add(x, y) {
    var lsw = (x & 65535) + (y & 65535);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  }
  function rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  function cmn(q, a, b, x, s, t) {
    return safe_add(rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
  }
  function ff(a, b, c, d, x, s, t) {
    return cmn(b & c | ~b & d, a, b, x, s, t);
  }
  function gg(a, b, c, d, x, s, t) {
    return cmn(b & d | c & ~d, a, b, x, s, t);
  }
  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  function coreMD5(x) {
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = ff(c, d, a, b, x[i + 10], 17, -42063);
      b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = hh(a, b, c, d, x[i + 5], 4, -378558);
      d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
    return [a, b, c, d];
  }
  function binl2hex(binarray) {
    var hex_tab = "0123456789abcdef";
    var str = "";
    for (var i = 0; i < binarray.length * 4; i++) {
      str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 15);
    }
    return str;
  }
  function str2binl(str) {
    var nblk = (str.length + 8 >> 6) + 1;
    var blks = new Array(nblk * 16);
    for (var i = 0; i < nblk * 16; i++)
      blks[i] = 0;
    for (var i = 0; i < str.length; i++)
      blks[i >> 2] |= (str.charCodeAt(i) & 255) << i % 4 * 8;
    blks[i >> 2] |= 128 << i % 4 * 8;
    blks[nblk * 16 - 2] = str.length * 8;
    return blks;
  }
  function hexMD5(str) {
    return binl2hex(coreMD5(str2binl(str)));
  }
  const baseUrl$1 = "https://www.decunt.com/prod-api";
  var request = ({
    url,
    method,
    params
  }) => {
    const token = uni.getStorageSync("token");
    const time = parseInt(new Date().getTime()) + "";
    const sign = gBase64.encode(time);
    const signPrefix = sign.substring(0, 9);
    const signSuffix = sign.substring(9, 18);
    const header = {
      sign: time,
      current: hexMD5(time + "8a639fd7a14640958ac15600896f537d"),
      token: token ? gBase64.encode(signPrefix + token + signSuffix) : "",
      traceId: randomWord(false, 32)
    };
    uni.showLoading({
      title: "\u52A0\u8F7D\u4E2D..."
    });
    return new Promise((resolve, reject) => {
      uni.request({
        url: baseUrl$1 + url,
        method,
        header,
        data: params,
        success(res) {
          if (res.data.code === 200) {
            resolve(res.data);
          } else {
            uni.showToast({
              title: res.data.msg,
              icon: "none"
            });
          }
        },
        fail(err) {
          uni.showToast({
            title: "\u8BF7\u6C42\u63A5\u53E3\u5931\u8D25\uFF01",
            icon: "none"
          });
          reject(err);
        },
        complete() {
          uni.hideLoading();
        }
      });
    });
  };
  const baseUrl = "https://www.decunt.com/prod-api";
  var upload = ({
    url,
    filePath
  }) => {
    const token = uni.getStorageSync("token");
    const time = parseInt(new Date().getTime()) + "";
    const sign = gBase64.encode(time);
    const signPrefix = sign.substring(0, 9);
    const signSuffix = sign.substring(9, 18);
    const header = {
      sign: time,
      current: hexMD5(time + "8a639fd7a14640958ac15600896f537d"),
      token: token ? gBase64.encode(signPrefix + token + signSuffix) : "",
      traceId: randomWord(false, 32)
    };
    return new Promise((resolve, reject) => {
      uni.uploadFile({
        url: baseUrl + url,
        filePath,
        name: "file",
        header,
        success(res) {
          let response = JSON.parse(res.data);
          if (response.code === 200) {
            resolve(response);
          } else {
            uni.showToast({
              title: response.msg,
              icon: "none"
            });
          }
        },
        fail(err) {
          uni.showToast({
            title: "\u8BF7\u6C42\u63A5\u53E3\u5931\u8D25\uFF01",
            icon: "none"
          });
          reject(err);
        }
      });
    });
  };
  function apiUpdateAvatar(filePath) {
    return upload({
      url: "/userCenter/uploadImg",
      filePath
    });
  }
  function apiFreshUser() {
    return request({
      url: "/app/refreshUserInfo",
      method: "GET"
    });
  }
  const _sfc_main$1 = {
    __name: "mine",
    setup(__props) {
      const user2 = vue.ref({});
      const imgUrl = vue.ref("");
      const ref_popup = vue.ref(null);
      function getUserInfo() {
        user2.value = get_user();
        let url = user2.value.headUrl;
        imgUrl.value = url ? `https://www.decunt.com/cover/user/headImg/${url}` : "";
      }
      getUserInfo();
      function editAvatar() {
        uni.chooseImage({
          count: 1,
          sizeType: ["original", "compressed"],
          success: (res) => {
            let filePath = res.tempFilePaths[0];
            updateAvatar(filePath);
          }
        });
      }
      function updateAvatar(filePath) {
        apiUpdateAvatar(filePath).then((res) => {
          apiFreshUser().then((response) => {
            set_user(response.data);
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
        remove_token();
        uni.reLaunch({
          url: "/pages/login/login"
        });
      }
      function cancel() {
        ref_popup.value.close();
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "mine" }, [
          vue.createElementVNode("view", { class: "title" }, "\u6211\u7684\u8D44\u6599"),
          vue.createCommentVNode(" \u5934\u50CF "),
          vue.createElementVNode("view", { class: "avatar" }, [
            vue.createElementVNode("image", {
              class: "img-avatar",
              src: imgUrl.value ? imgUrl.value : "/static/avatar.jpg",
              mode: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", {
            class: "edit-avatar",
            onClick: editAvatar
          }, [
            vue.createTextVNode(" \u4FEE\u6539\u5934\u50CF"),
            vue.createVNode(_component_uni_icons, {
              type: "right",
              color: "#888",
              size: "20"
            })
          ]),
          vue.createCommentVNode(" \u8D44\u6599 "),
          vue.createElementVNode("view", { class: "info" }, [
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("text", { class: "item-label" }, "\u6211\u7684\u6635\u79F0"),
              vue.createElementVNode("text", null, vue.toDisplayString(user2.value.username || ""), 1)
            ]),
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("text", { class: "item-label" }, "\u6211\u7684\u90AE\u7BB1"),
              vue.createElementVNode("text", null, vue.toDisplayString(user2.value.email || ""), 1)
            ]),
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("text", { class: "item-label" }, "\u6211\u7684\u624B\u673A\u53F7"),
              vue.createElementVNode("text", null, vue.toDisplayString(user2.value.phone || ""), 1)
            ])
          ]),
          vue.createCommentVNode(" \u9000\u51FA\u767B\u5F55 "),
          vue.createElementVNode("view", {
            class: "logout",
            onClick: logout
          }, "\u9000\u51FA\u767B\u5F55"),
          vue.createCommentVNode(" \u9000\u51FA\u767B\u5F55\u5F39\u6846 "),
          vue.createVNode(_component_uni_popup, {
            ref_key: "ref_popup",
            ref: ref_popup,
            "background-color": "#473980"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "popup-content" }, [
                vue.createElementVNode("view", {
                  class: "btn",
                  onClick: toLogout
                }, "\u9000\u51FA\u767B\u5F55"),
                vue.createElementVNode("view", { class: "line" }),
                vue.createElementVNode("view", {
                  class: "btn",
                  onClick: cancel
                }, "\u53D6\u6D88")
              ])
            ]),
            _: 1
          }, 512)
        ]);
      };
    }
  };
  var PagesMineMine = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dcbcfe34"], ["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/pages/mine/mine.vue"]]);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/contacts/contacts", PagesContactsContacts);
  __definePage("pages/mine/mine", PagesMineMine);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/liwen/Documents/HBuilderProjects/Demo/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
