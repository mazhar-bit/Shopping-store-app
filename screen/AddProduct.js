import React,{useState} from 'react'
import {View,Text,TextInput,TouchableOpacity,ToastAndroid,StyleSheet} from 'react-native'
import AppButton from '../Componets/AppButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AddItems } from '../Services/Api';
import { HP,WP } from '../Utils/Responsive';
const Addproduct = () =>{

    const [itemname,setitemname] = useState('');
    const [pricename,setpricename] = useState('');
   
    const showToast = () => {
        ToastAndroid.show("Product Add", ToastAndroid.SHORT);
      };
      return (
        
        <View style={{padding:30,backgroundColor:'white',flex:1}} >
        
             <View>
             <Text>Name</Text>
        
        <TextInput
        style={styles.all}
           placeholder="Name"
           onChangeText={setitemname}
           value={itemname}
        />
             </View>
             
       
        <View> 
        <Text>Price</Text>
        
        <TextInput
        style={styles.all}
           placeholder="Price"
           onChangeText={setpricename}
           value={pricename}
        />
        </View>
        
        <View> 
        <Text>Image URL</Text>
        
        <TextInput
        style={styles.url}
           placeholder="URL"
        />
        </View>
        <View>
        <AppButton
                  label={'Add Product'}
                  borderRadius={2}

                width={14}
                height={2}
                labelSize={2.5}
                onPress={()=>{
                  showToast()
                    AddItems(itemname,pricename)
                     .then(res=>{
                      console.log(res.status);
                       setitemname('')
                       setpricename('')
                     })
                 
                     .catch(error=>{
                        console.log(error);
                     })
                }}
                />
              
        </View>           
        </View>
          )
     }

const styles = StyleSheet.create({
all:{ height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
  borderRadius:10     
}

})

 export default Addproduct;