var menu=document.querySelector("#Menu")
var menulist=document.querySelector(".ul-list")

menu.addEventListener("click",()=>{
    menulist.classList.toggle("activemenu")
})
const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
  cart.classList.add('cart-active');
});
btnClose.addEventListener('click',()=>{
  cart.classList.remove('cart-active');
});

// bannerslide
var database=[
    {
        title:"Our Special Dish",
        para:"Fried Chicken",
        pic:"https://www.dgrillrestaurant.com/gallery_gen/57d59ba2bedf3cc5c579e574cc38a17a_491x568.52631578947.png"
    },
   
   
    {
        title:"Our Special Dish",
        para:"Hot Pizza",
        pic:"https://png.pngtree.com/png-vector/20240621/ourlarge/pngtree-pizza-png-image_12801032.png"
    },
    {
        title:"Our Special Dish",
        para:"Spicy Noodles",
        pic:"https://content.jdmagicbox.com/comp/morbi/w1/9999p2822.2822.200925211157.c9w1/catalogue/riverside-restaurant-morbi-ho-morbi-restaurants-WGjTSDj1NM.jpg"
    },
   
]
var titles=document.querySelector("#titles")
var pics=document.querySelector("#picer")
var paras=document.querySelector("#paras")
var left=document.querySelector("#left")
var right=document.querySelector("#right")
var index=0
window.addEventListener("DOMContentLoaded",()=>{
    let target=database[0]
    databasecaling(target)
})
function databasecaling(database) {
    titles.textContent=database.title
     paras.textContent=database.para
    pics.src=database.pic
}
right.addEventListener("click",()=>{
   index++
   if (index>database.length-1) {
    index=0
   }
   databasecaling(database[index])
})
left.addEventListener("click",()=>{
    index--
    if (index<0) {
        index=database.length-1
    }
    databasecaling(database[index])
})



// Example product data
const products = [
    {       
        
        id: 1,
            imgname:"https://img.freepik.com/free-photo/classic-cheese-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_123827-29750.jpg?size=626&ext=jpg&ga=GA1.1.461392994.1723718773&semt=ais_hybrid",
            productname:"Classic Beef Burger",
            productprice:"Rs150"

           
        },
      {       
        
        id: 2,
            imgname:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTsGpb6bRLNMhKnwllJ7_Lp9DLIqCncjAA-koi5C2CS7C1UxPMc",
            productname:"Chicken McNuggets",
              productprice:"Rs180"
            
           
        },
      {       
        
        id: 3,
            imgname:"https://www.shutterstock.com/image-photo/thanksgiving-turkey-isolated-on-white-260nw-528708133.jpg",
            productname:"Baked Chicken",
              productprice:"Rs250"
           
        },
      {       
        
        id: 4,
            imgname:"https://m.media-amazon.com/images/I/51hskgEVLDL._SR600,315_PIWhiteStrip,BottomLeft,0,35_SCLZZZZZZZ_FMpng_BG255,255,255.jpg",
            productname:"Pizza Pan",
              productprice:"Rs350"
           
        },
      {       
        
        id: 5,
            imgname:"https://i.pinimg.com/236x/9d/e4/24/9de4242516c0a23384605ff5437c0fb7.jpg",
            productname:"Stuffed Cookie",
              productprice:"Rs200"
           
        },
      {       
        
        id: 6,
            imgname:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauDzfyeHgT33IYmq4UTUh95liJi3rFmDKbqK_DxD06Qcl3EwGnguU7Z_cftcpm4Dusys&usqp=CAU",
            productname:"fried chicken",
              productprice:"Rs180"
           
        },
      {       
        
        id: 7,
            imgname:"https://static.vecteezy.com/system/resources/previews/027/679/809/large_2x/side-anglegraphy-of-delicious-noodles-in-white-background-photo.jpg",
            productname:"noodles",
              productprice:"Rs80"
           
        },
      {       
        
        id: 8,
            imgname:"https://img.freepik.com/premium-photo/penne-pasta-white-bowl-with-tomato-sauce-top-view-white-background-generative-ai_544576-65.jpg",
            productname:"pasta",
              productprice:"Rs100"
           
        },
];

