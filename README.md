# 📣 react-native-toass

A simple toast (notification) implementation for **React Native** with animated appearance using [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated). Works on both **iOS** and **Android**.

<img src="https://github.com/user-attachments/assets/48bb3389-27f3-4f7a-99a8-6546d4dc6197" alt="toass"/>

## ✨ Features


- Global toass trigger using an internal event emitter
- Fade-in/fade-out animation using `react-native-reanimated`
- Fully customizable styles and props
- Works out-of-the-box with React Native projects

---

## 📦 Installation

```sh
npm install react-native-toass
# or
yarn add react-native-toass
```

## Usage

```
import { Toass } from 'react-native-toass';

export default function App() {
  return (
    <>
      {/* Your app components */}
      <Toass />
    </>
  );
}
```


```
import { showToass } from 'react-native-toass';

showToass('Hello from anywhere in the app!');
```


## API

### `<Toass />` Props

| Prop                    | Type                                | Description                                                                 |
|-------------------------|-------------------------------------|-----------------------------------------------------------------------------|
| `textProps`             | `TextProps`                         | Props passed to the inner `<Text>` component (e.g., `style`, `numberOfLines`). |
| `containerProps`        | `ViewProps`                         | Props passed to the outer `<View>` container wrapping the toast message.   |
| `animatedContainerProps`| `AnimatedProps<ViewProps>`          | Props for the animated wrapper `<Animated.View>`, such as `entering` or `exiting`. |
| `duration`              | `number`                            | Duration (in milliseconds) the toast stays visible. Default is `3000`.     |
| `animationDuration`     | `number`                            | Duration of the show/hide animation (in milliseconds). Default is `300`.   |
| `leading`               | `ReactNode`                         | Element rendered before the message text (e.g., icon).                     |
| `trailing`              | `ReactNode`                         | Element rendered after the message text (e.g., close button, icon).        |
