import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
const Account =({navigation}) => {
    const data = useSelector(state => state)
    const {clickedImg} = data;                   
    // const {clickedImg} = useSelector((state) => state);
    console.log(clickedImg, 'jjbjhbjhbjh');
    return(
        <View style={styles.container}>
            {clickedImg && (
                <Image
                source={clickedImg ? { uri: clickedImg } : require('../assets/icons/user.png') }
                style={{height: 200,width:200, borderRadius: 100, borderWidth: 2}}
             />
            )}
            {clickedImg === null && (
                <Image
               source={clickedImg ? { uri: clickedImg } : require('../assets/icons/user.png') }
               resizeMode={'center'}
               width={100}
               height={100}
               style={{height: 200,width:200}}
            />
            )}
            
            <Text style={{
                paddingTop:20,
                fontSize: 30,
            }}>
                Name : Srusti
            </Text>
            <Text style={{
                paddingTop:40,
                fontSize: 20,
                left:5,
                right:8,
            }}>
                When you see a waterfall, an undisturbed meadow, or the glassy surface of a lake, it might be difficult to put the beauty into words. But, thanks to the efforts of natural poets and authors, we can use words like ethereal, verdant, and pristine to describe nature's beauty..
            </Text>
            
        
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        backgroundColor: '#8fcbbc',
        paddingTop: 100,
    },
});

export default Account;

