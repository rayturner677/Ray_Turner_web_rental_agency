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

// function hideValidation() {
//     const firstnameForm = document.forms["firstname-form"];
//     const formInput = firstnameForm.elements["firstname-input"];
//     const button = firstnameForm.querySelector("#4-wheeler-submit");
//     const alert = document.querySelector("#first-check");

//     button.addEventListener("click", function() {

//     })
// }

function hideMain() {
    const div = document.querySelector(".main");
    const checkout = document.querySelector(".submit-form");
    const button = document.querySelector(".add-btn");

    button.addEventListener("click", function() {
        div.hidden = true;
        checkout.classList.remove("hide");
        checkout.classList.add("show");
    });
}

function checkForm() {
    
}

inventoryRow(INVENTORY);
rentItem();
hideMain();
