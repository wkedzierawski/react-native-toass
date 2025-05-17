# 📣 react-native-toass

A simple toast (notification) implementation for **React Native** with animated appearance using [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated). Works on both **iOS** and **Android**.

<img src="https://github.com/user-attachments/assets/48bb3389-27f3-4f7a-99a8-6546d4dc6197" alt="toass"/>

## ✨ Features


- Global toast trigger using an internal event emitter
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
