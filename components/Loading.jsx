import { ActivityIndicator, View } from "react-native";

const Laoding = ({ size = "large", color = "white" }) => {
  return (
    <View>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};
export default Laoding;
