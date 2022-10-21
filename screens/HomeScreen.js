import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient from '../sanity'


export default function HomeScreen() {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        // ähnlich lifecycle hooks in vue
        // wird ausgelöst, wenn UI geladen ist
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        // useEffect wenn das functional component lädt
        // run on the first initial load, danach nicht mehr
        // fetch stuff from backend
        sanityClient.fetch(
            `
                *[_type == "featured"] {
                    ...,
                    restaurants[]->{
                        ...,
                        dishes[]->
                    }
                }
            `).then(data => {
                setFeaturedCategories(data)
            })
    }, [])

    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 mx-4 items-center space-x-2">
                <Image
                    source={{ uri: 'https://links.papareact.com/wru' }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                {/* flex-1: Dieser Block nimmt in flex-row den größten Platz ein und verdrängt den Rest */}
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">
                        Current location
                        <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB" />
            </View>
            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType='default' />
                </View>
                <AdjustmentsHorizontalIcon color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView className="bg-gray-100"
                contentContainerStyle={{
                }}
            >
                {/* Categories */}
                <Categories />

                {/* Featured Rows
                ?. Optional Chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining 
                Kurz: Return undefined, if object/property is null or undefined*/}
                <View className="pb-36">
                    {featuredCategories?.map((category) => {
                        return (
                            <FeaturedRow
                                key={category._id}
                                id={category._id}
                                title={category.name}
                                description={category.short_description}
                            />
                        )
                    })}
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}