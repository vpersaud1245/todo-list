/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --header-height: 50px;
  --pri-font-color: #202020;
  --sec-font-color: #666666;

  --task-divider-color: #d4d4d4;
  --form-border-color: #e6e6e6;
  --form-submit-btn-clr: #a4a9b0;
  --form-submit-btn-validation-clr: #4a5462;

  --complete-task-btn-priority-1-clr: #d1453b;
  --complete-task-btn-priority-2-clr: #eb8909;
  --complete-task-btn-priority-3-clr: #246fe0;

  --toggle-sidebar-btn-clr: #f2f2f2;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
  font-family: -apple-system, system-ui, sans-serif;
}

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

img,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}

/*
  ----- HEADER -----
*/

.header {
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 5px 0 0 15px;
}

.sidebar-toggle-btn {
  height: 32px;
  width: 32px;
  display: grid;
  place-items: center;
  background-color: transparent;
  border: none;
  border-radius: 5px;
}

.sidebar-toggle-btn__icon {
  width: 20px;
  height: 20px;
}

.sidebar-toggle-btn:hover {
  cursor: pointer;
}

.sidebar-main {
  padding: 0 12px;
}

.sidebar__list {
  list-style: none;
}

.header__edit-user-project-btn {
  height: 32px;
  width: 26px;
  background-color: transparent;
  border: none;
  font-size: 7px;
  font-weight: 700;
  color: #666;
  border-radius: 5px;
  margin: 0 30px 0 auto;
  display: none;
}

.header__edit-user-project-btn:hover {
  background-color: #f5f5f5;
  color: black;
  cursor: pointer;
}

.edit-project-menu {
  position: absolute;
  height: 90px;
  width: 200px;
  border: none;
  border-radius: 10px;
  right: 20px;
  top: 50px;
  background: rgba(255, 255, 255);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
  font-size: 13px;
  color: var(--pri-font-color);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  display: none;
}

.edit-project-menu__item {
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
}

.edit-project-menu__item:hover {
  background-color: #eee;
}

.menu-item__icon {
  height: 24px;
  width: 24px;
}

.menu-item__icon--delete {
  height: 20px;
  width: 20px;
}

.menu-item__text--delete {
  color: red;
}
/*
  ----- SIDEBAR -----
*/

.sidebar {
  position: fixed;
  z-index: 1;
  height: 100%;
  width: 280px;
  background-color: rgb(246, 246, 246);
  left: -280px;
  transition: 300ms;
  color: var(--pri-font-color);
  font-weight: 400;
  font-size: 14px;
}

.active {
  left: 0;
  box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.3);
}

/* ----- SIDEBAR TOP ----- */

.sidebar__top {
  padding: 12px;
  display: flex;
}

.sidebar__close-sidebar-btn {
  margin-left: auto;
  justify-self: flex-end;
}

/* ----- SIDEBAR MAIN ----- */

.sidebar-main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sidebar__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ----- SIDEBAR NAV LIST ----- */

.sidebar__list--nav > li {
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-template-rows: 24px;
  align-items: center;
}

.sidebar__list--nav > li:hover {
  cursor: pointer;
  background-color: #eeeeee;
}

.nav-list__list-icon {
  height: 20px;
  width: 20px;
}

.nav-list__list-text {
  padding-left: 2px;
}

/* ----- SIDEBAR PROJECT MENU ----- */

.sidebar__project-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar__project-menu:hover {
  cursor: pointer;
  background-color: #eeeeee;
}

.project-menu__title {
  font-size: 14px;
  color: #666666;
  font-weight: 600;
}

.project-menu__buttons {
  display: flex;
  align-items: center;
}