// Function to render product cards
function renderProductCards() {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = products.map (product => `
        <div class="col-lg-3 col-md-6 col-12 my-4">
            <div class="cards text-center">
                <div class="cartbox">
                    <img src="${product.imgname}" alt="" class="img-fluid  mx-auto food-img" id="cartimg">
                </div>
                <div class="cartbody">
                    <h3 class="text-center food-title text-warning">${product.productname}</h3>
                </div>
                <div class="cart-group d-flex justify-content-around my-3">
                    <h3 class="text-success food-price">${product.productprice}</h3>
                  
                    
                </div>
                  <button type="button" class="btn btn-secondary add-cart cartadd" id="addtocart">Add to cart</button>
   <button class="btn btn-primary" data-toggle="modal" data-target="#quickViewModal" data-id="${product.id}">Quick View</button>
                    

            </div>
          </div>
    `).join('');
}


// Function to render product quick view modal
function renderQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const quickViewContent = document.getElementById('quickViewContent');
        quickViewContent.innerHTML = `
     <div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-6 col-12">
          <div class="carts">
            <h4>${product.productname}</h4>
            <img src="${product.imgname}" class="img-fluid mb-3 food-img" alt="${product.name}" id="models">
            <p>Price: ${product.price}</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="carts my-5">
            <div class="card-body">
                <div class="text-center">
                  <h5 class="card-title">${product.productname}</h5>
                  <p class="text-muted mb-4">Apple pro display XDR</p>
                </div>
                <div>
                 
                  <div class="d-flex justify-content-between">
                    <span>price</span><span>${product.productprice}</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span>Vesa Mount Adapter</span><span>$199</span>
                  </div>
                </div>
                
              </div>
          </div>
        </div>
    </div>
</div>


        `;
    }
}

// Event listener for modal show event
$('#quickViewModal').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget);
    const productId = parseInt(button.data('id'), 10);
    renderQuickView(productId);
});

