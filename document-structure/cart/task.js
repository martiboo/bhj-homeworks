let cartProductsList = document.querySelector(".cart__products");

let incQuantity = document.getElementsByClassName("product__quantity-control_inc");

let arrIncQuantity = Array.from(incQuantity);


for (i = 0; i < arrIncQuantity.length; i++) {
    let elementIncQuantity = arrIncQuantity[i];
    elementIncQuantity.addEventListener("click", function (e) {
        let value = elementIncQuantity.parentElement.querySelector(".product__quantity-value");
        value.textContent++;
    }
    )
}

let addToCart = document.getElementsByClassName("product__add");

let arrAddToCart = Array.from(addToCart);

for (i = 0; i < arrAddToCart.length; i++) {
    let elementAddToCart = arrAddToCart[i];
    elementAddToCart.addEventListener("click", function (e) {

        let value = elementAddToCart.parentElement.querySelector(".product__quantity-value");

        let amount = value.textContent;

        let parent = elementAddToCart.closest(".product");

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
            let countProductAmount = countProduct.textContent;
            let countProductNumber = Number(countProductAmount);
            let amountNumber = Number(amount);
            let number = countProductNumber + amountNumber;
            let numberOne = Number(number);

            countProduct.textContent = numberOne;
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

        if (value.textContent < 1) {
            value.textContent = 1;
        }
    }
    )
}