.project-menu__btn {
  border: none;
  background-color: transparent;
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-menu__btn:hover {
  cursor: pointer;
}

.project-menu__btn-icon {
  height: 20px;
  width: 20px;
}

/* ----- SIDEBAR PROJECT LIST ----- */

.project-list__item {
  display: flex;
  gap: 5px;
  align-items: center;
}

.project-list__item:hover {
  cursor: pointer;
  background-color: #eeeeee;
}

.project-list-item__icon {
  font-size: 20px;
}

/* ----- END SIDEBAR ----- */

/*
  ----- MAIN -----
*/

.main {
  padding: 0 50px;
  height: 100%;
  color: var(--pri-font-color);
  transition: 300ms;
}

/*
  ----- SECTION TASK LIST -----
*/

.section__title {
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 30px;
}

.section-list {
  list-style-type: none;
}

.section-list__task {
  display: flex;
  gap: 10px;
}

.section-list__task:hover {
  cursor: pointer;
}

.task__toggle-task-complete-btn {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  border: 1px solid gray;
  background-color: white;
}

.task__toggle-task-complete-btn:hover {
  cursor: pointer;
  background-color: #e5e5e5;
}

.task__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.task__name {
  font-size: 14px;
}

.task__description {
  font-size: 12px;
  color: var(--sec-font-color);
}

.task__due-date {
  font-size: 12px;
  display: flex;
  gap: 5px;
  align-items: center;
}

.due-date__icon {
  height: 12px;
  width: 12px;
}

.section-list__task-divider {
  color: var(--task-divider-color);
  background-color: var(--task-divider-color);
  border: none;
  height: 1px;
  margin: 10px 0;
}

/*  ----- UPCOMING SECTION STYLES -----  */

.section__day-sections {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.day-section__title {
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
}
.section-list__title-divider {
  color: var(--task-divider-color);
  background-color: var(--task-divider-color);
  border: none;
  height: 1px;
  margin: 3px 0 10px 0;
}

/*  ----- COMPLETED SECTION STYLES -----  */

.section__day-sections--completed {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section-list__completed-task {
  display: flex;
  gap: 10px;
  align-items: center;
}

.completed-task__icon {
  height: 50px;
  width: 50px;
}

.completed-task__info {
  font-size: 14px;
  color: var(--pri-font-color);
}

.completed-task-info__user {
  font-weight: 700;
}

.completed-task-info__task-name {
  color: #999;
}

/* DEFAULT MESSAGE STYLES */
.completed-section__empty-message {
  font-size: 15px;
  color: var(--pri-font-color);
}

.completed-task-section__default-message-divider {
  color: var(--task-divider-color);
  background-color: var(--task-divider-color);
  border: none;
  height: 1px;
  margin: 10px 0;
}

/*
  ----- ADD TASK BUTTON -----
*/

.section-list__add-task-btn {
  color: gray;
  font-size: 14px;
  display: flex;
  gap: 10px;
  border: none;
  background-color: white;
  align-items: center;
}

.add-task-btn__img {
  height: 18px;
  width: 18px;
}

.section-list__add-task-btn:hover {
  cursor: pointer;
  color: #495e71;
}

.section-list__add-task-btn:hover > .add-task-btn__img {
  background-color: #495e71;
  border-radius: 50%;
}

/*
  ----- ADD TASK FORM -----
*/

.add-task-form {
  display: flex;
  flex-direction: column;
  color: #e6e6e6;
  gap: 10px;
  padding: 10px;
  border: 1px solid var(--sec-font-color);
  border-radius: 10px;
}

.add-task-form__top-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.add-task-form__input {
  border: none;
  outline: none;
}

.add-task-form__input--name {
  font-size: 14px;
}

.add-task-form__input--description {
  font-size: 13px;
}

/* ----- ADD TASK FORM MIDDLE ------ */
.add-task-form__middle-section {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  color: var(--sec-font-color);
}

.add-task-form__middle-section > * {
  width: 88px;
  height: 28px;
  font-size: 13px;
  border: 2px solid var(--form-border-color);
  border-radius: 5px;
  padding: 0 6px;
}

.add-task-form__input--due-date {
  font-size: 9px;
  color: var(--sec-font-color);
  outline: none;
}

.add-task-form__input--priority-selector {
  font-size: 11.5px;
  color: var(--sec-font-color);
  outline: none;
}

.add-task-form__input--due-date:hover,
.add-task-form__input--priority-selector:hover {
  cursor: pointer;
}

/* ----- ADD TASK FORM BOTTOM ----- */
.add-task-form__divider {
  color: var(--form-border-color);
  background-color: var(--form-border-color);
  border: none;
  height: 1px;
  margin: 0 -10px;
}

.add-task-form__bottom-section {
  display: flex;
  font-size: 13px;
}

.add-task-form__input--project-selector {
  height: 32px;
  width: 108px;
  padding: 0 8px;
  font-size: 13px;
  color: var(--sec-font-color);
}

.add-task-form__input--project-selector:hover {
  cursor: pointer;
}

.add-task-form__submit-buttons {
  display: flex;
  font-size: 13px;
  margin-left: auto;
  gap: 10px;
}

.submit-buttons__button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  height: 32px;
  width: 32px;
}

.submit-buttons__button--cancel {
  background-color: #f5f5f5;
}

.submit-buttons__button--cancel:hover {
  cursor: pointer;
  background-color: #e5e5e5;
}

.submit-buttons__button--submit {
  background-color: var(--form-submit-btn-clr);
}

.submit-button__icon {
  height: 20px;
  width: 20px;
}

.cancel-button__icon {
  height: 20px;
  width: 20px;
}

/* ----- ADD TASK FORM END ----- */

/*
  ----- ADD PROJECT MODAL -----
*/

.add-project-modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* height: 300px; */
  width: 85%;
  max-width: 760px;
  border-radius: 10px;
  border: none;
  color: var(--pri-font-color);
  font-size: 14px;
}

.add-project-modal::backdrop {
  background-color: rgb(32, 32, 32, 0.6);
}

.add-project-modal__header {
  padding: 16px 8px;
}

.add-project-modal__title {
  font-size: 20px;
  font-weight: 600;
}

.add-project-modal__divider {
  color: rgb(221, 221, 221);
  background-color: rgb(221, 221, 221);
  border: none;
  height: 1px;
}

.add-project-modal__divider--bottom {
  margin: 0 -16px;
}

.modal__add-project-form {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.add-project-form__item {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.add-project-form__label {
  font-weight: 700;
}

.add-project-form__input,
.add-project-form__selector {
  padding: 4px;
  font-weight: 400;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(221, 221, 221);
}

.add-project-form__input:focus,
.add-project-form__selector:focus {
  border: 1px solid rgb(128, 128, 128);
}

.add-project-form__buttons {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
}

.add-project-form__button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 13px;
  border-radius: 5px;
  height: 32px;
  padding: 0 12px;
  min-width: 68px;
  font-weight: 500;
}

.add-project-form__button--cancel-button {
  background-color: rgb(245, 245, 245);
  color: rgb(68, 68, 68);
}

.add-project-form__button--cancel-button:hover {
  background-color: rgb(229, 229, 229);
  color: rgb(26, 26, 26);
}

.add-project-form__button--add-button {
  background-color: rgb(164, 169, 176);
  color: rgb(255, 255, 255);
}

/*
  ----- EDIT TASK MODAL -----
*/

.edit-task-modal {
  position: absolute;
  top: 100px;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background-color: white;
  box-shadow: -3px -100px 10px 11px rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 10px;
  display: none;
}

.edit-task-modal__header {
  padding: 0 16px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.edit-task-modal__close-modal-btn {
  height: 32px;
  width: 32px;
  background-color: transparent;
  border: none;
  font-size: 19px;
  transform: scale(1.3, 1);
  font-weight: 200;
  color: rgb(102, 102, 102);
}

.edit-task-modal__section-divider {
  color: rgb(221, 221, 221);
  background-color: rgb(221, 221, 221);
  border: none;
  height: 1px;
}

.edit-task-form {
  padding: 16px 32px;
}

.edit-task__task-name-and-description {
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: none;
  border-radius: 10px;
  padding: 4px 7px;
  color: var(--pri-font-color);
  margin-bottom: 50px;
}

.edit-task__task-name-and-description:has(.edit-task__task-name:focus),
.edit-task__task-name-and-description:has(.edit-task__task-description:focus) {
  border: 1px solid rgb(230, 230, 230);
}

.edit-task__task-name {
  font-size: 20px;
  font-weight: 600;
  border: none;
  outline: none;
}

.edit-task__task-description {
  font-size: 14px;
  border: none;
  outline: none;
}

.edit-task-modal__form-divider {
  color: rgb(221, 221, 221);
  background-color: rgb(221, 221, 221);
  border: none;
  height: 1px;
  margin: 20px 0;
}

.edit-task-form__form-item {
  display: flex;
  gap: 5px;
  text-align: center;
}

.edit-task-form select,
.edit-task__select-due-date {
  font-size: 14px;
  border: none;
}

.form-item__icon {
  height: 20px;
  width: 20px;
}

@media (min-width: 768px) {
  .active {
    box-shadow: none;
  }

  .section {
    max-width: 800px;
    margin: 0 auto;
  }
}

@media (min-width: 580px) {
  .edit-task-modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 5px 10000px rgba(0, 0, 0, 0.6);
    width: 90%;
    height: 90vh;
    max-width: 650px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,yBAAyB;;EAEzB,6BAA6B;EAC7B,4BAA4B;EAC5B,8BAA8B;EAC9B,yCAAyC;;EAEzC,2CAA2C;EAC3C,2CAA2C;EAC3C,2CAA2C;;EAE3C,iCAAiC;AACnC;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,aAAa;EACb,iDAAiD;AACnD;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;;;;EAIE,cAAc;EACd,eAAe;AACjB;;AAEA;;CAEC;;AAED;EACE,4BAA4B;EAC5B,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,cAAc;EACd,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,+BAA+B;EAC/B,uCAAuC;EACvC,eAAe;EACf,4BAA4B;EAC5B,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,UAAU;AACZ;AACA;;CAEC;;AAED;EACE,eAAe;EACf,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,oCAAoC;EACpC,YAAY;EACZ,iBAAiB;EACjB,4BAA4B;EAC5B,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,OAAO;EACP,4CAA4C;AAC9C;;AAEA,4BAA4B;;AAE5B;EACE,aAAa;EACb,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA,6BAA6B;;AAE7B;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA,iCAAiC;;AAEjC;EACE,aAAa;EACb,+BAA+B;EAC/B,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA,qCAAqC;;AAErC;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,qCAAqC;;AAErC;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,eAAe;AACjB;;AAEA,4BAA4B;;AAE5B;;CAEC;;AAED;EACE,eAAe;EACf,YAAY;EACZ,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA;;CAEC;;AAED;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,gCAAgC;EAChC,2CAA2C;EAC3C,YAAY;EACZ,WAAW;EACX,cAAc;AAChB;;AAEA,0CAA0C;;AAE1C;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,gCAAgC;EAChC,2CAA2C;EAC3C,YAAY;EACZ,WAAW;EACX,oBAAoB;AACtB;;AAEA,2CAA2C;;AAE3C;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA,2BAA2B;AAC3B;EACE,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,gCAAgC;EAChC,2CAA2C;EAC3C,YAAY;EACZ,WAAW;EACX,cAAc;AAChB;;AAEA;;CAEC;;AAED;EACE,WAAW;EACX,eAAe;EACf,aAAa;EACb,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;;CAEC;;AAED;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,SAAS;EACT,aAAa;EACb,uCAAuC;EACvC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA,sCAAsC;AACtC;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,0CAA0C;EAC1C,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,4BAA4B;EAC5B,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,4BAA4B;EAC5B,aAAa;AACf;;AAEA;;EAEE,eAAe;AACjB;;AAEA,qCAAqC;AACrC;EACE,+BAA+B;EAC/B,0CAA0C;EAC1C,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;EACd,eAAe;EACf,4BAA4B;AAC9B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,kCAAkC;;AAElC;;CAEC;;AAED;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,gCAAgC;EAChC,mBAAmB;EACnB,UAAU;EACV,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,oCAAoC;EACpC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B;;AAEA;;CAEC;;AAED;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,oDAAoD;EACpD,YAAY;EACZ,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,wBAAwB;EACxB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,oCAAoC;EACpC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;;EAEE,oCAAoC;AACtC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,oCAAoC;EACpC,YAAY;EACZ,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,cAAc;EAChB;AACF;;AAEA;EACE;IACE,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,kDAAkD;IAClD,UAAU;IACV,YAAY;IACZ,gBAAgB;EAClB;AACF","sourcesContent":[":root {\n  --header-height: 50px;\n  --pri-font-color: #202020;\n  --sec-font-color: #666666;\n\n  --task-divider-color: #d4d4d4;\n  --form-border-color: #e6e6e6;\n  --form-submit-btn-clr: #a4a9b0;\n  --form-submit-btn-validation-clr: #4a5462;\n\n  --complete-task-btn-priority-1-clr: #d1453b;\n  --complete-task-btn-priority-2-clr: #eb8909;\n  --complete-task-btn-priority-3-clr: #246fe0;\n\n  --toggle-sidebar-btn-clr: #f2f2f2;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n  font-family: -apple-system, system-ui, sans-serif;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\n/*\n  ----- HEADER -----\n*/\n\n.header {\n  height: var(--header-height);\n  display: flex;\n  align-items: center;\n  padding: 5px 0 0 15px;\n}\n\n.sidebar-toggle-btn {\n  height: 32px;\n  width: 32px;\n  display: grid;\n  place-items: center;\n  background-color: transparent;\n  border: none;\n  border-radius: 5px;\n}\n\n.sidebar-toggle-btn__icon {\n  width: 20px;\n  height: 20px;\n}\n\n.sidebar-toggle-btn:hover {\n  cursor: pointer;\n}\n\n.sidebar-main {\n  padding: 0 12px;\n}\n\n.sidebar__list {\n  list-style: none;\n}\n\n.header__edit-user-project-btn {\n  height: 32px;\n  width: 26px;\n  background-color: transparent;\n  border: none;\n  font-size: 7px;\n  font-weight: 700;\n  color: #666;\n  border-radius: 5px;\n  margin: 0 30px 0 auto;\n  display: none;\n}\n\n.header__edit-user-project-btn:hover {\n  background-color: #f5f5f5;\n  color: black;\n  cursor: pointer;\n}\n\n.edit-project-menu {\n  position: absolute;\n  height: 90px;\n  width: 200px;\n  border: none;\n  border-radius: 10px;\n  right: 20px;\n  top: 50px;\n  background: rgba(255, 255, 255);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);\n  font-size: 13px;\n  color: var(--pri-font-color);\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  display: none;\n}\n\n.edit-project-menu__item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-radius: 5px;\n}\n\n.edit-project-menu__item:hover {\n  background-color: #eee;\n}\n\n.menu-item__icon {\n  height: 24px;\n  width: 24px;\n}\n\n.menu-item__icon--delete {\n  height: 20px;\n  width: 20px;\n}\n\n.menu-item__text--delete {\n  color: red;\n}\n/*\n  ----- SIDEBAR -----\n*/\n\n.sidebar {\n  position: fixed;\n  z-index: 1;\n  height: 100%;\n  width: 280px;\n  background-color: rgb(246, 246, 246);\n  left: -280px;\n  transition: 300ms;\n  color: var(--pri-font-color);\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.active {\n  left: 0;\n  box-shadow: 0 0 0 10000px rgba(0, 0, 0, 0.3);\n}\n\n/* ----- SIDEBAR TOP ----- */\n\n.sidebar__top {\n  padding: 12px;\n  display: flex;\n}\n\n.sidebar__close-sidebar-btn {\n  margin-left: auto;\n  justify-self: flex-end;\n}\n\n/* ----- SIDEBAR MAIN ----- */\n\n.sidebar-main {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.sidebar__list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n/* ----- SIDEBAR NAV LIST ----- */\n\n.sidebar__list--nav > li {\n  display: grid;\n  grid-template-columns: 24px 1fr;\n  grid-template-rows: 24px;\n  align-items: center;\n}\n\n.sidebar__list--nav > li:hover {\n  cursor: pointer;\n  background-color: #eeeeee;\n}\n\n.nav-list__list-icon {\n  height: 20px;\n  width: 20px;\n}\n\n.nav-list__list-text {\n  padding-left: 2px;\n}\n\n/* ----- SIDEBAR PROJECT MENU ----- */\n\n.sidebar__project-menu {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sidebar__project-menu:hover {\n  cursor: pointer;\n  background-color: #eeeeee;\n}\n\n.project-menu__title {\n  font-size: 14px;\n  color: #666666;\n  font-weight: 600;\n}\n\n.project-menu__buttons {\n  display: flex;\n  align-items: center;\n}\n\n.project-menu__btn {\n  border: none;\n  background-color: transparent;\n  height: 28px;\n  width: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.project-menu__btn:hover {\n  cursor: pointer;\n}\n\n.project-menu__btn-icon {\n  height: 20px;\n  width: 20px;\n}\n\n/* ----- SIDEBAR PROJECT LIST ----- */\n\n.project-list__item {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n\n.project-list__item:hover {\n  cursor: pointer;\n  background-color: #eeeeee;\n}\n\n.project-list-item__icon {\n  font-size: 20px;\n}\n\n/* ----- END SIDEBAR ----- */\n\n/*\n  ----- MAIN -----\n*/\n\n.main {\n  padding: 0 50px;\n  height: 100%;\n  color: var(--pri-font-color);\n  transition: 300ms;\n}\n\n/*\n  ----- SECTION TASK LIST -----\n*/\n\n.section__title {\n  font-weight: 700;\n  font-size: 26px;\n  margin-bottom: 30px;\n}\n\n.section-list {\n  list-style-type: none;\n}\n\n.section-list__task {\n  display: flex;\n  gap: 10px;\n}\n\n.section-list__task:hover {\n  cursor: pointer;\n}\n\n.task__toggle-task-complete-btn {\n  border-radius: 50%;\n  width: 18px;\n  height: 18px;\n  border: 1px solid gray;\n  background-color: white;\n}\n\n.task__toggle-task-complete-btn:hover {\n  cursor: pointer;\n  background-color: #e5e5e5;\n}\n\n.task__info {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.task__name {\n  font-size: 14px;\n}\n\n.task__description {\n  font-size: 12px;\n  color: var(--sec-font-color);\n}\n\n.task__due-date {\n  font-size: 12px;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n\n.due-date__icon {\n  height: 12px;\n  width: 12px;\n}\n\n.section-list__task-divider {\n  color: var(--task-divider-color);\n  background-color: var(--task-divider-color);\n  border: none;\n  height: 1px;\n  margin: 10px 0;\n}\n\n/*  ----- UPCOMING SECTION STYLES -----  */\n\n.section__day-sections {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n.day-section__title {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 28px;\n}\n.section-list__title-divider {\n  color: var(--task-divider-color);\n  background-color: var(--task-divider-color);\n  border: none;\n  height: 1px;\n  margin: 3px 0 10px 0;\n}\n\n/*  ----- COMPLETED SECTION STYLES -----  */\n\n.section__day-sections--completed {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.section-list__completed-task {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.completed-task__icon {\n  height: 50px;\n  width: 50px;\n}\n\n.completed-task__info {\n  font-size: 14px;\n  color: var(--pri-font-color);\n}\n\n.completed-task-info__user {\n  font-weight: 700;\n}\n\n.completed-task-info__task-name {\n  color: #999;\n}\n\n/* DEFAULT MESSAGE STYLES */\n.completed-section__empty-message {\n  font-size: 15px;\n  color: var(--pri-font-color);\n}\n\n.completed-task-section__default-message-divider {\n  color: var(--task-divider-color);\n  background-color: var(--task-divider-color);\n  border: none;\n  height: 1px;\n  margin: 10px 0;\n}\n\n/*\n  ----- ADD TASK BUTTON -----\n*/\n\n.section-list__add-task-btn {\n  color: gray;\n  font-size: 14px;\n  display: flex;\n  gap: 10px;\n  border: none;\n  background-color: white;\n  align-items: center;\n}\n\n.add-task-btn__img {\n  height: 18px;\n  width: 18px;\n}\n\n.section-list__add-task-btn:hover {\n  cursor: pointer;\n  color: #495e71;\n}\n\n.section-list__add-task-btn:hover > .add-task-btn__img {\n  background-color: #495e71;\n  border-radius: 50%;\n}\n\n/*\n  ----- ADD TASK FORM -----\n*/\n\n.add-task-form {\n  display: flex;\n  flex-direction: column;\n  color: #e6e6e6;\n  gap: 10px;\n  padding: 10px;\n  border: 1px solid var(--sec-font-color);\n  border-radius: 10px;\n}\n\n.add-task-form__top-section {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.add-task-form__input {\n  border: none;\n  outline: none;\n}\n\n.add-task-form__input--name {\n  font-size: 14px;\n}\n\n.add-task-form__input--description {\n  font-size: 13px;\n}\n\n/* ----- ADD TASK FORM MIDDLE ------ */\n.add-task-form__middle-section {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  color: var(--sec-font-color);\n}\n\n.add-task-form__middle-section > * {\n  width: 88px;\n  height: 28px;\n  font-size: 13px;\n  border: 2px solid var(--form-border-color);\n  border-radius: 5px;\n  padding: 0 6px;\n}\n\n.add-task-form__input--due-date {\n  font-size: 9px;\n  color: var(--sec-font-color);\n  outline: none;\n}\n\n.add-task-form__input--priority-selector {\n  font-size: 11.5px;\n  color: var(--sec-font-color);\n  outline: none;\n}\n\n.add-task-form__input--due-date:hover,\n.add-task-form__input--priority-selector:hover {\n  cursor: pointer;\n}\n\n/* ----- ADD TASK FORM BOTTOM ----- */\n.add-task-form__divider {\n  color: var(--form-border-color);\n  background-color: var(--form-border-color);\n  border: none;\n  height: 1px;\n  margin: 0 -10px;\n}\n\n.add-task-form__bottom-section {\n  display: flex;\n  font-size: 13px;\n}\n\n.add-task-form__input--project-selector {\n  height: 32px;\n  width: 108px;\n  padding: 0 8px;\n  font-size: 13px;\n  color: var(--sec-font-color);\n}\n\n.add-task-form__input--project-selector:hover {\n  cursor: pointer;\n}\n\n.add-task-form__submit-buttons {\n  display: flex;\n  font-size: 13px;\n  margin-left: auto;\n  gap: 10px;\n}\n\n.submit-buttons__button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-radius: 5px;\n  height: 32px;\n  width: 32px;\n}\n\n.submit-buttons__button--cancel {\n  background-color: #f5f5f5;\n}\n\n.submit-buttons__button--cancel:hover {\n  cursor: pointer;\n  background-color: #e5e5e5;\n}\n\n.submit-buttons__button--submit {\n  background-color: var(--form-submit-btn-clr);\n}\n\n.submit-button__icon {\n  height: 20px;\n  width: 20px;\n}\n\n.cancel-button__icon {\n  height: 20px;\n  width: 20px;\n}\n\n/* ----- ADD TASK FORM END ----- */\n\n/*\n  ----- ADD PROJECT MODAL -----\n*/\n\n.add-project-modal {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  /* height: 300px; */\n  width: 85%;\n  max-width: 760px;\n  border-radius: 10px;\n  border: none;\n  color: var(--pri-font-color);\n  font-size: 14px;\n}\n\n.add-project-modal::backdrop {\n  background-color: rgb(32, 32, 32, 0.6);\n}\n\n.add-project-modal__header {\n  padding: 16px 8px;\n}\n\n.add-project-modal__title {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.add-project-modal__divider {\n  color: rgb(221, 221, 221);\n  background-color: rgb(221, 221, 221);\n  border: none;\n  height: 1px;\n}\n\n.add-project-modal__divider--bottom {\n  margin: 0 -16px;\n}\n\n.modal__add-project-form {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.add-project-form__item {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n\n.add-project-form__label {\n  font-weight: 700;\n}\n\n.add-project-form__input,\n.add-project-form__selector {\n  padding: 4px;\n  font-weight: 400;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid rgb(221, 221, 221);\n}\n\n.add-project-form__input:focus,\n.add-project-form__selector:focus {\n  border: 1px solid rgb(128, 128, 128);\n}\n\n.add-project-form__buttons {\n  display: flex;\n  justify-content: flex-end;\n  gap: 15px;\n}\n\n.add-project-form__button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  font-size: 13px;\n  border-radius: 5px;\n  height: 32px;\n  padding: 0 12px;\n  min-width: 68px;\n  font-weight: 500;\n}\n\n.add-project-form__button--cancel-button {\n  background-color: rgb(245, 245, 245);\n  color: rgb(68, 68, 68);\n}\n\n.add-project-form__button--cancel-button:hover {\n  background-color: rgb(229, 229, 229);\n  color: rgb(26, 26, 26);\n}\n\n.add-project-form__button--add-button {\n  background-color: rgb(164, 169, 176);\n  color: rgb(255, 255, 255);\n}\n\n/*\n  ----- EDIT TASK MODAL -----\n*/\n\n.edit-task-modal {\n  position: absolute;\n  top: 100px;\n  z-index: 1;\n  width: 100%;\n  height: 100vh;\n  background-color: white;\n  box-shadow: -3px -100px 10px 11px rgba(0, 0, 0, 0.6);\n  border: none;\n  border-radius: 10px;\n  display: none;\n}\n\n.edit-task-modal__header {\n  padding: 0 16px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.edit-task-modal__close-modal-btn {\n  height: 32px;\n  width: 32px;\n  background-color: transparent;\n  border: none;\n  font-size: 19px;\n  transform: scale(1.3, 1);\n  font-weight: 200;\n  color: rgb(102, 102, 102);\n}\n\n.edit-task-modal__section-divider {\n  color: rgb(221, 221, 221);\n  background-color: rgb(221, 221, 221);\n  border: none;\n  height: 1px;\n}\n\n.edit-task-form {\n  padding: 16px 32px;\n}\n\n.edit-task__task-name-and-description {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  border: none;\n  border-radius: 10px;\n  padding: 4px 7px;\n  color: var(--pri-font-color);\n  margin-bottom: 50px;\n}\n\n.edit-task__task-name-and-description:has(.edit-task__task-name:focus),\n.edit-task__task-name-and-description:has(.edit-task__task-description:focus) {\n  border: 1px solid rgb(230, 230, 230);\n}\n\n.edit-task__task-name {\n  font-size: 20px;\n  font-weight: 600;\n  border: none;\n  outline: none;\n}\n\n.edit-task__task-description {\n  font-size: 14px;\n  border: none;\n  outline: none;\n}\n\n.edit-task-modal__form-divider {\n  color: rgb(221, 221, 221);\n  background-color: rgb(221, 221, 221);\n  border: none;\n  height: 1px;\n  margin: 20px 0;\n}\n\n.edit-task-form__form-item {\n  display: flex;\n  gap: 5px;\n  text-align: center;\n}\n\n.edit-task-form select,\n.edit-task__select-due-date {\n  font-size: 14px;\n  border: none;\n}\n\n.form-item__icon {\n  height: 20px;\n  width: 20px;\n}\n\n@media (min-width: 768px) {\n  .active {\n    box-shadow: none;\n  }\n\n  .section {\n    max-width: 800px;\n    margin: 0 auto;\n  }\n}\n\n@media (min-width: 580px) {\n  .edit-task-modal {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    box-shadow: 0px 0px 5px 10000px rgba(0, 0, 0, 0.6);\n    width: 90%;\n    height: 90vh;\n    max-width: 650px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller/projectController.js":
/*!*********************************************!*\
  !*** ./src/controller/projectController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject),
/* harmony export */   clearProjectTaskList: () => (/* binding */ clearProjectTaskList),
/* harmony export */   createProjectListElement: () => (/* binding */ createProjectListElement),
/* harmony export */   getAllProjects: () => (/* binding */ getAllProjects),
/* harmony export */   getHTMLTaskElements: () => (/* binding */ getHTMLTaskElements),
/* harmony export */   getProjectNames: () => (/* binding */ getProjectNames),
/* harmony export */   getProjectTasks: () => (/* binding */ getProjectTasks),
/* harmony export */   getUserProjects: () => (/* binding */ getUserProjects),
/* harmony export */   isUserProject: () => (/* binding */ isUserProject),
/* harmony export */   removeTaskFromProject: () => (/* binding */ removeTaskFromProject)
/* harmony export */ });
/* harmony import */ var _model_projectRepo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projectRepo */ "./src/model/projectRepo.js");
/* harmony import */ var _taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskController */ "./src/controller/taskController.js");



// RETURNS LIST OF TASKS CONVERTED TO HTML ELEMENTS
const getHTMLTaskElements = (projectName) => {
  let projectTaskList = getProjectTasks(projectName);
  if (projectTaskList.length > 0) {
    let htmlTaskList = convertTaskListToHtml(projectTaskList);
    return htmlTaskList;
  }
};

const convertTaskListToHtml = (taskList) => {
  let htmlTaskList = [];

  taskList.forEach((task) => {
    let taskElement = (0,_taskController__WEBPACK_IMPORTED_MODULE_1__.convertTaskToHTML)(task);
    htmlTaskList.push(taskElement);
  });

  return htmlTaskList;
};

const addTaskToProject = (task, projectName) => {
  let selectedProject = _model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.getProjectFromName(projectName);
  selectedProject.addTask(task);
};

const removeTaskFromProject = (task, projectName) => {
  let project = _model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.getProjectFromName(projectName);
  let taskID = task.taskID;
  project.removeTask(taskID);
};

/**
 * Returns an array of project names
 */
const getProjectNames = () => {
  let projects = _model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.getAllProjects();
  let projectNames = projects.map((project) => project.projectName);
  return projectNames;
};

const getAllProjects = () => {
  return _model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.getAllProjects();
};

const getUserProjects = () => {
  let projects = getAllProjects();
  const userProjects = [];
  for (let i = 0; i < projects.length; i++) {
    if (i > 3) {
      console.log(projects[i]);
      userProjects.push(projects[i]);
    }
  }
  return userProjects;
};

const isUserProject = (projectName) => {
  let isUserProject = false;
  let userProjects = getUserProjects();
  let userProjectNames = userProjects.map((project) => project.projectName);
  userProjectNames.forEach((userProjectName) => {
    console.log(`User poroject name: ${userProjectName}`);
    console.log(`project name: ${projectName}`);
    if (userProjectName === projectName) {
      isUserProject = true;
    }
  });
  return isUserProject;
};

const createProjectListElement = (project) => {
  let projectName = project.projectName;
  let projectColor = project.projectColor;

  const listItem = document.createElement("li");
  listItem.id = project.projectID;
  listItem.classList.add("project-list__item");

  const listIcon = document.createElement("span");
  listIcon.classList.add("project-list-item__icon");
  listIcon.textContent = "#";
  listIcon.style.color = projectColor;
  listItem.append(listIcon);

  const projectNameElement = document.createElement("span");
  projectNameElement.classList.add("project-list-item__project-name");
  projectNameElement.textContent = projectName;

  listItem.append(projectNameElement);

  return listItem;
};

const clearProjectTaskList = (projectName) => {
  let project = _model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.getProjectFromName(projectName);
  console.log(project);
  project.clearTaskList();
};

/**
 * Gets all tasks for a project
 * @param {String} projectName
 * @returns {Array} An Array of task objects
 */
const getProjectTasks = (projectName) => {
  let project = _model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.getProjectFromName(projectName);
  let projectTaskList = project.getTaskList();
  return projectTaskList;
};




/***/ }),

