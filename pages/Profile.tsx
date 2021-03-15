import React from 'react';
import { ScrollView, SafeAreaView, View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { get } from 'lodash'

const styles = StyleSheet.create({
    scrollView: {},
    body: {}
})

const Profile = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return <SafeAreaView>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
                <Text>Janes Profile</Text>
                <Text>{get(route.params, 'name')}</Text>
                <Button
                    title="Go to Home"
                    onPress={() =>
                        navigation.goBack()
                    }
                />
            </View>
        </ScrollView>
    </SafeAreaView>
}

export default Profile;