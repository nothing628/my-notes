import React from 'react';
import { ScrollView, SafeAreaView, View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
    scrollView: {},
    body: {}
})
declare const global: { HermesInternal: null | {} };

const Home = () => {
    const navigation = useNavigation();
    return <SafeAreaView>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
                <View>
                    <Text>Engine: Hermes</Text>
                </View>
            )}
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