/***/ "./src/controller/taskController.js":
/*!******************************************!*\
  !*** ./src/controller/taskController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareTaskDate: () => (/* binding */ compareTaskDate),
/* harmony export */   convertTaskToHTML: () => (/* binding */ convertTaskToHTML),
/* harmony export */   getAllTasks: () => (/* binding */ getAllTasks),
/* harmony export */   getTaskByID: () => (/* binding */ getTaskByID)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/compareAsc.mjs");
/* harmony import */ var _assets_calendar_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/calendar-icon.svg */ "./src/assets/calendar-icon.svg");
/* harmony import */ var _model_projectRepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/projectRepo */ "./src/model/projectRepo.js");
/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectController */ "./src/controller/projectController.js");
/* harmony import */ var _view_editTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/editTask */ "./src/view/editTask.js");






// CONVERT TASK OBJECT TO HTML ELEMENT
const convertTaskToHTML = (task) => {
  // CREATE ELEMENTS
  const taskElement = document.createElement("li");
  const toggleCompleteBtn = document.createElement("button");
  const taskInfoElement = document.createElement("div");

  // ADD TASK ID TO ELEMENT
  taskElement.id = task.taskID;

  // ADD ELEMENT CLASSES
  taskElement.classList.add("section-list__task");
  toggleCompleteBtn.classList.add("task__toggle-task-complete-btn");
  taskInfoElement.classList.add("task__info");

  // CREATE & APPEND TASK INFO ELEMENTS

  // TASK NAME ELEMENT
  if (task.taskName !== undefined) {
    const taskNameElement = document.createElement("p");
    taskNameElement.classList.add("task__name");
    taskNameElement.textContent = task.taskName;
    taskInfoElement.append(taskNameElement);
  }

  // TASK DESCRIPTION ELEMENT
  if (task.taskDescription !== "") {
    const taskDescriptionElement = document.createElement("p");
    taskDescriptionElement.classList.add("task__description");
    taskDescriptionElement.textContent = task.taskDescription;
    taskInfoElement.append(taskDescriptionElement);
  }

  // TASK DUE DATE ELEMENT
  if (task.taskDueDate !== "") {
    const taskDueDateElement = document.createElement("div");
    taskDueDateElement.classList.add("task__due-date");

    // Due date icon
    const dueDateIcon = document.createElement("img");
    dueDateIcon.classList.add("due-date__icon");
    dueDateIcon.src = _assets_calendar_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
    dueDateIcon.alt = "calendar-icon";

    // Due date text
    const dueDateText = document.createElement("span");
    dueDateText.classList.add("due-date__text");
    dueDateText.textContent = task.taskDueDate;
    taskDueDateElement.append(dueDateIcon, dueDateText);
    taskInfoElement.append(taskDueDateElement);
  }

  // TASK PRIORITY
  if (task.taskPriority !== "Priority") {
    setToggleCompelteBtnPriorityStyle(task.taskPriority, toggleCompleteBtn);
  }

  // APPEND TOGGLE COMPLETE BTN HANDLER
  toggleCompleteBtn.onclick = (e) => {
    handleToggleCompleteBtnClick(e);
  };

  // APPEND EVENT LISTENER TO EDIT TASKS
  taskInfoElement.onclick = (e) => {
    (0,_view_editTask__WEBPACK_IMPORTED_MODULE_3__.renderEditTaskForm)(e);
  };

  // APPEND ELEMENTS
  taskElement.append(toggleCompleteBtn, taskInfoElement);
  return taskElement;
};

/*
  ----- PRIORITY CLR SELECTOR HELPER FUNCTIONS -----
*/
/**
 * Sets task complete button style based on priority
 * @param priority
 * @param toggleCompleteBtn
 */
const setToggleCompelteBtnPriorityStyle = (priority, toggleCompleteBtn) => {
  if (priority === "Priority 1") {
    setToggleCompleteBtnColor(
      "#f6dad8",
      "var(--complete-task-btn-priority-1-clr)",
      toggleCompleteBtn
    );
    return;
  }

  if (priority === "Priority 2") {
    setToggleCompleteBtnColor(
      "#fbe7ce",
      "var(--complete-task-btn-priority-2-clr)",
      toggleCompleteBtn
    );
    return;
  }

  if (priority === "Priority 3") {
    setToggleCompleteBtnColor(
      "#d3e2f9",
      "var(--complete-task-btn-priority-3-clr)",
      toggleCompleteBtn
    );
    return;
  }
};

/**
 * Sets the color of the task complete button
 * @param backgroundColor
 * @param borderColor
 * @param toggleCompleteBtn
 */
const setToggleCompleteBtnColor = (
  backgroundColor,
  borderColor,
  toggleCompleteBtn
) => {
  toggleCompleteBtn.style.border = "2px solid " + borderColor;
  toggleCompleteBtn.style.backgroundColor = backgroundColor;
};

// ----- END PRIORITY CLR SELECTOR HELPER FUNCTIONS ----- //

/*
  ----- REMOVE TASK BTN EVENT HANDLERS -----
*/

/**
 * Removes task from current project, updates task completion date and
 * adds project to completed projects
 */
const handleToggleCompleteBtnClick = (e) => {
  // GET TASK ELEMENT AND DIVIDER TO BE REMOVED
  let taskElement = e.currentTarget.parentElement;
  let taskDivider = taskElement.nextSibling;

  // GET TASK OBJECT
  let taskID = taskElement.id;
  let task = getTaskByID(taskID);

  // REMOVE TASK FROM ASSIGNED PROJECT
  let assignedProject = task.assignedProject;
  (0,_projectController__WEBPACK_IMPORTED_MODULE_2__.removeTaskFromProject)(task, assignedProject);

  // SET TASK COMPLETION DATE
  let completionDate = new Date();
  let completionDateFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(completionDate, "yyyy-MM-dd");
  console.log(completionDateFormatted);
  task.setCompletionDate(completionDateFormatted);

  // ADD TASK TO COMPLETED PROJECTS
  task.setAssignedProject("Completed");
  console.log(`completed task ${JSON.stringify(task)}`);
  (0,_projectController__WEBPACK_IMPORTED_MODULE_2__.addTaskToProject)(task, "Completed");

  // REMOVE TASK ELEMENTS
  taskElement.remove();
  taskDivider.remove();

  // UPDATE LOCAL STORAGE
  _model_projectRepo__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage();
};

/*
  ----- UTILITY FUNCTIONS -----
 */
/**
 * Gets all tasks excluding those in Tomorrow, Upcoming and Completed
 * @returns {Array} An array of all tasks
 */
const getAllTasks = () => {
  let taskList = [];
  let projectList = _model_projectRepo__WEBPACK_IMPORTED_MODULE_1__.getAllProjects();
  for (let i = 0; i < projectList.length; i++) {
    // If statement skips default projects (Tomorrow/Upcoming/Completed)
    if (i < 1 || i > 3) {
      let project = projectList[i];
      let projectTaskList = project.getTaskList();
      if (projectTaskList.length > 0) {
        projectTaskList.forEach((task) => {
          taskList.push(task);
        });
      }
    }
  }
  return taskList;
};

