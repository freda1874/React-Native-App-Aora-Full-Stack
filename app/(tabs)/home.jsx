import { View, Text, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { SearchInput, Trending, EmptyState, VideoCard } from '../../components';
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import useAppwrite from '../../lib/useAppwrite';
import { useGlobalContext } from "../../context/GlobalProvider";
const Home = () => {
    const { user } = useGlobalContext();
    const { data: posts, refetch } = useAppwrite(getAllPosts);
    const { data: latestposts } = useAppwrite(getLatestPosts);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    }

    return (
        <SafeAreaView className="bg-primary h-full" >

            <FlatList
                data={posts}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => (
                    <VideoCard
                        title={item.title}
                        video={item.video}
                        thumbnail={item.thumbnail}
                        creator={item.users.username}
                        avatar={item.users.avatar} />
                )}

                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="flex justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="font-pmedium text-sm text-gray-100">
                                    Welcome Back,
                                </Text>
                                <Text className="text-2xl font-psemibold text-white">
                                    {user?.username}
                                </Text>
                            </View>
                            <View className="mt-1.5">
                                <Image
                                    source={images.logoSmall}
                                    className="w-9 h-10"
                                    resizeMode="contain"
                                />

                            </View>
                        </View>

                        <SearchInput />

                        <View className="w-full flex-1 pt-5 pb-8">
                            <Text className="text-lg font-pregular text-gray-100 mb-3">
                                Latest Videos
                            </Text>

                            <Trending posts={latestposts ?? []} />
                        </View>
                    </View>)}

                ListEmptyComponent={() => (<EmptyState
                    title="No Videos Found"
                    subtitle="Be the first one to upload an video"
                />)}
                refreshControl={<RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh} />}
            />
        </SafeAreaView>
    )
}

export default Home