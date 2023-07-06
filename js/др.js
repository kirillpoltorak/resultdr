"use strict"

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

new Swiper('.swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});

new Swiper('.parallax-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});

//==========================================================ТЕМНА===ТЕМА===============================================================================================//

// window.addEventListener("load", windowLoad);

// function windowLoad() {
// 	const htmlBlock = document.documentElement;
// 	const saveUserTheme = localStorage.getItem('user-theme');

// 	let userTheme;

// 	if (window.matchMedia) {
// 		userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// 	}
// 	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
// 		!saveUserTheme ? changeTheme() : null;
// 	});

// 	const themeButton = document.querySelector('.page__theme');
// 	const resetButton = document.querySelector('.page__reset');
// 	if (themeButton) {
// 		themeButton.addEventListener("click", function (e) {
// 			resetButton.classList.add('active');
// 			changeTheme(true);
// 		});
// 	}
// 	if (resetButton) {
// 		resetButton.addEventListener("click", function (e) {
// 			resetButton.classList.remove('active');
// 			localStorage.setItem('user-theme', '');
// 		});
// 	}

// 	function setThemeClass() {
// 		if (saveUserTheme) {
// 			htmlBlock.classList.add(saveUserTheme)
// 			resetButton.classList.add('active');
// 		} else {
// 			htmlBlock.classList.add(userTheme);
// 		}
// 	}

// 	setThemeClass()

// 	function changeTheme(saveTheme = false) {
// 		let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
// 		let newTheme;

// 		if (currentTheme === 'light') {
// 			newTheme = 'dark';
// 		} else if (currentTheme === 'dark') {
// 			newTheme = 'light';
// 		}
// 		htmlBlock.classList.remove(currentTheme);
// 		htmlBlock.classList.add(newTheme);
// 		saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
// 	}
// }



// function sumMul(n, m) {
// 	let j = 2;
// 	let nJ = n * j;
// 	let sum;

// 	if (m <= 0) {
// 		return "INVALID";
// 	}

// 	if (nJ > m) {
// 		return sum;
// 	}

// 	if (nJ < m) {
// 		nJ = sum;
// 		j++;
// 		if (j >= 3) {
// 			sum + nJ;
// 		}
// 	}
// }



// function sumMul(n, m) {
// 	let j = 2;
// 	let sum = n * j;
// 	let sumAll = 0 + n;

// 	for (; sum < m; j++) {
// 		sumAll = sumAll + sum;
// 		if (sum > m) {
// 			return sumAll;
// 		}
// 		if (m <= 0) {
// 			return "INVALID";
// 		}
// 	}
// }

// console.log(sumMul(2, 9));

// let array = [2, 2];

// console.log(Math.pow(array, 2));

// function squareSum(numbers) {
// 	let sum = 0;
// 	for (let j = 0; j < numbers.length; j++) {
// 		sum = sum + Math.pow(numbers[j], 2);
// 	}
// 	return sum
// }

// console.log(squareSum([1, 2]));


// function areYouPlayingBanjo(name) {
// 	if (name[0] === "R") {
// 		return name + " plays banjo";
// 	} else if (name[0] === "r") {
// 		return name + " plays banjo";
// 	} else {
// 		return name + " does not play banjo";
// 	}
// }
// console.log(areYouPlayingBanjo("rolf"));

//=============================================================Прокрутк=по=клику===============================================================================================//

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;


			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}


			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}

}