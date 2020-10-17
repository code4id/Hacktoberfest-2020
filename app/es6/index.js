import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Es6 = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('KUA')
    }, 1500)
    return (
        <View style={styles.container}>
            <Text></Text>
        </View>
    )
}

export default Es6

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
