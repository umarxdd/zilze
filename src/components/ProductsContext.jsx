import React, { createContext, useState } from "react";

const ProdContext = createContext();

export const ProdProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = (name, price, image, amount) => {
    const exists = items.find((item) => item.name === name);
    if (!exists) {
      setItems([...items, { id: items.length, name, price, image, amount }]);
    } else {
      const updatedItems = items.map((item) => {
        if (item.name === name) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });

      setItems(updatedItems);
    }
  };
  const getItem = (id) => {
    return items.find((item) => item.id == id);
  };
  const getItemAmount = (name) => {
    const item = items.find((item) => item.name === name);
    let amount;
    if (item) {
      amount = item.amount;
    }
    if (amount) {
      return amount;
    }
    return 0;
  };
  const removeItems = (name) => {
    setItems(items.filter((item) => item.name !== name));
  };
  const removeOneItem = (name) => {
    let item = items.find((item) => item.name === name);
    if (item.amount > 1) {
      const updatedItems = items.map((item) => {
        if (item.name === name) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });

      setItems(updatedItems);
    } else {
      const index = items.findIndex((item) => item.name === name);
      if (index > -1) {
        setItems([...items.slice(0, index), ...items.slice(index + 1)]);
      }
    }
  };

  const getAllItems = () => {
    return items;
  };

  const itemsLength = items.length;
  const haveItems = items.length > 0 ? true : false;

  return (
    <ProdContext.Provider
      value={{
        addItem,
        getItem,
        removeOneItem,
        removeItems,
        haveItems,
        itemsLength,
        getAllItems,
        getItemAmount,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
};

export default ProdContext;
