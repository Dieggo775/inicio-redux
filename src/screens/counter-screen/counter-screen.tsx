import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const CounterScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contentButton}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}>0</Text>
      <TouchableOpacity style={styles.contentRemoveButton}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
