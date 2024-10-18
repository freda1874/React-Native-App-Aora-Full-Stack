import { View, TouchableOpacity, Text, FlatList, Image } from 'react-native'

import { SafeAreaView } from "react-native-safe-area-context";
import { EmptyState, SearchInput, VideoCard } from '../../components';
import { getUserPosts, signOut } from "../../lib/appwrite";
import useAppwrite from '../../lib/useAppwrite';
import { icons } from "../../constants";
import { useGlobalContext } from "../../context/GlobalProvider";
import { router } from "expo-router";

const BookMark = ({ }) => {
    const { user, setUser, setIsLogged } = useGlobalContext();
    const { data: posts, } = useAppwrite(() => getUserPosts(user.$id));

    const logout = async () => {
        await signOut();
        setUser(null);
        setIsLogged(false);

        router.replace("/sign-in");
    };

    return (
        <SafeAreaView className="bg-primary h-full" >
            <FlatList
                data={posts}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <VideoCard
                        title={item.title}
                        video={item}
                        thumbnail={item.thumbnail}
                        creator={item.users.username}
                        avatar={item.users.avatar} />
                )}

                ListHeaderComponent={() => (
                    <View className="my-6 px-4  ">
                        <Text className="text-2xl font-psemibold text-white">
                            Saved Videos
                        </Text>

                        <View className="mt-6 mb-8">
                            <SearchInput placeholder="Search for your saved videos" />
                        </View>

                    </View>)}

                ListEmptyComponent={() => (<EmptyState
                    title="No Videos Found"
                    subtitle="No Videos Found for this search query"
                />)}

            />
        </SafeAreaView>
    )
}

export default BookMark