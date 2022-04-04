import { ReactNode } from 'react';
import { FlexProps } from '@chakra-ui/react';
declare type IndicatorProps = {
    activeColor?: string;
    inactiveColor?: string;
};
declare type ComponentCallbackArgs = {
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
    aspectRatio?: number;
    indicator?: IndicatorProps;
    components?: ComponentsProps;
}
declare const Stories: ({ children, aspectRatio, storyDuration, onStoriesCompleted, indicator, components, ...rest }: StoriesProps) => JSX.Element;
export default Stories;
