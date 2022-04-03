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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CloseIcon } from '@chakra-ui/icons';
import { IconButton, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Stories from '../Stories';
const ModalStories = (_a) => {
    var { isOpen, onClose } = _a, rest = __rest(_a, ["isOpen", "onClose"]);
    return (_jsxs(Modal, Object.assign({ isOpen: isOpen, onClose: onClose, motionPreset: "slideInBottom" }, { children: [_jsx(ModalOverlay, {}), _jsx(IconButton, { position: "absolute", top: "1rem", right: "1rem", icon: _jsx(CloseIcon, {}), "aria-label": "Close", zIndex: 1401, onClick: onClose, borderRadius: "50%", variant: "outline", colorScheme: "teal", color: "teal.300", size: "sm" }), _jsx(ModalContent, Object.assign({ backgroundColor: "transparent", boxShadow: "none" }, { children: _jsx(Stories, Object.assign({}, rest)) }))] })));
};
export default ModalStories;
