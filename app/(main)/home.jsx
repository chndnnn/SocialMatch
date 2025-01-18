import { Pressable, Text } from "react-native";
import { View } from "react-native";
import { authState } from "../../Context/authContext";
import { useRouter } from "expo-router";

const Home = () => {
  const { user, setAuth } = authState();
  const router = useRouter();
  function onLogutClick() {
    setAuth(null);
    router.replace("/login");
  }
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={() => onLogutClick()}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Home;
