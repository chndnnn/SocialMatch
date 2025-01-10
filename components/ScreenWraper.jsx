import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({ children }) => {
  const { top } = useSafeAreaInsets();
  const paddingTop = top > 0 ? top : 10;
  return <View style={{ flex: 1, paddingTop }}>{children}</View>;
};

export default ScreenWrapper;
