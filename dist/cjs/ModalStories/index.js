"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const icons_1 = require("@chakra-ui/icons");
const react_1 = require("@chakra-ui/react");
const Stories_1 = require("../Stories");
const ModalStories = (_a) => {
    var { isOpen, onClose } = _a, rest = __rest(_a, ["isOpen", "onClose"]);
    return ((0, jsx_runtime_1.jsxs)(react_1.Modal, Object.assign({ isOpen: isOpen, onClose: onClose, motionPreset: "slideInBottom" }, { children: [(0, jsx_runtime_1.jsx)(react_1.ModalOverlay, {}), (0, jsx_runtime_1.jsx)(react_1.IconButton, { position: "absolute", top: "1rem", right: "1rem", icon: (0, jsx_runtime_1.jsx)(icons_1.CloseIcon, {}), "aria-label": "Close", zIndex: 1401, onClick: onClose, borderRadius: "50%", variant: "outline", colorScheme: "teal", color: "teal.300", size: "sm" }), (0, jsx_runtime_1.jsx)(react_1.ModalContent, Object.assign({ backgroundColor: "transparent", boxShadow: "none" }, { children: (0, jsx_runtime_1.jsx)(Stories_1.default, Object.assign({}, rest)) }))] })));
};
exports.default = ModalStories;
