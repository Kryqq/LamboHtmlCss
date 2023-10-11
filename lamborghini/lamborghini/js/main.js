const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click',() =>{
	menuMobile.classList.toggle('menu--open');
});


const swiper = new Swiper('.swiper', {
	loop: true,
	navigation: {
		nextEl: '.swiper-button-right',
		prevEl: '.swiper-button-left',
	},
breakpoints: {
	0:{
		slidesPerView: 1,
	},
	768:{
		slidesPerView: 2,
		spaceBetween: 20,
	}
}
});

let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 37.23204501390579, lng: -8.627970010348426 },
    zoom: 14,
  });
}

initMap();