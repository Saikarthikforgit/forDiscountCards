let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let body = document.getElementById("body");
let div1 = document.getElementById("bgImg");
let homeBtn = document.createElement("button");
let uploadBtn = document.createElement("button");

uploadBtn.textContent = "Upload";
uploadBtn.classList.add("btn");

homeBtn.textContent = "Home";
homeBtn.classList.add("btn");

let home = function() {
    window.location.reload();
};

body.appendChild(div1);
btn1.onclick = function() {
    body.removeChild(div1);
    let form = document.createElement("form");
    form.classList.add("bg_img1");

    let productName = document.createElement("label");
    productName.textContent = "productName";
    let productNameInput = document.createElement("input");
    productName.htmlFor = productNameInput;
    productName.classList.add("indcon");

    let brandName = document.createElement("label");
    brandName.textContent = "brandName";
    let brandNameInput = document.createElement("input");
    brandName.htmlFor = brandNameInput;
    brandName.classList.add("indcon");

    let actualPrice = document.createElement("label");
    actualPrice.textContent = "actualPrice";
    let actualPriceInput = document.createElement("input");
    actualPrice.htmlFor = actualPriceInput;
    actualPrice.classList.add("indcon");

    let discountPrice = document.createElement("label");
    discountPrice.textContent = "discountPrice";
    let discountPriceInput = document.createElement("input");
    discountPrice.htmlFor = discountPriceInput;
    discountPrice.classList.add("indcon");

    let emailId = document.createElement("label");
    emailId.textContent = "emailId";
    let emailIdInput = document.createElement("input");
    emailId.htmlFor = emailIdInput;
    emailId.classList.add("indcon");

    let div11 = document.createElement("div");
    let h11 = document.createElement("h1");
    h11.textContent = "fill the details and click on upload"

    form.appendChild(productName);
    form.appendChild(productNameInput);

    form.appendChild(brandName);
    form.appendChild(brandNameInput);

    form.appendChild(actualPrice);
    form.appendChild(actualPriceInput);

    form.appendChild(discountPrice);
    form.appendChild(discountPriceInput);

    form.appendChild(emailId);
    form.appendChild(emailIdInput);

    form.appendChild(uploadBtn);

    div11.appendChild(homeBtn);
    div11.appendChild(h11);
    div11.appendChild(form);
    div11.classList.add("bg_img");

    body.appendChild(div11);
    homeBtn.onclick = home;

    let newItem = {
        "productName": productNameInput.value,
        "brandName": brandNameInput.value,
        "actualPrice": actualPriceInput.value,
        "discountPrice": discountPriceInput.value,
        "emailId": emailIdInput.value
    }

    let setDetails = function() {
        localStorage.setItem("Item", JSON.stringify(newItem));
        productNameInput.value = "";
    };

    uploadBtn.onclick = setDetails;
};

btn2.onclick = function() {
    body.removeChild(div1);
    let SearchBtn = document.createElement("button");
    SearchBtn.textContent = "Search";
    SearchBtn.classList.add("btn");

    let h12 = document.createElement("h1")

    h12.textContent = "Search for your required products";
    let input = document.createElement("input");
    input.placeholder = "Type the productName Here";

    let result = document.createElement("h1");
    result.classList.add("bg_img2");

    let div12 = document.createElement("div");

    div12.appendChild(homeBtn);
    div12.appendChild(h12);
    div12.appendChild(input);
    div12.appendChild(SearchBtn);
    div12.appendChild(result);

    div12.classList.add("bg_img2");

    SearchBtn.onclick = function() {
        let item = localStorage.getItem("item");
        result.textContent = item.brandName;

        input.value = "";
    }

    body.appendChild(div12);
    homeBtn.onclick = home;

};