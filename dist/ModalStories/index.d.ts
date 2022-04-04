/// <reference types="react" />
import { StoriesProps } from '../Stories';
interface ModalStoriesProps extends StoriesProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const ModalStories: ({ isOpen, onClose, ...rest }: ModalStoriesProps) => JSX.Element;
export default ModalStories;
