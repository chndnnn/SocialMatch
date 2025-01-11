import { Text, TextInput, View } from "react-native";
import Icons from "../assets/Icons/Index";

const CustomInput = () => {
  return (
    <View className="w-full bg-gray-400 gap-2 p-2 flex flex-row items-center rounded-full border border-gray-500">
      <View className="flex-shrink bg-neutral-700">
        <Icons name={"HomeIcon"} />
      </View>
      <TextInput
        className="flex-1 text-white bg-neutral-700"
        placeholder="Type here"
        placeholderTextColor="gray"
      />
    </View>
  );
};

export default CustomInput;
