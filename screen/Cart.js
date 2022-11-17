import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AppButton from '../Componets/AppButton';
import AppText from '../Componets/AppText';
import colors from '../Utils/colors';
import {HP, WP} from '../Utils/Responsive';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppHeader from '../Componets/AppHeader'
// import AppTextInput from './Componnets/AppTextInput';


const BillItem = ({label, price, children}) => (
  <View style={styles.billContainer}>
    <View style={styles.priceViewStyle}>
      <AppText style={styles.priceViewTxtStyle}>{label}</AppText>
      <AppText>
        {children}
        <AppText style={styles.priceViewTxtStyle}>${price} </AppText>
        USD
      </AppText>
    </View>
  </View>
);

const CartItem = ({item, onPressCross, deletePicker}) => {
  const [numOfItems, setNumOfItems] = useState(0);

  useEffect(() => {
    setNumOfItems(item.counter1);
  }, []);

  function addToDeleteList() {
    item.selected = 1;
  }
  const handleOnpress = () => {
    deletePicker ? addToDeleteList() : null;
  };
  return (
    <TouchableOpacity
      onPress={() => handleOnpress()}
      style={[
        styles.itemView,
        {backgroundColor: item?.selected ? colors.secondary : colors.white},
      ]}>
      <FastImage style={styles.logo} source={{uri: item.image}} />
      <View style={styles.itemView1}>
        <View style={styles.cardcontainer}>
          <AppText numberofline={1} style={styles.txt}>
            {item.title}
          </AppText>
          {!deletePicker && (
            <TouchableOpacity onPress={onPressCross}>
              <Ionicons
                name="close"
                style={{alignSelf: 'center'}}
                size={15}
                color="#050404"
              />
            </TouchableOpacity>
          )}
        </View>
        <AppText style={styles.txt1}>{item.title}</AppText>

        <View style={styles.priceViewStyle}>
          <AppText numberofline={1} style={styles.priceStyle}>
            {item.price}
          </AppText>

          <View style={styles.countBtn}>
            <TouchableOpacity
              onPress={() =>
                numOfItems == 0 ? null : setNumOfItems(numOfItems - 1)
              }
              style={styles.minusBtn}>
              <Ionicons
                name="md-remove"
                style={{padding: 5}}
                size={15}
                color="#050404"
              />
            </TouchableOpacity>
            <AppText style={styles.btnTxt}>{numOfItems}</AppText>
            <TouchableOpacity
              onPress={() => setNumOfItems(numOfItems + 1)}
              style={styles.addBtn}>
              <Ionicons
                name="md-add"
                style={{padding: 5}}
                size={15}
                color="#f7f2f2"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Cart = () => {
  const [deletePicker, setDeletePicker] = useState(false);

  const [tempData, setTempData] = useState([
    {
      id: 'bd7ac',
      title: 'Firstr ',
      image:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjc1fHxjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: 99.45,
      counter1: 0,
      selected: 0,
    },
    {
      id: '3ac68',
      title: 'Second it',
      image:
        'https://images.unsplash.com/photo-1602832339346-f7501f06e09a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjkwfHxjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: 99.5,
      counter1: 0,
    },
    {
      id: '58694',
      title: 'Third Item',
      image:
        'https://images.unsplash.com/photo-1536588975365-208954f69347?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjkxfHxjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: 99.5,
      counter1: 0,
    },
    {
      id: '5934',
      title: 'Third Item',
      image:
        'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzEyfHxjbG90aGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      price: 99.5,
      counter1: 0,
    },
  ]);

  const onPressBin = () => {
    // setTempData('');
    deletePicker ? null : setDeletePicker(true);
  };

  const deleteItemId = id => {
    // console.log('this', id);
    setTempData(tempData.filter(item => item.id !== id));
  };
  const n = tempData.filter(item => item.selected).length;
  return (
    
      <SafeAreaView style={{flex: 1}}>
        {/* <ScrollView> */}
        <View style={styles.container}>
          <View style={styles.brSpace}>
            <AppHeader
              label={'Cart'}
              iconRightNameMatCom={'trash-can'}
              onPressRight={onPressBin}
              iconRightBadgeTxt={deletePicker ? n.toString() : null}
            />
          </View>

          <View style={{flex: 1}}>
            <FlatList
              scrollEnabled={true}
              data={tempData}
              keyExtractor={item => item.id}
              ListFooterComponent={<View style={styles.listFoot} />}
              renderItem={({item}) => (
                <CartItem
                  item={item}
                  onPressCross={() => deleteItemId(item.id)}
                  deletePicker={deletePicker}
                />
              )}
            />
          </View>
          <View style={styles.promoMainContainer}>
            <View style={styles.promoView}>
              
              <BillItem label="Subtotol" price={40} />
              <BillItem label="Shipping" price={40} />
              <BillItem label="Bag Total" price={40}>
                <AppText>(4items) </AppText>
              </BillItem>
            </View>
            <View style={styles.checkOutBtn}>
              <AppButton
                label={'Proceed To Checkout'}
                borderRadius={2}
                width={16}
                height={2}
                labelSize={2.5}
              />
            </View>
          </View>
        </View>
        {/* </ScrollView> */}
      </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemView1: {
    marginLeft: WP(5),
    flex: 1,
    justifyContent: 'space-between',
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    width: WP(55),
  },
  txt1: {fontSize: 12, width: WP(50)},
  cardcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemView: {
    flexDirection: 'row',
    //backgroundcolor itemView
    marginTop: HP(2),
    padding: WP(3),
    marginHorizontal: WP(3),
    borderRadius: WP(3),
  },
  checkOutBtn: {alignItems: 'center'},
  logo: {
    width: WP(18),
    height: WP(19),
    borderRadius: WP(3),
  },
  priceStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    width: WP(35),
  },
  columnWrapperStyle: {
    marginTop: WP(1.5),
  },
  countBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkcontainer: {
    marginHorizontal: WP(3),
    backgroundColor: 'black',
    paddingVertical: HP(2),
    borderRadius: 20,
    marginVertical: HP(5),
    marginBottom: 2,
  },

  billContainer: {
    marginTop: HP(2),
  },
  addBtn: {
    alignSelf: 'center',
    backgroundColor: 'black',
    borderWidth: 0.5,
    borderRadius: 50,
    marginLeft: WP(2),
  },
  promoMainContainer: {flex: 0.7, paddingTop: WP(3)},
  promoView: {
    paddingHorizontal: WP(3),
    marginBottom: HP(3),
  },
  promoContainer: {
    borderRadius: 10,

    flexDirection: 'row',
    paddingHorizontal: WP(2.5),
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: colors.white,
    // backgroundColor: 'red',
  },
  minusBtn: {
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 50,
    marginRight: WP(2),
  },

  listFoot: {height: HP(3)},

  btnTxt: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },

  promoTouchStyle: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginVertical: HP(1.5),
  },

  promoTxtStyle: {
    paddingLeft: WP(1),
    color: 'black',
    fontSize: 15,
  },

  priceViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  promoBtn: {
    color: 'white',
    alignItems: 'center',
    paddingHorizontal: WP(5),
    paddingVertical: WP(3),
  },

  priceView: {flexDirection: 'row', justifyContent: 'space-between'},
  priceViewTxtStyle: {fontWeight: 'bold', fontSize: 17},
  checkBtnStyle: {
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  brSpace: {
    paddingHorizontal: WP(3),
  },
});
export default Cart;


// 