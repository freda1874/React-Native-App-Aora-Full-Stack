import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from "../constants";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
const MenuIcon = () => {
    const [visible, setVisible] = useState(false);
    const savePost = () => {

    }
    return (
        <View  >

            <Menu   >
                <MenuTrigger >
                    <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
                </MenuTrigger>
                <MenuOptions  >
                    <MenuOption onSelect={savePost}  >
                        <Text  >Save</Text>
                    </MenuOption>
                    <View style={{ height: 1, backgroundColor: 'gray', marginVertical: 8 }} />
                    <MenuOption onSelect={savePost}>
                        <Text>Delete</Text>
                    </MenuOption>

                </MenuOptions>
            </Menu >
        </View >
    )
}

export default MenuIcon;


