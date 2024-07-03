import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Navitus', price: 100, img: 'https://navitusparfums.com/wp-content/uploads/2021/11/Xo-Brandy-Image-1.png', isFavorite: false},
    { id: 2, name: 'Velours', price: 200, img: 'https://pimages.parfumo.de/720/79001_j35kzc_le_vestiaire__velours_720.jpg', isFavorite: false },
    { id: 3, name: 'Sauvage', price: 300, img: 'https://lesparfume.ro/wp-content/uploads/2021/06/dior-sauvage-100-ml-tester-original.jpg', isFavorite: false },
    { id: 4, name: 'Carlisle', price: 400, img: 'https://nordicscents.dk/cdn/shop/files/ParfumesdeMarlyCarlisle.jpg?v=1705428359', isFavorite: false },
    { id: 5, name: 'Narguile', price: 500, img: 'https://cdn.beymen.com/mnresize/505/704/productimages/hlix5yog.rci_IMG_01_3346131000029.jpg', isFavorite: false },
    { id: 6, name: 'Happy Spirit', price: 600, img: 'https://larose.az/images/gallery2/LR10967/1834.jpg', isFavorite: false },
    { id: 7, name: 'Ambre Ottoman', price: 700, img: 'https://lh4.googleusercontent.com/proxy/ZzTrd1eHhQhtNV6G3sRaW8ikQMPWt1pshFhJh0PIC94FjRLzXqo37bcCqfE6osVCNSjxEoWTWjD9l97BvvkMEaGqEIOUVDlCofLMkMzproD9b6Fp2A1DavsBnNCHk07FLNqUj_mMf4TaQDz0EhBM7A', isFavorite: false },
    { id: 8, name: 'King', price: 800, img: 'https://johnlewis.scene7.com/is/image/JohnLewis/238246737', isFavorite: false },
    { id: 9, name: 'Tobacco Vanilla', price: 900, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm06CqgSsbajuPajvea-0ANuOCNH31HQbzsQ&s', isFavorite: false },

  ],
};
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      toggleFavorite: (state, action) => {
        const product = state.products.find(p => p.id === action.payload);
        if (product) {
          product.isFavorite = !product.isFavorite;
        }
      },
    },
  });
  
  export const { toggleFavorite } = productsSlice.actions;
  export default productsSlice.reducer;