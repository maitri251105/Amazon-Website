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

// slider
const slider_src = [
    "images/slider-image1.jpg",
    "images/slider-image2.jpg",
    "images/slider-image3.jpg",
    "images/slider-image4.jpg",
    "images/slider-image5.jpg",
    "images/slider-image6.jpg",
    "images/slider-image7.jpg",
    "images/slider-image8.jpg"
];

const slider = document.getElementById("sliders");
slider.innerHTML = slider_src.map(src => `<div class="slide"><img src="${src}" alt="Slide"></div>`).join("");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
const totalSlides = slides.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function previndex() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function nextindex() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

setInterval(nextindex, 5000);
updateSlider();


// Discount Blocks
const discount_details = [
    {
        id: 1,
        heading: 'Appliances for your Home | Up to 55% off',
        image1: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg',
        text1: 'Air Conditioners',
        image2: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg',
        text2: 'Refrigerators',
        image3: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg',
        text3: 'Microwaves',
        image4: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg',
        text4: 'Washing Machines',
        button: 'See more'
    },
    {
        id: 2,
        heading: 'Revamp your Home in Style',
        image1: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg',
        text1: 'Cushion covers, bedsheets & more',
        image2: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg',
        text2: 'Figurines, vases & more',
        image3: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg',
        text3: 'Home Storage',
        image4: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg',
        text4: 'Lighting Solutions',
        button: 'Explore all'
    },
    {
        id: 3,
        heading: 'Starting ₹149 | Headphones',
        image1: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg',
        text1: 'Starting ₹249 | boAt',
        image2: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg',
        text2: 'Starting ₹349 | boult',
        image3: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg',
        text3: 'Starting ₹649 | Noise',
        image4: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg',
        text4: 'Starting ₹149 | Zebronics',
        button: 'See all offers'
    },
    {
        id: 4,
        heading: 'Automotive essentials | Up to 60% off',
        image1: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg',
        text1: 'Cleaning Accessories',
        image2: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg',
        text2: 'Tyre & rim care',
        image3: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg',
        text3: 'Helmets',
        image4: 'https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg',
        text4: 'Vaacum Cleaner',
        button: 'See more'
    },
    {
        id: 5,
        heading: 'Starting ₹199 | Amazon Brands & more',
        image1: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg',
        text1: 'Starting ₹199 | Bedsheets',
        image2: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg',
        text2: 'Starting ₹199 | Curtains',
        image3: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg',
        text3: 'Minimum 40% off | Ironing board & more',
        image4: 'https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg',
        text4: 'Upto 60% off | Home decor',
        button: 'See more'
    },
    {
        id: 6,
        heading: 'Up to 60% off | Styles for women',
        image1: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg',
        text1: "Women's Clothing",
        image2: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg',
        text2: 'Footwear+Handbags',
        image3: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpgg',
        text3: 'Watches',
        image4: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg',
        text4: 'Fashion Jwellery',
        button: 'End of season sale'
    },
    {
        id: 7,
        heading: 'Under ₹499 | Deals on home improvement essentials',
        image1: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wipes_low_res_V1._SY116_CB549138744_.jpg',
        text1: 'Under ₹199 | Cleaning Supplies',
        image2: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Shower_heads_low_res_V1._SY116_CB549138744_.jpg',
        text2: 'Under ₹399 | Bathroom Accessories',
        image3: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Tools_low_res_V1._SY116_CB549138744_.jpg',
        text3: 'Under ₹499 | Home Tools',
        image4: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2025/March/Wallpapers_low_res_V1._SY116_CB549138744_.jpg',
        text4: 'Under ₹299 | Wallpapers',
        button: 'Explore all'
    },
    {
        id: 8,
        heading: 'Min. 40% off | Playful games for little ones',
        image1: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/baby/QC_PC_186x116_9._SY116_CB563558900_.jpg',
        text1: 'Min. 50% off | soft toys',
        image2: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_14._SY116_CB541414575_.jpg',
        text2: 'Min. 40% off | learning toys',
        image3: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_15._SY116_CB541414575_.jpg',
        text3: 'Min. 40% off | Indoor Games',
        image4: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/Baby_toys/toys/QC_PC_186x116_11._SY116_CB541414575_.jpg',
        text4: 'Min. 40% off | Ride-ons & Outdoors',
        button: 'See all offers'
    }
];

