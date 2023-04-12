change_menu = document.querySelectorAll('.LogIn')
const change_Active_Link = ()=>{
    change_menu.forEach(item =>{
        item.classList.remove('active');
    })
}   
change_menu.forEach(item =>{
    item.addEventListener('mouseenter', ()=>{
        change_Active_Link();
        item.classList.add('active');
    })
})

//changing profile pic
const image = document.getElementById("output");
const profilePic = document.getElementById('old-profile')
const loadFile = function (event) {
    image.src = URL.createObjectURL(event.target.files[0]);
};

const updateProfile = (e) => {
    if(image){
        profilePic.src = URL.createObjectURL(e.target.file[0])
    }
    
}
//Window on scroll
var scrollPosition = window.scrollY;
var header = document.getElementById("header");

function add_class_on_scroll() {
    header.classList.add("header-border");
}
function remove_class_on_scroll() {
    header.classList.remove("header-border");
}
window.addEventListener('scroll', () => { 
    scrollPosition = window.scrollY;
    if(scrollPosition > 90){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});
//displaying sign up and login container
const button = document.querySelector('#ellipsis');
const container = document.querySelector('.sign-up-container');
button.addEventListener('click', ()=>{
    if(container.style.display == 'none'){
        container.style.display = 'block';
    }
    else{
        container.style.display = 'none';
    }
})

//scroll to top
const scrollTop = document.querySelector('.logo').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

//services 
const vehicles = [
    {
        id: 0,
        name: "Mercedes Benz AMG GT",
        year: 2022,
        image: "https://cdn.motor1.com/images/mgl/kXrEN/s1/4x3/mercedes-amg-gt.webp",
        price: 5000,
    },
    {
        id: 1,
        name: "Mercedes Benz C-Class",
        year: 2023,
        image: "https://www.motortrend.com/uploads/2022/04/2023-Mercedes-AMG-C43-sedan-9.jpg?fit=around%7C875:492.1875", 
        price: 4000,
    },
    {
        id: 2,
        name: "Toyota Camry",
        year: 2022,
        image: "https://carsales.pxcrush.net/car/spec/S0009ZLZ.jpg?pxc_method=gravityfill&pxc_bgtype=self&pxc_size=720,480&watermark=325530527", 
        price: 1000,
    }, 
    {
        id: 3,
        name: "Toyota Corolla SE",
        year: 2022,
        image: "https://images.fitmentindustries.com/web-compressed/2193041-1-2022-corolla-toyota-se-bc-racing-coilovers-avid1-av6-hyperblack.jpg", 
        price: 2000,
    }, 
    {
        id: 4,
        name: "Toyota Land Cruiser",
        image: "https://cdn.motor1.com/images/mgl/VA02z/s1/next-gen-toyota-land-cruiser-renderings.jpg",
        year: 2022,
        price: 10000
    }, 
    {
        id: 5,
        name: "Lexus LX 570 AWD",
        year: 2018,
        image: "https://img.autoabc.lv/Lexus-LX/Lexus-LX_2015_Apvidus_1511610100_9.jpg",
        price: 10000,
    }, 
    {
        id: 6,
        name: "Toyota Tundra",
        year: 2022,
        image: "https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2021/09/2022_Toyota_Tundra_Front-Quarter_035-1500x900.jpg",
        price: 7000,
    }, 
    {
        id: 7,
        name: "Ford Mustang Mach-EGT",
        year: 2023,
        image: "https://www.kosmo.com.my/wp-content/uploads/2021/07/2021-Ford-Mustang-Mach-E-GT-Performance-Edition-03.jpg",
        fuelType: "Gas", 
        price: 9000,
    }, 
    {
        id: 8,
        name: "Chevrolet Chevy Camaro Trim",
        year: 2022,
        image: "https://di-uploads-pod2.dealerinspire.com/allenturnerchevy/uploads/2022/09/2023-camaro-design-02-v2.webp",
        price: 5000,
    }, 
    {
        id: 9,
        name: "Dodge Demon",
        year: 2023,
        image: "https://www.topgear.com/sites/default/files/news-listicle/image/dg018_130clgtqm46n89ljrl6nug4ebog7a2r.jpg",
        price: 2000,
    }, 
    {
        id: 10,
        name: "BMW X5",
        year: 2021,
        image: "https://images.prismic.io/carwow/d69390c0-2f0b-4b44-9a62-7e9cc19dc182_P90331831_highRes_the-bmw-x5-m50d.jpg", 
        price: 8000,
    }, 
    {
        id: 11,
        name: "VW Atlas",
        year: 2023,
        image: "https://cdn.carbuzz.com/gallery-images/1600/1098000/900/1098967.jpg", 
        price: 9000,
    }
]

function BookingPage(){
    const carPrice = document.getElementsByClassName('car-price')
    const carName = document.getElementsByClassName('vehicle-name')
    localStorage.setItem('Car-Name', carName)
    localStorage.setItem('Car-Price', carPrice)
    console.log(JSON.stringify(localStorage.getItem('Car-Name')))

}


document.querySelector("#services-cnt").innerHTML= vehicles.map(item => {
    const {image, name, price, fuelType, year} = item
    return (
      `
        <div class = "vehicles-container">
            <div class = "vehicles"> 
                <img src = ${image} alt = "/"/>
            </div>
            <div class = "vehicle-details">
                <div class = "car-year">
                    <h3 class = "year">${year}</h3>
                </div>
                <h3 class = "vehicle-name">${name}</h3>
                <h3 class = "car-price"><b>GHC ${price}.00|GHC </b><span>/Month</span></h3>
            </div>
            <div class = "booking">
                <button id = "button"class = "button" onclick = "BookingPage()">Book</button>
            </div>
        </div>
      `
    )
}).join();

//HAMBURGER MENU 
const boxContainer =  document.querySelector('#mobileMenu');
const barButton = document.querySelector('.hamburger-menu') 

barButton.addEventListener('click', (e) => {
    console.log("you clicked on this")
    boxContainer.style.display = "block";
    boxContainer.classList.add('overlay')
})
window.onclick = (e) => {
    if (e.target == boxContainer) {
        boxContainer.style.display = "none";
    }
}


