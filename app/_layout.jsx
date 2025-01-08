import { Stack } from "expo-router";
import "../global.css";

const _Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="index" />
      <Stack.Screen name="movie" /> */}
    </Stack>
  );
};

export default _Layout;
