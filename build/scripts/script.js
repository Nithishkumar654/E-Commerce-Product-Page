let cart = [] // {name, price, quantity, image}
let hideCart = false;
document.getElementById("cart-items").style.display = "none";


let count = 0;

document.getElementById("pill-count").innerHTML = 0;
document.getElementById("pill-count").style.display = "none";

document.getElementById("plus").addEventListener("click", function () {
    count++;
    document.getElementById("count").innerHTML = count;
})

document.getElementById("minus").addEventListener("click", function () {
    if (count > 0) count--;
    document.getElementById("count").innerHTML = count;
})

document.getElementById("add").addEventListener("click", function () {
    if (count == 0) {
        alert("Quantity cant be zero..!!");
        return false;
    }
    let cartElement = {};
    cartElement.name = document.getElementById("name").textContent;
    let price = document.getElementById("price").textContent;
    cartElement.price = (+price.slice(1));
    cartElement.quantity = (+count);
    count = 0;
    document.getElementById("count").innerHTML = count;
    cartElement.image = "./images/image-product-1.jpg";
    cart.push(cartElement);
    document.getElementById("pill-count").innerHTML = cart.length;
    document.getElementById("pill-count").style.display = "block";
})

document.getElementById("cart").addEventListener("click", function () {
    if (hideCart) {
        document.getElementById("cart-items").style.display = "none";

    } else {
        var it = document.getElementById("item");
        it.innerHTML = "";
        if (cart.length == 0) {
            let p = document.createElement("p");
            p.innerHTML = "Your Cart is Empty";
            p.style.textAlign = "center";
            it.appendChild(p);
        }
        else {
            var it = document.getElementById("item");
            let id = 0;
            for (let item of cart) {
                let li = document.createElement("li");
                li.innerHTML = `<div class="flex justify-center gap-2 my-2">
                            <img src="${item.image}" class="rounded-lg" alt="" width="70rem">
                            <div class="flex flex-col">
                                <p>${item.name}</p>
                                <p>$ ${item.price}.00 x ${item.quantity} <b>$ ${item.quantity * item.price}</b></p>
                            </div>
                            <button class="delete-item" data-id="${id}"><img src="./images/icon-delete.svg" alt=""></button>
                        </div>
                        <hr>`
                id++;
                it.appendChild(li);
            }
            let deleteButtons = document.querySelectorAll('.delete-item');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function () {
                    let index = this.getAttribute('data-id');
                    removeFromCart(index);
                });
            });
        }
        document.getElementById("cart-items").style.display = "block";
    }
    hideCart = !hideCart;
});


function removeFromCart(index) {
    cart.splice(index, 1);
    document.getElementById("pill-count").innerHTML = cart.length;
    if (cart.length === 0) {
        document.getElementById("pill-count").style.display = "none";
    }
    document.getElementById("cart").click();
}


let draw = false;
document.getElementById("drawer").style.display = "none";
function drawer() {
    draw = !draw;
    var d = document.getElementById("drawer");
    if (draw) {
        d.style.display = "block"
        document.getElementById("body").style.overflow = "hidden";
    } else {
        d.style.display = "none";
        document.getElementById("body").style.overflow = "auto";
    }
}

const carousel = document.getElementById('carousel');
let index = 0;
const totalSlides = 4;

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelectorAll('.thumbnail').forEach((thumbnail) => {
    thumbnail.addEventListener('click', function () {
        index = parseInt(this.getAttribute('data-index'));
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });
});


document.getElementById("zoom").style.display = "none";
function showCarousel() {

    var d = document.getElementById("zoom");
    if (d.style.display == "none") {
        d.style.display = "flex";
        document.getElementById("products").style.overflow = "hidden";
    }
    else {
        d.style.display = "none";
        document.getElementById("products").style.overflow = "auto";
    }
}