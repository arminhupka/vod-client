import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { CourseListItem } from "../api/api-types";

type cartContextType = {
  cart: CourseListItem[];
  addToCart: (item: CourseListItem) => void;
  removeFromCart: (id: string) => void;
  total: number;
};

const cartContextDefaultValue: cartContextType = {
  cart: [],
  addToCart: () => null,
  removeFromCart: () => null,
  total: 0,
};

const CartContent = createContext<cartContextType>(cartContextDefaultValue);

export const useCartContext = () => useContext<cartContextType>(CartContent);

interface IProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: IProps) => {
  const [cart, setCart] = useState<CourseListItem[]>([]);

  const addToCart = (item: CourseListItem) => {
    setCart((prevState) => [...prevState, item]);
    window.localStorage.setItem("cart", JSON.stringify([...cart, item]));
  };

  const removeFromCart = (id: string) => {
    setCart((prevState) => prevState.filter((item) => item._id !== id));
    const localCart = localStorage.getItem("cart");
    const parsedLocalCart: CourseListItem[] | null = localCart
      ? JSON.parse(localCart)
      : null;
    if (parsedLocalCart) {
      const filtered = parsedLocalCart.filter((item) => item._id !== id);
      localStorage.setItem("cart", JSON.stringify(filtered));
    }
  };

  const value = useMemo<cartContextType>(() => {
    return {
      cart,
      addToCart,
      removeFromCart,
      total: cart.length,
    };
  }, [addToCart, cart]);

  useEffect(() => {
    if (!localStorage.getItem("cart")) {
      return localStorage.setItem("cart", JSON.stringify([]));
    }
    setCart(JSON.parse(localStorage.getItem("cart")!));
  }, []);

  return <CartContent.Provider value={value}>{children}</CartContent.Provider>;
};