/**
 * Compares task duedate/completion date to another date
 * @param {String} taskDate task duedate/completion date string in format YYYY-MM-DD
 * @param {Date} dateToCompare date type object of date to compare to
 * @returns  (-1) if task due date is before date
 * @returns (0) if task due date and date are the same
 * @returns (1) if task due date is after date
 */
const compareTaskDate = (taskDate, dateToCompare) => {
  let taskDateSplit = taskDate.split("-");
  let dueDateYear = taskDateSplit[0];
  let dueDateMonth = taskDateSplit[1] - 1; //Subtract month by one as month is indexed from zero
  let dueDateDay = taskDateSplit[2];
  let taskDateObject = new Date(dueDateYear, dueDateMonth, dueDateDay);
  let dateToCompareYear = dateToCompare.getFullYear();
  let dateToCompareMonth = dateToCompare.getMonth();
  let dateToCompareDay = dateToCompare.getDate();
  let dateToCompareNoTime = new Date(
    dateToCompareYear,
    dateToCompareMonth,
    dateToCompareDay
  );
  // console.log(`Date Compare Function:
  // TaskDate: ${format(taskDateObject, "MM-dd-yyyy")}
  // CompareDate: ${format(dateToCompareNoTime, "MM-dd-yyyy")}
  // result: ${compareAsc(taskDateObject, dateToCompareNoTime)}`);

  return (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.compareAsc)(taskDateObject, dateToCompareNoTime);
};

/**
 * Returns the task object that matches the id passed in
 * @param {String} taskID
 * @returns {taskObject}
 */
const getTaskByID = (taskID) => {
  let allTasks = getAllTasks();
  for (let i = 0; i < allTasks.length; i++) {
    let task = allTasks[i];
    if (task.taskID === taskID) {
      return task;
    }
  }
};


/***/ }),

/***/ "./src/model/project.js":
/*!******************************!*\
  !*** ./src/model/project.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/model/task.js");

class Project {
  constructor(name, color, id) {
    this.projectID = id || generateProjectID();
    this.projectName = name;
    this.taskList = [];
    this.projectColor = color;
  }
  static createFromObject(obj) {
    const project = new Project(
      obj.projectName,
      obj.projectColor,
      obj.projectID
    );
    if (obj.taskList.length > 0) {
      project.taskList = obj.taskList.map((task) =>
        _task__WEBPACK_IMPORTED_MODULE_0__.Task.createFromObject(task)
      );
    }
    return project;
  }
  getProjectName() {
    return this.projectName;
  }
  getTaskList() {
    return this.taskList;
  }
  addTask(taskToAdd) {
    this.taskList.push(taskToAdd);
  }
  removeTask(taskIDToRemove) {
    let taskIndex = this.getTaskIndexFromID(taskIDToRemove);
    if (taskIndex > -1) {
      this.taskList.splice(taskIndex, 1);
    }
  }
  getTaskIndexFromID(taskID) {
    return this.taskList.map((task) => task.taskID).indexOf(taskID);
  }
  clearTaskList() {
    this.taskList.length = 0;
  }
}

const generateProjectID = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};




/***/ }),

/***/ "./src/model/projectRepo.js":
/*!**********************************!*\
  !*** ./src/model/projectRepo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectToRepo: () => (/* binding */ addProjectToRepo),
/* harmony export */   getAllProjects: () => (/* binding */ getAllProjects),
/* harmony export */   getProjectFromID: () => (/* binding */ getProjectFromID),
/* harmony export */   getProjectFromName: () => (/* binding */ getProjectFromName),
/* harmony export */   removeProjectFromRepo: () => (/* binding */ removeProjectFromRepo),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage),
/* harmony export */   updateProjectRepoFromLocalStorage: () => (/* binding */ updateProjectRepoFromLocalStorage)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/model/project.js");

let projects = [];

const addProjectToRepo = (projectToAdd) => {
  projects.push(projectToAdd);
};

const removeProjectFromRepo = (projectID) => {
  let projectIndex = getProjectIndexfromID(projectID);
  if (projectIndex > -1) {
    projects.splice(projectIndex, 1);
  }
};

const getProjectFromID = (projectID) => {
  let projectIndex = getProjectIndexfromID(projectID);
  return projects[projectIndex];
};

const getProjectIndexfromID = (projectID) => {
  return projects.map((project) => project.projectID).indexOf(projectID);
};

const getProjectIndexfromName = (projectName) => {
  return projects.map((project) => project.projectName).indexOf(projectName);
};

const getProjectFromName = (projectName) => {
  let projectIndex = getProjectIndexfromName(projectName);
  if (projectIndex > -1) {
    return projects[projectIndex];
  }
};

const getAllProjects = () => {
  return projects;
};

const updateLocalStorage = () => {
  const allProjects = projects;

  let projectsString = JSON.stringify(allProjects);
  console.log(`projects stringified: ${projectsString}`);

  localStorage.setItem("projects", projectsString);
};

const updateProjectRepoFromLocalStorage = () => {
  let storedProjects = localStorage.getItem("projects");
  const projectsArray = JSON.parse(storedProjects);
  for (let i = 0; i < projectsArray.length; i++) {
    let project = _project__WEBPACK_IMPORTED_MODULE_0__.Project.createFromObject(projectsArray[i]);
    projects.push(project);
  }
};




/***/ }),

/***/ "./src/model/task.js":
/*!***************************!*\
  !*** ./src/model/task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(name, description, dueDate, priority, project, completionDate) {
    this.taskID = generateTaskID();
    this.taskName = name;
    this.taskDescription = description;
    this.taskDueDate = dueDate;
    this.taskPriority = priority;
    this.assignedProject = project;
    this.completionDate = completionDate;
  }

  static createFromObject(obj) {
    return new Task(
      obj.taskName,
      obj.taskDescription,
      obj.taskDueDate,
      obj.taskPriority,
      obj.assignedProject,
      obj.completionDate
    );
  }

  setAssignedProject(projectName) {
    this.assignedProject = projectName;
  }

  setCompletionDate(date) {
    this.completionDate = date;
  }
}



const generateTaskID = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};


/***/ }),

/***/ "./src/view/addProjectForm.js":
/*!************************************!*\
  !*** ./src/view/addProjectForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formSubmitHandler: () => (/* binding */ formSubmitHandler),
/* harmony export */   renderAddProjectForm: () => (/* binding */ renderAddProjectForm)
/* harmony export */ });
/* harmony import */ var _model_projectRepo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projectRepo */ "./src/model/projectRepo.js");
/* harmony import */ var _addTaskForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskForm */ "./src/view/addTaskForm.js");
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectSection */ "./src/view/projectSection.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./src/view/sidebar.js");
/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/project */ "./src/model/project.js");
/* harmony import */ var _controller_taskController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/taskController */ "./src/controller/taskController.js");








const renderAddProjectForm = () => {
  // GET ADD PROJECT FORM
  const addProjectModal = document.querySelector(".add-project-modal");

  // SET TITLE TO 'ADD'
  const formTitle = document.querySelector(".add-project-modal__title");
  formTitle.textContent = "Add";

  // SET SUBMIT BTN TEXT TO 'ADD'
  const addProjectFormSubmitBtn = document.querySelector(
    ".add-project-form__button--add-button"
  );
  addProjectFormSubmitBtn.textContent = "Add";

  // SHOW ADD PROJECT FORM
  addProjectModal.showModal();

  // REMOVE SIDEBAR OUTSIDE CLICK CLOSE
  // This stops the sidebar form closing when clicking through the form
  const sidebar = document.querySelector(".sidebar");
  document.removeEventListener("click", _sidebar__WEBPACK_IMPORTED_MODULE_3__.hideSidebarOnOutsideClick);

  /*
    ----- ADD EVENT LISTENERS -----
  */

  // PROJECT NAME INPUT LISTENER
  const projectNameInput = document.querySelector(
    ".add-project-form__input--project-name"
  );
  projectNameInput.oninput = (e) => {
    handleProjectNameInput(e);
  };

  // CLOSE MODAL LISTENERS
  // Cancel Button Listener
  const cancelAddProjectFormButton = document.querySelector(
    ".add-project-form__button--cancel-button"
  );
  cancelAddProjectFormButton.onclick = (e) => {
    closeModal();
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.toggleSideBar)(sidebar, "close");
  };

  // CLOSE MODAL WHEN CLICK OCCURS OUTSIDE OF MODAL
  /* Added a short timeout before attaching the click event listener to avoid immediate placement during the sidebar opening.
  Without this delay, the listener could inadvertently trigger the sidebar closure, as it's initially triggered by the same button click that opens the sidebar. */
  setTimeout(() => {
    document.addEventListener("click", hideModalOnOutsideClick);
  }, 0);

  //FORM SUBMIT LISTENER
  addProjectFormSubmitBtn.addEventListener("click", formSubmitHandler);
};

const resetSubmitBtnColor = () => {
  const submitBtn = document.querySelector(
    ".add-project-form__button--add-button"
  );

  submitBtn.style.backgroundColor = "rgb(164, 169, 176)";
  submitBtn.style.color = "rgb(255, 255, 255)";
};

/**
 * Update submit button color on project name input to show form validation
 */
const handleProjectNameInput = (e) => {
  const taskNameInput = e.currentTarget;
  const formSubmitBtn = document.querySelector(
    ".add-project-form__button--add-button"
  );
  if (taskNameInput.value != "") {
    formSubmitBtn.style.backgroundColor =
      "var(--form-submit-btn-validation-clr)";
    return;
  }
  formSubmitBtn.style.backgroundColor = "var(--form-submit-btn-clr)";
  return;
};

const closeModal = () => {
  const addProjectModal = document.querySelector(".add-project-modal");
  const addProjectForm = document.querySelector(".modal__add-project-form");
  addProjectModal.close();
  resetSubmitBtnColor();
  addProjectForm.reset();
  document.removeEventListener("click", hideModalOnOutsideClick);
};

/**
 * Close add project form and sidebar when user clicks outside of the form
 */
const hideModalOnOutsideClick = (e) => {
  const sidebar = document.querySelector(".sidebar");
  const addProjectModal = document.querySelector(".add-project-inner-modal");
  const isClickInsideModal = addProjectModal.contains(e.target);
  if (!isClickInsideModal) {
    closeModal();
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.toggleSideBar)(sidebar, "close");
  }
};

const formSubmitHandler = () => {
  const formSubmitBtn = document.querySelector(
    ".add-project-form__button--add-button"
  );
  let projectId = document.querySelector(".section").id;
  const formTitle = document.querySelector(".add-project-modal__title");
  let sidebar = document.querySelector(".sidebar");
  let projectNameValue = document.querySelector(
    ".add-project-form__input--project-name"
  ).value;
  let projectColorValue = document.querySelector(
    ".add-project-form-selector--project-color"
  ).value;
  console.log(
    `Project Name: ${projectNameValue}, Project Color: ${projectColorValue}`
  );

  if ((0,_addTaskForm__WEBPACK_IMPORTED_MODULE_1__.validateForm)(projectNameValue)) {
    if (formTitle.textContent === "Add") {
      let project = new _model_project__WEBPACK_IMPORTED_MODULE_4__.Project(projectNameValue, projectColorValue);
      (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.addProjectToRepo)(project);
      (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
      closeModal();
      (0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.toggleSideBar)(sidebar, "close");
      (0,_projectSection__WEBPACK_IMPORTED_MODULE_2__.reloadProjectSection)(projectNameValue);
      return;
    }
    if (formTitle.textContent === "Edit") {
      let project = (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.getProjectFromID)(projectId);
      project.projectName = projectNameValue;
      project.projectColor = projectColorValue;
      let allProjectTasks = project.taskList;
      if (allProjectTasks.length > 0) {
        allProjectTasks.forEach((task) => {
          task.assignedProject = projectNameValue;
        });
      }
      (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
      console.log((0,_controller_taskController__WEBPACK_IMPORTED_MODULE_5__.getAllTasks)());
      closeModal();
      (0,_sidebar__WEBPACK_IMPORTED_MODULE_3__.toggleSideBar)(sidebar, "close");
      (0,_projectSection__WEBPACK_IMPORTED_MODULE_2__.toggleProjectMenu)();
      (0,_projectSection__WEBPACK_IMPORTED_MODULE_2__.reloadProjectSection)(projectNameValue);
      return;
    }
  }
};


/***/ }),

/***/ "./src/view/addTaskForm.js":
/*!*********************************!*\
  !*** ./src/view/addTaskForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectSelectorOption: () => (/* binding */ createProjectSelectorOption),
/* harmony export */   reloadSectionDisplay: () => (/* binding */ reloadSectionDisplay),
/* harmony export */   renderAddTaskForm: () => (/* binding */ renderAddTaskForm),
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _controller_projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/projectController */ "./src/controller/projectController.js");
/* harmony import */ var _model_projectRepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/projectRepo */ "./src/model/projectRepo.js");
/* harmony import */ var _assets_cancel_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/cancel-icon.svg */ "./src/assets/cancel-icon.svg");
/* harmony import */ var _assets_submit_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/submit-icon.svg */ "./src/assets/submit-icon.svg");
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectSection */ "./src/view/projectSection.js");
/* harmony import */ var _model_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/task */ "./src/model/task.js");
/* harmony import */ var _controller_taskController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controller/taskController */ "./src/controller/taskController.js");
/* harmony import */ var _todaySection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todaySection */ "./src/view/todaySection.js");
/* harmony import */ var _upcomingSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upcomingSection */ "./src/view/upcomingSection.js");
/* harmony import */ var _completedSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./completedSection */ "./src/view/completedSection.js");












const renderAddTaskForm = (e) => {
  // CREATE FORM ELEMENTS
  const addTaskForm = document.createElement("form");
  const formTopSection = createTopSection();
  const formMiddleSection = createMiddleSection(e);
  const formDivider = document.createElement("hr");
  const formBottomSection = createBottomSection();

  // ADD ELEMENT CLASSES
  addTaskForm.classList.add("add-task-form");
  formDivider.classList.add("add-task-form__divider");

  // SET FORM ACTION
  addTaskForm.action = "javascript:void(0);";

  // APPEND ELEMENTS TO FORM
  addTaskForm.append(
    formTopSection,
    formMiddleSection,
    formDivider,
    formBottomSection
  );

  // ADD FORM SUBMIT HANDLER
  addTaskForm.onsubmit = (e) => {
    formSubmitBtnOnClickHandler();
  };

  return addTaskForm;
};

