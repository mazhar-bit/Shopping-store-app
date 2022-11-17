
import React,{useEffect,useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {HP, WP} from '../Utils/Responsive';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../Componets/AppHeader';
import {useNavigation} from '@react-navigation/native';

import colors from '../Utils/colors'
import AppText from '../Componets/AppText';
import FastImage from 'react-native-fast-image';
import {Items} from '../Services/Api'
import ItemDetail from './ItemDetail';


const Home = () => {
  const navigation = useNavigation();

  const [data,setdata] = useState([]);
  const [count,setCount] = useState([0]);

  
    useEffect(() => {
     Items()
     .then(Response =>{
       setdata(Response.data)
     })
     .catch(error=>{
      console.log('Homepage error')
     })
    }, []);

  const images = [
    'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2lmdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://media.istockphoto.com/photos/valentines-day-picture-id1306892828?b=1&k=20&m=1306892828&s=170667a&w=0&h=IYP9Q21A_s5Qh1l6yyct748lVU9pRdhdVxNWKVPOIgA=',
    'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://media.istockphoto.com/photos/3d-gift-boxes-standing-on-the-floor-with-pink-pastel-ribbon-bow-on-a-picture-id1395091077?k=20&m=1395091077&s=612x612&w=0&h=CImTMwPQAOUsBGhNl0rfxPeq-JASJsc6zwW9VmQDGHs=',
    'https://media.istockphoto.com/photos/shoes-are-placed-on-a-wooden-floor-picture-id871235028?k=20&m=871235028&s=612x612&w=0&h=824sQisQXAEJikokeyANtyHheiAQknU4vbDO4QIgnTk=', // Network image
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    // Local image
  ];
  

  // const handleOnPressCategory = () => {
  //   navigation.navigate(ItemDetail);
  // };
  return (
    
      <View style={styles.box}>

              <AppHeader
              label={'Dashboard'}
              icon1={false}
              iconRightBadgeTxt={count}
              iconRightNameMatCom={'cart'}
              />    

        <ScrollView>
          <View>
            <SliderBox
              images={images}
              ImageComponent={FastImage}
              autoplay
              circleLoop
              dotColor="#070707"
              inactiveDotColor="#90A4AE"
              ImageComponentStyle={styles.ImageComponentStyle}
              dotStyle={styles.dotStyle}
              paginationBoxStyle={styles.dotStyle1}
            />
          </View>

          <View>
            <AppText style={styles.popularTxt}>Categories</AppText>

            <View style={styles.flatListViewStyle}>
              <FlatList
                scrollEnabled={false}
                data={data}
                numColumns={3}
                columnWrapperStyle={styles.columnWrapperStyle}
                // horizontal={true}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={[styles.cardView, styles.shadowStyle]}
                    onPress={()=> {
                      let mCount = count;
                      mCount++;
                      setCount(mCount);
                    }}
                   >
                    <FastImage
                      source={{uri: item.image}}
                      style={styles.cardImage}
                    />

                    <AppText numberOfLines={1} style={styles.cardTxt}>
                      {item.title}
                    </AppText>
                  </TouchableOpacity>
                )}
              />
            </View>
            <AppText style={styles.popularTxt}>Popular</AppText>
            <View
              style={{
                backgroundColor: colors.background,
                paddingHorizontal: WP(3),
              }}>
              <FlatList
                scrollEnabled={false}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View style={[styles.itemView, styles.shadowStyle]}>
                    <FastImage style={styles.logo} source={{uri: item.image}} />
                    <View style={styles.txtView}>
                      <AppText style={styles.popularTile} numberOfLines={1}>
                        {item.title}
                      </AppText>
                      <AppText style={styles.popularPrice} numberOfLines={1}>
                        ${item.price}
                      </AppText>
                    </View>
                    <View style={styles.cartView}>
                      <Icon name="cart" size={20} color="white" />
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    paddingHorizontal: WP(3),
  },

  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginTop: HP(2),
    padding: WP(3),
    borderRadius: WP(3),
    borderWidth: 1,
    borderColor: colors.background,
  },
  logo: {
    width: WP(16),
    height: WP(12),
    borderRadius: WP(1.5),
  },

  cartView: {
    backgroundColor: '#E9646C',
    borderRadius: 100,
    padding: 5,
  },
  txtView: {marginLeft: WP(4), flex: 1, fontFamily: 'Roboto-Bold'},

  cardImage: {
    width: WP(25.5),
    height: WP(22),
    borderRadius: 10,
  },

  cardTxt: {
    marginTop: 5,

    marginLeft: WP(0.5),
    width: WP(20),
    fontFamily: 'poppins-semibold',
  },

  cardView: {
    backgroundColor: colors.white,
    marginRight: WP(2.5),
    borderRadius: 10,

    padding: WP(2),
  },

  shadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },

  ImageComponentStyle: {
    borderRadius: 15,
    width: '96%',
    marginTop: WP(2),
  },

  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  dotStyle1: {
    bottom: -26,
  },

  flatListViewStyle: {
    backgroundColor: colors.background,
    paddingHorizontal: WP(2.5),
    paddingBottom: WP(3),
    borderRadius: WP(3),
  },

  columnWrapperStyle: {
    marginTop: WP(2.5),
    marginHorizontal: WP(1),
  },
  popularTxt: {
    fontFamily: 'poppins-semibold',
    fontSize: 20,
    // fontWeight: 'bold',
    margin: WP(3),
  },
  popularTile: {fontFamily: 'poppins-semibold'},
  popularPrice: {fontFamily: 'poppins'},
});
export default Home;

