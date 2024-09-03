import React, { createContext, useState } from "react";

const ProdContext = createContext();

export const ProdProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const addItem = (title, amount) => {
    setItems([...items, { id: items.length, title, amount }]);
  };
  const getItem = (id) => {
    return items.find((item) => item.id == id);
  };
  const removeItem = (name) => {
    setItems(items.filter((item) => item.title !== name));
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
        removeItem,
        haveItems,
        itemsLength,
        getAllItems,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
};

export default ProdContext;
