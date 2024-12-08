import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/carts';

export default{

    getCarts() { axios.get(API_URL); },
    getCartDetails(id) {axios.get(`${API_URL}/${id}`);},
    addItemToCart(cartId, item){axios.post(`${API_URL}/${cartId}`, item);},
    updateCartItem(cartId, itemId, item){axios.put(`${API_URL}/${cartId}/items/${itemId}`, item);},
    removeItemFromCart(cartId, itemId){axios.delete(`${API_URL}/${cartId}/items/${itemId}`);}

};