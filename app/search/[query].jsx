import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchInput, Trending, EmptyState, VideoCard } from '../../components';
import { searchPosts } from "../../lib/appwrite";
import useAppwrite from '../../lib/useAppwrite';
import { useLocalSearchParams } from 'expo-router';

const Search = ({ }) => {
    const { query } = useLocalSearchParams();
    const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

    useEffect(() => {
        refetch();
    }, [query]);

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
                        <Text className="font-pmedium text-sm text-gray-100">
                            Search Results
                        </Text>
                        <Text className="text-2xl font-psemibold text-white">
                            {query}
                        </Text>
                        <View className="mt-6 mb-8">
                            <SearchInput initialQuery={query} placeholder="Search for a video topic" />
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

export default Search