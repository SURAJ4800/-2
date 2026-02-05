 // --- assets/js/main.js ---

const menuSection = document.querySelector('.menu-section');
const menuFilterBtns = document.querySelectorAll('#menu-filter');
const cartItemsContainer = document.querySelector('.cart-items-container');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const clearCart = document.querySelector('.clear-cart');
const checkOutBtn = document.querySelector('.check-out');
const cartValues = document.querySelectorAll('#cart-values');

var quantity = 1;
var addItem = [];
var newMenu = [];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch Menu (Read-Only Mode)
    const menuRef = firebase.database().ref('Food_Menu');
    menuRef.on('value', (snapshot) => {
        if(snapshot.exists()) {
            const data = snapshot.val();
            newMenu = Object.values(data);
            displayMenuItems(newMenu);
            filtering(document.querySelectorAll('#add-to-cart-btn'));
        } else {
            menuSection.innerHTML = "<p>Menu is empty. Please check Admin Panel.</p>";
        }
    });

    // 2. Setup Cart
    ClientDataFlow(); 
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        let imgUrl = "assets/images/burger.jpg";
        if(item.fields.image && item.fields.image.fields && item.fields.image.fields.file) {
            imgUrl = item.fields.image.fields.file.url;
        }
        return `
        <article class="menu-item">
            <img src="${imgUrl}" loading="lazy" alt="Product image">
            <div class="item-info">
            <figure>
                <h2>${item.fields.title}</h2>
                <div class="item-category">${item.fields.category}</div>
                <div class="flex" style="margin-top: 10px;">
                    <i class="fas fa-fire"></i><p>${item.fields.caleories}</p>
                </div>
            </figure>
            <hr style="margin: 10px 0;">
            <div class="menu-cart-functionality">
                <div class="price">&#8377;${item.fields.price}</div>
                <div class="cart-btn-container">
                    <button class="bag-btn" id="add-to-cart-btn" data-id=${item.sys.id}>Add to Cart</i></button>
                </div>
            </div></div></article>`;
    });
    displayMenu = displayMenu.join('');
    if (menuSection) { menuSection.innerHTML = displayMenu; }
}

function filtering(addToCartBtn){
    menuFilterBtns.forEach( btn => {
        btn.addEventListener('click', (e)=>{
            const Category = e.currentTarget.dataset.id;
            btn.classList.add('current')
            menuFilterBtns.forEach(i =>{ if(i.dataset.id != Category){i.classList.remove('current')} })
            const allArticles = document.querySelectorAll('.menu-item');
            allArticles.forEach(article => {
                const catText = article.querySelector('.item-category').innerText;
                if (Category === 'all' || catText === Category){
                    article.classList.remove('display-none'); article.classList.add('show')
                } else { article.classList.add('display-none') }
            });
        })
    })
}

function findItemById(id) { return newMenu.find(item => item.sys.id == id); }

function foodItemCartBtn(data_id, quantity, trimedEmailID, addItem){
    var product = { FoodID: data_id, Quantity: quantity }
    addItem.push(product);
    if (addItem.length != 0){
        firebase.database().ref('Users_Carts/' + trimedEmailID + '_Cart').set({ Details: addItem, Total_Amount: 0 });
    }
}

function showUserCart(addItem, trimedEmailID){
    let totalAmount = 0; let No_of_Item = 0;
    cartItemsContainer.innerHTML = ''
    addItem.forEach(item => {
        let id = item.FoodID; 
        let quantity = item.Quantity;
        No_of_Item += quantity;
        let inMenu = findItemById(id); 
        if(inMenu) {
            let fields = inMenu.fields;
            totalAmount = totalAmount + (quantity * fields.price);
            var div = document.createElement('article');
            div.classList.add('cart-item')
            let imgUrl = fields.image.fields.file.url;
            div.innerHTML = `
                <div><img src="${imgUrl}" alt="Food item image"></div>
                <div class="cart-info"><h3 id'c-title'>${fields.title}</h3><p>&#8377;${fields.price}</p><span class="remove-item" data-id=${id}>remove</span></div>
                <div class="flex-column"><i class="fas fa-chevron-up" data-id=${id}></i><p class="item-amount">${item.Quantity}</p><i class="fas fa-chevron-down" data-id=${id}></i></div>` 
            cartItemsContainer.appendChild(div);
        }
    })
    firebase.database().ref('Users_Carts/' + trimedEmailID + '_Cart').update({Details: addItem, Total_Amount: totalAmount})
    cartTotal.innerHTML = totalAmount;
    cartValues.forEach(values=>{values.innerHTML = No_of_Item;})
    return { Details: addItem, Total_Amount: totalAmount }
}

