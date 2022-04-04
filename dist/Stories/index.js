var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { useEffect, useState } from 'react';
import { Box, AspectRatio, Flex, HStack } from '@chakra-ui/react';
import { install } from '@github/hotkey';
import { motion, useAnimation } from 'framer-motion';
const MotionBox = motion(Box);
const Stories = (_a) => {
    var { children, aspectRatio = 0.75, storyDuration, onStoriesCompleted, indicator, components } = _a, rest = __rest(_a, ["children", "aspectRatio", "storyDuration", "onStoriesCompleted", "indicator", "components"]);
    const [currentStoryId, setCurrentStoryId] = useState(0);
    const isStoryActive = (storyId) => storyId === currentStoryId;
    const wasStoryShown = (storyId) => storyId < currentStoryId;
    const hasPreviousStory = currentStoryId > 0;
    const hasNextStory = currentStoryId < children.length - 1;
    const isLastStory = currentStoryId === children.length - 1;
    const TopBar = components === null || components === void 0 ? void 0 : components.renderTopBar;
    const BottomBar = components === null || components === void 0 ? void 0 : components.renderBottomBar;
    const indicatorAnimation = useAnimation();
    const runIndicatorAnimation = () => __awaiter(void 0, void 0, void 0, function* () {
        indicatorAnimation.set({
            width: '1%'
        });
        yield indicatorAnimation.start({
            width: '100%',
            transition: {
                duration: storyDuration,
                ease: 'linear'
            }
        });
    });
    const changeStory = (storyId) => {
        indicatorAnimation.stop();
        indicatorAnimation.set({
            width: '100%'
        });
        setCurrentStoryId(storyId);
    };
    const goBack = () => {
        if (!hasPreviousStory)
            return;
        changeStory(currentStoryId - 1);
    };
    const goNext = () => {
        if (!hasNextStory)
            return;
        changeStory(currentStoryId + 1);
    };
    useEffect(() => {
        for (const el of document.querySelectorAll('[data-hotkey]')) {
            install(el);
        }
    }, []);
    useEffect(() => {
        if (!storyDuration)
            return;
        const run = () => __awaiter(void 0, void 0, void 0, function* () {
            yield runIndicatorAnimation();
            if (isLastStory) {
                onStoriesCompleted && onStoriesCompleted();
            }
            goNext();
        });
        run();
        return () => indicatorAnimation.stop();
    }, [currentStoryId]);
    return (_jsx(AspectRatio, Object.assign({ ratio: aspectRatio }, { children: _jsxs(Flex, Object.assign({ direction: "column", backgroundColor: "white", borderRadius: "1rem", position: "relative" }, rest, { children: [_jsx(HStack, Object.assign({ width: "100%", padding: "0.5rem 0.75rem" }, { children: children.map((_, storyId) => {
                        const activeOrShown = isStoryActive(storyId) || wasStoryShown(storyId);
                        const indicatorColor = activeOrShown
                            ? (indicator === null || indicator === void 0 ? void 0 : indicator.activeColor) || 'teal.400'
                            : (indicator === null || indicator === void 0 ? void 0 : indicator.inactiveColor) || 'gray.200';
                        return (_jsx(Box, Object.assign({ flex: 1, padding: "0.5rem 0.125rem", cursor: "pointer", onClick: () => changeStory(storyId) }, { children: _jsx(Box, Object.assign({ height: "0.25rem", backgroundColor: (indicator === null || indicator === void 0 ? void 0 : indicator.inactiveColor) || 'gray.200', borderRadius: "0.25rem", position: "relative" }, { children: _jsx(MotionBox, { height: "0.25rem", backgroundColor: indicatorColor, borderRadius: "0.25rem", position: "absolute", top: 0, left: 0, width: wasStoryShown(storyId) || !storyDuration ? '100%' : '1%', animate: isStoryActive(storyId) ? indicatorAnimation : null }) })) }), storyId));
                    }) })), _jsxs(Flex, Object.assign({ direction: "column", flex: 1, position: "relative", width: "100%", padding: "0 1rem" }, { children: [TopBar && _jsx(TopBar, { currentStory: currentStoryId + 1, storiesCount: children.length }), _jsxs(Box, Object.assign({ flex: 1, position: "relative" }, { children: [children[currentStoryId], _jsx(Box, { position: "absolute", top: 0, left: 0, bottom: 0, right: "50%", cursor: "pointer", onClick: goBack, "data-hotkey": "ArrowLeft" }), _jsx(Box, { position: "absolute", top: 0, left: "50%", bottom: 0, right: 0, cursor: "pointer", onClick: goNext, "data-hotkey": "ArrowRight" })] })), BottomBar && _jsx(BottomBar, { currentStory: currentStoryId + 1, storiesCount: children.length })] }))] })) })));
};
export default Stories;
