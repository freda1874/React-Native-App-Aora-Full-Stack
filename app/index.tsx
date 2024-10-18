import { ScrollView, View, Image, Text } from 'react-native';
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton } from "../components";
import { images } from "../constants"
import { useGlobalContext } from '../context/GlobalProvider';
import { isLoaded } from 'expo-font';
export default function App() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{
        height: "100%",
      }}>
        <View className="w-full flex justify-center items-center h-full px-4 ">
          <Image source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain" />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain" />


          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where Creativity Inspires Innovation: Discover Endless Possibilities with Freda's app Aora </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
            textStyles={undefined}
            isLoading={isLoaded} />
        </View>
      </ScrollView >

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView >
  );
}