let displayDiscount = "";
discount_details.map((discount_detail) => {
    displayDiscount += `
    <div class="block">
        <div class="heading">${discount_detail.heading}</div>
        <div id="images">
            <div class="img img1">
                <img src="${discount_detail.image1}" alt="${discount_detail.text1}">
                <div class="img-text">${discount_detail.text1}</div>
            </div>
            <div class="img img2">
                <img src="${discount_detail.image2}" alt="${discount_detail.text2}">
                <div class="img-text">${discount_detail.text2}</div>
            </div>
            <div class="img img3">
                <img src="${discount_detail.image3}" alt="${discount_detail.text3}">
                <div class="img-text">${discount_detail.text3}</div>
            </div>
            <div class="img img4">
                <img src="${discount_detail.image4}" alt="${discount_detail.text4}">
                <div class="img-text">${discount_detail.text4}</div>
            </div>
        </div>
        <a href="#">${discount_detail.button}</a>
    </div>`;
});
document.getElementById("dis-blocks").innerHTML = displayDiscount;


// Months
let current_date = new Date()
let delivery_month = current_date.getMonth()
let delivery_date = current_date.getDate()

switch (delivery_month) {
    case 0:
        delivery_month = 'Jan'
        break
    case 1:
        delivery_month = 'Feb'
        break
    case 2:
        delivery_month = 'Mar'
        break
    case 3:
        delivery_month = 'Apr'
        break
    case 4:
        delivery_month = 'May'
        break
    case 5:
        delivery_month = 'Jun'
        break
    case 6:
        delivery_month = 'Jul'
        break
    case 7:
        delivery_month = 'Aug'
        break
    case 8:
        delivery_month = 'Sep'
        break
    case 9:
        delivery_month = 'Oct'
        break
    case 10:
        delivery_month = 'Nov'
        break
    case 11:
        delivery_month = 'Dec'
        break
}

const PRODUCTS_KEY = "myProducts123456";
const CART_KEY = "myCart123456";

if (localStorage.getItem("isLogin") === null) {
    localStorage.setItem("isLogin", "false");
}