/*
  ------ CREATE FORM SECTIONS ------
*/

/*
  ----- TOP SECTION -----=
*/
const createTopSection = () => {
  // CREATE SECTION CONTAINER
  const formTopSection = document.createElement("div");
  formTopSection.classList.add("add-task-form__top-section");

  // CREATE TASK NAME INPUT
  const taskNameInput = document.createElement("input");
  taskNameInput.type = "text";
  taskNameInput.classList.add(
    "add-task-form__input",
    "add-task-form__input--name"
  );
  taskNameInput.placeholder = "Task Name";

  // ADD TASK NAME INPUT HANDLERS
  taskNameInput.oninput = (e) => {
    taskNameOnInputHandler(e);
  };
  // CREATE TASK DESCRIPTION INPUT
  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.classList.add(
    "add-task-form__input",
    "add-task-form__input--description"
  );
  taskDescriptionInput.placeholder = "Description";

  // APPEND INPUT ELEMENTS TO CONTAINER
  formTopSection.append(taskNameInput, taskDescriptionInput);

  return formTopSection;
};

// FORM VALIDATION UTLITIY FUNCTION
/**
 * Update submit btn background color when name is entered
 * to show form validation
 */
const taskNameOnInputHandler = (e) => {
  const taskNameInput = e.currentTarget;
  const formSubmitBtn = document.querySelector(
    ".submit-buttons__button--submit"
  );
  if (taskNameInput.value != "") {
    formSubmitBtn.style.backgroundColor =
      "var(--form-submit-btn-validation-clr)";
    return;
  }
  formSubmitBtn.style.backgroundColor = "var(--form-submit-btn-clr)";
  return;
};

/*
  ------ MIDDLE SECTION -----
*/
const createMiddleSection = (e) => {
  const sectionName = document.querySelector(".section__title").textContent;
  // CREATE SECTION CONTAINER
  const formMiddleSection = document.createElement("div");
  formMiddleSection.classList.add("add-task-form__middle-section");

  // CREATE DUE DATE INPUT
  const taskDueDateInput = document.createElement("input");
  taskDueDateInput.type = "date";
  taskDueDateInput.classList.add("add-task-form__input--due-date");
  taskDueDateInput.id = "due-date-input";

  // DEFAULT DUE DATE VALUE TO CURRENT DATE ON TODAY SECTION
  let currDateFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.format)(new Date(), "yyyy-MM-dd");
  if (sectionName === "Today") {
    taskDueDateInput.value = currDateFormatted;
  }

  //DEFAULT DUE DATE TO UPCOMING DATE ON UPCOMING SECTION
  let addTaskBtn = e.currentTarget;
  if (sectionName === "Upcoming") {
    let upcomingSectionSplit =
      addTaskBtn.previousSibling.previousSibling.textContent.split(" ");
    let upcomingSectionMonth = upcomingSectionSplit[0];
    let upcomingSectionDay = upcomingSectionSplit[1];
    let upcomingSectionYear = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.format)(new Date(), "yyyy");
    let upcomingSectionDate = new Date(
      `${upcomingSectionMonth} ${upcomingSectionDay} ${upcomingSectionYear}`
    );
    let upcomingDateFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__.format)(upcomingSectionDate, "yyyy-MM-dd");
    taskDueDateInput.value = upcomingDateFormatted;
  }

  // ONLY ALLOW SELECTION FROM CURRENT DATE AND ON
  taskDueDateInput.min = currDateFormatted;

  // CREATE PRIORITY SELECTOR
  const taskPrioritySelector = document.createElement("select");
  taskPrioritySelector.classList.add("add-task-form__input--priority-selector");
  taskPrioritySelector.name = "add-form-input__priority-selector";
  const priorityPlaceholder = document.createElement("option");
  priorityPlaceholder.innerHTML = "Priority";
  taskPrioritySelector.append(priorityPlaceholder);

  // ADD PRIORITY SELECTOR OPTIONS
  const NUMOFPRIORITIES = 4;
  for (let i = 1; i <= NUMOFPRIORITIES; i++) {
    const priorityOption = document.createElement("option");
    priorityOption.value = `Priority ${i}`;
    priorityOption.innerHTML = `Priority ${i}`;
    taskPrioritySelector.append(priorityOption);
  }

  // APPEND ELEMENTS TO CONTAINER
  formMiddleSection.append(taskDueDateInput, taskPrioritySelector);
  return formMiddleSection;
};

/*
  ----- BOTTOM SECTION -----
*/
const createBottomSection = () => {
  // CREATE SECTION ELEMENT
  const formBottomSection = document.createElement("div");
  formBottomSection.classList.add("add-task-form__bottom-section");

  // CREATE PROJECT SELECTOR
  const projectSelector = document.createElement("select");
  projectSelector.classList.add(
    "add-task-form__input",
    "add-task-form__input--project-selector"
  );
  let projectSectionName =
    document.querySelector(".section__title").textContent;
  console.log(projectSectionName);
  console.log(_controller_projectController__WEBPACK_IMPORTED_MODULE_0__.isUserProject(projectSectionName));
  let userProjectOptionAdded = false;
  // Makes the first project option the same as the project section if it is a user added project
  if (
    projectSectionName !== "Inbox" &&
    _controller_projectController__WEBPACK_IMPORTED_MODULE_0__.isUserProject(projectSectionName)
  ) {
    let firstOption = createProjectSelectorOption(projectSectionName);
    projectSelector.append(firstOption);
    userProjectOptionAdded = true;
  }

  // APPEND PROJECTS TO PROJECT SELECTOR
  let projectNames = _controller_projectController__WEBPACK_IMPORTED_MODULE_0__.getProjectNames();
  let numOfProjects = projectNames.length;
  for (let i = 0; i < numOfProjects; i++) {
    /* If statement skips over default projects 'Tomorrow','Upcoming','Completed'
    They are created at index 1-3 of the project array */
    if (i !== 1 && i !== 2 && i !== 3) {
      let projectName = projectNames[i];
      // If statement ensures the project section is not added twice if it is added as first option
      if (
        projectName === projectSectionName &&
        userProjectOptionAdded === true
      ) {
        continue;
      }
      let projectOption = createProjectSelectorOption(projectName);
      projectSelector.append(projectOption);
    }
  }

  // CREATE SUBMIT BUTTONS
  const submitButtons = createSubmitButtons();

  // APPEND ELEMENTS TO SECTION
  formBottomSection.append(projectSelector, submitButtons);
  return formBottomSection;
};

const createSubmitButtons = () => {
  // CREATE SECTION ELEMENT
  const submitButtons = document.createElement("div");
  submitButtons.classList.add("add-task-form__submit-buttons");

  // CREATE CANCEL BUTTON
  const cancelButton = document.createElement("button");
  cancelButton.classList.add(
    "submit-buttons__button",
    "submit-buttons__button--cancel"
  );
  const cancelButtonIcon = document.createElement("img");
  cancelButtonIcon.classList.add("cancel-button__icon");
  cancelButtonIcon.src = _assets_cancel_icon_svg__WEBPACK_IMPORTED_MODULE_2__;
  cancelButtonIcon.alt = "cancel_icon";
  cancelButton.append(cancelButtonIcon);

  // ADD CANCEL BUTTON CLICK HANDLER
  cancelButton.onclick = (e) => {
    cancelBtnOnClickHandler();
  };

  // CREATE SUBMIT BUTTON
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add(
    "submit-buttons__button",
    "submit-buttons__button--submit"
  );
  const submitButtonIcon = document.createElement("img");
  submitButtonIcon.classList.add("submit-button__icon");
  submitButtonIcon.alt = "submit-icon";
  submitButtonIcon.src = _assets_submit_icon_svg__WEBPACK_IMPORTED_MODULE_3__;
  submitButton.append(submitButtonIcon);

  // APPEND BUTTONS TO SECTION
  submitButtons.append(cancelButton, submitButton);
  return submitButtons;
};

const createProjectSelectorOption = (projectName) => {
  const projectOption = document.createElement("option");
  projectOption.value = projectName;
  projectOption.innerHTML = projectName;
  return projectOption;
};

// ----- FORM CANCEL BTN HANDLER -----

const cancelBtnOnClickHandler = () => {
  // const addTaskForm = document.querySelector(".add-task-form");
  // addTaskForm.remove();
  // const addTaskBtn = createAddTaskBtn();
  // RELOAD SECTION DISPLAY
  let displayedSectionName =
    document.querySelector(".section__title").textContent;
  reloadSectionDisplay(displayedSectionName);
};

// ----- FORM SUBMIT BTN HANDLER -----
const formSubmitBtnOnClickHandler = () => {
  //CACHE DOM
  let taskName = document.querySelector(".add-task-form__input--name").value;
  let taskDescription = document.querySelector(
    ".add-task-form__input--description"
  ).value;
  let taskDueDate = document.querySelector(
    ".add-task-form__input--due-date"
  ).value;
  let taskPriority = document.querySelector(
    ".add-task-form__input--priority-selector"
  ).value;
  let selectedProject = document.querySelector(
    ".add-task-form__input--project-selector"
  ).value;

  if (validateForm(taskName)) {
    // CREATE TASK OBJECT
    let task = new _model_task__WEBPACK_IMPORTED_MODULE_5__.Task(
      taskName,
      taskDescription,
      taskDueDate,
      taskPriority,
      selectedProject
    );
    console.log(task); //LOG TASK OBJ *****

    // ADD TASK TO SELECTED PROJECT
    _controller_projectController__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject(task, selectedProject);

    // UPDATE LOCAL STORAGE
    (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();

    // RELOAD SECTION DISPLAY
    let displayedSectionName =
      document.querySelector(".section__title").textContent;
    reloadSectionDisplay(displayedSectionName);
    // Log all tasks for testing *****
    console.log((0,_controller_taskController__WEBPACK_IMPORTED_MODULE_6__.getAllTasks)());
  } else {
    console.log("Form not valid");
  }
};

const validateForm = (requriedFieldValue) => {
  if (requriedFieldValue !== "") {
    return true;
  }
  return false;
};

const reloadSectionDisplay = (displayedSectionName) => {
  if (displayedSectionName === "Today") {
    (0,_todaySection__WEBPACK_IMPORTED_MODULE_7__.renderTodaySection)();
    return;
  }
  if (displayedSectionName === "Upcoming") {
    (0,_upcomingSection__WEBPACK_IMPORTED_MODULE_8__.renderUpcomingSection)();
    return;
  }
  if (displayedSectionName === "Completed") {
    (0,_completedSection__WEBPACK_IMPORTED_MODULE_9__.renderCompletedSection)();
    return;
  }
  (0,_projectSection__WEBPACK_IMPORTED_MODULE_4__.reloadProjectSection)(displayedSectionName);
};


/***/ }),

/***/ "./src/view/completedSection.js":
/*!**************************************!*\
  !*** ./src/view/completedSection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCompletedSection: () => (/* binding */ renderCompletedSection)
/* harmony export */ });
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectSection */ "./src/view/projectSection.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/sub.mjs");
/* harmony import */ var _upcomingSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upcomingSection */ "./src/view/upcomingSection.js");
/* harmony import */ var _controller_projectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/projectController */ "./src/controller/projectController.js");
/* harmony import */ var _controller_taskController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/taskController */ "./src/controller/taskController.js");
/* harmony import */ var _assets_completed_task_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/completed-task-icon.svg */ "./src/assets/completed-task-icon.svg");
/* harmony import */ var _model_projectRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/projectRepo */ "./src/model/projectRepo.js");









const renderCompletedSection = () => {
  // GET MAIN ELEMENT
  const main = document.querySelector(".main");

  // REMOVE PROJECT OPTION BUTTON
  const editProjectBtn = document.querySelector(
    ".header__edit-user-project-btn"
  );
  editProjectBtn.style.display = "none";

  // CLEAR MAIN ELEMENTS TO RESET
  main.innerHTML = "";

  // CREATE SECTION ELEMENT
  const section = (0,_projectSection__WEBPACK_IMPORTED_MODULE_0__.createProjectSection)("Completed");

  // CREATE SECTION TITLE
  const sectionTitle = (0,_projectSection__WEBPACK_IMPORTED_MODULE_0__.createSectionTitle)("Completed");

  const DAYSPERWEEK = 7;
  let thisWeek = [];
  let day1 = new Date();
  thisWeek.push(day1);
  for (let i = 1; i < DAYSPERWEEK; i++) {
    let day = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.sub)(day1, { days: i });
    thisWeek.push(day);
  }

  // CREATE ELEMENT WRAPPER FOR DAY SECTIONS
  const daySections = document.createElement("div");
  daySections.classList.add("section__day-sections--completed");

  // DISPLAY DEFAULT MESSAGE IF NO COMPLETED TASKS EXIST
  let completedTasks = (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_2__.getProjectTasks)("Completed");
  if (completedTasks.length === 0) {
    const defaultMessage = document.createElement("h2");
    defaultMessage.classList.add("completed-section__empty-message");
    defaultMessage.textContent = "No completed tasks";
    const divider = document.createElement("hr");
    divider.classList.add("completed-task-section__default-message-divider");
    let addTaskBtn = (0,_projectSection__WEBPACK_IMPORTED_MODULE_0__.createAddTaskBtn)();
    section.append(sectionTitle, defaultMessage, divider, addTaskBtn);
    main.append(section);
    return;
  }

  // CREATE DAY SECTION FOR EACH DAY
  thisWeek.forEach((day) => {
    let daySection = createDaySection(day);
    if (daySection !== undefined) {
      daySections.append(daySection);
    }
  });

  //REMOVE TASKS COMPLETED MORE THAN 7 DAYS AGO
  removeOldCompletedTasks(day1);

  // APPEND HTML ELEMENTS
  section.append(sectionTitle, daySections);
  main.append(section);
};

