import React, { useEffect } from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';

const Splash = ({ onFinish }: {onFinish:() => void } ) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 2500);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <View style = {styles.container}>
            <Image
                source={require('../assets/images/shrek.png')}
                style={styles.logo}
                resizeMode='contain'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a0ff8dff',
    },
    logo: {
        width: 200,
        height: 200,
    },
});

export default Splash;