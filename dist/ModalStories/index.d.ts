/// <reference types="react" />
import { ModalContentProps } from '@chakra-ui/react';
import { StoriesProps, ComponentCallbackArgs } from '../Stories/index';
interface ModalStoriesProps extends StoriesProps {
    isOpen: boolean;
    onClose: () => void;
    modalContentProps?: ModalContentProps;
    onDragUp?: (args: ComponentCallbackArgs) => void;
    aspectRatio?: number;
}
declare const ModalStories: ({ isOpen, onClose, modalContentProps, onDragUp, children, aspectRatio, ...rest }: ModalStoriesProps) => JSX.Element;
export default ModalStories;
