import { useRouter } from "expo-router";
import Icons from "../assets/Icons/Index";
import ScreenWrapper from "../components/ScreenWraper";
import { Pressable, Text, View } from "react-native";
import CustomInput from "../components/CustomInput";

const Login = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <View className="flex-1 border border-red-500 p-2">
        <View className="mb-2">
          <Pressable
            onPress={() => router.back()}
            className="bg-gray-300 p-2 rounded-2xl self-start"
          >
            <Icons name={"Back"} />
          </Pressable>
        </View>
        <View className=" flex-1 border border-green-500">
          <View className="flex flex-col gap-2">
            <Text className="font-bold text-4xl">Hey,</Text>
            <Text className="font-bold text-4xl">Welcome back!</Text>
          </View>
          <View className="flex-1 border border-red-500">
            <Text>Please Login to continue</Text>
            <CustomInput />
            <CustomInput />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
