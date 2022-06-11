//-------------------------------------Header Menu-------------------------------

function menu() {
    document.querySelector(".header_menu").classList.toggle("display-block")
    document.querySelector(".opacity").classList.toggle("show")

}

function closeMenu() {
    document.querySelector(".header_menu").classList.toggle("display-block")
    document.querySelector(".opacity").classList.toggle("show")
}

//-------------------------------------Header Menu End-------------------------------

//--------------------------Price Button -------------------------------------
function priceHero() {
    document.querySelector(".hero_buy").classList.add("display-price")
    document.querySelector(".hero-btn1").classList.add("display-none")
}

//--------------------------Price Button End-------------------------------------

//-----------------------------Header input----------------------------------------

const headerInput = document.querySelector(".header-input");
const headerSearch = document.querySelector(".header-search");
headerSearch.addEventListener("click", function () {
    headerInput.classList.toggle("show-input1");
});

//-----------------------------Header input End----------------------------------------


//-----------------Header sms ------------------------------------

const headerSms = document.querySelector(".header-message");
const smsModal = document.querySelector(".sms-modal_bg");
const smsClose = document.querySelector(".sms-modal-close");
headerSms.addEventListener("click", function () {
    smsModal.classList.add("sms-modal-show");
});
smsClose.addEventListener("click", function () {
    smsModal.classList.remove("sms-modal-show");

});

//-----------------Header sms end-------------------------------------


//------------------Header Geo-----------------------------------------

const headerGeoBg = document.querySelector(".geo_modal_bg");
const headergeo = document.querySelector(".geo_modal");
const headerGeoIcon = document.querySelector(".header_geo");

headerGeoIcon.addEventListener("click", function () {
    headerGeoBg.classList.add("geo_modal_bg-show");
    headergeo.classList.add("geo_modal-show");
})

document.querySelector(".geo-modal-close").addEventListener("click", function () {
    headerGeoBg.classList.remove("geo_modal_bg-show");
    headergeo.classList.remove("geo_modal-show");
})

//------------------Header Geo End-----------------------------------------

// -----------------------Product Plus---------------------------------

const productBag = document.querySelectorAll(".product-bag-icon")
const productPlus = document.querySelectorAll(".knife-link-new")
const productPlusIcon = document.querySelectorAll(".product-plus")

for (let i = 0; i < productPlus.length || i < productBag.length; i++) {
    productPlus[i].addEventListener("mouseover", function () {
        productBag[i].classList.add("product-knife-plus-show");
        productPlusIcon[i].classList.add("product-plus-translate");
    });

}

for (let i = 0; i < productPlus.length || i < productBag.length; i++) {
    productPlus[i].addEventListener("mouseout", function () {
        productBag[i].classList.remove("product-knife-plus-show");
        productPlusIcon[i].classList.remove("product-plus-translate");
    });
}
// -----------------------Product Plus End---------------------------------

// ---------------------------------Use GSAP ----------------------

const timeLine = gsap.timeline()
timeLine
    .from("#header", {y: -100, opacity: 0, ease: "bounce",})
    .from(".header_item", {duration:1, opacity: 0, y:-100 ,ease:"expo"})
    .from(".hero", {duration:1, opacity: .5,scale:1.5 })
    .from(".hero-title", {duration:.5, opacity: 0,y:100, ease: "back"})
    .from(".hero-about", {duration:.5, opacity: 0,y:100, ease:"back" })
    .from(".hero-btn1", {duration:.5, opacity: 0,y:100, ease: "slowMo"})
    .from(".hero-next-button", {duration:.5, opacity: 0,y:100})
    .from(".knife", {duration:.5, opacity: 0,y:100,scrolling:400})
    .from(".knife-img", {duration: 1.5, opacity: 0, scale: .5, x: -100, y: -50})


// ---------------------------------Use GSAP ----------------------

//-----------------------------Product Buy -------------------------------

const productBuy = document.querySelectorAll(".product-bag-icon");
const productKnife = document.querySelectorAll(".knife-img");
const productRod = document.querySelectorAll(".knife");


for (let i = 0; i < productBuy.length; i++) {
    productBuy[i].addEventListener("click", function () {
        timeLine
            .to(productKnife[i + 2], {y: -180, x: 100, scale: 0, duration: 1});
    })
}
//
// for (let i = 0; i < productBuy.length; i++) {
//     productBuy[i].addEventListener("click", function () {
//         gsap.to(productKnife[i + 2], {y: -500, x: 800, scale: 0, duration: 1});
//     })
// }

//-----------------------------Product Buy End-------------------------------

//_-----------------------------------On scroll -----------------------------

c

//_-----------------------------------On scroll End -----------------------------









