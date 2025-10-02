// dropdown toggle
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dropdown").addEventListener("click", function () {
        const searchSelect = document.getElementById("search-select");
        if (searchSelect.style.display === "none" || searchSelect.style.display === "") {
            searchSelect.style.display = "block";
        } else {
            searchSelect.style.display = "none";
        }
    });

    const selectItems = document.querySelectorAll(".select-item");
    selectItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const selectedText = this.textContent;
            document.getElementById("selected-text").textContent = selectedText;
            document.getElementById("search-select").style.display = "none";
        });
    });
});

// dropdown 
const dropdown_options = [
    { option: 'All' },
    { option: 'Alexa Skills' },
    { option: 'Amazon devices' },
    { option: 'Amazon Fashion' },
    { option: 'Amazon Fresh' },
    { option: 'Amazon Pharmacy' },
    { option: 'Appliances' },
    { option: 'apps & Games' },
    { option: 'Audible Audiobooks' },
    { option: 'Baby' },
    { option: 'Beauty' },
    { option: 'Books' },
    { option: 'Car & Motorbike' },
    { option: 'Clothing & Accessories' },
    { option: 'Collectiibles' },
    { option: 'Computers & Accessories' },
    { option: 'Deals' },
    { option: 'Electronics' },
    { option: 'Furniture' },
    { option: 'Garden & Outdoors' },
    { option: 'Gift Cards' },
    { option: 'Grocery & Gourmet Foods' },
    { option: 'Health & Personal Care' },
    { option: 'Home & Kitchen' },
    { option: 'Industrial & Scientific' },
    { option: 'Jewellery' },
    { option: 'Kindle Store' },
    { option: 'Luggage & Bags' },
    { option: 'Luxury Beauty' },
    { option: 'Movies & TV Shows' },
    { option: 'MP3 Music' },
    { option: 'Music' },
    { option: 'Musical Instruments' },
    { option: 'Office Products' },
    { option: 'Pet Supplies' },
    { option: 'Prime Video' },
    { option: 'Shoes & Handbags' },
    { option: 'Software' },
    { option: 'Sports, Fitness & Outdoors' },
    { option: 'Subscribe & Save' },
    { option: 'Tools & Home' },
    { option: 'Toys & Games' },
    { option: 'Under $500' },
    { option: 'Video Games' },
    { option: 'Watches' }
];

let displayOptions = "";
dropdown_options.map((dropdown_option) => {
    displayOptions += `<li class="select-item">${dropdown_option.option}</li>`;
});
document.getElementById("search-select").innerHTML = displayOptions;

// sidebar
document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.getElementById("sign-in");
    const sidebar = document.getElementById("sidebar");
    const closeButtons = document.querySelectorAll(".sidebar-closebtn");
    const body = document.body;

    signInButton.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        body.classList.toggle("no-scroll");
    });

    closeButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            sidebar.classList.remove("active");
            body.classList.remove("no-scroll");
        });
    });
});

const PRODUCTS_KEY = "myProducts123456";
const CART_KEY = "myCart123456";

if (localStorage.getItem("isLogin") === null) {
    localStorage.setItem("isLogin", "false");
}

