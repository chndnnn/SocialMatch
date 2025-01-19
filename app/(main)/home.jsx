import { Pressable, Text } from "react-native";
import { View } from "react-native";
import { authState } from "../../Context/authContext";
import { useRouter } from "expo-router";
import ScreenWrapper from "../../components/ScreenWraper";
import { supabase } from "../../lib/supabase";

const Home = () => {
  const { user, setAuth } = authState();
  const router = useRouter();
  function onLogutClick() {
    setAuth(null);
    const { error } = supabase.auth.signOut();
    if (error) {
      Alert.alert("Signout", "Error while signing out");
    }
  }
  return (
    <ScreenWrapper>
      <View>
        <Text>Home</Text>
        <Pressable onPress={() => onLogutClick()}>
          <Text>Logout</Text>
          <Text>{user}</Text>
        </Pressable>
      </View>
    </ScreenWrapper>
  );
};

export default Home;
