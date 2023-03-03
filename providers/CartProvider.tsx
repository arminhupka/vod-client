import { createContext, ReactNode, useContext, useMemo, useState } from "react";

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

  const addToCart = (item: CourseListItem) =>
    setCart((prevState) => [...prevState, item]);
  const removeFromCart = (id: string) =>
    setCart((prevState) => prevState.filter((item) => item._id !== id));

  const value = useMemo<cartContextType>(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      total: cart.length,
    }),
    [cart],
  );

  return <CartContent.Provider value={value}>{children}</CartContent.Provider>;
};