// Initial render
renderProductCards();
// Example product data
const popular = [
    {   iD:1,
      imgs:"https://www.shutterstock.com/image-photo/italian-pizza-salami-pepperoni-classic-260nw-2470607473.jpg",
      popularname:"Big Mario's Pizza",
      popularprice:"Rs150"
  
  },
  {   iD:2,
      imgs:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRHXK8cnw84RvwAU-R1MXdkPPKgnztYqHzzWv1fZ4PJerlN6x0w",
      popularname:"Burger King",
      popularprice:"Rs180"
  
  },
  {   iD:3,
      imgs:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_uZX1vXNXI6fErXKIY4TyWEy06a3pbIBcl7pyWhQr-SeglXA",
      popularname:"Crêpe",
      popularprice:"Rs200"
  
  },
  {  iD:4,
      imgs:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzB09_KQe7wcY7A-YZBUJYMlffpX3-OYiW61_H8Icr-tkF2LWG",
      popularname:"Waffle",
      popularprice:"Rs200"
  
  },
  {    iD:5,
      imgs:"https://lh3.googleusercontent.com/YRxsdK88kGKhFOaTLeUjLHfPxwvuGlJJngItS5m6cYVVMG_JsSN495xv9o0QO9hHQV5qutmTeHmq7xWjjNBzg176zC-Ne45QZWlLJt4=w256-rw",
      popularname:"berry cake",
      popularprice:"Rs130"
  
  },
  {   iD:6,
      imgs:"https://school.villavalentinocakes.com/wp-content/uploads/2024/04/pexels-julias-torten-und-tortchen-434418-11204641.webp",
      popularname:" small cake baked",
      popularprice:"Rs220"
  
  },
  {    iD:8,
      imgs:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQOmo0kGIUPnM8r9IHVF45cYSRp8-3NXB0w9X7_vnSFq6LYECiE",
      popularname:"juices",
      popularprice:"Rs40"
  
  },
  {   iD:9,
      imgs:"https://d34ad2g4hirisc.cloudfront.net/location_photos/files/000/453/531/main/6c40a4e3add85618988b0f327111a047.jpg",
      popularname:"reamy, frozen fruit",
      popularprice:"Rs50"
  
  },
  {   iD:10,
      imgs:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFuuc3zSKx8ssEG4s84Qsm7pycGDSCZLL8l5M3frWS7LllNzQ",
      popularname:"Lemon juice",
      popularprice:"Rs40"
  
  },
  ];
  
  // Function to render product cards
  function renderProductCard() {
    const productContainer = document.getElementById('productlisting');
    productContainer.innerHTML = popular.map(products => `
      <div class="col-lg-4 col-md-6 col-12 my-3">
  
            <div class="text-center cards">  <div class="cartbodys text-center">
                  <img src="${products.imgs}" alt="" class="img-fluid food-img" id="cartimg">
              </div>
              <div class="cartcont">
                   <div class="cartbdys">
          <h2 class="food-title">${products.popularname}</h2>models
          <p>productlisting</p>
        </div>
        <div class="cart-group d-flex justify-content-around my-3">
             <button type="button" class="btn btn-secondary add-cart cartadd" id="addtocart">Add to cart</button>
               <button class="btn btn-primary" data-toggle="modal" data-target="#quickViewModals" data-id="${products.iD}">Quick View</button>
            
          <h3 class="text-success food-price">${products.popularprice}</h3>
  
      
          
      </div></div>
              </div> 
          </div>
    `).join('');
  }
  
  // Function to render product quick view modal
  function renderQuick(productId) {
    const product = popular.find(p => p.iD === productId);
    if (product) {
        const quickViewContent = document.getElementById('quicContent');
        quickViewContent.innerHTML = `
          <div class="container">
    <div class="row">
        <div class="col-lg-6 col-md-6 col-12 border border-dark">
          <div class="card">
            <h4>${product.name}</h4>
            <img src="${product.imgs}" class="img-fluid mb-3 food-img" alt="${product.name}" id="models">
            <p>Price: ${product.popularprice}</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <div class="carts my-5">
            <div class="card-body">
                <div class="text-center">
                  <h5 class="card-title">${product.productname}</h5>
                  <p class="text-muted mb-4">Apple pro display XDR</p>
                </div>
                <div>
                 
                  <div class="d-flex justify-content-between">
                    <span>price</span><span>${product.popularprice}</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span>Vesa Mount Adapter</span><span>$199</span>
                  </div>
                </div>
                <div class="d-flex justify-content-between total font-weight-bold mt-4">
                  <span>Total</span><span>    <button type="button" class="addtocart" id="addtocart">Secondary</button></span>
                </div>
              </div>
          </div>
        </div>
    </div>
</div>


        `;
    }
  }
  
  // Event listener for modal show event
  $('#quickViewModals').on('show.bs.modal', function (event) {
    const button = $(event.relatedTarget);
    const productId = parseInt(button.data('id'), 10);
    renderQuick(productId);
  });
  
  // Initial render
  renderProductCard();
  
document.addEventListener("DOMContentLoaded",loadFood)
function loadFood(){
    loadContent();
  
  }

  function loadContent() {
     //Remove Food Items  From Cart
  let btnRemove=document.querySelectorAll('.cart-remove');
  btnRemove.forEach((btn)=>{
    btn.addEventListener('click',removeItem);
  });

  //Product Item Change Event
  let qtyElements=document.querySelectorAll('.cart-quantity');
  qtyElements.forEach((input)=>{
    input.addEventListener('change',changeQty);
  });
    let cartBtns=document.querySelectorAll('.cartadd');
    for (let i = 0; i < cartBtns.length; i++) {
        cartBtns[i].addEventListener("click",select)
        
    }

    let cartadd=document.querySelectorAll("#addtocart")
    for (let i = 0; i < cartadd.length; i++) {
         cartadd[i].addEventListener("click",selects)
        
    }
    updateTotal()
  }

  function selects() {
    let foods=this.parentElement
    let imgsSrc=foods.querySelector("#cartimg").src
    alert(imgsSrc)
  }

  function removeItem(){
    if(confirm('Are Your Sure to Remove')){
      let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
      itemList=itemList.filter(el=>el.title!=title);
      this.parentElement.remove();
      loadContent();
    }
  }
  
  //Change Quantity
  function changeQty(){
    if(isNaN(this.value) || this.value<1){
      this.value=1;
    }
    loadContent();
  }

  function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let price=parseFloat(priceElement.innerHTML.replace("Rs",""));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

  });

  totalValue.innerHTML='Rs.'+total;


  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }


}
 
