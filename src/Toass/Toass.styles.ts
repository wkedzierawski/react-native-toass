import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 50,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: 15,
    gap: 4,
  },
  text: {
    color: 'white',
  },
});