//  search
function search() {
    let searchbox = document.getElementById("search-text")
    let search_input = searchbox.value.toUpperCase()
    let product = document.querySelectorAll(".product")
    let dis_blocks = document.getElementById("dis-blocks")

    product.forEach(item => {
        let brandName = item.querySelector(".brand").textContent.toUpperCase()
        let productName = item.querySelector(".name").textContent.toUpperCase()
        let productCategory = item.querySelector(".category").textContent.toUpperCase()

        if (productName.includes(search_input) || brandName.includes(search_input) || productCategory.includes(search_input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
            document.getElementById("hero-section").style.display = "none"
            document.getElementById("dis-blocks").style.display = "none"
        }
    })
}

// display
const isLogin = localStorage.getItem("isLogin");
if(isLogin=="true"){
    document.querySelector("#Empty-cart-Page").style.display = "none";
    document.querySelector("#cart-page").style.display = "block";
}
if(isLogin=="false"){
    document.querySelector("#Empty-cart-Page").style.display = "block";
    document.querySelector("#cart-page").style.display = "none";
}

// Username
const userName = localStorage.getItem("userName");

if (isLogin === "true" && userName) {
    document.getElementById("login").innerText = "Hello, " + userName;
    document.querySelector(".profile-name").innerText = "Hello, " + userName;
    document.getElementById("log-out").innerHTML = "Sign Out";
}

// signOut
function signOut() {
    const isLogin = localStorage.getItem("isLogin");
    const logOutBtn = document.getElementById("log-out");

    if (isLogin === "true") {
        const confirmLogout = confirm("Do you want to logout?");
        if (confirmLogout) {
            localStorage.setItem("isLogin", "false");
            localStorage.removeItem("userName");
            localStorage.removeItem("myCart12345");
            const cartCount = document.getElementById("no_of_items");
            if (cartCount) {
                cartCount.innerText = "0";
            }
            location.reload();
        }
    } else {
        logOutBtn.innerText = "Log in";
        location.href = "login.html";
    }
}

// Add to cart
const cartList = document.getElementById("cart-item-container");
function renderCart() {
    let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    let subtotal = 0;
    let count_item=0

    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = "<p>No items</p>";
        document.getElementById("no_of_items").innerHTML = "0";
        return;
    }
    
    const item_heading = document.createElement("div");
    item_heading.classList.add("item_heading");
    
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = "Items";

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
    priceDiv.innerHTML = "Price";
    
    item_heading.append(itemDiv, priceDiv);
    cartList.appendChild(item_heading);
    
    cart.forEach((item, index) => {
        const products = document.createElement("div");
        products.classList.add("products");
        
        const img1 = document.createElement("img");
        img1.src = item.image;
        img1.alt = item.name;
        
        const itemInfo = document.createElement("div");
        itemInfo.classList.add("item-info");

        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item_container");
        
        const name = document.createElement("div");
        name.classList.add("name");
        name.innerText = item.name;
        
        const stock = document.createElement("div");
        stock.classList.add("stock");
        stock.innerText = "In stock";
        
        const img2 = document.createElement("img");
        img2.src = "images/cart_stock.png";
        img2.alt = "in stock";
        
        const brandContainer = document.createElement("div");
        brandContainer.classList.add("brand-container");
        brandContainer.innerText = `Category: ${item.brand}`;
        
        const ratingContainer = document.createElement("div");
        ratingContainer.classList.add("rating-container");
        
        const rating = document.createElement("div");
        rating.classList.add("rating");
        rating.innerText = item.rating;
        
        const star = document.createElement("div");
        star.classList.add("star");
        star.innerText = "★";

        const people = document.createElement("div");
        people.classList.add("people");
        people.innerText = item.people;
        
        ratingContainer.append(rating, star, people);
        
        const sellingContainer = document.createElement("div");
        sellingContainer.classList.add("selling-container");
        sellingContainer.innerText = item.sell;
        
        const quantityContainer = document.createElement("div");
        quantityContainer.classList.add("quantity_container");
        
        const increaseBtn = document.createElement("div");
        increaseBtn.classList.add("increaseBtn");
        increaseBtn.innerText = "+";
        increaseBtn.onclick = () => {
            cart[index].quantity += 1;
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
            renderCart();
        };
        
        const quantity = document.createElement("div");
        quantity.classList.add("quantity");
        quantity.innerText = item.quantity;
        
        const decreaseBtn = document.createElement("div");
        decreaseBtn.classList.add("decreaseBtn");
        decreaseBtn.innerText = "-";
        decreaseBtn.onclick = () => {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1);
            }
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
            renderCart();
        };

        quantityContainer.append(increaseBtn, quantity, decreaseBtn);
        
        const removeBtn = document.createElement("div");
        removeBtn.classList.add("removeBtn");
        removeBtn.innerText = "Delete";
        removeBtn.onclick = () => {
            cart.splice(index, 1);
            localStorage.setItem(CART_KEY, JSON.stringify(cart));
            renderCart();
        };

        itemContainer.append(name, stock, img2, brandContainer, ratingContainer, sellingContainer, quantityContainer, removeBtn);

        const priceContainer = document.createElement("div");
        priceContainer.classList.add("price_container");
        
        const deal = document.createElement("div");
        deal.classList.add("deal");
        deal.innerText = "Limited time deal";
        
        const priceContainerInner = document.createElement("div");
        priceContainerInner.classList.add("price-container");
        
        const discount = document.createElement("div");
        discount.classList.add("discount");
        discount.innerText = `- (${item.discount}% off)`;
        
        const MRP = document.createElement("div");
        MRP.classList.add("MRP");
        MRP.innerText = `₹ ${item.price}`;
        
        priceContainerInner.append(discount, MRP);

        let offerHTML = `<div class="offer-container">M.R.P.: <s>₹${item.discountedPrice}</s></div>`;
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = offerHTML;
        const offerContainer = tempDiv.firstChild;
        offerContainer.classList.add("offer-container");
        
        const category = document.createElement("div");
        category.classList.add("category");

        const text1 = document.createElement("div");
        text1.classList.add("text1");
        text1.innerText = "Buy 3 items, get 5% off";
        
        const text2 = document.createElement("a");
        text2.classList.add("text2");
        text2.innerText = "Shop items";
        text2.onclick = () => {
            window.location.href = "index.html";
        };
        
        category.append(text1, text2);
        
        priceContainer.append(deal, priceContainerInner, offerContainer, category);
        
        itemInfo.append(itemContainer, priceContainer);
        products.append(img1, itemInfo);
        cartList.appendChild(products);
        
        subtotal += item.price * item.quantity;
        count_item= count_item + item.quantity;
    });
    document.getElementById("no_of_items").innerHTML = count_item;
    
    const gstRate = 0.08;
    const gstAmount = Math.round(subtotal * gstRate);
    const totalAmount = subtotal + gstAmount;
    
    const subtotalDiv = document.createElement("div");
    subtotalDiv.classList.add("subtotal");
    subtotalDiv.innerText = `Subtotal (${count_item} items): ₹${subtotal}`;

    const gstDiv = document.createElement("div");
    gstDiv.classList.add("gst");
    gstDiv.innerText = `GST (8%): ₹${gstAmount}`;

    const totalDiv = document.createElement("div");
    totalDiv.classList.add("total");
    totalDiv.innerText = `Total Amount: ₹${totalAmount}`;

    cartList.appendChild(subtotalDiv);
    cartList.appendChild(gstDiv);
    cartList.appendChild(totalDiv);

    document.getElementById("no_of_items").innerText = count_item;
}
renderCart();

