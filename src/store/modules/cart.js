import {
    CART_LOADING, CART_ERROR, CART_SUCCESS,
    CART_CHECKOUT, CART_ADD_PRODUCT, 
    CART_SET_CHECKOUT_STATUS, CART_SET_CART_ITEMS, 
    CART_PUSH_PRODUCT_TO_CART, CART_INCREMENT_ITEM_QUANTITY
} from "../actions/cart"

const state = {
    items: [],
    status: null
};

const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({ id, quantity }) => {
          const product = rootState.products.all.find(product => product.id === id)
          return {
            title: product.title,
            price: product.price,
            image: product.imgs,
            quantity
          }
        });
    },
    
    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
          return total + product.price * product.quantity
        }, 0);
    }
}

// actions
const actions = {
    // [CART_CHECKOUT]: ({ commit, state }, products) => {
    //     commit(CART_LOADING);
    //     const savedCartItems = [...state.items]
    //     // empty cart
    //     commit(CART_SET_CART_ITEMS, { items: [] })
    //     try {
    //         // await shop.buyProducts(products)
    //         commit(CART_SUCCESS)
    //     } catch (e) {
    //         console.error(e)
    //         commit(CART_ERROR)
    //         // rollback to the cart saved before sending the request
    //         commit(CART_SET_CART_ITEMS, { items: savedCartItems })
    //     }
    // },
    [CART_ADD_PRODUCT]: ({ state, commit }, product) => {
        commit(CART_SET_CHECKOUT_STATUS, null);
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id)
            if (!cartItem) {
              commit(CART_PUSH_PRODUCT_TO_CART, { id: product.id })
            } else {
              commit(CART_INCREMENT_ITEM_QUANTITY, cartItem)
            }
            // remove 1 item from stock
            // commit('products/decrementProductInventory', { id: product.id }, { root: true })
        }
    }
};

// mutations
const mutations = {
    [CART_PUSH_PRODUCT_TO_CART]: (state, { id }) => {
      state.items.push({
        id,
        quantity: 1
      })
    },
  
    [CART_INCREMENT_ITEM_QUANTITY]: (state, { id }) => {
      const cartItem = state.items.find(item => item.id === id)
      cartItem.quantity++
    },
  
    [CART_SET_CART_ITEMS]: (state, { items }) => {
      state.items = items
    },
  
    [CART_SET_CHECKOUT_STATUS]: (state, status) => {
      state.status = status
    },
    [CART_LOADING]: (state) => {
        state.status = "loading";
    },
    [CART_SUCCESS]: (state, resp) => {
        state.status = "success";
        state.items = [...resp.items];
    },
    [CART_ERROR]: state => {
        state.status = "error";
    },
  }

  export default {
    // namespaced: true,
    state,
    getters,
    actions,
    mutations,
    // modules: {
    //   nested
    // }
  }