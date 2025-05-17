import { DeviceEventEmitter } from 'react-native';

export enum EmitterEvent {
  SHOW_TOASS = 'SHOW_TOASS',
}

type EmitterPayload = {
  [EmitterEvent.SHOW_TOASS]: string;
};

export class AppDeviceEmitter {
  public static emit<T extends EmitterEvent>(
    eventName: T,
    data?: EmitterPayload[T]
  ) {
    DeviceEventEmitter.emit(eventName, data);
  }

  public static on = <T extends EmitterEvent>(
    eventName: T,
    callback: (data: EmitterPayload[T]) => void
  ) => {
    const subscription = DeviceEventEmitter.addListener(eventName, callback);

    return () => subscription.remove();
  };
}