// Back to top
document.querySelector(".back").onclick = function () {
    window.scrollTo(0, 0);
};

// footer
const list1_content = {
    heading: 'Get to Know Us',
    link1: 'https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer',
    text1: 'About Amazon',
    link2: 'https://amazon.jobs/en/',
    text2: 'Careers',
    link3: 'https://press.aboutamazon.com/in/press-release-archive',
    text3: 'Press Releases',
    link4: 'https://www.amazon.science/',
    text4: 'Amazon Science'
};
let displayList1 = `
    <li class="heading">${list1_content.heading}</li>
    <li><a href="${list1_content.link1}">${list1_content.text1}</a></li>
    <li><a href="${list1_content.link2}">${list1_content.text2}</a></li>
    <li><a href="${list1_content.link3}">${list1_content.text3}</a></li>
    <li><a href="${list1_content.link4}">${list1_content.text4}</a></li>
`;
document.querySelector(".list1").innerHTML = displayList1;

const list2_content = {
    heading: 'Connect with Us',
    link1: 'https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6',
    text1: 'Facebook',
    link2: 'https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6',
    text2: 'Twitter',
    link3: 'https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards',
    text3: 'Instagram'
};
let displayList2 = `
    <li class="heading">${list2_content.heading}</li>
    <li><a href="${list2_content.link1}">${list2_content.text1}</a></li>
    <li><a href="${list2_content.link2}">${list2_content.text2}</a></li>
    <li><a href="${list2_content.link3}">${list2_content.text3}</a></li>
`;
document.querySelector(".list2").innerHTML = displayList2;

