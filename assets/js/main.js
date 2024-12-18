const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

let swiperShoes = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-100, 0, 500],
      opacity: 0,
    },
    next: {
      translate: [100, 0, -500],
      opacity: 0,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

const testimonialSwiper = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

function openModal(title, imgSrc, price) {
  document.getElementById("modalProductTitle").innerText = title;
  document.getElementById("modalProductImg").src = `assets/img/${imgSrc}`;
  document.getElementById("modalProductPrice").innerText = price;

  const modal = document.getElementById("productModal");
  modal.style.display = "flex";
  document.body.classList.add("modal-open");
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);
}

function closeModal() {
  const modal = document.getElementById("productModal");
  modal.style.opacity = "0";
  document.body.classList.remove("modal-open");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function selectColor(color) {
  const productImage = document.getElementById("modalProductImg");

  if (color === "Brown") {
    productImage.src = "assets/img/shoe-3.png";
  } else if (color === "Grey") {
    productImage.src = "assets/img/shoe-1.png";
  } else if (color === "Black") {
    productImage.src = "assets/img/shoe-2.png";
  }
}

function loadProducts() {
  fetch("assets/data/products.json")
    .then((response) => response.json())
    .then((products) => {
      const shopProductsContainer = document.getElementById("shopProducts");
      shopProductsContainer.innerHTML = "";

      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("shop__product");
        productCard.innerHTML = `
          <div class="shop-single-product">
          <img src="assets/img/${product.image}" alt="${product.name}" class="shop__product-img">
          <h3 class="shop__product-title">${product.name}</h3>
          <p class="shop__product-price"><span>Price: </span>${product.price}</p>
          <a href="#" class="shop__product-button" onclick="openModal('${product.name}', '${product.image}', '${product.price}')">Add to Cart</a>
          </div>
        `;
        shopProductsContainer.appendChild(productCard);
      });
    })
    .catch((error) => console.error("Error loading products:", error));
}

window.addEventListener("DOMContentLoaded", loadProducts);
