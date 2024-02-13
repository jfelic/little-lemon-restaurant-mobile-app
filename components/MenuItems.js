import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemsToDisplay = ['Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',];

const menuItems = () => {
    return (
        <View style = {{flex: 0.75,}}>
            <ScrollView style = {{}}>
                <Text style = {{color: 'white', textAlign: 'center', fontSize: 36, margin: 10,}}>
                    Menu
                </Text>
                <Text style = {{color: yellow, textAlign: 'center', fontSize: 30,
             padding: 10,}}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    )
}

export default menuItems;