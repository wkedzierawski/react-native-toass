import { useEffect, useState } from 'react';
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

  return (
    <Animated.View
      style={[styles.wrapper, animatedStyles]}
      pointerEvents="none"
      {...animatedContainerProps}
    >
      <View style={styles.container} {...containerProps}>
        <Text style={styles.text} {...textProps}>
          {message}
        </Text>
      </View>
    </Animated.View>
  );
};
