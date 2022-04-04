import { ReactNode } from 'react';
import { FlexProps } from '@chakra-ui/react';
declare type IndicatorProps = {
    activeColor?: string;
    inactiveColor?: string;
};
export declare type ComponentCallbackArgs = {
    currentStory: number;
    storiesCount: number;
};
declare type ComponentsProps = {
    renderTopBar?: (args: ComponentCallbackArgs) => JSX.Element;
    renderBottomBar?: (args: ComponentCallbackArgs) => JSX.Element;
};
export interface StoriesProps extends FlexProps {
    children: ReactNode[];
    storyDuration?: number;
    onStoriesCompleted?: () => void;
    indicator?: IndicatorProps;
    components?: ComponentsProps;
    isDragging?: boolean;
    onStoryChange?: (storyId: number) => void;
}
declare const Stories: ({ children, storyDuration, onStoriesCompleted, indicator, components, isDragging, onStoryChange, ...rest }: StoriesProps) => JSX.Element;
export default Stories;
