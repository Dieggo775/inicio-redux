import { decrement, increment } from "@/src/store/slices/counter-slice";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";

export const CounterScreen = () => {
  const count = useSelector((state) => state?.counter?.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => dispatch(increment())}
        style={styles.contentButton}
      >
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}>{count}</Text>
      <TouchableOpacity
        onPress={() => dispatch(decrement())}
        style={styles.contentRemoveButton}
      >
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
