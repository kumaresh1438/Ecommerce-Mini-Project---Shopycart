var productContainer = document.getElementById("products");
var searchContainer = document.getElementById("search");

var productList = productContainer.querySelectorAll("div");

searchContainer.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (count = 0; count < productList.length; count = count + 1) 
    {
        var productname = productList[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});
