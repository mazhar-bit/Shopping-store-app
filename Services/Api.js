import axios from 'axios';
export const URL = "/products"
export const BASE_URL = 'https://fakestoreapi.com';
export const ADDITEM = '/products';


export const Items = () => {
    return axios({
    
      url: URL, 
      method: 'GET',
      baseURL: BASE_URL,
    })
      .then(res => {
         console.log(JSON.stringify(res.data, null, 2));
        return res;
      })
      .catch(error => {
        console.log('error' + error);
      });
  };

export const AddItems = (itemname,pricename) =>{
    return axios({
    
        url: ADDITEM, 
        method: 'POST',
        baseURL: BASE_URL,
        body: JSON.stringify({
            title: itemname,
            price: pricename,
            description: "lorem ipsum set",
            image: "https://i.pravatar.cc",
            category: "electronic",
          }),
      })
        .then(res => {
        res.status=200
          return res;
        })
        .catch(error => {
          console.log('error' + error);
        });
}