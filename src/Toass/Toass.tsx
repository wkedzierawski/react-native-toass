import { useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { styles } from './Toass.styles';
import {
  AppDeviceEmitter,
  EmitterEvent,
} from '../services/AppDeviceEmitter/AppDeviceEmitter';
import type { ToassProps } from './Toass.types';

export const showToass = (message: string) => {
  AppDeviceEmitter.emit(EmitterEvent.SHOW_TOASS, message);
};

export const Toass = ({
  textProps,
  containerProps,
  animatedContainerProps,
  duration = 3000,
  animationDuration = 300,
  leading,
  trailing,
}: ToassProps) => {
  const [message, setMessage] = useState('');

  const [visible, setVisible] = useState(false);

  const opacity = useSharedValue(0);

  useEffect(() => {
    AppDeviceEmitter.on(EmitterEvent.SHOW_TOASS, (payloadMessage: string) => {
      setMessage(payloadMessage);
      setVisible(true);

      setTimeout(() => setVisible(false), duration);
    });
  }, [duration]);

  useEffect(() => {
    opacity.value = withTiming(visible ? 1 : 0, {
      duration: animationDuration,
    });
  }, [animationDuration, opacity, visible]);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const animatedContainerStyles = useMemo(
    () => [styles.wrapper, animatedContainerProps?.style, animatedStyles],
    [animatedContainerProps?.style, animatedStyles]
  );

  const containerStyles = useMemo(
    () => [styles.container, containerProps?.style],
    [containerProps?.style]
  );

  const textStyles = useMemo(
    () => [styles.text, textProps?.style],
    [textProps?.style]
  );

  return (
    <Animated.View
      pointerEvents="none"
      {...animatedContainerProps}
      style={animatedContainerStyles}
    >
      <View {...containerProps} style={containerStyles}>
        {leading}
        <Text {...textProps} style={textStyles}>
          {message}
        </Text>
        {trailing}
      </View>
    </Animated.View>
  );
};
