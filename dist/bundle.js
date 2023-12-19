/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.js */ \"./scripts/welcome.js\");\n/* harmony import */ var _welcome_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_welcome_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _motif_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./motif.js */ \"./scripts/motif.js\");\n/* harmony import */ var _motif_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_motif_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\n\n//# sourceURL=webpack://mix/./scripts/index.js?");

/***/ }),

/***/ "./scripts/motif.js":
/*!**************************!*\
  !*** ./scripts/motif.js ***!
  \**************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\tconst themeSwitch = document.getElementById(\"themeSwitch\");\r\n\tconst body = document.body;\r\n\r\n\tthemeSwitch.addEventListener(\"click\", function () {\r\n\t\tbody.classList.toggle(\"dark-theme\");\r\n\r\n\t\tconst isDarkTheme = body.classList.contains(\"dark-theme\");\r\n\r\n\t\tlocalStorage.setItem(\"darkTheme\", isDarkTheme);\r\n\t});\r\n\r\n\tconst savedTheme = localStorage.getItem(\"darkTheme\");\r\n\r\n\tif (savedTheme === \"true\") {\r\n\t\tbody.classList.add(\"dark-theme\");\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://mix/./scripts/motif.js?");

/***/ }),

/***/ "./scripts/welcome.js":
/*!****************************!*\
  !*** ./scripts/welcome.js ***!
  \****************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n\tconst overlay = document.getElementById(\"overlay\");\r\n\tconst mainContent = document.getElementById(\"mainContent\");\r\n\tconst enterButton = document.getElementById(\"enterButton\");\r\n\tconst volumeSlider = document.getElementById(\"volumeSlider\"); // Dodaj pobieranie suwaka\r\n\r\n\tconst isCookieAccepted = sessionStorage.getItem(\"cookie_accepted\") === \"true\";\r\n\r\n\tconst clickSound = new Audio(\"./music/btn.mp3\");\r\n\tclickSound.volume = 0.9;\r\n\r\n\tconst backgroundMusic = new Audio(\"./music/web.mp3\");\r\n\tbackgroundMusic.loop = true;\r\n\tbackgroundMusic.volume = 0.3;\r\n\tsetTimeout(() => {\r\n\t\tbackgroundMusic.play();\r\n\t}, 1000);\r\n\r\n\tif (isCookieAccepted) {\r\n\t\toverlay.style.display = \"none\";\r\n\t\tmainContent.style.display = \"block\";\r\n\t} else {\r\n\t\toverlay.style.display = \"flex\";\r\n\t}\r\n\r\n\tenterButton.addEventListener(\"click\", function () {\r\n\t\toverlay.style.opacity = 0;\r\n\t\tsetTimeout(() => {\r\n\t\t\toverlay.style.display = \"none\";\r\n\t\t\tsessionStorage.setItem(\"cookie_accepted\", \"true\");\r\n\t\t\tmainContent.style.display = \"block\";\r\n\r\n\t\t\tclickSound.play();\r\n\t\t}, 500);\r\n\r\n\t\tbackgroundMusic.play();\r\n\t});\r\n\r\n\tif (isCookieAccepted) {\r\n\t\tbackgroundMusic.play();\r\n\t}\r\n\r\n\tvolumeSlider.addEventListener(\"input\", function () {\r\n\t\tconst volume = parseFloat(volumeSlider.value);\r\n\t\tbackgroundMusic.volume = volume;\r\n\t});\r\n\r\n\tdocument.addEventListener(\"mousemove\", handleMove);\r\n\tdocument.addEventListener(\"touchmove\", handleMove);\r\n\r\n\tfunction handleMove(event) {\r\n\t\tconst eyeSpeed = 10;\r\n\t\tconst leftEye = document.getElementById(\"left-eye\");\r\n\t\tconst rightEye = document.getElementById(\"right-eye\");\r\n\r\n\t\tconst { clientX: mouseX, clientY: mouseY } = event.touches\r\n\t\t\t? event.touches[0]\r\n\t\t\t: event;\r\n\r\n\t\tmoveEye(leftEye, mouseX, mouseY);\r\n\t\tmoveEye(rightEye, mouseX, mouseY);\r\n\t}\r\n\r\n\tfunction moveEye(eye, mouseX, mouseY) {\r\n\t\tconst eyeRect = eye.getBoundingClientRect();\r\n\t\tconst eyeX = eyeRect.left + eyeRect.width / 2;\r\n\t\tconst eyeY = eyeRect.top + eyeRect.height / 2;\r\n\r\n\t\tconst angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);\r\n\t\tconst distance = Math.min(eyeRect.width, eyeRect.height) / 4;\r\n\r\n\t\tconst offsetX = Math.cos(angle) * distance;\r\n\t\tconst offsetY = Math.sin(angle) * distance;\r\n\r\n\t\teye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://mix/./scripts/welcome.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;