const createDaySection = (day) => {
  // CREATE DAY SECTION
  let daySection = document.createElement("div");
  daySection.classList.add("section__day-section");

  // CREATE DAY SECTION TITLE AND APPEND TO SECTION
  let daySectionTitle = (0,_upcomingSection__WEBPACK_IMPORTED_MODULE_1__.createDaySectionTitle)(day);
  daySection.append(daySectionTitle);

  // CREATE AND APPEND TITLE DIVIDER
  const titleDivider = document.createElement("hr");
  titleDivider.classList.add("section-list__title-divider");
  daySection.append(titleDivider);

  // GET COMPLETED TASKS
  let completedTasks = (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_2__.getProjectTasks)("Completed");
  let taskAdded = false;
  completedTasks.forEach((task) => {
    console.log((0,_controller_taskController__WEBPACK_IMPORTED_MODULE_3__.compareTaskDate)(task.completionDate, day));
    if ((0,_controller_taskController__WEBPACK_IMPORTED_MODULE_3__.compareTaskDate)(task.completionDate, day) === 0) {
      // CREATE COMPLETED TASK ELEMENT
      let taskElement = createCompletedTaskElement(task);
      const taskDivider = document.createElement("hr");
      taskDivider.classList.add(
        "section-list__task-divider",
        "section-list_task-divider--completed"
      );
      daySection.append(taskElement, taskDivider);
      taskAdded = true;
    }
  });

  // Only return day section if tasks were added
  if (taskAdded === true) {
    return daySection;
  }
};

/**
 * Creates a completed task element
 * @param {*} task
 * @returns HTML element
 */
const createCompletedTaskElement = (task) => {
  // CREATE TASK ELEMENT
  const taskElement = document.createElement("li");
  taskElement.classList.add("section-list__completed-task");

  // CREATE TASK ICON
  const completedTaskIcon = document.createElement("img");
  completedTaskIcon.classList.add("completed-task__icon");
  completedTaskIcon.src = _assets_completed_task_icon_svg__WEBPACK_IMPORTED_MODULE_4__;

  // CREATE TASK INFO WRAPPER
  const completedTaskInfo = document.createElement("div");
  completedTaskInfo.classList.add("completed-task__info");
  completedTaskInfo.classLi;

  // CREATE USER SPAN
  const completedTaskUser = document.createElement("span");
  completedTaskUser.classList.add("completed-task-info__user");
  completedTaskUser.textContent = "You ";

  // CREATE COMPLETED MESSAGE SPAN
  const completedTaskMessage = document.createElement("span");
  completedTaskMessage.classList.add("completed-task-info__message");
  completedTaskMessage.textContent = "completed a task: ";

  // CREATE TASK NAME SPAN AND ADD TASK NAME
  const completedTaskName = document.createElement("span");
  completedTaskName.classList.add("completed-task-info__task-name");
  let taskName = task.taskName;
  completedTaskName.textContent = taskName;

  // APPEND HTML ELEMENTS
  completedTaskInfo.append(
    completedTaskUser,
    completedTaskMessage,
    completedTaskName
  );

  taskElement.append(completedTaskIcon, completedTaskInfo);

  return taskElement;
};

/**
 * Removes tasks that have been completed more than a week ago from the completed project
 * task list
 * @param {Date} currentDay
 */
const removeOldCompletedTasks = (currentDay) => {
  const DAYSTOKEEP = 6;
  // GET ALL COMPLETED TASKS
  let completedTasks = (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_2__.getProjectTasks)("Completed");
  let oldestDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.sub)(currentDay, { days: DAYSTOKEEP });
  // REMOVE TASKS COMPLETED MORE THAN ONE WEEK AGO
  for (let i = 0; i < completedTasks.length; i++) {
    let task = completedTasks[i];
    if ((0,_controller_taskController__WEBPACK_IMPORTED_MODULE_3__.compareTaskDate)(task.completionDate, oldestDay) === -1) {
      (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_2__.removeTaskFromProject)(task, "Completed");
      // Subtracts i by one because when a task is removed the indices shift by one
      i--;
    }
  }
  // UPDATE LOCAL STORAGE
  (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_5__.updateLocalStorage)();
};


/***/ }),

/***/ "./src/view/editProjectMenu.js":
/*!*************************************!*\
  !*** ./src/view/editProjectMenu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEditProjectListeners: () => (/* binding */ addEditProjectListeners)
/* harmony export */ });
/* harmony import */ var _model_projectRepo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/projectRepo */ "./src/model/projectRepo.js");
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectSection */ "./src/view/projectSection.js");
/* harmony import */ var _addProjectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProjectForm */ "./src/view/addProjectForm.js");




const addEditProjectListeners = () => {
  // CACHE DOM
  const editProjectBtn = document.querySelector(
    ".edit-project-menu__item--edit"
  );
  const deleteProjectBtn = document.querySelector(
    ".edit-project-menu__item--delete"
  );

  /*
    ----- ADD LISTENERS -----
  */

  // EDIT PROJECT
  editProjectBtn.onclick = (e) => {
    handleEditProjectClick();
  };

  // DELETE PROJECT
  deleteProjectBtn.addEventListener("click", handleDeleteProjectClick);
};

const handleDeleteProjectClick = () => {
  console.log("Im being clicked");
  const projectID = document.querySelector(".section").id;
  (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.removeProjectFromRepo)(projectID);
  (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)();
  (0,_projectSection__WEBPACK_IMPORTED_MODULE_1__.toggleProjectMenu)();
  (0,_projectSection__WEBPACK_IMPORTED_MODULE_1__.reloadProjectSection)("Inbox");
};

const handleEditProjectClick = () => {
  // RENDER ADD PROJECT FORM
  (0,_addProjectForm__WEBPACK_IMPORTED_MODULE_2__.renderAddProjectForm)();

  //GET PROJECT FROM ID
  const projectID = document.querySelector(".section").id;
  let project = (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_0__.getProjectFromID)(projectID);

  // SET TITLE TO 'EDIT'
  const formTitle = document.querySelector(".add-project-modal__title");
  formTitle.textContent = "Edit";

  // POPULATE FIELDS
  const projectNameField = document.querySelector(
    ".add-project-form__input--project-name"
  );
  projectNameField.value = project.projectName;

  const projectColorSelector = document.querySelector(
    ".add-project-form-selector--project-color"
  );
  projectColorSelector.value = project.projectColor;

  // UPDATE SUBMIT BTN CLR AND TEXT TO 'SAVE'
  const formSubmitBtn = document.querySelector(
    ".add-project-form__button--add-button"
  );
  formSubmitBtn.textContent = "Save";
  if (projectNameField.value != "") {
    formSubmitBtn.style.backgroundColor =
      "var(--form-submit-btn-validation-clr)";
    return;
  }
};


/***/ }),

/***/ "./src/view/editTask.js":
/*!******************************!*\
  !*** ./src/view/editTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderEditTaskForm: () => (/* binding */ renderEditTaskForm)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _controller_projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/projectController */ "./src/controller/projectController.js");
/* harmony import */ var _controller_taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/taskController */ "./src/controller/taskController.js");
/* harmony import */ var _addTaskForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTaskForm */ "./src/view/addTaskForm.js");
/* harmony import */ var _model_projectRepo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/projectRepo */ "./src/model/projectRepo.js");






const renderEditTaskForm = (e) => {
  // DISPLAY EDIT TASK MODAL
  const editTaskModal = document.querySelector(".edit-task-modal");
  editTaskModal.style.display = "block";

  // CACHE DOM
  const taskNameInput = document.querySelector(".edit-task__task-name");
  const taskDescriptionInput = document.querySelector(
    ".edit-task__task-description"
  );
  const taskProjectSelector = document.querySelector(
    ".edit-task__select-project"
  );
  const taskDueDateSelector = document.querySelector(
    ".edit-task__select-due-date"
  );
  const taskPrioritySelector = document.querySelector(
    ".edit-task__select-priority"
  );

  // GET TASK OBJECT
  let taskID = e.currentTarget.parentElement.id;
  let task = (0,_controller_taskController__WEBPACK_IMPORTED_MODULE_1__.getTaskByID)(taskID);

  // SET TASK NAME AND DESCRIPTION VALUES TO TASK VALUES
  taskNameInput.value = task.taskName;
  taskDescriptionInput.value = task.taskDescription;

  // SET DUE DATE TO TASK DUE DATE VALUE
  taskDueDateSelector.value = task.taskDueDate;
  // ONLY ALLOW SELECTION FROM CURRENT DATE AND ON
  let currDateFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(new Date(), "yyyy-MM-dd");
  taskDueDateSelector.min = currDateFormatted;

  // SET PRIORITY TO TASK PRIORITY VALUE
  taskPrioritySelector.value = task.taskPriority;

  // APPEND PROJECT SELECTOR OPTIONS
  taskProjectSelector.innerHTML = "";
  let projectSectionName =
    document.querySelector(".section__title").textContent;
  let userProjectOptionAdded = false;
  if (projectSectionName !== "Inbox" && (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_0__.isUserProject)(projectSectionName)) {
    let firstOption = (0,_addTaskForm__WEBPACK_IMPORTED_MODULE_2__.createProjectSelectorOption)(projectSectionName);
    taskProjectSelector.append(firstOption);
    userProjectOptionAdded = true;
  }
  let projectNames = (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_0__.getProjectNames)();
  let numOfProjects = projectNames.length;
  for (let i = 0; i < numOfProjects; i++) {
    /* If statement skips over default projects 'Tomorrow','Upcoming','Completed'
    They are created at index 1-3 of the project array */
    if (i !== 1 && i !== 2 && i !== 3) {
      let projectName = projectNames[i];
      // If statement ensures the project section is not added twice if it is added as first option
      if (
        projectName === projectSectionName &&
        userProjectOptionAdded === true
      ) {
        continue;
      }
      let projectOption = (0,_addTaskForm__WEBPACK_IMPORTED_MODULE_2__.createProjectSelectorOption)(projectName);
      taskProjectSelector.append(projectOption);
    }
  }

  // APPEND CLOSE AND UPDATE FORM LISTENER
  const closeButton = document.querySelector(
    ".edit-task-modal__close-modal-btn"
  );

  closeButton.onclick = (e) => {
    handleExitSubmit(task);
  };
};

const handleExitSubmit = (task) => {
  // CACHE DOM
  const form = document.querySelector(".edit-task-form");
  const taskNameInput = document.querySelector(".edit-task__task-name");
  const taskDescriptionInput = document.querySelector(
    ".edit-task__task-description"
  );
  const taskProjectSelector = document.querySelector(
    ".edit-task__select-project"
  );
  const taskDueDateSelector = document.querySelector(
    ".edit-task__select-due-date"
  );
  const taskPrioritySelector = document.querySelector(
    ".edit-task__select-priority"
  );
  let oldTaskProject = task.assignedProject;

  if ((0,_addTaskForm__WEBPACK_IMPORTED_MODULE_2__.validateForm)(taskNameInput)) {
    task.taskName = taskNameInput.value;
    task.taskDescription = taskDescriptionInput.value;
    task.taskDueDate = taskDueDateSelector.value;
    task.taskPriority = taskPrioritySelector.value;
    if (taskProjectSelector.value !== oldTaskProject) {
      let oldProject = (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_3__.getProjectFromName)(oldTaskProject);
      oldProject.removeTask(task.taskID);
      (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(task, taskProjectSelector.value);
      task.assignedProject = taskProjectSelector.value;
    }

    form.reset();
    const editTaskModal = document.querySelector(".edit-task-modal");
    editTaskModal.style.display = "none";
    // RELOAD SECTION DISPLAY
    let displayedSectionName =
      document.querySelector(".section__title").textContent;
    (0,_addTaskForm__WEBPACK_IMPORTED_MODULE_2__.reloadSectionDisplay)(displayedSectionName);
    _model_projectRepo__WEBPACK_IMPORTED_MODULE_3__.updateLocalStorage;
  }
};


/***/ }),

/***/ "./src/view/header.js":
/*!****************************!*\
  !*** ./src/view/header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addHeaderEventListeners: () => (/* binding */ addHeaderEventListeners)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/view/sidebar.js");


const addHeaderEventListeners = () => {
  let sidebar = document.querySelector(".sidebar");
  const toggleSideBarBtn = document.querySelector(".header__open-sidebar-btn");

  toggleSideBarBtn.onclick = (e) => {
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.toggleSideBar)(sidebar, "open");
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.addUserProjectsToSidebar)();
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_0__.addNavListButtonEvents)();
  };
};


/***/ }),

/***/ "./src/view/projectSection.js":
/*!************************************!*\
  !*** ./src/view/projectSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAddTaskBtn: () => (/* binding */ createAddTaskBtn),
/* harmony export */   createProjectSection: () => (/* binding */ createProjectSection),
/* harmony export */   createSectionTitle: () => (/* binding */ createSectionTitle),
/* harmony export */   reloadProjectSection: () => (/* binding */ reloadProjectSection),
/* harmony export */   renderProjectSection: () => (/* binding */ renderProjectSection),
/* harmony export */   toggleProjectMenu: () => (/* binding */ toggleProjectMenu)
/* harmony export */ });
/* harmony import */ var _assets_add_btn_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/add-btn-icon.svg */ "./src/assets/add-btn-icon.svg");
/* harmony import */ var _assets_add_btn_icon_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/add-btn-icon--white.svg */ "./src/assets/add-btn-icon--white.svg");
/* harmony import */ var _controller_projectController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/projectController */ "./src/controller/projectController.js");
/* harmony import */ var _addTaskForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTaskForm */ "./src/view/addTaskForm.js");
/* harmony import */ var _model_projectRepo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/projectRepo */ "./src/model/projectRepo.js");
/* harmony import */ var _editProjectMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editProjectMenu */ "./src/view/editProjectMenu.js");







