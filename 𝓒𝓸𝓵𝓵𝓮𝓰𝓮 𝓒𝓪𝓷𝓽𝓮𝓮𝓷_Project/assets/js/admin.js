 
// --- assets/js/admin.js ---

// 1. DEFAULT MENU DATA (For Reset)
const defaultMenu = [
    { "sys": { "id": "1" }, "fields": { "title": "Double Cheese Potato Burger", "category": "Burger", "price": "45", "caleories": "220 - 280 Kcal", "image": { "fields": { "file": { "url": "assets/images/burger.jpg" } } } } },
    { "sys": { "id": "2" }, "fields": { "title": "Cheese Sandwitch", "category": "Sandwitch", "price": "45", "caleories": "250 - 300 Kcal", "image": { "fields": { "file": { "url": "assets/images/sandwich1.jpg" } } } } },
    { "sys": { "id": "3" }, "fields": { "title": "Veg Club Sandwitch", "category": "Sandwitch", "price": "60", "caleories": "320 - 400 Kcal", "image": { "fields": { "file": { "url": "assets/images/s2.jpg" } } } } },
    { "sys": { "id": "4" }, "fields": { "title": "Cheese Masala Sandwitch", "category": "Sandwitch", "price": "45", "caleories": "250 - 300 Kcal", "image": { "fields": { "file": { "url": "assets/images/sandwich2.jpg" } } } } },
    { "sys": { "id": "5" }, "fields": { "title": "Veg Schezuan Sandwitch", "category": "Sandwitch", "price": "45", "caleories": "230 - 285 Kcal", "image": { "fields": { "file": { "url": "assets/images/schez-sandwitch.jpg" } } } } },
    { "sys": { "id": "6" }, "fields": { "title": "Masala Maggie", "category": "Maggie", "price": "25", "caleories": "150 - 280 Kcal", "image": { "fields": { "file": { "url": "assets/images/maggie.jpg" } } } } },
    { "sys": { "id": "7" }, "fields": { "title": "Schezuan Maggie", "category": "Maggie", "price": "30", "caleories": "165 - 225 Kcal", "image": { "fields": { "file": { "url": "assets/images/maggie-s.jpg" } } } } },
    { "sys": { "id": "8" }, "fields": { "title": "Veg Maggie", "category": "Maggie", "price": "30", "caleories": "170 - 220 Kcal", "image": { "fields": { "file": { "url": "assets/images/veg-maggie.jpg" } } } } },
    { "sys": { "id": "9" }, "fields": { "title": "Cheese Garlic Maggie", "category": "Maggie", "price": "40", "caleories": "190 - 230 Kcal", "image": { "fields": { "file": { "url": "assets/images/garlic-maggie.jpg" } } } } },
    { "sys": { "id": "10" }, "fields": { "title": "Cheese Veg Maggie", "category": "Maggie", "price": "45", "caleories": "175 - 235 Kcal", "image": { "fields": { "file": { "url": "assets/images/cheese-maggie.jpg" } } } } },
    { "sys": { "id": "11" }, "fields": { "title": "Masala Fries", "category": "Fries", "price": "35", "caleories": "120 - 185 Kcal", "image": { "fields": { "file": { "url": "assets/images/frenchfries.jpg" } } } } },
    { "sys": { "id": "12" }, "fields": { "title": "Schezuan Fries", "category": "Fries", "price": "45", "caleories": "135 - 210 Kcal", "image": { "fields": { "file": { "url": "assets/images/shezuan.jpg" } } } } },
    { "sys": { "id": "13" }, "fields": { "title": "Cheese Fries", "category": "Fries", "price": "40", "caleories": "140 - 156 Kcal", "image": { "fields": { "file": { "url": "assets/images/cheese-fries.jpg" } } } } },
    { "sys": { "id": "14" }, "fields": { "title": "Red Sause Pasta", "category": "Pasta", "price": "80", "caleories": "241 - 321 Kcal", "image": { "fields": { "file": { "url": "assets/images/pasta.jpg" } } } } },
    { "sys": { "id": "15" }, "fields": { "title": "White Sause Pasta", "category": "Pasta", "price": "80", "caleories": "265 - 321 Kcal", "image": { "fields": { "file": { "url": "assets/images/white-pasta.jpg" } } } } },
    { "sys": { "id": "16" }, "fields": { "title": "Milk Shakes", "category": "Beverages", "price": "35", "caleories": "155 - 210 Kcal", "image": { "fields": { "file": { "url": "assets/images/milk-shake.jpg" } } } } },
    { "sys": { "id": "17" }, "fields": { "title": "Hot Chocolate", "category": "Beverages", "price": "35", "caleories": "230 - 280 Kcal", "image": { "fields": { "file": { "url": "assets/images/hot-coffee.jpg" } } } } },
    { "sys": { "id": "18" }, "fields": { "title": "Aerated Drinks", "category": "Beverages", "price": "10", "caleories": "260 - 365 Kcal", "image": { "fields": { "file": { "url": "assets/images/Aerated-Drinks.jpg" } } } } },
    { "sys": { "id": "19" }, "fields": { "title": "Cold Coffee", "category": "Beverages", "price": "35", "caleories": "255 - 360 Kcal", "image": { "fields": { "file": { "url": "assets/images/cold-coffee.jpg" } } } } },
    { "sys": { "id": "20" }, "fields": { "title": "Coffee", "category": "Beverages", "price": "15", "caleories": "220 - 265 Kcal", "image": { "fields": { "file": { "url": "assets/images/coffee.jpg" } } } } },
    { "sys": { "id": "21" }, "fields": { "title": "Tea", "category": "Beverages", "price": "10", "caleories": "155 - 225 Kcal", "image": { "fields": { "file": { "url": "assets/images/tea.jpg" } } } } },
    { "sys": { "id": "22" }, "fields": { "title": "Chocate Frappe", "category": "Beverages", "price": "35", "caleories": "265 - 355 Kcal", "image": { "fields": { "file": { "url": "assets/images/beverage.jpg" } } } } },
    { "sys": { "id": "23" }, "fields": { "title": "Veg Puff", "category": "Bakery", "price": "35", "caleories": "260 - 320 Kcal", "image": { "fields": { "file": { "url": "assets/images/puff.jpg" } } } } },
    { "sys": { "id": "24" }, "fields": { "title": "Panner Puff", "category": "Bakery", "price": "15", "caleories": "255 - 390 Kcal", "image": { "fields": { "file": { "url": "assets/images/samosa.jpg" } } } } },
    { "sys": { "id": "25" }, "fields": { "title": "Khari", "category": "Bakery", "price": "20", "caleories": "265 - 375 Kcal", "image": { "fields": { "file": { "url": "assets/images/panner-puff.jpg" } } } } },
    { "sys": { "id": "26" }, "fields": { "title": "Noodle Puff", "category": "Bakery", "price": "15", "caleories": "300 - 425 Kcal", "image": { "fields": { "file": { "url": "assets/images/noodle-puff.jpg" } } } } }
];

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href.includes("admin-side.html")) {
        console.log("Admin Panel Loaded");

        // --- 1. SETUP TABS & BUTTONS ---
        const navOrders = document.getElementById('nav-orders');
        const navProducts = document.getElementById('nav-products');
        const ordersSection = document.getElementById('orders-section');
        const productSection = document.getElementById('product-section');
        const filterSelect = document.getElementById('order-filter');

        if (navOrders && navProducts) {
            navOrders.addEventListener('click', () => {
                ordersSection.classList.remove('display-none');
                productSection.classList.add('display-none');
            });
            navProducts.addEventListener('click', () => {
                ordersSection.classList.add('display-none');
                productSection.classList.remove('display-none');
            });
        }

        const addProductBtn = document.querySelector("#add-product-menu");
        const removeProductBtn = document.querySelector("#remove-product-menu");
        const addContainer = document.querySelector(".add-container");
        const removeContainer = document.querySelector(".remove-container");

        if (addProductBtn) addProductBtn.addEventListener("click", () => {
            addContainer.classList.toggle("show-container");
            removeContainer.classList.remove("show-container");
        });
        if (removeProductBtn) removeProductBtn.addEventListener("click", () => {
            removeContainer.classList.toggle("show-container");
            addContainer.classList.remove("show-container");
        });

        // --- 2. RESET MENU LOGIC ---
        const resetBtn = document.getElementById('reset-menu-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                Swal.fire({
                    title: 'Reset Menu?',
                    text: "Restores original 26 items & fixes duplicates.",
                    icon: 'warning', showCancelButton: true, confirmButtonText: 'Yes, Reset!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        const menuRef = firebase.database().ref('Food_Menu');
                        menuRef.remove().then(() => {
                            defaultMenu.forEach(item => menuRef.push(item));
                            Swal.fire('Success', 'Menu reset.', 'success');
                        });
                    }
                })
            });
        }

        // --- 3. POPULATE DELETE DROPDOWN ---
        const removeDropdown = document.getElementById('remove-dropdown');
        if (removeDropdown) {
            firebase.database().ref('Food_Menu').on('value', snapshot => {
                removeDropdown.innerHTML = '<option value="">-- Select Item to Delete --</option>';
                if (snapshot.exists()) {
                    snapshot.forEach(child => {
                        const item = child.val();
                        const option = document.createElement('option');
                        option.value = child.key;
                        option.text = item.fields.title + " (₹" + item.fields.price + ")";
                        removeDropdown.appendChild(option);
                    });
                }
            });
        }
        const submitRemoveBtn = document.getElementById("btn-remove-submit");
        if (submitRemoveBtn) {
            submitRemoveBtn.addEventListener("click", () => {
                const selectedKey = removeDropdown.value;
                if (!selectedKey) { Swal.fire('Error', 'Select an item', 'warning'); return; }
                firebase.database().ref('Food_Menu').child(selectedKey).remove()
                    .then(() => Swal.fire('Deleted', 'Item removed', 'success'));
            });
        }

        // --- 4. ADD PRODUCT LOGIC ---
        const submitAddBtn = document.getElementById("btn-add-submit");
        if (submitAddBtn) {
            submitAddBtn.addEventListener("click", () => {
                const title = document.getElementById("add-title").value;
                const price = document.getElementById("add-price").value;
                const cal = document.getElementById("add-calories").value || "N/A";
                const category = document.getElementById("add-category").value;
                const imgUrl = document.getElementById("add-img-url").value;
                if (title && price) {
                    const newFoodItem = {
                        sys: { id: Date.now().toString() },
                        fields: {
                            title: title, category: category, price: price, caleories: cal,
                            image: { fields: { file: { url: imgUrl } } }
                        }
                    };
                    firebase.database().ref('Food_Menu').push(newFoodItem)
                        .then(() => {
                            Swal.fire('Success', 'Item Added', 'success');
                            document.getElementById("add-title").value = "";
                        });
                } else { Swal.fire('Error', 'Title and Price required', 'warning'); }
            });
        }

        // --- 5. ORDERS: FETCH, AUTO-DELETE & FILTER ---
        const ordersContainer = document.getElementById("admin-orders-container");
        let allOrdersList = [];
        const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000; // 1 Year in Milliseconds

        // A. Listen for Orders
        firebase.database().ref('Users_Order').on('value', (snapshot) => {
            allOrdersList = [];
            const now = Date.now();

            if (snapshot.exists()) {
                const allUsers = snapshot.val();

                Object.keys(allUsers).forEach(userKey => {
                    const userOrders = allUsers[userKey];
                    if (userOrders) {
                        Object.keys(userOrders).forEach(orderKey => {
                            const order = userOrders[orderKey];
                            if (order && order.User_Cart) {
                                // 1. AUTO-DELETE LOGIC
                                let orderTime = new Date(order.Order_Date + " " + order.Order_Time).getTime();
                                if (isNaN(orderTime)) orderTime = 0;

                                if (now - orderTime > ONE_YEAR_MS) {
                                    // Delete silently if older than 1 year
                                    firebase.database().ref('Users_Order/' + userKey + '/' + orderKey).remove();
                                    return; // Skip adding to list
                                }

                                // 2. Add to list for Display
                                order.userKey = userKey;
                                order.orderKey = orderKey;
                                order.timestamp = orderTime;
                                allOrdersList.push(order);
                            }
                        });
                    }
                });

                // Sort Newest First
                allOrdersList.sort((a, b) => b.timestamp - a.timestamp);
                renderOrders();
            } else {
                ordersContainer.innerHTML = "<p class='text-center my-2'>No active orders.</p>";
            }
        });

        // B. Filter Event Listener
        if (filterSelect) {
            filterSelect.addEventListener('change', renderOrders);
        }

        // C. Render Function
        function renderOrders() {
            ordersContainer.innerHTML = "";
            const filterValue = filterSelect.value;
            const now = new Date().getTime();

            const filteredList = allOrdersList.filter(order => {
                if (filterValue === 'recent') {
                    // Recent = Last 24 Hours
                    const oneDay = 24 * 60 * 60 * 1000;
                    return (now - order.timestamp) <= oneDay;
                }
                const days = parseInt(filterValue);
                const diffTime = now - order.timestamp;
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                return diffDays <= days;
            });

            if (filteredList.length === 0) {
                ordersContainer.innerHTML = "<p class='text-center my-2'>No orders found for this period.</p>";
                return;
            }

            filteredList.forEach(order => {
                const div = document.createElement("div");
                div.className = "card m-2 p-2";
                div.style.background = "#fff";
                div.style.borderLeft = order.Delivery_Status ? "5px solid green" : "5px solid orange";

                let itemsHtml = "";
                if (order.User_Cart.Details) {
                    order.User_Cart.Details.forEach(item => {
                        itemsHtml += `<li>Food ID: ${item.FoodID} - Qty: ${item.Quantity}</li>`;
                    });
                }

                const statusBtnText = order.Delivery_Status ? 'Completed' : 'Mark as Completed';
                const statusBtnColor = order.Delivery_Status ? 'green' : '#ffc107';
                const statusBtnTextColor = order.Delivery_Status ? 'white' : 'black';
                const isDisabled = order.Delivery_Status ? 'disabled' : '';

                div.innerHTML = `
                    <div class="flex" style="justify-content:space-between; border-bottom:1px solid #ccc; padding-bottom:5px;">
                        <strong>${order.Email_ID || "Guest"}</strong>
                        <span>${order.Order_Date} | ${order.Order_Time}</span>
                    </div>
                    <div class="my-1">
                        <ul style="margin-left:20px; list-style:disc;">${itemsHtml}</ul>
                        <p style="text-align:right; font-weight:bold; margin-top:10px;">Total: ₹${order.User_Cart.Total_Amount}</p>
                    </div>
                    <div class="text-center">
                        <button class="btn" 
                            style="background:${statusBtnColor}; color:${statusBtnTextColor}" 
                            onclick="toggleStatus('${order.userKey}', '${order.orderKey}', ${order.Delivery_Status})" 
                            ${isDisabled}>
                            ${statusBtnText}
                        </button>
                    </div>
                `;
                ordersContainer.appendChild(div);
            });
        }
    }
});

// 6. GLOBAL FUNCTION TO UPDATE STATUS
window.toggleStatus = function (userKey, orderKey, currentStatus) {
    if (!currentStatus) {
        firebase.database().ref('Users_Order/' + userKey + '/' + orderKey).update({
            Delivery_Status: true,
            Payment_Status: true
        }).then(() => {
            Swal.fire({
                position: 'top-end', icon: 'success', title: 'Order Completed',
                showConfirmButton: false, timer: 1500
            });
        }).catch(err => Swal.fire('Error', err.message, 'error'));
    }
};