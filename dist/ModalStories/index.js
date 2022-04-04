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
import * as React from 'react';
import { CloseIcon } from '@chakra-ui/icons';
import { IconButton, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import Stories from '../Stories/index';
import { motion } from 'framer-motion';
const CLOSE_DRAG_THRESHOLD = 120;
const DRAG_END_PROPAGATION_TIMEOUT = 100;
const MotionModalContent = motion(ModalContent);
const ModalStories = (_a) => {
    var { isOpen, onClose, modalContentProps } = _a, rest = __rest(_a, ["isOpen", "onClose", "modalContentProps"]);
    const [isDragging, setIsDragging] = React.useState(false);
    const onDragEnd = (_, info) => {
        setTimeout(() => {
            setIsDragging(false);
        }, DRAG_END_PROPAGATION_TIMEOUT);
        if (info.offset.y > CLOSE_DRAG_THRESHOLD)
            onClose();
    };
    return (_jsxs(Modal, Object.assign({ isOpen: isOpen, onClose: onClose, motionPreset: "slideInBottom", size: "full" }, { children: [_jsx(ModalOverlay, {}), _jsx(IconButton, { display: ['none', 'block', 'block'], position: "absolute", top: "1rem", right: "1rem", icon: _jsx(CloseIcon, {}), "aria-label": "Close", zIndex: 1401, onClick: onClose, borderRadius: "50%", variant: "outline", colorScheme: "teal", color: "teal.300", size: "sm" }), _jsx(MotionModalContent, Object.assign({ drag: "y", dragPropagation: true, dragConstraints: { top: 0, bottom: 0 }, onDragStart: () => setIsDragging(true), onDragEnd: onDragEnd, boxShadow: "none", margin: [0, '3.75rem auto', '3.75rem auto'], maxWidth: "32rem", backgroundColor: "transparent" }, modalContentProps, { children: _jsx(Stories, Object.assign({}, rest, { flex: 1, isDragging: isDragging, borderRadius: [0, '1rem', '1rem'] })) }))] })));
};
export default ModalStories;
