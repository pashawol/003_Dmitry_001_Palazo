// Для лэзи загрузки
// document.addEventListener("DOMContentLoaded", function() {
//   let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
//   let active = false;

//   const lazyLoad = function() {
//     if (active === false) {
//       active = true;

//       setTimeout(function() {
//         lazyImages.forEach(function(lazyImage) {
//           if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
//             lazyImage.src = lazyImage.dataset.src;
//             // lazyImage.srcset = lazyImage.dataset.srcset;
//             lazyImage.classList.remove("lazy");

//             lazyImages = lazyImages.filter(function(image) {
//               return image !== lazyImage;
//             });

//             if (lazyImages.length === 0) {
//               document.removeEventListener("scroll", lazyLoad);
//               window.removeEventListener("resize", lazyLoad);
// 							window.removeEventListener("orientationchange", lazyLoad);
// 							window.addEventListener("DOMContentLoaded", lazyLoad);
//             }
//           }
//         });

//         active = false;
//       }, 200);
//     }
//   };

//   document.addEventListener("scroll", lazyLoad);
//   window.addEventListener("resize", lazyLoad);
// 	window.addEventListener("orientationchange", lazyLoad);
// 	window.addEventListener("DOMContentLoaded", lazyLoad);
// });


// // лэзи 
// document.addEventListener("DOMContentLoaded", function() {
//   let lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
//   let active = false;

//   const lazyLoad = function() {
//     if (active === false) {
//       active = true;

//       setTimeout(function() {
//         lazyImages.forEach(function(lazyImage) {
//           if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
//             lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src +')';
//             lazyImage.src = lazyImage.dataset.src;
//             // lazyImage.srcset = lazyImage.dataset.srcset;
//             lazyImage.classList.remove("lazy");

//             lazyImages = lazyImages.filter(function(image) {
//               return image !== lazyImage;
//             });

//             if (lazyImages.length === 0) {
//               document.removeEventListener("scroll", lazyLoad);
//               window.removeEventListener("resize", lazyLoad);
// 							window.removeEventListener("orientationchange", lazyLoad);
// 							window.addEventListener("DOMContentLoaded", lazyLoad);
//             }
//           }
//         });

//         active = false;
//       }, 200);
//     }
//   };

//   document.addEventListener("scroll", lazyLoad);
//   window.addEventListener("resize", lazyLoad);
// 	window.addEventListener("orientationchange", lazyLoad);
// 	window.addEventListener("DOMContentLoaded", lazyLoad);
// });



// document.addEventListener("DOMContentLoaded", function() {
//   var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));

//   if ("IntersectionObserver" in window) {
//     let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//           lazyBackgroundObserver.unobserve(entry.target);
//         }
//       });
//     });

//     lazyBackgrounds.forEach(function(lazyBackground) {
//       lazyBackgroundObserver.observe(lazyBackground);
//     });
//   }
// });



jQuery(document).ready(function ($) {


	$('.mob-menu .menu-item-has-children .mob-menu-toggler').click(function (e) {
		 e.preventDefault();
		e.stopPropagation();
		$(this).siblings('.header__submenu').slideToggle();
		$(this).toggleClass('active');
	});

	$('.menu-item').click(function (e) {
		// e.preventDefault();
		e.stopPropagation();
	});

	// табы  . 
	function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	};
	tabscostume('tabs');
	$('.main-blocks-slider--js').owlCarousel({
		
		margin: 20,
		nav: true,
		autoWidth: true,
	})
	// карусель
	$('.how-work__main-block').owlCarousel({
		dots: false,
		//  margin:20,
		nav: false,
		items: 6,
		loop: false,
		mouseDrag: false,
		responsive: {

			0: {
				nav: true,
				items: 1,
				loop: true,
				mouseDrag: true,
			},
			440: {
				nav: true,
				items: 2,
				loop: true,
				mouseDrag: true,
			},

		 576: {
				nav: true,
				items: 4,
				loop: true,
				mouseDrag: true,
			},

			970: {
				nav: false,
				items: 6,
				loop: false,
				mouseDrag: false,
			}
		},
	})

});