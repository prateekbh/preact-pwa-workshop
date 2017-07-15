webpackJsonp([0],{

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UserTile_UserTile_jsx__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_css__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Home_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

		_this.state = {
			userData: null
		};
		return _this;
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (window.userDetails) {
				this.setState({
					userData: window.userDetails
				});
				return;
			}
			fetch('https://randomuser.me/api/?results=10').then(function (res) {
				return res.json();
			}).then(function (data) {
				window.userDetails = data;
				_this2.setState({
					userData: data
				});
			}).catch(function (e) {
				// Add a snackbar error
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'page-home' },
				this.state.userData && this.state.userData.results.map(function (user) {
					return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__UserTile_UserTile_jsx__["a" /* default */], { user: user });
				})
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};




/**
 *  @prop dense = false
 *  @prop raised = false
 *  @prop compact = false
 *  @prop primary = false
 *  @prop accent = false
 *  @prop disabled = false
 */

var Button = function (_MaterialComponent) {
	_inherits(Button, _MaterialComponent);

	function Button() {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

		_this.componentName = "button";
		_this._mdcProps = ["dense", "raised", "compact", "primary", "accent"];
		return _this;
	}

	_createClass(Button, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			_get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), "attachRipple", this).call(this);
		}
	}, {
		key: "materialDom",
		value: function materialDom(props) {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", _extends({
				ref: function ref(control) {
					_this2.control = control;
				}
			}, props), this.props.children);
		}
	}]);

	return Button;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MaterialComponent__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button__ = __webpack_require__(26);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};





var Card = function (_MaterialComponent) {
	_inherits(Card, _MaterialComponent);

	function Card() {
		_classCallCheck(this, Card);

		var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

		_this.componentName = "card";
		_this._mdcProps = ["theme-dark"];
		return _this;
	}

	return Card;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var CardSection = function (_MaterialComponent2) {
	_inherits(CardSection, _MaterialComponent2);

	function CardSection() {
		_classCallCheck(this, CardSection);

		var _this2 = _possibleConstructorReturn(this, (CardSection.__proto__ || Object.getPrototypeOf(CardSection)).call(this));

		_this2.componentName = "";
		return _this2;
	}

	_createClass(CardSection, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("section", props, props.children);
		}
	}]);

	return CardSection;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var CardPrimary = function (_CardSection) {
	_inherits(CardPrimary, _CardSection);

	function CardPrimary() {
		_classCallCheck(this, CardPrimary);

		var _this3 = _possibleConstructorReturn(this, (CardPrimary.__proto__ || Object.getPrototypeOf(CardPrimary)).call(this));

		_this3.componentName = "card__primary";
		return _this3;
	}

	return CardPrimary;
}(CardSection);

var CardSupportingText = function (_CardSection2) {
	_inherits(CardSupportingText, _CardSection2);

	function CardSupportingText() {
		_classCallCheck(this, CardSupportingText);

		var _this4 = _possibleConstructorReturn(this, (CardSupportingText.__proto__ || Object.getPrototypeOf(CardSupportingText)).call(this));

		_this4.componentName = "card__supporting-text";
		return _this4;
	}

	return CardSupportingText;
}(CardSection);

var CardActions = function (_CardSection3) {
	_inherits(CardActions, _CardSection3);

	function CardActions() {
		_classCallCheck(this, CardActions);

		var _this5 = _possibleConstructorReturn(this, (CardActions.__proto__ || Object.getPrototypeOf(CardActions)).call(this));

		_this5.componentName = "card__actions";
		_this5._mdcProps = ["vertical"];
		return _this5;
	}

	return CardActions;
}(CardSection);

var CardMedia = function (_CardSection4) {
	_inherits(CardMedia, _CardSection4);

	function CardMedia() {
		_classCallCheck(this, CardMedia);

		var _this6 = _possibleConstructorReturn(this, (CardMedia.__proto__ || Object.getPrototypeOf(CardMedia)).call(this));

		_this6.componentName = "card__media";
		return _this6;
	}

	return CardMedia;
}(CardSection);

