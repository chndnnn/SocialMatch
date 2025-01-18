import { Stack, useRouter } from "expo-router";
import "../global.css";
import AuthContextProvider, { authState } from "../Context/authContext";
import { useEffect } from "react";
import { supabase } from "../lib/supabase";

const _layout = () => {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
};

const MainLayout = () => {
  const router = useRouter();
  const { user } = authState();
  useEffect(() => {
    console.log(user);
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace("/home");
      }
    });
  }, []);
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
};

export default _layout;
