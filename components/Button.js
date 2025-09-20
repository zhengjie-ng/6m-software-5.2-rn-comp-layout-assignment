import { Pressable, Text, StyleSheet } from "react-native";

function Button({ children, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: "black",
    borderRadius: 2,
    borderWidth: 1,
    padding: 15,
    backgroundColor: "white",
    alignItems: "center",
    margin: 12,
    width: "90%",
  },
  buttonText: {
    fontSize: 20,
  },
});

export default Button;