// products
const products = JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || [
    {
        id: 101,
        category: 'men',
        image: 'https://m.media-amazon.com/images/I/51NSC2qvOxL._SY741_.jpg',
        brand: 'Lymio',
        name: 'Men Cargo || Men Cargo Pants || Men Cargo Pants Cotton || Cargos for Men...',
        rating: '5',
        color: 'green',
        people: '10,354',
        sell: '500+ bought in past month',
        price: '649',
        discountedPrice: '2,599',
        discount: '81',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 102,
        category: 'men',
        image: 'https://m.media-amazon.com/images/I/81nj6IlZpVL._AC_UL320_.jpg',
        brand: 'TIMEWEAR',
        name: 'Analog Day Date Functioning Stainless Steel Chain Watch for Men',
        rating: '5',
        color: 'white',
        people: '14,249',
        sell: '3K+ bought in past month',
        price: '299',
        discountedPrice: '1,799',
        discount: '83',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 103,
        category: 'men',
        image: 'https://m.media-amazon.com/images/I/717-usf7wkL._SX569_.jpg',
        brand: 'Generic',
        name: 'Men Solid Cotton T-Shirt | Round Neck | Half Sleeve | Plain-Regular Fit',
        rating: '4',
        color: 'red',
        people: '7000',
        sell: '2K+ bought in past month',
        price: '224',
        discountedPrice: '449',
        discount: '50',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 104,
        category: 'men',
        image: 'https://m.media-amazon.com/images/I/71Oay2CuquL._AC_UL320_.jpg',
        brand: 'ASIAN',
        name: 'Men BOSTON-01 White Casual Sneaker Shoes with Synthetic Upper Lightweight...',
        rating: '4',
        color: 'white',
        people: '7000',
        sell: '2K+ bought in past month',
        price: '224',
        discountedPrice: '449',
        discount: '50',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 105,
        category: 'women',
        image: 'https://m.media-amazon.com/images/I/611xWwIm15L._SY741_.jpg',
        brand: 'Ontarious Look',
        name: 'Ontarius Look Women`s Cotton (Waffle) 2024 Summer Winter Spring Long...',
        rating: '2',
        color: 'green',
        people: '26',
        sell: '50+ bought in past month',
        price: '439',
        discountedPrice: '999',
        discount: '56',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 106,
        category: 'women',
        image: 'https://m.media-amazon.com/images/I/71VAjoRClzL._AC_UL320_.jpg',
        brand: 'Q - RIOUS',
        name: 'Women`s Jogger Style Trouser',
        rating: '4',
        color: 'black',
        people: '102',
        sell: '80+ bought in past month',
        price: '739',
        discountedPrice: '2,999',
        discount: '75',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 107,
        category: 'women',
        image: 'https://m.media-amazon.com/images/I/51TKu+VRivL._AC_UL320_.jpg',
        brand: 'Baggit',
        name: 'Women Saddle Sling Bag Xs Size | Ladies Stylish Casual Cross Body',
        rating: '3',
        color: 'green',
        people: '100',
        sell: '60+ bought in past month',
        price: '1,253',
        discountedPrice: '1,790',
        discount: '30',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 108,
        category: 'women',
        image: 'https://m.media-amazon.com/images/I/616Y7QuD+mL._AC_UL320_.jpg',
        brand: 'ELLIPSE',
        name: 'Women’s Stylish Solid Full Sleeves Jacket | Winter Wear Quilted Jacket...',
        rating: '4',
        color: 'black',
        people: '220',
        sell: '200+ bought in past month',
        price: '1,151',
        discountedPrice: '2,999',
        discount: '62',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 109,
        category: 'kids',
        image: 'https://m.media-amazon.com/images/I/61CxUFXaJ9L._SY741_.jpg',
        brand: 'SELLORIA',
        name: 'Analog White Dial Boys` & Girls` Watch Best Gift for Kids',
        rating: '3.5',
        color: 'red',
        people: '245',
        sell: '1K+ bought in past month',
        price: '99',
        discountedPrice: '999',
        discount: '90',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 110,
        category: 'kids',
        image: 'https://m.media-amazon.com/images/I/51pwHhsBW1L._AC_UL320_.jpg',
        brand: 'MENLEE',
        name: 'Girls Ankle Length Cotton Socks With Colourful Cute Colours Also for Women...',
        rating: '4',
        color: 'white',
        people: '426',
        sell: '2K+ bought in past month',
        price: '264',
        discountedPrice: '599',
        discount: '56',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 111,
        category: 'kids',
        image: 'https://m.media-amazon.com/images/I/81Vvldnym0L._AC_UL320_.jpg',
        brand: 'T2F',
        name: 'Boys Track Pants(Pack of 3)',
        rating: '4',
        color: 'black',
        people: '1,140',
        sell: '300+ bought in past month',
        price: '799',
        discountedPrice: '1,499',
        discount: '47',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 112,
        category: 'kids',
        image: 'https://m.media-amazon.com/images/I/71fBcW3mMtL._AC_UL320_.jpg',
        brand: 'Kuber Industries',
        name: 'Disney Mickey 10 Litre School Bag | Kids School Bags | Student Bookbag | Scho...',
        rating: '1',
        color: 'black',
        people: '1',
        sell: '1K+ bought in past month',
        price: '279',
        discountedPrice: '799',
        discount: '65',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 113,
        category: 'Bags & Luggage',
        image: 'https://m.media-amazon.com/images/I/71maWXZscfL._AC_UL320_.jpg',
        brand: 'Safari',
        name: 'Omega spacious/large laptop backpack with Raincover, college bag, travel bag...',
        rating: '4',
        color: 'black',
        people: '3,143',
        sell: '6K+ bought in past month',
        price: '669',
        discountedPrice: '3,396',
        discount: '80',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 114,
        category: 'Bags & Luggage',
        image: 'https://m.media-amazon.com/images/I/611RCy1XjsL._AC_UL320_.jpg',
        brand: 'rts',
        name: 'rts Universal Travel Adapter, International All in One Worldwide',
        rating: '4',
        color: 'black',
        people: '13,039',
        sell: '5K+ bought in past month',
        price: '588',
        discountedPrice: '4,999',
        discount: '88',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 115,
        category: 'Bags & Luggage',
        image: 'https://m.media-amazon.com/images/I/91VL42SqlmL._AC_UL320_.jpg',
        brand: 'Storite',
        name: 'Storite 2 Pack Nylon Wardrobe Bag Underbed Moisture Proof Cloth...',
        rating: '4',
        color: 'red',
        people: '9,562',
        sell: '3K+ bought in past month',
        price: '369',
        discountedPrice: '2,199',
        discount: '83',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 116,
        category: 'Bags & Luggage',
        image: 'https://m.media-amazon.com/images/I/71iHbv5vkqL._AC_UL320_.jpg',
        brand: 'LEGAL BRIBE',
        name: 'Textured Tote bag',
        rating: '4',
        color: 'white',
        people: '627',
        sell: '2K+ bought in past month',
        price: '486',
        discountedPrice: '2,500',
        discount: '81',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 117,
        category: 'Sportswear',
        image: 'https://m.media-amazon.com/images/I/71O44QvOPjL._AC_UL320_.jpg',
        brand: 'DSC',
        name: 'Zooter Cricket Shoe | for Mens & Boys | Material: Polyvinyl Chlorid...',
        rating: '4',
        color: 'white',
        people: '3,066',
        sell: '100+ bought in past month',
        price: '969',
        discountedPrice: '1,049',
        discount: '8',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 118,
        category: 'Sportswear',
        image: 'https://m.media-amazon.com/images/I/71G-QfLj3fL._AC_UL320_.jpg',
        brand: 'adidas',
        name: 'Women`s Solid Fitted T-Shirt',
        rating: '3',
        color: 'black',
        people: '5',
        sell: '50+ bought in past month',
        price: '519',
        discountedPrice: '1,399',
        discount: '63',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 119,
        category: 'Sportswear',
        image: 'https://m.media-amazon.com/images/I/314YALBHfRL._AC_UL320_.jpg',
        brand: 'adidas',
        name: 'Women Slim Pants',
        rating: '4',
        color: 'black',
        people: '109',
        sell: '1K+ bought in past month',
        price: '1,871',
        discountedPrice: '3,599',
        discount: '48',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 120,
        category: 'Sportswear',
        image: 'https://m.media-amazon.com/images/I/61ak5JXm7kL._AC_UL320_.jpg',
        brand: 'adidas',
        name: 'Men`s Striped Regular Fit Jersey',
        rating: '4',
        color: 'black',
        people: '459',
        sell: '500+ bought in past month',
        price: '999',
        discountedPrice: '1,999',
        discount: '50',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    },
    {
        id: 121,
        category: 'Sportswear',
        image: 'https://m.media-amazon.com/images/I/61RFlIUeaIL._AC_UL320_.jpg',
        brand: 'LANCER',
        name: 'Mens Indus-251 Running Shoe',
        rating: '4.5',
        color: 'white',
        people: '4,682',
        sell: '300+ bought in past month',
        price: '579',
        discountedPrice: '1,249',
        discount: '54',
        deliveryDate: delivery_date,
        deliveryMonth: delivery_month,
        cart: 'Add to Cart'
    }
]

localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));

let displayProducts = ""
products.map((product) => {
    displayProducts += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" />
                <p class="brand">${product.brand}</p>
                <p class="name">${product.name}<p>
                <p class="category"><b>Category :</b> ${product.category}</p>
                <p class="rating">${product.rating}<i class="fa-solid fa-star" style="color: #fc9403;padding-left:3px;"></i><span style="font-size:14px;color:#2162A1;padding-left:3px;">${product.people}</p>
                <p class="sell">${product.sell}</p>
                <p class="price"><sup style="font-size:13px;">₹</sup>${product.price} <span style="font-size:14px;color:#565959;">M.R.P.: <s>₹${product.discountedPrice}</s></span> <span style="font-size:14px;">(${product.discount}% off)</span></p>
                <p class="delivery">FREE delivery in <b>2 days, ${product.deliveryDate + 2}  ${product.deliveryMonth}</b> on first order <br /> Or fastest delivery <b>Tomorrow, ${product.deliveryDate + 1}  ${product.deliveryMonth}</b> </p>
                <button class="cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>`;
});
document.getElementById("product-section").innerHTML = displayProducts;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cart-btn").forEach(btn => {
        btn.onclick = () => {
            if (isLogin === "true") {
                addToCart(products.find(prod => prod.id == btn.dataset.id));
            }
            else {
                location.href = "login.html";
            }
        };
    });
});

// Username
const isLogin = localStorage.getItem("isLogin");
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

// go to cart
function cart1() {
    location.href = "cart.html";
}

// add to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

    const index = cart.findIndex(item => item.id === product.id);
    if (index > -1) {
        cart[index].quantity += 1;
        alert(`${product.name} quantity increased to ${cart[index].quantity}`);
    } else {
        cart.push({ ...product, quantity: 1 });
        alert(`${product.name} added to cart with quantity 1`);
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

// Count iteam
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("no_of_items").innerText = totalItems;
}
updateCartCount(); 

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