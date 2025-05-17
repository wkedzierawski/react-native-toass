import type { TextProps, ViewProps } from 'react-native';
import type { AnimatedProps } from 'react-native-reanimated';

export type ToassProps = {
  textProps?: TextProps;
  containerProps?: ViewProps;
  animatedContainerProps?: AnimatedProps<ViewProps>;
  onShowToass?: () => void;
  onHideToass?: () => void;
  duration?: number;
  animationDuration?: number;
};
