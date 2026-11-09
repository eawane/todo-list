import { StyleSheet, Text, View } from 'react-native';

export default function Task({ text }) {
  return (
    <View style={styles.card}>
      <View style={styles.square} />
      <Text style={styles.label}>{text}</Text>
      <View style={styles.circle} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#B8E4FA',
    borderRadius: 5,
    marginRight: 15,
  },
  label: {
    flex: 1,
  },
  circle: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderColor: '#55BCF6',
    borderRadius: 6,
  },
});