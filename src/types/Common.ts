export type IconsType = {
    name: string;
    width:string;
    height:string;
}

// Define types for your product and cart items
export type Product = {
    id: string;
    name: string;
    price: number;
  };
  
  export  type CartItem = Product;
  
  // Define types for your context
  export type CartContextType = {
    products: Product[];
    loading: boolean;
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
  };