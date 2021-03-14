import React from 'react';
import { ScrollView, SafeAreaView, View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
    scrollView: {},
    body: {}
})

const Home = () => {
    const navigation = useNavigation();
    return <SafeAreaView>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
                <Text>Home Page</Text>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigation.navigate('Profile', { name: 'Jane' })
                    }
                />
            </View>
        </ScrollView>
    </SafeAreaView>
}

export default Home;