let shoppingCart = [];
let idValue = 1;

function newProduct(id, name, price, quantity){
  const index = shoppingCart.findIndex(item => item.id === id);

  if(index>-1){
    shoppingCart[index].quantity += quantity; 
  }else{
    shoppingCart.push({id,name,price,quantity});
  }
  displayCart();
  
}

function displayCart(){
  console.log('Cart Items');
  shoppingCart.forEach(item => {
    console.log(`${item.name} - Price: $${item.price}, Quantity: ${item.quantity}`);
    console.log(`Total ${item.name}'s price : $${item.price*item.quantity}`);
  })
}

function upDateQuantity(id, quantity){
  const index = shoppingCart.findIndex(item => item.id ===id);
  if(index>-1 && quantity>0){
    //상품이 존재하고 수량이 0보다 크면 상품을 업데이트 한다.
    shoppingCart[index].quantity +=quantity;
  }else{
    console.log('유효하지 않은 상품이거나 수량이 0보다 커야 합니다.');
  }
  displayCart();

}

function removeFromCart(id){
  shoppingCart = shoppingCart.filter(item => item.id !== id);
  displayCart();
}

function calculateTotal(){
  let total = shoppingCart.reduce((sum, item) => {
    return sum + (item.price*item.quantity)
  },0)
  console.log(`Cart Total Price: $${total}`);
}

function clearCart(){
  cart = [];
  console.log('cart is empty');
  displayCart();
}

newProduct(1,'BANANA',3000,3);
newProduct(2,'ORANGE', 5000,2);

upDateQuantity(1,5);

newProduct(3,'mango',4000,2);
calculateTotal();