var CardAction = function (_Button) {
	_inherits(CardAction, _Button);

	function CardAction() {
		_classCallCheck(this, CardAction);

		var _this7 = _possibleConstructorReturn(this, (CardAction.__proto__ || Object.getPrototypeOf(CardAction)).call(this));

		_this7.componentName = "card__action";
		return _this7;
	}

	_createClass(CardAction, [{
		key: "materialDom",
		value: function materialDom(props) {
			var _this8 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("button", _extends({ className: "mdc-button mdc-button--compact" }, props, { ref: function ref(control) {
					_this8.control = control;
				} }), props.children);
		}
	}]);

	return CardAction;
}(__WEBPACK_IMPORTED_MODULE_2__Button__["a" /* default */]);

var CardTitle = function (_MaterialComponent3) {
	_inherits(CardTitle, _MaterialComponent3);

	function CardTitle() {
		_classCallCheck(this, CardTitle);

		var _this9 = _possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).call(this));

		_this9.componentName = "card__title";
		_this9._mdcProps = ["large"];
		return _this9;
	}

	_createClass(CardTitle, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h1", props, props.children);
		}
	}]);

	return CardTitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

var CardSubtitle = function (_MaterialComponent4) {
	_inherits(CardSubtitle, _MaterialComponent4);

	function CardSubtitle() {
		_classCallCheck(this, CardSubtitle);

		var _this10 = _possibleConstructorReturn(this, (CardSubtitle.__proto__ || Object.getPrototypeOf(CardSubtitle)).call(this));

		_this10.componentName = "card__subtitle";
		return _this10;
	}

	_createClass(CardSubtitle, [{
		key: "materialDom",
		value: function materialDom(props) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("h2", props, props.children);
		}
	}]);

	return CardSubtitle;
}(__WEBPACK_IMPORTED_MODULE_1__MaterialComponent__["a" /* default */]);

Card.Primary = CardPrimary;
Card.SupportingText = CardSupportingText;
Card.Actions = CardActions;
Card.Action = CardAction;
Card.Media = CardMedia;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_material_components_Card__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserTile_css__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UserTile_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__UserTile_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var msgs = ['Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat', ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt', 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'];

var UserTile = function (_Component) {
	_inherits(UserTile, _Component);

	function UserTile() {
		_classCallCheck(this, UserTile);

		return _possibleConstructorReturn(this, (UserTile.__proto__ || Object.getPrototypeOf(UserTile)).apply(this, arguments));
	}

	_createClass(UserTile, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
				'div',
				{ className: 'tile-user' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
					__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Card__["a" /* default */],
					null,
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Card__["a" /* default */].Primary,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', {
							className: 'pic-user',
							height: '64',
							width: '64',
							src: this.props.user.picture.large }),
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Card__["a" /* default */].Title,
							{ className: 'username' },
							this.props.user.name.first,
							' ',
							this.props.user.name.last
						)
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Card__["a" /* default */].SupportingText,
						null,
						msgs[Math.floor(Math.random() * 4)]
					),
					__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
						__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Card__["a" /* default */].Actions,
						null,
						__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
							__WEBPACK_IMPORTED_MODULE_2_preact_material_components_Card__["a" /* default */].Action,
							{ ripple: true, onClick: function onClick(e) {
									__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_preact_router__["b" /* route */])('/profile/' + _this2.props.user.email);
								} },
							'View Profile'
						)
					)
				)
			);
		}
	}]);

	return UserTile;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (UserTile);

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(undefined);
// imports


// module
exports.push([module.i, ".page-home{\n\tcolor: #333;\n}", ""]);

// exports


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(undefined);
// imports


// module
exports.push([module.i, ".tile-user{\n\tmargin: 32px 16px;\n}\n.tile-user .username{\n\ttext-transform: capitalize;\n}", ""]);

// exports


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(25)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!./Home.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!./Home.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(25)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!./UserTile.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/index.js!./UserTile.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

});