import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../components/ScreenWraper";
import Icons from "../assets/Icons/Index";
import { useState } from "react";
import Laoding from "../components/Loading";

const Index = () => {
  const [show, setShow] = useState(false);

  return (
    <ScreenWrapper>
      <View className="flex-1 justify-center items-center">
        <Laoding color="green" />

        {/* This code is only to resolve the error facing where custom component style is not visible */}
        {show && (
          <View>
            <TouchableOpacity className="flex border border-green-500 w-[80%] bg-green-500  mb-1 items-center py-3 rounded-xl">
              {true ? (
                <Text className="text-white tracking-wide">
                  Getting started
                </Text>
              ) : (
                <Laoding size="small" color="green" />
              )}
            </TouchableOpacity>
            <View className="w-[90%]  border border-neutral-400 bg-neutral-200 rounded-xl gap-2 p-2 flex flex-row items-center">
              <View className="flex-shrink ">
                <Icons name={icon} />
              </View>
              <TextInput
                className="flex-1"
                placeholder={placeholder || "Type here..."}
                placeholderTextColor="gray"
                secureTextEntry={secure}
              />
            </View>
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default Index;
