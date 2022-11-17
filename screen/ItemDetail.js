import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StyleSheet,
  FlatList,
  SafeAreaView
} from 'react-native';
import AppText from '../Componets/AppText'
import { HP,WP } from '../Utils/Responsive';
import colors from '../Utils/colors'
import FastImage from 'react-native-fast-image'
import { Items } from '../Services/Api';




const ItemDetail = ({navigation}) => {

  const [data,setdata] = useState([]);
  
  useEffect(() => {
   Items()
   .then(Response =>{
     setdata(Response.data)
   })
   .catch(error=>{
    console.log('ItemDetailpage error')
   })
  }, []);
  
  

  return (
    <View style={{alignSelf: 'center', padding: 20}}>


      <SafeAreaView style={styles.box}>
        <View>
          <View style={styles.container}>
          <View style={styles.brSpace}>
            <AppHeader
              label={'Product Cart'}
              iconRightNameMatCom={'trash-can'}
              onPressRight={onPressBin}
              iconRightBadgeTxt={deletePicker ? n.toString() : null}
            />
          </View>
          </View>
          <View style={{backgroundColor: colors.background}}>
            {/* <AppSearch /> */}
            <View>
              <FlatList
                data={data}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapperStyle}
                ListFooterComponent={<View style={styles.listFoot} />}
                // horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={[styles.cardStyle, styles.shadowStyle]}
                    // onPress={handleOnPressItem}
                    >
                    <FastImage
                      source={{uri: item.image}}
                      style={styles.imageStyle}
                    />
                    <View>
                      <AppText numberOfLines={1} style={styles.cardTxt}>
                        {item.title}
                      </AppText>
                      <AppText
                        numberOfLines={1}
                        style={styles.productTypeStyle}>
                        {item.price}
                      </AppText>
                    </View>
                    <View style={styles.priceViewStyle}>
                      <AppText numberOfLines={1} style={styles.priceTxt}>
                        {item.price}
                      </AppText>
                      <View style={styles.iconStyle}>
                        {/* <Icon name="heart-circle" size={23} /> */}
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>


  
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    // flex: 1,
  },
  container: {
    // flex: 1,
    // backgroundColor: colors.white,
    paddingHorizontal: WP(0),
  },

  cardStyle: {
     padding: WP(9),
    // paddingBottom: HP(10),
    backgroundColor: colors.white,
    alignSelf: 'center',
    borderRadius: 15,

    paddingVertical: WP(4),

    paddingHorizontal: WP(3.5),
  },
  imageStyle: {
    width: WP(33),
    height: HP(23),
    borderRadius: 10,
  },

  cardTxt: {
    marginTop: HP(2),
    fontWeight: 'bold',
    fontFamily: 'poppins-semibold',
    width: WP(33),
  },
  priceViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceTxt: {
    fontWeight: 'bold',
    fontSize: 18,
    width: WP(27),
  },
  iconStyle: {},
  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,

    elevation: 2,
  },

  productTypeStyle: {
    fontSize: 12,
    width: WP(33),
  },
  columnWrapperStyle: {
    marginTop: WP(9),
    justifyContent: 'space-evenly',
  },
  // listFoot: {height: HP(0)},
});
export default ItemDetail;
