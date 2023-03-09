export const calculateTotalQuantity = (cart = []) => {
  return cart.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const calculateGrandTotal = (cart = []) => {
  return cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
};
