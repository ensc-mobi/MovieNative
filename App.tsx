import { StyleSheet, View } from "react-native";
import MovieScreen from "./screens/MovieScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <MovieScreen></MovieScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
