let cartProductsList = document.querySelector(".cart__products");

let incQuantity = document.getElementsByClassName("product__quantity-control_inc");

let arrIncQuantity = Array.from(incQuantity);

for (i = 0; i < arrIncQuantity.length; i++) {
    let elementIncQuantity = arrIncQuantity[i];
    elementIncQuantity.addEventListener("click", function (e) {

        let value = elementIncQuantity.parentElement.querySelector(".product__quantity-value");
        value.textContent++;
        let amount = value.textContent;

        let parent = elementIncQuantity.closest(".product");

        let id = parent.dataset.id;
        let image = parent.querySelector(".product__image");
        let imgSrc = image.src;


        let cartProduct = document.querySelector(`.cart__product[data-id="${id}"]`);

        if (cartProduct === null) {
            cartProductsList.innerHTML += `<div class="cart__product" data-id = "${id}">
            <img class="cart__product-image" src="${imgSrc}">
            <div class="cart__product-count">${amount}</div>
            </div>`;

        } else {
            let countProduct = cartProduct.querySelector(".cart__product-count");
            countProduct.textContent++;
        }
    }
    )
}

let decQuantity = document.getElementsByClassName("product__quantity-control_dec");

let arrDecQuantity = Array.from(decQuantity);

for (i = 0; i < arrDecQuantity.length; i++) {
    let elementDecQuantity = arrDecQuantity[i];
    elementDecQuantity.addEventListener("click", function (e) {

        let value = elementDecQuantity.parentElement.querySelector(".product__quantity-value");

        value.textContent--;

        if (value.textContent < 0) {
            value.textContent = 0;
        }
    }
    )
}