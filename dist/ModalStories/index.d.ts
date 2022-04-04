/// <reference types="react" />
import { ModalContentProps } from '@chakra-ui/react';
import { StoriesProps } from '../Stories/index';
interface ModalStoriesProps extends StoriesProps {
    isOpen: boolean;
    onClose: () => void;
    modalContentProps?: ModalContentProps;
}
declare const ModalStories: ({ isOpen, onClose, modalContentProps, ...rest }: ModalStoriesProps) => JSX.Element;
export default ModalStories;