const renderProjectSection = (projectName) => {
  // GET MAIN ELEMENT
  const main = document.querySelector(".main");

  // CREATE PROJECT SECTION
  const section = createProjectSection(projectName);

  // CREATE SECTION TITLE
  const sectionTitle = createSectionTitle(projectName);

  // CREATE SECTION LIST
  const sectionList = document.createElement("ul");
  sectionList.classList.add("section-list");
  // APPEND TASK ELEMENTS TO LIST
  let taskElements = (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_2__.getHTMLTaskElements)(projectName);
  if (taskElements !== undefined) {
    taskElements.forEach((taskElement) => {
      sectionList.append(taskElement);
      const taskDivider = document.createElement("hr");
      taskDivider.classList.add("section-list__task-divider");
      sectionList.append(taskDivider);
    });
  }

  // CREATE ADD TASK BUTTON
  const addTaskBtn = createAddTaskBtn();

  // IF SECTION IS USER PROJECT ADD OPTIONS BTN TO HEADER TO EDIT/DELETE PROJECT
  console.log(`section id: ${section.id}`);
  if (section.id.length > 1) {
    addOptionsBtnToHeader();
  } else {
    const editProjectBtn = document.querySelector(
      ".header__edit-user-project-btn"
    );
    editProjectBtn.style.display = "none";
  }

  section.append(sectionTitle, sectionList, addTaskBtn);
  main.append(section);
};

const reloadProjectSection = (projectName) => {
  const sectionToUpdate = document.querySelector(".section");
  sectionToUpdate.remove();
  renderProjectSection(projectName);
};

/*
  ----- CREATE PROJECT SECTION -----
*/

const createProjectSection = (projectName) => {
  const section = document.createElement("div");
  section.classList.add("section");
  let projectID = (0,_model_projectRepo__WEBPACK_IMPORTED_MODULE_4__.getProjectFromName)(projectName).projectID;
  section.id = projectID;
  return section;
};

/*
  ----- CREATE SECTION TITLE -----
*/

const createSectionTitle = (projectName) => {
  const sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("section__title");
  sectionTitle.textContent = projectName;
  return sectionTitle;
};

/*
  ----- CREATE ADD TASK BTN -----
*/

const createAddTaskBtn = () => {
  // CREATE BUTTON
  const addTaskBtn = document.createElement("button");
  addTaskBtn.classList.add("section-list__add-task-btn");

  // CREATE PLUS ICON
  const addTaskBtnImg = document.createElement("img");
  addTaskBtnImg.classList.add("add-task-btn__img");
  addTaskBtnImg.src = _assets_add_btn_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  addTaskBtnImg.alt = "plus-sign";

  // CREATE BTNT TEXT
  const addTaskBtnText = document.createElement("span");
  addTaskBtnText.classList.add("add-task-btn__text");
  addTaskBtnText.textContent = "Add task";

  // ADD BTN HOVER AND CLICK HANDLERS
  addBtnIconHoverStyle(addTaskBtn, addTaskBtnImg);
  addTaskBtn.onclick = (e) => {
    handleAddTaskBtnClick(e);
  };

  // APPEND TEXT AND IMAGES TO BTN
  addTaskBtn.append(addTaskBtnImg, addTaskBtnText);
  return addTaskBtn;
};

/*
  ----- ADD TASK BTN EVENT HANDLERS -----
*/
const addBtnIconHoverStyle = (addTaskBtn, addTaskBtnImg) => {
  addTaskBtn.onmouseover = (e) => {
    addTaskBtnImg.src = _assets_add_btn_icon_white_svg__WEBPACK_IMPORTED_MODULE_1__;
  };

  addTaskBtn.onmouseleave = (e) => {
    addTaskBtnImg.src = _assets_add_btn_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  };
};

const handleAddTaskBtnClick = (e) => {
  let section = document.querySelector(".section");
  let addTaskBtn = e.currentTarget;
  let addTaskForm = (0,_addTaskForm__WEBPACK_IMPORTED_MODULE_3__.renderAddTaskForm)(e);
  addTaskBtn.after(addTaskForm);
  let allAddTaskBtns = document.querySelectorAll(".section-list__add-task-btn");
  allAddTaskBtns.forEach((button) => {
    button.remove();
  });
};

// ADD OPTIONS BTN TO HEADER
/**
 * Will add option button to header to edit/delete user projects
 */
const addOptionsBtnToHeader = () => {
  const editProjectBtn = document.querySelector(
    ".header__edit-user-project-btn"
  );
  editProjectBtn.style.display = "block";

  editProjectBtn.onclick = (e) => {
    toggleProjectMenu();
  };
};

const toggleProjectMenu = () => {
  const editProjectMenu = document.querySelector(".edit-project-menu");
  let menuDisplay = editProjectMenu.style.display;
  if (menuDisplay === "" || menuDisplay === "none") {
    editProjectMenu.style.display = "flex";
    (0,_editProjectMenu__WEBPACK_IMPORTED_MODULE_5__.addEditProjectListeners)();
    return;
  }
  if (menuDisplay === "flex") {
    editProjectMenu.style.display = "none";
    return;
  }
};


/***/ }),

/***/ "./src/view/sidebar.js":
/*!*****************************!*\
  !*** ./src/view/sidebar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNavListButtonEvents: () => (/* binding */ addNavListButtonEvents),
/* harmony export */   addUserProjectsToSidebar: () => (/* binding */ addUserProjectsToSidebar),
/* harmony export */   hideSidebarOnOutsideClick: () => (/* binding */ hideSidebarOnOutsideClick),
/* harmony export */   toggleSideBar: () => (/* binding */ toggleSideBar)
/* harmony export */ });
/* harmony import */ var _controller_projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/projectController */ "./src/controller/projectController.js");
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectSection */ "./src/view/projectSection.js");
/* harmony import */ var _todaySection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todaySection */ "./src/view/todaySection.js");
/* harmony import */ var _upcomingSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upcomingSection */ "./src/view/upcomingSection.js");
/* harmony import */ var _completedSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./completedSection */ "./src/view/completedSection.js");
/* harmony import */ var _addProjectForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addProjectForm */ "./src/view/addProjectForm.js");







const addUserProjectsToSidebar = () => {
  let userProjects = (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_0__.getUserProjects)();
  const sidebarProjectList = document.querySelector(".sidebar__list--project");
  sidebarProjectList.innerHTML = "";

  console.log(userProjects); //testing

  userProjects.forEach((project) => {
    let projectListElement = (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_0__.createProjectListElement)(project);
    sidebarProjectList.append(projectListElement);
  });
};

// ADD EVENT LISTENERS TO SIDEBAR
const addNavListButtonEvents = () => {
  const sidebar = document.querySelector(".sidebar");
  const inboxNavBtn = document.querySelector(".nav-list-item__inbox");
  const closeSideBarBtn = document.querySelector(".sidebar__close-sidebar-btn");

  // DISPLAY INBOX LISTENER
  inboxNavBtn.onclick = (e) => {
    renderClickedSection(e, sidebar);
  };

  // DISPLAY TODAY SECTION LISTENER
  const todayNavBtn = document.querySelector(".nav-list-item__today");
  todayNavBtn.onclick = (e) => {
    (0,_todaySection__WEBPACK_IMPORTED_MODULE_2__.renderTodaySection)();
    toggleSideBar(sidebar, "close");
  };

  // DISPLAY UPCOMING LISTENER
  const upcomingNavBtn = document.querySelector(".nav-list-item__upcoming");
  upcomingNavBtn.onclick = (e) => {
    (0,_upcomingSection__WEBPACK_IMPORTED_MODULE_3__.renderUpcomingSection)();
    toggleSideBar(sidebar, "close");
  };

  //DISPLAY COMPLETED SECTION LISTENER
  const completedNavBtn = document.querySelector(".nav-list-item__completed");
  completedNavBtn.onclick = (e) => {
    (0,_completedSection__WEBPACK_IMPORTED_MODULE_4__.renderCompletedSection)();
    toggleSideBar(sidebar, "close");
  };

  // DISPLAY PROJECT SECTIONS LISTENER
  let projectBtns = document.querySelectorAll(".project-list__item");
  console.log(projectBtns);
  projectBtns.forEach((projectBtn) => {
    projectBtn.onclick = (e) => {
      renderClickedSection(e, sidebar);
    };
  });

  // PROJECT LIST DROPDOWN

  // DISPLAY ADD PROJECT MODAL
  const addProjectNavBtn = document.querySelector(
    ".project-menu__btn-icon--add-project"
  );

  addProjectNavBtn.onclick = (e) => {
    (0,_addProjectForm__WEBPACK_IMPORTED_MODULE_5__.renderAddProjectForm)();
  };

  // CLOSE SIDEBAR LISTENERS
  closeSideBarBtn.onclick = (e) => {
    toggleSideBar(sidebar, "close");
  };
  /* Added a short timeout before attaching the click event listener to avoid immediate placement during the sidebar opening.
  Without this delay, the listener could inadvertently trigger the sidebar closure, as it's initially triggered by the same button click that opens the sidebar. 
  This only is needed on smaller screens where the sidebar is an overlay*/
  if (window.innerWidth < 768) {
    setTimeout(() => {
      document.addEventListener("click", hideSidebarOnOutsideClick);
    }, 0);
  }
};

/*
  ----- HELPER FUNCTIONS -----
*/
const toggleSideBar = (sidebar, state) => {
  const main = document.querySelector(".main");
  if (state === "open") {
    if (window.innerWidth >= 768) {
      main.style.marginLeft = "280px";
    }
    sidebar.classList.add("active");
    addNavListButtonEvents();
    return;
  }

  if (state === "close") {
    sidebar.classList.remove("active");
    main.style.marginLeft = "0";
    // Event listener needs to be removed to allow sidebar to be opened again
    document.removeEventListener("click", hideSidebarOnOutsideClick);
    return;
  }
};

const renderClickedSection = (e, sidebar) => {
  let projectListBtn = e.currentTarget;
  let projectName = projectListBtn.children[1].textContent;
  (0,_projectSection__WEBPACK_IMPORTED_MODULE_1__.reloadProjectSection)(projectName);
  toggleSideBar(sidebar, "close");
};

const hideSidebarOnOutsideClick = (e) => {
  const sidebar = document.querySelector(".sidebar");
  const isClickInsideSidebar = sidebar.contains(e.target);
  if (!isClickInsideSidebar) {
    toggleSideBar(sidebar, "close");
  }
};


/***/ }),

/***/ "./src/view/todaySection.js":
/*!**********************************!*\
  !*** ./src/view/todaySection.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTodaySection: () => (/* binding */ renderTodaySection)
/* harmony export */ });
/* harmony import */ var _controller_projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/projectController */ "./src/controller/projectController.js");
/* harmony import */ var _controller_taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/taskController */ "./src/controller/taskController.js");
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectSection */ "./src/view/projectSection.js");




const renderTodaySection = () => {
  (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_0__.clearProjectTaskList)("Today");
  let tasks = (0,_controller_taskController__WEBPACK_IMPORTED_MODULE_1__.getAllTasks)();

  tasks.forEach((task) => {
    let dateComparisonValue = (0,_controller_taskController__WEBPACK_IMPORTED_MODULE_1__.compareTaskDate)(task.taskDueDate, new Date());
    if (dateComparisonValue === 0) {
      (0,_controller_projectController__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(task, "Today");
    }
  });

  (0,_projectSection__WEBPACK_IMPORTED_MODULE_2__.reloadProjectSection)("Today");
};


/***/ }),

/***/ "./src/view/upcomingSection.js":
/*!*************************************!*\
  !*** ./src/view/upcomingSection.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDaySectionTitle: () => (/* binding */ createDaySectionTitle),
/* harmony export */   renderUpcomingSection: () => (/* binding */ renderUpcomingSection)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/add.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/getDay.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isTomorrow.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isYesterday.mjs");
/* harmony import */ var _projectSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectSection */ "./src/view/projectSection.js");
/* harmony import */ var _controller_taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/taskController */ "./src/controller/taskController.js");




/**
 * Render the upcoming section
 */
const renderUpcomingSection = () => {
  // GET MAIN ELEMENT
  const main = document.querySelector(".main");

  // CLEAR MAIN ELEMENTS TO RESET
  main.innerHTML = "";

  // REMOVE PROJECT OPTION BUTTON
  const editProjectBtn = document.querySelector(
    ".header__edit-user-project-btn"
  );
  editProjectBtn.style.display = "none";

  // CREATE SECTION ELEMENT
  const section = (0,_projectSection__WEBPACK_IMPORTED_MODULE_0__.createProjectSection)("Upcoming");

  // CREATE SECTION TITLE
  const sectionTitle = (0,_projectSection__WEBPACK_IMPORTED_MODULE_0__.createSectionTitle)("Upcoming");

  // ADD NEXT 7 DAYS TO ARRAY TO BE DISPLAYED
  const DAYSPERWEEK = 7;
  let thisWeek = [];
  let day1 = new Date();
  thisWeek.push(day1);
  for (let i = 1; i < DAYSPERWEEK; i++) {
    let day = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.add)(day1, { days: i });
    thisWeek.push(day);
  }

  // CREATE ELEMENT WRAPPER FOR DAY SECTIONS
  const daySections = document.createElement("div");
  daySections.classList.add("section__day-sections");

  // CREATE DAY SECTION FOR EACH DAY
  thisWeek.forEach((day) => {
    let daySection = createDaySection(day);
    daySections.append(daySection);
  });

  // APPEND HTML ELEMENTS
  section.append(sectionTitle, daySections);
  main.append(section);
};

// CREATE AND APPEND DAY SECTION
const createDaySection = (day) => {
  // CREATE DAY SECTION
  let daySection = document.createElement("div");
  daySection.classList.add("section__day-section");

  // CREATE DAY SECTION TITLE AND APPEND TO SECTION
  let daySectionTitle = createDaySectionTitle(day);
  daySection.append(daySectionTitle);

  // CREATE AND APPEND TITLE DIVIDER
  const titleDivider = document.createElement("hr");
  titleDivider.classList.add("section-list__title-divider");
  daySection.append(titleDivider);

  //GET ALL TASKS
  let allTasks = (0,_controller_taskController__WEBPACK_IMPORTED_MODULE_1__.getAllTasks)();

  // APPEND TASKS CURRENT DAY TO DAY SECTION
  allTasks.forEach((task) => {
    if ((0,_controller_taskController__WEBPACK_IMPORTED_MODULE_1__.compareTaskDate)(task.taskDueDate, day) === 0) {
      let taskElement = (0,_controller_taskController__WEBPACK_IMPORTED_MODULE_1__.convertTaskToHTML)(task);
      const taskDivider = document.createElement("hr");
      taskDivider.classList.add(
        "section-list__task-divider",
        "section-list_task-divider--upcoming"
      );
      daySection.append(taskElement, taskDivider);
    }
  });

  // CREATE AND APPEND ADD TASK BTN TO DAY SECTION
  const addTaskBtn = (0,_projectSection__WEBPACK_IMPORTED_MODULE_0__.createAddTaskBtn)();
  daySection.append(addTaskBtn);

  return daySection;
};

