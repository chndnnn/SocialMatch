import { useRouter } from "expo-router";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../components/ScreenWraper";

const Index = () => {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View>
        <Text onPress={() => router.push({ pathname: "/WelomeScreen" })}>
          Welcome
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default Index;
