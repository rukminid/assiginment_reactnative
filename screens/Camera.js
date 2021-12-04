import React,{useState} from 'react';
import { View, Text, Button, StyleSheet , Image } from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import { useDispatch } from 'react-redux';
import {clickedImgType} from '../store/actions'


const Camera =({navigation}) => {
    const [imageUri,setimageUri]= useState(null);
    const dispatch = useDispatch();
const openCamera = () => {
    let options ={
        storageoption: {
            skipBackup: true,
            path: 'images',
            mediaType: 'photo',
        },
        includeBase64: false,
    };
    launchCamera(options, response =>{
        console.log('Response ==== ',response);
        if(response.didCancel) {
            console.log('User canclled Image picker');
        }else if(response.error){
            console.log('ImagePicker Error',response.error);
        }else if(response.customButton){
            console.log('User Tapped custom button',response.customButton)
        }else{
        
            // const source = { uri: response.uri };
            // const source={uri: 'data:image/jpeg;base64,'+ response};
            // console.log('response', JSON.stringify(response));
            setimageUri(response.assets[0].uri);
            console.log(JSON.stringify(response.assets[0].uri), 'resp')
            // console.log(source)
            dispatch(clickedImgType(response.assets[0].uri))
        }
    });
}
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30,paddingBottom:10,}}>Open Camera</Text>
            <Button
                title={"Click Me!"}
                onPress={()=>{openCamera()}}
            />
            {/* <Image
               source={{ uri: imageUri }}
               style={{height:100,width:100,borderRadius:100,borderWidth:2,borderColor:'black'}}
            /> */}
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        fontSize:'20',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    },
});

export default Camera;

