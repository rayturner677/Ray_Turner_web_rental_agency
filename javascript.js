function rentItem() {
    for (const items of document.querySelectorAll(".item-info")) {
        const button = items.querySelector(".add-btn");
        const stock = items.querySelector(".stock");

        button.addEventListener("click", function() {
            const prevStock = Number(stock.innerText);
            stock.innerText = prevStock - 1;
        });
    }
}

function inventoryRow(INVENTORY) {
    var source = document.getElementById("inventory-row").innerHTML;
    var template = Handlebars.compile(source);
    var tbody = document.getElementById("inventory-rows");

    for (var item in INVENTORY) {
        var html = template(INVENTORY[item]);
        tbody.insertAdjacentHTML("beforeend", html);
    }
}

function hideMain() {
    const div = document.querySelector(".main");
    const checkout = document.querySelector(".submit-form");
    const button = document.querySelector(".add-btn");

    button.addEventListener("click", function() {
        div.hidden = true;
        checkout.classList.remove("hide");
        checkout.classList.add("show");
        rentItem();
    });
}

function setMessage() {
    const form = document.forms["checkout-form"];
    const first = form.elements["firstname-input"];
    const last = form.elements["last-input"];
    const firstName = document.querySelector("#fn");
    const lastName = document.querySelector("#ln");

    firstName.innerText = first.value;
    lastName.innerText = last.value;
}

function finishShopping() {
    const formSheet = document.querySelector(".submit-form");
    const message = document.querySelector(".done-shopping");

    formSheet.addEventListener("submit", function(event) {
        event.preventDefault();
        message.classList.remove("hide");
        message.classList.add("show");
    });
}

inventoryRow(INVENTORY);
hideMain();
setMessage();
finishShopping();
