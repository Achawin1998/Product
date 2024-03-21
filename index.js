 const img = document.getElementById('product-img');
 const productTitle = document.querySelector('.card-title')
 const redColor = document.querySelector('.red');
 const whiteColor = document.querySelector('.white')
 const addToCart = document.querySelector('.add-to-cart');
 const cartAdded = document.querySelector('.cart-added')
 const cancle = document.querySelector('#cancle')

 redColor.addEventListener('click' , (() => {
    img.src = '/images/benz-red.jpeg';
    productTitle.innerHTML = "Red Mercedes-Benz";
    productTitle.style.color = 'red';
    addToCart.style.background  = 'red'
    addToCart.style.color = 'white'
    addToCart.style.border =  '1px solid red'
 }))

 whiteColor.addEventListener('click' , (() => {
    img.src = '/images/benz-white.jpeg';
    productTitle.innerHTML = "White Mercedes-Benz";
    productTitle.style.color = 'black';
    addToCart.style.background  = 'white'
    addToCart.style.color = 'black'
    addToCart.style.border =  '1px solid black'
 }))


 addToCart.addEventListener('click' ,(()=> {
     addToCart.style.display = 'none';
     cartAdded.style.display = 'block';
     cancle.style.display = 'block'
 }))

 cancle.addEventListener('click', (() => {
    addToCart.style.display = 'block';
    cartAdded.style.display = 'none';
    cancle.style.display = 'none'
 }))

 