import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RadioGroup from "react-native-radio-buttons-group";
import { useMemo, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("1");

  const showAlert = () => {
    Alert.alert(
      "Summary",
      `My Name is ${name}, I am ${age} years old. ${
        selectedRadio === "1" ? "I like coffee." : "I hate coffee."
      }`,
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false } // Prevents dismissal by tapping outside
    );
  };

  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Yes",
        color: selectedRadio === "1" ? "#4acaa0ff" : "black",
      },
      {
        id: "2",
        label: "No",
        color: selectedRadio === "2" ? "#4acaa0ff" : "black",
        containerStyle: { marginLeft: 80 },
      },
    ],
    [selectedRadio]
  );
  return (
    <SafeAreaProvider style={{ backgroundColor: "#fff" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.row}>
                <Text style={styles.text}>Your Name:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="John Doe"
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Your Age:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="18"
                  value={age}
                  onChangeText={(text) => setAge(text)}
                />
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Like Coffee?</Text>
                <View style={{ flex: 1 }}>
                  <RadioGroup
                    style={styles.radioGroup}
                    radioButtons={radioButtons}
                    onPress={setSelectedRadio}
                    selectedId={selectedRadio}
                    layout="row"
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={showAlert}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <StatusBar style="auto" />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  textInput: {
    borderColor: "black",
    borderRadius: 2,
    borderWidth: 1,
    padding: 5,
    height: 30,
    margin: 12,
    flex: 1,
  },
  text: {
    fontSize: 20,
    width: 110,
  },
  button: {
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
