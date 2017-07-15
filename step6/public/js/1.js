webpackJsonp([1],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserDetails_css__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserDetails_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__UserDetails_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var UserTile = function (_Component) {
	_inherits(UserTile, _Component);

	function UserTile() {
		_classCallCheck(this, UserTile);

		var _this = _possibleConstructorReturn(this, (UserTile.__proto__ || Object.getPrototypeOf(UserTile)).call(this));

		_this.state = {
			userDetails: null
		};
		return _this;
	}

	_createClass(UserTile, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			window.userDetails && window.userDetails.results.forEach(function (user) {
				if (user.email === _this2.props.matches.userid) {
					_this2.setState({
						userDetails: user
					});
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			console.log(this.state.userDetails);
			if (this.state.userDetails) {
				return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					'div',
					{ className: 'page-user' },
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						{ className: 'pic' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: this.state.userDetails.picture.large, alt: '' })
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						'div',
						{ className: 'details-user' },
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--display1' },
							this.state.userDetails.name.first,
							' ',
							this.state.userDetails.name.last
						),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							'div',
							{ className: 'mdc-typography--subheading1' },
							__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
								__WEBPACK_IMPORTED_MODULE_1_preact_material_components_Icon__["a" /* default */],
								null,
								'phone'
							),
							this.state.userDetails.cell
						)
					)
				);
			}
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { className: 'page-user' });
		}
	}]);

	return UserTile;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UserTile);

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(undefined);
// imports


// module
exports.push([module.i, ".page-user .pic, .page-user .details-user{\n    padding: 16px;\n    text-align: center;\n}\n.page-user .mdc-icon{\n    vertical-align: middle;\n    margin-right: 16px;\n}", ""]);

// exports


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(25)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!./UserDetails.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!./UserDetails.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});