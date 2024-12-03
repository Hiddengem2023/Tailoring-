const product = [
  {
    id:0,
    image:'/20241101_140946.png',
    title:'Custom suit',
    price:15000,
  },
{
    id:1,
    image:'/20241101_135852.png',
    title:'Custom suit',
    price:15000,
 },
{
    id:3,
    image:'/20241027_135333.jpg',
    title:'Custom suit',
    price:15000,
  },
  ];
/*const categories = [...new Set(product.map((item)=> {return item}))]
let i= 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var{image,title,price} =  item;
  return(
  `
  <div class='box'>
  <div class= 'img-box'>
  <img class='images'src=${image}></img>
  </div>
  <div class='bottom'
  <p>${title}</p>
   <h2>${price}.00 </h2>`+
   "<button onClick = 'addToCart("+(i++)+")'>Add to cart </button>" +
  `</div>
   </div>`
   )
}).join('');
///
var cart =[];
function addToCart(a){
  cart.push({...categories[a]});
  displayCart(a);
  
}
function displayCart(a) {
 let j = 0;
if (cart.length == 0){
  document.getElementById('cartItem').innerHTML = 'Your cart is empty';
}
else {
  document.getElementById('cartItem').innerHTML = categories.map((item) => {
  var{image,title,price} =  item;
  return(
      `
  <div class='cart'>
  <div class= 'cart-img'>
  <img class='images'src=${image}></img>
  </div>
    <p>${title}</p>
    <h2>${price}</h2>
   `)
}).join('')
}
}
*/