let itemList=[];

//Add Cart
  function select() {
    let food=this.parentElement;

    let title=food.querySelector('.food-title').innerHTML;
    let price=food.querySelector('.food-price').innerHTML;
    let imgSrc=food.querySelector('.food-img').src;
    //console.log(title,price,imgSrc);
    
    let newProduct={title,price,imgSrc}

 //Check Product already Exist in Cart
 if(itemList.find((el)=>el.title==newProduct.title)){
  alert("Product Already added in Cart");
  return;
 }else{
  itemList.push(newProduct);
 }
   
   
   let newProductElement= createCartProduct(title,price,imgSrc);
   let element=document.createElement('div');
   element.innerHTML=newProductElement;
   let cartBasket=document.querySelector('.cart-content');
   cartBasket.append(element);
   loadContent()
    
    
  }

  
function createCartProduct(title,price,imgSrc){

    return `
    <div class="cart-box">
    <img src="${imgSrc}" class="cart-img">
    <div class="detail-box">
      <div class="cart-food-title">${title}</div>
      <div class="price-box">
        <div class="cart-price">${price}</div>
         <div class="cart-amt">${price}</div>
     </div>
      <input type="number" value="1" class="cart-quantity">
    </div>
    <ion-icon name="trash" class="cart-remove">${"🗑️"}</ion-icon>
  </div>
    `;
  }
  
//   form validation 
var form=document.querySelector("#form")
var username1=document.querySelector("#username1")
var username2=document.querySelector("#username2")
var YourOrder=document.querySelector("#YourOrder")
var addfood=document.querySelector("#addfood")
var Musch=document.querySelector("#Musch")
var datetime=document.querySelector("#datetime")
var message1=document.querySelector("#message1")
var message2=document.querySelector("#message2")

Musch.addEventListener("change",valuesance)
function valuesance() {
    if(isNaN(this.value) || this.value<1){
        this.value=1;
      }
}


form.addEventListener("submit",(e)=>{
e.preventDefault()
valdation()
})

function valdation() {
    const username1val=username1.value.trim();
    const username2val=username2.value.trim();
    const YourOrderval=YourOrder.value.trim();
    const addfoodval=addfood.value.trim();
    const Muschval=Musch.value.trim();
    const datetimeval=datetime.value.trim();
    const message1val=message1.value.trim();
    const message2val=message2.value.trim();
    // user name
    if (username1val==="") {
        seterror(username1)
   
        
    }
    else{
        setsucess(username1)
    }
    if (username2val==="") {
        seterror(username2)
    }
    else{
        setsucess(username2)
    }
    
    if (YourOrderval==="") {
        seterror(YourOrder)
    } else {
        setsucess(YourOrder)
    }
    if (addfoodval==="") {
        seterror(addfood)
    } else {
        setsucess(addfood)
    }
    if (Muschval==="") {
        seterror(Musch)
    } else {
        setsucess(Musch)
    }
    if (datetimeval==="") {
        seterror(datetime)
    } else {
        setsucess(datetime)
    }
    if (message1val==="") {
        seterror(message1)
    }
    else{
        setsucess(message1)
    }
    if (message2val==="") {
        seterror(message2)
    }
    else{
        setsucess(message2)
    }
}


// error valuidATION
function seterror(element) {
    const inputgroup=element.parentElement
    inputgroup.classList.add("error")
    inputgroup.classList.remove("success")
}
function setsucess(element) {
    const inputgroup=element.parentElement
    inputgroup.classList.remove("error")
    inputgroup.classList.add("success")
}

$(document).ready(function() {
    lightGallery(document.querySelector('.row'), {
        thumbnail: true
    });
});