const list3_content = {
    heading: 'Make Money with Us',
    link1: 'https://www.amazon.in/b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C',
    text1: 'Sell on Amazon',
    link2: 'https://www.amazon.in/b/?node=16192220031&ref_=map_1_b2b_GW_FT',
    text2: 'Sell Under Amazon Accelerator',
    link3: 'https://sell.amazon.in/brand-registry',
    text3: 'Protect and Build Your Brand',
    link4: 'https://sell.amazon.in/grow-your-business/amazon-global-selling?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1',
    text4: 'Amazon Global Selling',
    link5: 'https://supply.amazon.com/?ref_=footer_sta&lang=en-IN',
    text5: 'Supply to Amazon',
    link6: 'https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc',
    text6: 'Become an Affiliate',
    link7: 'https://sell.amazon.in/?ref_=asin_soa_rd&ld=AWRGINFBAfooter',
    text7: 'Fulfilment by Amazon',
    link8: 'https://advertising.amazon.com/en-gb?ref=Amz.in',
    text8: 'Advertise Your Products',
    link9: 'https://www.amazon.in/amazonpay/home',
    text9: 'Amazon Pay on Merchants'
};
let displayList3 = `
<li class="heading">${list3_content.heading}</li>
    <li><a href="${list3_content.link1}">${list3_content.text1}</a></li>
    <li><a href="${list3_content.link2}">${list3_content.text2}</a></li>
    <li><a href="${list3_content.link3}">${list3_content.text3}</a></li>
    <li><a href="${list3_content.link4}">${list3_content.text4}</a></li>
    <li><a href="${list3_content.link5}">${list3_content.text5}</a></li>
    <li><a href="${list3_content.link6}">${list3_content.text6}</a></li>
    <li><a href="${list3_content.link7}">${list3_content.text7}</a></li>
    <li><a href="${list3_content.link8}">${list3_content.text8}</a></li>
    <li><a href="${list3_content.link9}">${list3_content.text9}</a></li>
`;
document.querySelector(".list3").innerHTML = displayList3;

const list4_content = {
    heading: 'Let Us Help You',
    link1: 'https://www.amazon.in/gp/css/homepage.html?ref_=footer_ya',
    text1: 'Your Account',
    link2: 'https://www.amazon.in/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fspr%2Freturns%2Fhomepage%2Fhomepage.html%3Fref_%3Dfooter_hy_f_4&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_psr_desktop_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0',
    text2: 'Returns Centre',
    link3: 'https://www.amazon.in/ap/signin?openid.pape.max_auth_age=3600&openid.return_to=https%3A%2F%2Famazon.in%2Fyour-product-safety-alerts%3Fref_%3Dfooter_bsx_ypsa&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_yourrecalls_in&openid.mode=checkid_setup&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0',
    text3: 'Recalls and Product Safety Alerts',
    link4: 'https://www.amazon.in/gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc',
    text4: '100 Purchase Protection',
    link5: 'https://www.amazon.in/gp/browse.html?node=6967393031&ref_=footer_mobapp',
    text5: 'Amazon App Download',
    link6: 'http://amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he',
    text6: 'Help',
};
let displayList4 = `
<li class="heading">${list4_content.heading}</li>
    <li><a href="${list4_content.link1}">${list4_content.text1}</a></li>
    <li><a href="${list4_content.link2}">${list4_content.text2}</a></li>
    <li><a href="${list4_content.link3}">${list4_content.text3}</a></li>
    <li><a href="${list4_content.link4}">${list4_content.text4}</a></li>
    <li><a href="${list4_content.link5}">${list4_content.text5}</a></li>
    <li><a href="${list4_content.link6}">${list4_content.text6}</a></li>
`;
document.querySelector(".list4").innerHTML = displayList4;