import { useRouter } from "expo-router";
import Icons from "../assets/Icons/Index";
import ScreenWrapper from "../components/ScreenWraper";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function onloginClick() {
    if (!email && !password) {
      Alert.alert("Login", "Please fill all the fields");
    }
  }

  return (
    <ScreenWrapper>
      <View className="flex-1  p-2">
        <View className="mb-10">
          <Pressable
            onPress={() => router.back()}
            className="bg-gray-300 p-2 rounded-2xl self-start"
          >
            <Icons name={"Back"} />
          </Pressable>
        </View>
        <View className=" flex-1 ">
          <View className="flex flex-col gap-2">
            <Text className="font-bold text-4xl">Hey,</Text>
            <Text className="font-bold text-4xl">Welcome back!</Text>
          </View>
          <View className="flex-1 mt-10 items-center gap-5 ">
            <Text className="">Please Login to continue</Text>
            <CustomInput
              icon={"Email"}
              placeholder={"Email"}
              value={email}
              onChange={(e) => setEmail(e)}
            />
            <CustomInput
              icon={"Password"}
              value={password}
              placeholder={"Password"}
              secureTextEntry={true}
              viewPass={true}
              onChange={(e) => setPassword(e)}
            />
            <Text className="text-blue-500">Forgot Password?</Text>
            <CustomButton name={"Login"} onClick={onloginClick} />

            <View className="flex flex-row gap-1">
              <Text>Dont have acount?</Text>
              <Pressable onPress={() => router.push("/Signup")}>
                <Text className="text-blue-500">Create one</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