function cartFunctionalities (addItem, trimedEmailID, addToCartBtns){
    cartItemsContainer.addEventListener('click', event => {
        if (event.target.classList.contains('remove-item')){
            let removeBtn = event.target;
            let id = removeBtn.dataset.id;
            let idx = addItem.findIndex(item => item.FoodID == id);
            if(idx > -1) {
                addItem.splice(idx, 1);
                const btn = document.querySelector(`#add-to-cart-btn[data-id="${id}"]`);
                if(btn) { btn.disabled = false; btn.innerHTML = 'Add to Cart'; }
            }
            if (addItem.length === 0){ 
                cartItemsContainer.innerHTML = '';
                cartValues.forEach(values => { values.innerHTML = '0';})
                cartTotal.innerHTML = '0';
                firebase.database().ref('Users_Carts/' + trimedEmailID + '_Cart').remove();
            } else { showUserCart(addItem, trimedEmailID); }
        }
        else if (event.target.classList.contains('fa-chevron-up')){
            let id = event.target.dataset.id;
            let item = addItem.find(i => i.FoodID == id);
            if(item) { item.Quantity += 1; showUserCart(addItem, trimedEmailID); }
        }
        else if (event.target.classList.contains('fa-chevron-down')){
            let id = event.target.dataset.id;
            let item = addItem.find(i => i.FoodID == id);
            if(item && item.Quantity >= 1){
                item.Quantity -= 1;
                if (item.Quantity === 0){
                    let idx = addItem.indexOf(item);
                    addItem.splice(idx, 1);
                    const btn = document.querySelector(`#add-to-cart-btn[data-id="${id}"]`);
                    if(btn) { btn.disabled = false; btn.innerHTML = 'Add to Cart'; }
                }
                if (addItem.length === 0){
                    cartItemsContainer.innerHTML = '';
                    cartValues.forEach(values => { values.innerHTML = '0';})
                    cartTotal.innerHTML = '0';
                    firebase.database().ref('Users_Carts/' + trimedEmailID + '_Cart').remove()
                } else { showUserCart(addItem, trimedEmailID); }
            }
        }
    })
}

function clearUserCart(addItem, trimedEmailID){
    cartItemsContainer.innerHTML = '';
    cartValues.forEach(values => { values.innerHTML = '0';})
    cartTotal.innerHTML = '0';
    const allBtns = document.querySelectorAll('#add-to-cart-btn');
    allBtns.forEach(btn => { btn.disabled = false; btn.innerHTML = 'Add to Cart'; });
    addItem = []
    firebase.database().ref('Users_Carts/' + trimedEmailID + '_Cart').remove()
}

function userOrderManagement (trimedEmailID , userCart, userEmailID){
    const orderDate = new Date().toLocaleDateString();
    var orderTime = new Date().toLocaleTimeString();
    let current_order = {
        Email_ID: userEmailID, Order_Status: true, User_Cart: userCart,
        Payment_Status: false, Delivery_Status: false, Order_Date: orderDate, Order_Time: orderTime,
    }
    firebase.database().ref('Users_Order/' + trimedEmailID + '_Orders').push(current_order);
}

function ClientDataFlow(){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const userEmailID = user.email
            var trimedEmailID = userEmailID.split('@')[0];
            firebase.database().ref('Users_Carts/' + trimedEmailID + '_Cart').on('value', function(snapshot){
                if (snapshot.exists()){
                    var userCart = snapshot.val().Details;
                    addItem = userCart || []; 
                    addItem.forEach(item => {
                        const btn = document.querySelector(`#add-to-cart-btn[data-id="${item.FoodID}"]`);
                        if(btn){ btn.disabled = true; btn.innerHTML = 'In Cart'; }
                    });
                    const btns = document.querySelectorAll('#add-to-cart-btn');
                    cartFunctionalities(addItem, trimedEmailID, btns);
                    showUserCart(addItem, trimedEmailID);
                }
            })
            document.addEventListener('click', function(e){
                if(e.target && e.target.id == 'add-to-cart-btn'){
                    var quantity = 1;
                    const data_id = e.target.dataset.id;
                    foodItemCartBtn(data_id, quantity, trimedEmailID, addItem);
                    e.target.disabled = true; e.target.innerHTML = "In Cart";
                }
            });
            if(clearCart){
                clearCart.addEventListener('click', ()=>{ clearUserCart(addItem, trimedEmailID); addItem = [] })
            }
            if(checkOutBtn){
                checkOutBtn.addEventListener('click', ()=>{
                    if (addItem.length != 0){
                        let userCart = showUserCart(addItem, trimedEmailID);
                        userOrderManagement(trimedEmailID, userCart, userEmailID);
                        clearUserCart(addItem, trimedEmailID); addItem = [];
                        Swal.fire({ icon: 'success', title: 'Order Successfully Recorded', });
                        setTimeout(()=>{ window.location.replace('user-orders.html') }, 2600)
                    } else { Swal.fire({ icon: 'error', title: 'Empty Cart', }) }
                })
            }
            if (window.location.href.includes('user-orders.html')){
                if(typeof setOrderDetails === 'function') { setOrderDetails(trimedEmailID) }
            }
        }
    });
}