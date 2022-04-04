/// <reference types="react" />
import { StoriesProps } from '../Stories/index';
interface ModalStoriesProps extends StoriesProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const ModalStories: ({ isOpen, onClose, ...rest }: ModalStoriesProps) => JSX.Element;
export default ModalStories;
