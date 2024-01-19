(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ 33:
/*!*********************************************************************************************!*\
  !*** /Users/wangyongju/Documents/个人资料/seat-canvas/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ 34));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 34:
/*!**************************************************************************!*\
  !*** /Users/wangyongju/Documents/个人资料/seat-canvas/pages/index/index.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57280228&scoped=true& */ 35);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 37);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=57280228&lang=scss&scoped=true& */ 52);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57280228",
  null,
  false,
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 35:
/*!*********************************************************************************************************************!*\
  !*** /Users/wangyongju/Documents/个人资料/seat-canvas/pages/index/index.vue?vue&type=template&id=57280228&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=57280228&scoped=true& */ 36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 36:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wangyongju/Documents/个人资料/seat-canvas/pages/index/index.vue?vue&type=template&id=57280228&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 37:
/*!***************************************************************************************************!*\
  !*** /Users/wangyongju/Documents/个人资料/seat-canvas/pages/index/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 38);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 38:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wangyongju/Documents/个人资料/seat-canvas/pages/index/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 39));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 41));
var _seatData = __webpack_require__(/*! ./seatData.js */ 42);
var _lodash = __webpack_require__(/*! lodash */ 43);
var _canvas = _interopRequireDefault(__webpack_require__(/*! ./utils/canvas.js */ 45));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var initialDistance = 0;
var seatInfoList = _seatData.seatInfo.datas;
var _default = {
  data: function data() {
    return {
      canvasContainerBox: {
        width: 700,
        height: 700
      },
      // 系统信息
      wrapperBox: {
        width: 750,
        height: 400
      },
      scaleBase: 1,
      baseXPoint: 0,
      baseYPoint: 0,
      canvasClass: null,
      maxScale: 8,
      minScale: 0.4,
      scaleStep: 0.2,
      ctx: null,
      scale: 1,
      preScale: 1,
      offset: {
        x: 0,
        y: 0
      },
      curOffset: {
        x: 0,
        y: 0
      },
      mousePos: {
        x: 0,
        y: 0
      },
      isLoading: true,
      widthRatio: 1,
      heightRatio: 1,
      startX: 0,
      startY: 0,
      canvasStyle: 'width: 400px; height: 400px; ',
      tempStyle: ' ',
      imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F35a87c2e-fd4b-4d46-92d8-58886d5caeea%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1705415354&t=743620e4a460804f9783ad939be4912d',
      seatPosition: '',
      isShowSeatImg: false,
      curSelectSeat: null,
      thumbnailImg: '',
      thumbnailInfo: {
        width: 200,
        height: 200,
        top: 0,
        left: 0,
        changeWidth: 0,
        changeHeight: 0
      },
      thumbnailStyle: '',
      isShowCanvas: false,
      visibleAreaStyle: '',
      canvasInitInfo: {
        width: 400,
        height: 400
      },
      thumbnailScale: 1,
      seatBoxHeight: 316,
      hasOffScreenCanvasData: false,
      isTouchMoving: false,
      canvasType: '',
      // 当前canvas类型 cache(缓存资源:伪离屏canvas) || target(目标)
      tempFilePath: '',
      isShowTemp: true,
      thumbnailTempImg: '',
      boundary: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      isCancelDraw: false,
      diffOffsetY: 0,
      // 画布与真实座位中间的差值
      mainStyle: ''
    };
  },
  onLoad: function onLoad() {},
  onReady: function onReady() {},
  mounted: function mounted() {
    var _this = this;
    uni.createSelectorQuery().select('.main-content').boundingClientRect(function (rect) {
      var width = parseInt(rect.width);
      var height = parseInt(rect.height);
      _this.canvasContainerBox = {
        width: width,
        height: height
      };
      console.log(_this.canvasContainerBox, '===canvasContainerBox');
      _this.mainStyle = "height: ".concat(height, "px;");
      var systemInfo = uni.getSystemInfoSync();
      // this.wrapperBox.width = systemInfo.windowWidth;
      _this.wrapperBox = {
        width: width,
        height: height
      };
      _this.init();
    }).exec();
  },
  methods: {
    exportThumbnail: function exportThumbnail() {
      var _this2 = this;
      var tempCtx = uni.createCanvasContext('tempCanvas', this);
      this.canvasContext = tempCtx;
      tempCtx.setLineWidth(4);
      this.canvasType = 'cache';
      this.userDraw();
      uni.canvasToTempFilePath({
        canvasId: 'tempCanvas',
        // width: this.canvasInfo.width,
        // height: this.canvasInfo.height,
        // destWidth: this.canvasInfo.width,
        // destHeight: this.canvasInfo.height,
        success: function success(res) {
          _this2.tempFilePath = res.tempFilePath;
          _this2.visibleAreaStyle = "width: ".concat(_this2.thumbnailInfo.width - 3, "px; height: ").concat(_this2.thumbnailInfo.height - 3, "px;");
        },
        fail: function fail() {}
      }, this);
    },
    initData: function initData() {
      var rectCanvas = this.calculateBoundingRectangle();
      this.canvasInfo = rectCanvas;
      var x = rectCanvas.x,
        y = rectCanvas.y,
        width = rectCanvas.width,
        height = rectCanvas.height;
      this.baseXPoint = x;
      this.baseYPoint = y;
      var scale = 1;
      // if (width > height) {
      // 	scale = this.wrapperBox.width / width
      // } else {
      // 	scale = this.wrapperBox.height / height
      // }
      scale = +(this.wrapperBox.width / width).toFixed(2);
      this.scaleBase = scale;
      this.scale = scale;
      this.preScale = scale;
      this.minScale = scale;
      this.maxScale = 1;
      this.widthRatio = 2;
      this.heightRatio = 2;
    },
    calculateBoundingRectangle: function calculateBoundingRectangle() {
      var minX = Infinity;
      var minY = Infinity;
      var maxX = -Infinity;
      var maxY = -Infinity;
      var data = _seatData.seatInfo.datas;
      for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var x = item.p.location.x;
        var y = item.p.location.y;
        if (!item.p.width) {
          // console.log(item)
        }
        if (!item.p.height) {
          // console.log(item)
        }
        var _width = item.p.width || 0;
        var _height = item.p.height || 0;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x + _width);
        maxY = Math.max(maxY, y + _height);
      }
      var width = maxX - minX;
      var height = maxY - minY;
      return {
        x: minX,
        y: minY,
        width: width,
        height: height
      };
    },
    sleep: function sleep() {
      var _arguments = arguments;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var time;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                time = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 1000;
                return _context.abrupt("return", new Promise(function (resolve) {
                  setTimeout(function () {
                    resolve();
                  }, time);
                }));
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    init: function init() {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this3.initData();
                _this3.tempStyle = "width: ".concat(_this3.canvasInfo.width, "px; height: ").concat(_this3.canvasInfo.height, "px;");
                setTimeout(function () {
                  _this3.exportThumbnail();
                  _this3.startTargetCanvas();
                  _this3.isShowTemp = false;
                  _this3.isLoading = false;
                }, 300);
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    startTargetCanvas: function startTargetCanvas() {
      var width = Math.round(this.canvasInfo.width * this.scale);
      var height = Math.round(this.canvasInfo.height * this.scale);
      console.log('===newcc', this.canvasContainerBox.height, height);
      // 反推原数据偏移
      this.diffOffsetY = (this.canvasContainerBox.height - height) / 2;
      this.baseYPoint -= this.diffOffsetY / this.scale;
      this.boundary = {
        left: 0,
        right: width,
        top: 0,
        bottom: height
      };
      this.canvasInitInfo = {
        width: width,
        height: height
      };
      var thumbnailScale = this.canvasInitInfo.width / this.thumbnailInfo.width;
      this.thumbnailScale = thumbnailScale;
      this.thumbnailInfo.width = this.thumbnailInfo.width;
      this.thumbnailInfo.height = this.canvasInitInfo.height / thumbnailScale;
      this.thumbnailStyle = "width: ".concat(this.thumbnailInfo.width, "px; height: ").concat(this.thumbnailInfo.height, "px; ");
      var style = "width: ".concat(width, "px; height: ").concat(this.canvasContainerBox.height, "px;");
      this.canvasStyle = style;
      var ctx = uni.createCanvasContext('myCanvas', this);
      this.canvasContext = ctx;
      this.canvasType = 'target';
      var canvasBase = new _canvas.default({
        ctx: ctx
      });
      this.canvasClass = canvasBase;
      this.draw();
      this.isShowCanvas = true;
    },
    draw: function draw() {
      this.canvasClass.reset();
      this.clearCanvas();
      this.canvasContext.translate(this.offset.x, this.offset.y);
      this.canvasContext.scale(this.scale, this.scale);
      this.canvasContext.setLineWidth(4); // 设置边框宽度

      if (this.isTouchMoving) {
        // this.canvasContext.translate(this.offset.x, this.offset.y);
        // this.canvasContext.scale(this.scale, this.scale);
        if (this.tempFilePath) {
          this.canvasContext.drawImage(this.tempFilePath, 0, this.diffOffsetY / this.scaleBase * (this.scale / this.preScale), this.canvasInfo.width, this.canvasInfo.height);
          this.canvasContext.draw();
        } else {
          console.log('重新绘制1');
          this.userDraw();
        }
      } else {
        // this.canvasContext.translate(this.offset.x, this.offset.y);
        // this.canvasContext.scale(this.scale, this.scale);
        console.log('重新绘制2');
        this.userDraw();
      }

      // 弹窗定位
      if (this.curSelectSeat) {
        var config = this.curSelectSeat;
        var left = config.x * this.scale + this.offset.x + 'px';
        var top = config.y * this.scale + this.offset.y - config.radius * this.scale - this.seatBoxHeight + 'px';
        this.seatPosition = "left: ".concat(left, "; top: ").concat(top, ";");
      }

      // 缩略图展示
      this.drawThumbnail();
      // const overLayoutInfo = this.isOverLayout()
      // if (overLayoutInfo.left) {
      // 	this.thumbnailInfo.left = 0
      // }
      // if (overLayoutInfo.right) {

      // 	this.thumbnailInfo.left = this.thumbnailInfo.width - this.thumbnailInfo.changeWidth
      // }
      // if (overLayoutInfo.top) {
      // 	this.thumbnailInfo.top = 0
      // }
      // if (overLayoutInfo.bottom) {
      // 	this.thumbnailInfo.top = this.thumbnailInfo.height - this.thumbnailInfo.changeHeight
      // }
      var changeStyle = "width: ".concat(this.thumbnailInfo.changeWidth, "px; height:").concat(this.thumbnailInfo.changeHeight, "px; ");
      this.visibleAreaStyle = "".concat(changeStyle, " left:").concat(this.thumbnailInfo.left, "px; top:").concat(this.thumbnailInfo.top, "px;");
    },
    drawThumbnail: function drawThumbnail() {
      // 缩略图展示
      var _this$thumbnailInfo = this.thumbnailInfo,
        width = _this$thumbnailInfo.width,
        height = _this$thumbnailInfo.height;
      var diffScale = this.scale / this.scaleBase;
      var _changeWidth = width / diffScale;
      var _changeHeight = this.canvasContainerBox.height / this.thumbnailScale / diffScale;
      this.thumbnailInfo.left = -this.offset.x / this.thumbnailScale / diffScale;
      this.thumbnailInfo.changeWidth = _changeWidth > width ? width : _changeWidth;
      this.thumbnailInfo.changeHeight = _changeHeight;
      // 多出来的空余高度比例
      var offsetScale = this.diffOffsetY / this.canvasContainerBox.height;
      var thumbnailOffsetHeight = offsetScale * (height / (1 - offsetScale * 2));
      console.log(thumbnailOffsetHeight, '===thumbnailOffsetHeight', this.thumbnailInfo.changeHeight, this.thumbnailInfo.changeWidth);
      this.thumbnailInfo.top = -thumbnailOffsetHeight + -this.offset.y / this.thumbnailScale / diffScale;
    },
    isOverLayout: function isOverLayout() {
      var _this$thumbnailInfo2 = this.thumbnailInfo,
        left = _this$thumbnailInfo2.left,
        top = _this$thumbnailInfo2.top,
        changeWidth = _this$thumbnailInfo2.changeWidth,
        changeHeight = _this$thumbnailInfo2.changeHeight,
        width = _this$thumbnailInfo2.width,
        height = _this$thumbnailInfo2.height;
      var offsetInfo = {
        left: left < 0,
        right: left + changeWidth > width,
        top: top < 0,
        bottom: top + changeHeight > height
      };
      return offsetInfo;
    },
    // 放大
    zoomIn: function zoomIn() {
      this.scale += this.scaleStep;
      this.scale = +this.scale.toFixed(2);
      if (this.scale > this.maxScale) {
        this.scale = this.maxScale;
        return;
      }
      this.zoom.call(this);
    },
    // 缩小
    zoomOut: function zoomOut() {
      this.scale -= this.scaleStep;
      this.scale = +this.scale.toFixed(2);
      if (this.scale < this.minScale) {
        this.scale = this.minScale;
        return;
      }
      this.zoom.call(this);
    },
    zoom: function zoom() {
      // 是否居中放大
      this.mousePos.x = this.canvasInitInfo.width / 2;
      // this.mousePos.y = this.canvasInitInfo.height / 2;
      this.mousePos.y = this.canvasContainerBox.height / 2;
      // 放大系数：this.scale / this.preScale =>n
      // 先偏移后缩放：offsetX = x*n-x;  偏移为：-offsetX
      this.offset.x = this.mousePos.x - (this.mousePos.x - this.offset.x) * this.scale / this.preScale;
      this.offset.y = this.mousePos.y - (this.mousePos.y - this.offset.y) * this.scale / this.preScale;
      this.draw();
      this.preScale = this.scale;
      this.curOffset.x = this.offset.x;
      this.curOffset.y = this.offset.y;
    },
    clearCanvas: function clearCanvas() {
      this.canvasContext.clearRect(0, 0, this.canvasInitInfo.width, this.canvasInitInfo.height);
    },
    // 还原
    reset: function reset() {
      this.clear();
      this.draw();
    },
    // 清除地图并还原对象所有设置
    clear: function clear() {
      this.clearCanvas();
      this.scale = this.scaleBase; // 当前缩放
      this.preScale = this.scaleBase; // 当前缩放
      this.offset = {
        x: 0,
        y: 0
      }; // 拖动偏移
      this.curOffset = {
        x: 0,
        y: 0
      }; // 当前偏移
      this.mousePos = {
        x: 0,
        y: 0
      }; //
    },
    handleRegion: function handleRegion(info) {
      var style = info.s;
      var position = info.p;
      if (style['vector.shape'] && style['vector.shape'] === 'rectangle') {
        this.drawRectangle({
          context: this.canvasContext,
          x: position.location.x - this.baseXPoint,
          y: position.location.y - this.baseYPoint,
          width: position.width,
          height: position.height
        });
      }
      if (style['vector.shape'] && style['vector.shape'] === 'circle') {
        this.drawCircle({
          context: this.canvasContext,
          x: position.location.x - this.baseXPoint + position.width / 2,
          y: position.location.y - this.baseYPoint + position.height / 2,
          radius: position.height / 2,
          isFill: false
        });
      }
    },
    // 处理座位
    handleSeat: function handleSeat(info) {
      var _this4 = this;
      var position = info.p;
      var circleInfo = {
        context: this.canvasContext,
        radius: position.height / 2,
        x: position.location.x - this.baseXPoint,
        y: position.location.y - this.baseYPoint,
        info: info,
        isFill: true
      };
      if (this.canvasType === 'target') {
        var circleInstance = this.canvasClass.circle(circleInfo);
        circleInstance.on('touchend', function (shapeInfo) {
          var originData = shapeInfo.config.info;
          if (originData.c) {
            for (var i = 0; i < seatInfoList.length; i++) {
              var item = seatInfoList[i];
              if (JSON.stringify(originData.c) === JSON.stringify(item.c)) {
                seatInfoList[i].isSelect = !seatInfoList[i].isSelect;
                if (seatInfoList[i].isSelect) {
                  var config = shapeInfo.config;
                  _this4.curSelectSeat = config;
                  var left = config.x * _this4.scale + _this4.offset.x + 'px';
                  var top = config.y * _this4.scale + _this4.offset.y - config.radius * _this4.scale - _this4.seatBoxHeight + 'px';
                  _this4.seatPosition = "left: ".concat(left, "; top: ").concat(top, ";");
                  _this4.isShowSeatImg = true;
                } else {
                  _this4.isShowSeatImg = false;
                }
              } else {
                seatInfoList[i].isSelect = false;
              }
            }
          }
          _this4.draw();
        });
      } else {
        // 绘制圆形
        this.drawCircle(circleInfo);
      }
    },
    userDraw: function userDraw() {
      var _this5 = this;
      var isDraw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      seatInfoList.forEach(function (item) {
        console.log('==遍历中');
        var type = 'seat';
        if (item.class.indexOf('StageNode') > -1) {
          type = 'stage';
        }
        if (item.class.indexOf('RegionNode') > -1 && item.class.indexOf('ShapeRegionNode')) {
          type = 'region';
        }
        if (item.class.indexOf('ShapeRegionNode') > -1) {
          type = 'shapeRegion';
        }
        if (item.class.indexOf('RowNode') > -1) {
          type = 'row';
        }
        if (item.class.indexOf('SeatNode') > -1) {
          type = 'seat';
        }
        if (type === 'stage') {
          _this5.handleStage(item);
        }
        if (type === 'region') {
          _this5.handleRegion(item);
        }
        if (type === 'shapeRegion') {
          _this5.handleShapeRegion(item);
        }
        if (type === 'row') {
          _this5.handleRow(item);
        }
        if (type === 'seat') {
          _this5.handleSeat(item);
        }
      });
      isDraw && this.canvasContext.draw();
      console.log('绘制结束');
    },
    // 绘制矩形
    drawRectangle: function drawRectangle(payload) {
      var context = payload.context,
        x = payload.x,
        y = payload.y,
        width = payload.width,
        height = payload.height;
      context.beginPath();
      context.setStrokeStyle('black'); // 设置边框颜色
      context.rect(x, y, width, height);
      context.closePath();
      context.stroke();
    },
    // 绘制文本
    drawText: function drawText(payload) {
      var context = payload.context,
        x = payload.x,
        y = payload.y,
        name = payload.name;
      context.beginPath();
      context.setTextAlign('center');
      context.setTextBaseline('middle');
      context.setFillStyle('black');
      context.fillText(name, x, y);
      context.closePath();
    },
    // 绘制圆形
    drawCircle: function drawCircle(payload) {
      var context = payload.context,
        x = payload.x,
        y = payload.y,
        radius = payload.radius,
        isFill = payload.isFill;
      context.beginPath();
      context.setStrokeStyle('black');
      context.arc(x, y, radius, 0, 2 * Math.PI);
      if (isFill) {
        context.closePath();
        context.setFillStyle('white');
        context.fill();
      }
      context.stroke();
    },
    // 绘制多边形
    drawPolygon: function drawPolygon(info) {
      var context = info.context,
        points = info.points;
      if (points.length < 3) {
        return;
      }
      context.beginPath();
      context.moveTo(points[0].x, points[0].y);
      for (var i = 1; i < points.length; i++) {
        context.lineTo(points[i].x, points[i].y);
      }
      context.setStrokeStyle('black');
      context.closePath();
      context.stroke();
    },
    handleShapeRegion: function handleShapeRegion(info) {
      var _this6 = this;
      var position = info.p;
      var positionList = position.points;
      var points = positionList.map(function (item) {
        return {
          x: item.x - _this6.baseXPoint,
          y: item.y - _this6.baseYPoint
        };
      });
      this.drawPolygon({
        context: this.canvasContext,
        points: points
      });
    },
    handleStage: function handleStage(stageInfo) {
      var StagePayload = {
        context: this.canvasContext,
        x: stageInfo.p.location.x - this.baseXPoint,
        y: stageInfo.p.location.y - this.baseYPoint,
        width: stageInfo.p.width,
        height: stageInfo.p.height
      };
      this.drawRectangle(StagePayload);
      var textInfo = {
        context: this.canvasContext,
        name: stageInfo.p.name,
        x: StagePayload.x + StagePayload.width / 2,
        y: StagePayload.y + StagePayload.height / 2
      };
      this.drawText(textInfo);
    },
    // 处理row提示
    handleRow: function handleRow(info) {
      var style = info.s;
      var position = info.p;
      var payload = {
        context: this.canvasContext,
        x: position.location.x - this.baseXPoint + (style['label.xoffset'] || 0),
        y: position.location.y - this.baseYPoint + (style['label.yoffset'] || 0),
        name: position.name
      };
      this.drawText(payload);
    },
    onCanvasTouchStart: function onCanvasTouchStart(e) {
      this.isTouchMoving = false;
      if (e.touches.length >= 2) {
        // 计算两点之间的距离
        var xMove = e.touches[0].x - e.touches[1].x;
        var yMove = e.touches[0].y - e.touches[1].y;
        initialDistance = Math.sqrt(xMove * xMove + yMove * yMove);
      } else {
        this.startX = e.touches[0].x;
        this.startY = e.touches[0].y;
      }
    },
    onCanvasTouchMove: function onCanvasTouchMove(e) {
      this.isTouchMoving = true;
      if (e.touches.length >= 2) {
        var xMove = e.touches[0].x - e.touches[1].x;
        var yMove = e.touches[0].y - e.touches[1].y;

        // 新的触摸点间距离
        var distance = Math.sqrt(xMove * xMove + yMove * yMove);

        // 计算新旧触摸点间距离差异, 得到缩放值
        var scale = distance / initialDistance;
        if (scale >= 1) {
          this.zoomIn();
        } else {
          this.zoomOut();
        }
        initialDistance = distance;
      } else {
        // 初始无法拖动
        // if (this.scaleBase === this.scale) {
        // 	return
        // }

        var offsetX = this.curOffset.x + (e.touches[0].x - this.startX) * this.widthRatio;
        var offsetY = this.curOffset.y + (e.touches[0].y - this.startY) * this.heightRatio;

        // this.drawThumbnail()
        // const overLayoutInfo = this.isOverLayout()

        // const oldOffsetx = this.offset.x
        // const oldOffsety = this.offset.y

        // if (overLayoutInfo.left) {
        // 	offsetX = offsetX < oldOffsetx ? offsetX : oldOffsetx
        // }
        // if (overLayoutInfo.right) {
        // 	offsetX = offsetX > oldOffsetx ? offsetX : oldOffsetx
        // }

        // if (overLayoutInfo.top) {
        // 	offsetY = offsetY < oldOffsety ? offsetY : oldOffsety
        // }
        // if (overLayoutInfo.bottom) {
        // 	offsetY = offsetY > oldOffsety ? offsetY : oldOffsety
        // }
        this.offset.x = offsetX;
        this.offset.y = offsetY;
        this.draw();
      }
    },
    onCanvasTouchEnd: function onCanvasTouchEnd(e) {
      this.isTouchMoving = false;
      // if (this.scaleBase === this.scale) {
      // 	return
      // }

      if (!this.isCancelDraw) {
        this.curOffset.x = this.offset.x;
        this.curOffset.y = this.offset.y;
        console.log('touchEnd重新绘制');
        this.draw();
      }
      this.isCancelDraw = false;
      this.canvasClass.handleEvent(e, {
        curOffset: this.curOffset,
        scale: this.scale
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 52:
/*!************************************************************************************************************************************!*\
  !*** /Users/wangyongju/Documents/个人资料/seat-canvas/pages/index/index.vue?vue&type=style&index=0&id=57280228&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&id=57280228&lang=scss&scoped=true& */ 53);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_id_57280228_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 53:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/wangyongju/Documents/个人资料/seat-canvas/pages/index/index.vue?vue&type=style&index=0&id=57280228&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[33,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map