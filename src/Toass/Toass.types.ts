import type { ReactNode } from 'react';
import type { TextProps, ViewProps } from 'react-native';
import type { AnimatedProps } from 'react-native-reanimated';

export type ToassProps = {
  textProps?: TextProps;
  containerProps?: ViewProps;
  animatedContainerProps?: AnimatedProps<ViewProps>;
  duration?: number;
  animationDuration?: number;
  leading?: ReactNode;
  trailing?: ReactNode;
};
