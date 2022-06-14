'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const Button = ({
  onClick,
  children,
  isSelected
}) => /*#__PURE__*/React__default["default"].createElement("button", {
  style: {
    border: 0,
    backgroundColor: isSelected ? "rebeccapurple" : "hotpink",
    color: isSelected ? "white" : "black",
    padding: "12px 24px",
    margin: "12px",
    borderRadius: "3px"
  },
  onClick: onClick
}, children);

const Alert = ({
  onClick,
  children,
  isSelected
}) => /*#__PURE__*/React__default["default"].createElement("button", {
  style: {
    border: 0,
    backgroundColor: isSelected ? "rebeccapurple" : "hotpink",
    color: isSelected ? "white" : "black",
    padding: "12px 24px",
    margin: "12px",
    borderRadius: "3px"
  },
  onClick: onClick
}, children);

exports.Alert = Alert;
exports.Button = Button;
