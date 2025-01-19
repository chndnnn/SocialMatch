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
  const { user, setAuth } = authState();
  useEffect(() => {
    console.log(user);
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setAuth(session.user.id);
        router.replace("/home");
      } else {
        router.replace("/login");
      }
    });
  }, []);
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
};

export default _layout;
