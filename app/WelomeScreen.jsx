const { useRouter } = require("expo-router");
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";

const WelomeScreen = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  function onLoginPress() {
    router.push({ pathname: "/login" });
  }
  return (
    <View className="flex-1">
      <Image
        className=" w-full h-[70%]"
        source={require("./../assets/images/IndexImg.jpg")}
      ></Image>
      <View className="flex-1  flex-col justify-around">
        <View>
          <View className="flex items-center">
            <Text className="text-4xl font-bold">HelloVoice!</Text>
          </View>
          <View className="flex items-center">
            <Text className="">Where every thought finds a home and</Text>
            <Text className="">every image tells a story</Text>
          </View>
        </View>
        <View className="flex items-center ">
          <CustomButton loading={loading} name={"Getting Started"} />
          <View className="flex flex-row gap-1">
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={onLoginPress}>
              <Text className="font-semibold text-blue-700">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelomeScreen;
