import { View, StyleSheet, Button } from 'react-native';
import { showToass, Toass } from 'react-native-toass';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Button title="Show toass" onPress={() => showToass('Hello world!')} />
      </View>
      <Toass />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 50,
  },
});
