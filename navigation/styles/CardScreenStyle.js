import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
      borderBottomWidth: 2, // Add a bottom border
      borderBottomColor: '#ccc', // Set the bottom border color
    padding: 8,
    fontSize: 16,
  },
  focusedInput: {
    borderBottomWidth: 3, // Increase the border width for the focused state
    borderBottomColor: '#ccc', // Change the border color for the focused state
    padding: 8,
    fontSize: 16,
  },
});

export default styles;