/**
 *
 * @param day
 * @returns An h2 html title element with the formatted date and day of the week. Used in the upcoming section.
 */
const createDaySectionTitle = (day) => {
  // GET DAY OF WEEK FROM DATE
  let dayOfWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.getDay)(day);
  let dayOfWeekFormatted = formatDayOfWeek(dayOfWeek);

  // FORMAT DATE INTO MMM DD ex: Jan 05
  let dayFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(day, "MMM dd");

  // CREATE SECTION TITLE ELEMENT
  let sectionTitle = document.createElement("h2");
  sectionTitle.classList.add("day-section__title");

  // ADDS TODAY TO THE TITLE TEXT CONTENT IF DATE IS TODAY
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.isToday)(day)) {
    sectionTitle.textContent = `${dayFormatted} ‧ Today ‧  ${dayOfWeekFormatted}`;
    return sectionTitle;
  }

  // ADDS TOMORROW TO TITLE TEXT CONTENT IF DATE IS TOMORROW
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.isTomorrow)(day)) {
    sectionTitle.textContent = `${dayFormatted} ‧ Tomorrow ‧  ${dayOfWeekFormatted}`;
    return sectionTitle;
  }

  // ADDS YESTERDAY TO TITLE TEXT CONTENT IF DATE IS YESTERDAY
  if ((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.isYesterday)(day)) {
    sectionTitle.textContent = `${dayFormatted} ‧ Yesterday ‧  ${dayOfWeekFormatted}`;
    return sectionTitle;
  }

  // ADDS DEFAULT TITLE TEXT CONTENT OF FORMATED DATE AND DAY OF WEEK
  sectionTitle.textContent = `${dayFormatted} ‧ ${dayOfWeekFormatted}`;

  return sectionTitle;
};

/**
 * Converts the number returned by the getDay function to the String formatted day of the week
 * @param dayOfWeekAsNum
 * @returns {string} Day of the Week
 */
const formatDayOfWeek = (dayOfWeekAsNum) => {
  if (dayOfWeekAsNum === 0) {
    return "Sunday";
  }
  if (dayOfWeekAsNum === 1) {
    return "Monday";
  }
  if (dayOfWeekAsNum === 2) {
    return "Tuesday";
  }
  if (dayOfWeekAsNum === 3) {
    return "Wednesday";
  }
  if (dayOfWeekAsNum === 4) {
    return "Thursday";
  }
  if (dayOfWeekAsNum === 5) {
    return "Friday";
  }
  if (dayOfWeekAsNum === 6) {
    return "Saturday";
  }
};


/***/ }),

/***/ "./src/assets/add-btn-icon--white.svg":
/*!********************************************!*\
  !*** ./src/assets/add-btn-icon--white.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40420e7a248b92fafeaf.svg";

/***/ }),

/***/ "./src/assets/add-btn-icon.svg":
/*!*************************************!*\
  !*** ./src/assets/add-btn-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26cb1325b82473bc9592.svg";

/***/ }),

/***/ "./src/assets/calendar-icon.svg":
/*!**************************************!*\
  !*** ./src/assets/calendar-icon.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8c5c1272c06ea7c4459e.svg";

/***/ }),

/***/ "./src/assets/cancel-icon.svg":
/*!************************************!*\
  !*** ./src/assets/cancel-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3355d3e6ac899a85bb5b.svg";

/***/ }),

/***/ "./src/assets/completed-task-icon.svg":
/*!********************************************!*\
  !*** ./src/assets/completed-task-icon.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3e5caca3febd6d06b69.svg";

/***/ }),

/***/ "./src/assets/submit-icon.svg":
/*!************************************!*\
  !*** ./src/assets/submit-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "408dd1fccf82496922b3.svg";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    const originalDate = options._originalDate || date;
    const timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.floor(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.floor(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.floor(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const utcDate = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
const protectedDayOfYearTokens = ["D", "DD"];
const protectedWeekYearTokens = ["YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}

function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}

function throwProtectedError(token, format, input) {
  if (token === "YYYY") {
    throw new RangeError(
      `Use \`yyyy\` instead of \`YYYY\` (in \`${format}\`) for formatting years to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "YY") {
    throw new RangeError(
      `Use \`yy\` instead of \`YY\` (in \`${format}\`) for formatting years to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "D") {
    throw new RangeError(
      `Use \`d\` instead of \`D\` (in \`${format}\`) for formatting days of the month to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  } else if (token === "DD") {
    throw new RangeError(
      `Use \`dd\` instead of \`DD\` (in \`${format}\`) for formatting days of the month to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`,
    );
  }
}


/***/ }),

/***/ "./node_modules/date-fns/add.mjs":
/*!***************************************!*\
  !*** ./node_modules/date-fns/add.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/date-fns/addMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,\\-7
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Add years and months
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const dateWithMonths =
    months || years ? (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__.addMonths)(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays =
    days || weeks ? (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, dateWithDays.getTime() + msToAdd);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);


/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/addMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMonths: () => (/* binding */ addMonths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMonths);


/***/ }),

/***/ "./node_modules/date-fns/compareAsc.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareAsc: () => (/* binding */ compareAsc),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const diff = _dateLeft.getTime() - _dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    startOfDayLeft.getTime() - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    startOfDayRight.getTime() -
    (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");








// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_2__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_3__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  const formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate,
  };

  const result = formatStr
    .match(longFormattingTokensRegExp)
    .map(function (substring) {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_4__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'";
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_5__.formatters[firstCharacter];
      if (formatter) {
        if (
          !options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(substring)
        ) {
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.throwProtectedError)(substring, formatStr, String(date));
        }
        if (
          !options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(substring)
        ) {
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.throwProtectedError)(substring, formatStr, String(date));
        }
        return formatter(
          originalDate,
          substring,
          locale.localize,
          formatterOptions,
        );
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return substring;
    })
    .join("");

  return result;
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDay.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/getDay.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDay: () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const day = _date.getDay();
  return day;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDay);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff =
    (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date).getTime() - (0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff =
    (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options).getTime() -
    (0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/isTomorrow.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isTomorrow.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isTomorrow: () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_1__.addDays)(Date.now(), 1));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTomorrow);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/isYesterday.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/isYesterday.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isYesterday: () => (/* binding */ isYesterday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");
/* harmony import */ var _subDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subDays.mjs */ "./node_modules/date-fns/subDays.mjs");



/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, (0,_subDays_mjs__WEBPACK_IMPORTED_MODULE_1__.subDays)(Date.now(), 1));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isYesterday);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/sub.mjs":
/*!***************************************!*\
  !*** ./node_modules/date-fns/sub.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   sub: () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _subDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subDays.mjs */ "./node_modules/date-fns/subDays.mjs");
/* harmony import */ var _subMonths_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subMonths.mjs */ "./node_modules/date-fns/subMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds subtracted
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */
function sub(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Subtract years and months
  const dateWithoutMonths = (0,_subMonths_mjs__WEBPACK_IMPORTED_MODULE_0__.subMonths)(date, months + years * 12);

  // Subtract weeks and days
  const dateWithoutDays = (0,_subDays_mjs__WEBPACK_IMPORTED_MODULE_1__.subDays)(dateWithoutMonths, days + weeks * 7);

  // Subtract hours, minutes and seconds
  const minutestoSub = minutes + hours * 60;
  const secondstoSub = seconds + minutestoSub * 60;
  const mstoSub = secondstoSub * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, dateWithoutDays.getTime() - mstoSub);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sub);


/***/ }),

/***/ "./node_modules/date-fns/subDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/subDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   subDays: () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");


/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * @returns The new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(date, amount) {
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_0__.addDays)(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subDays);


/***/ }),

/***/ "./node_modules/date-fns/subMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/subMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   subMonths: () => (/* binding */ subMonths)
/* harmony export */ });
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/date-fns/addMonths.mjs");


/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * @returns The new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(date, amount) {
  return (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__.addMonths)(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subMonths);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _model_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/project */ "./src/model/project.js");
/* harmony import */ var _model_projectRepo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/projectRepo */ "./src/model/projectRepo.js");
/* harmony import */ var _model_task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/task */ "./src/model/task.js");
/* harmony import */ var _view_projectSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/projectSection */ "./src/view/projectSection.js");
/* harmony import */ var _view_addTaskForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/addTaskForm */ "./src/view/addTaskForm.js");
/* harmony import */ var _view_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/sidebar */ "./src/view/sidebar.js");
/* harmony import */ var _controller_taskController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controller/taskController */ "./src/controller/taskController.js");
/* harmony import */ var _view_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/header */ "./src/view/header.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/sub.mjs");











// UPDATE PROJECTS IF LOCAL STORAGE IS NOT EMPTY
if (localStorage.getItem("projects") !== null) {
  _model_projectRepo__WEBPACK_IMPORTED_MODULE_2__.updateProjectRepoFromLocalStorage();
} else {
  // CREATE AND ADD DEFAULT PROJECTS
  const inbox = new _model_project__WEBPACK_IMPORTED_MODULE_1__.Project("Inbox", "", "1");
  _model_projectRepo__WEBPACK_IMPORTED_MODULE_2__.addProjectToRepo(inbox);
  _model_projectRepo__WEBPACK_IMPORTED_MODULE_2__.addProjectToRepo(new _model_project__WEBPACK_IMPORTED_MODULE_1__.Project("Today", "", "2"));
  _model_projectRepo__WEBPACK_IMPORTED_MODULE_2__.addProjectToRepo(new _model_project__WEBPACK_IMPORTED_MODULE_1__.Project("Upcoming", "", "3"));
  let completed = new _model_project__WEBPACK_IMPORTED_MODULE_1__.Project("Completed", "", "4");
  _model_projectRepo__WEBPACK_IMPORTED_MODULE_2__.addProjectToRepo(completed);
  // ADD TEST DATA
  let todayFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.format)(new Date(), "yyyy-MM-dd");
  let yesterdayFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.sub)(new Date(), { days: 1 }), "yyyy-MM-dd");
  let twoDaysAgoFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.sub)(new Date(), { days: 2 }), "yyyy-MM-dd");
  let fourDaysAgoFormatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_9__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.sub)(new Date(), { days: 4 }), "yyyy-MM-dd");
  let washCar = new _model_task__WEBPACK_IMPORTED_MODULE_3__.Task(
    "I hope you don't mind",
    "",
    todayFormatted,
    "Priority",
    "Inbox"
  );
  inbox.addTask(washCar);
  inbox.addTask(
    new _model_task__WEBPACK_IMPORTED_MODULE_3__.Task(
      "I have added some tasks",
      "For you to use as examples",
      todayFormatted,
      "Priority 1",
      "Inbox"
    )
  );
  inbox.addTask(new _model_task__WEBPACK_IMPORTED_MODULE_3__.Task("Enjoy!", "", todayFormatted, "Priority 2", "Inbox"));

  //COMPLETED SECTION TESTING
  setTimeout(() => {
    completed.addTask(
      new _model_task__WEBPACK_IMPORTED_MODULE_3__.Task("Scrub", "", "", "Priority", "Completed", yesterdayFormatted)
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new _model_task__WEBPACK_IMPORTED_MODULE_3__.Task("Wash", "", "", "Priority", "Completed", twoDaysAgoFormatted)
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new _model_task__WEBPACK_IMPORTED_MODULE_3__.Task("Rub", "", "", "Priority", "Completed", twoDaysAgoFormatted)
    );
  }, 10);
  setTimeout(() => {
    completed.addTask(
      new _model_task__WEBPACK_IMPORTED_MODULE_3__.Task("Soap", "", "", "Priority", "Completed", fourDaysAgoFormatted)
    );
  }, 10);

  // UPDATE LOCAL STORAGE
  _model_projectRepo__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage();
}

// Show All Projects
console.log(_model_projectRepo__WEBPACK_IMPORTED_MODULE_2__.getAllProjects());

// RENDER STARTING PAGES
(0,_view_projectSection__WEBPACK_IMPORTED_MODULE_4__.renderProjectSection)("Inbox");
(0,_view_header__WEBPACK_IMPORTED_MODULE_8__.addHeaderEventListeners)();

// TOGGLE SIDEBAR ON WINDOW RESIZE
let oldWindowWidth = window.innerWidth;
window.onresize = () => {
  let newWindowWidth = window.innerWidth;
  const sidebar = document.querySelector(".sidebar");
  if (
    newWindowWidth >= 768 &&
    newWindowWidth > oldWindowWidth &&
    oldWindowWidth < 768
  ) {
    (0,_view_sidebar__WEBPACK_IMPORTED_MODULE_6__.toggleSideBar)(sidebar, "open");
    oldWindowWidth = newWindowWidth;
    return;
  }
  if (
    newWindowWidth < 768 &&
    oldWindowWidth > newWindowWidth &&
    oldWindowWidth > 768
  ) {
    (0,_view_sidebar__WEBPACK_IMPORTED_MODULE_6__.toggleSideBar)(sidebar, "close");
    oldWindowWidth = newWindowWidth;
    return;
  }
};

const editTaskModal = document.querySelector(".edit-task-modal");

/**
 * Make task due date change color if within the week or tomorrow and make it say the actual day if within the week
 * Make select 2 box (optional)
 * Add task hover effects
 * Make the add task form automatically choose dates when creating tasks on today and upcoming
 * Add way to update tasks
 */

/**
 * BASIC FEATURES
 * Add way to edit Tasks
 */

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map