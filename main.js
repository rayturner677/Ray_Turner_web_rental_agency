function rowJet(INVENTORY) {
    var title = document.getElementById("jet-title");
    var image = document.getElementById("jet-img");

    title.innerHTML = INVENTORY.jetSki.name;
    image.innerHTML = INVENTORY.jetSki.url;
    console.log(title);
    console.log(image);
}
function rowCamaro(INVENTORY) {
    var pd = document.getElementById("camaro-pd");
    var stock = document.getElementById("camaro-stock");

    pd.innerHTML = INVENTORY.camaro.per_day;
    stock.innerHTML = INVENTORY.camaro.stock;
}

function rentItem() {
    
    for(const items of document.querySelectorAll("item-info"))
    var button = items.querySelector(".add-btn");
    var stock = items.querySelector(".stock");

    button.addEventListener("click", function() {
        const prevStock = Number(stock.innerText)
        stock.innerText = prevStock - 1;
    });
}

rowJet(INVENTORY);
rentItem();
rowCamaro(INVENTORY);
