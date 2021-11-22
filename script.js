// JSON
let phones = [
    {
        "brand": "iPhone",
        "model": "12 Pro",
        "price": "800"
    }, 
    {
        "brand": "iPhone",
        "model": "11 Pro",
        "price": "700"
    }, 
    {
        "brand": "iPhone",
        "model": "11 Pro Max",
        "price": "650"
    }, 
    {
        "brand": "Samsung",
        "model": "S9",
        "price": "400"
    }, 
    {
        "brand": "Samsung",
        "model": "S10 PLUS",
        "price": "580"
    }, 
    {
        "brand": "Xiaomi",
        "model": "Mi 9",
        "price": "490"
    }, 
    {
        "brand": "Xiaomi",
        "model": "Mi 7",
        "price": "400"
    },
    {
        "brand": "Google",
        "model": "Pixel 3",
        "price": "400"
    },
      {
        "brand": "Google",
        "model": "Pixel 4",
        "price": "600"
    },
    {
        "brand": "OnePlus",
        "model": "8T",
        "price": "650"
    },
    {
        "brand": "OnePlus",
        "model": "7 Pro",
        "price": "450"
    },
]

//show phones
let phonesCon = document.querySelector(".con");

function showItems (arr){
arr.forEach( phone => {

    let phoneDiv = document.createElement("div");
    phoneDiv.classList = "phone";

    let phoneBrand = document.createElement("h3");
    phoneBrand.classList = "brand";

    let phoneModel = document.createElement("h4");
    phoneModel.classList = "model";

    let phonePrice = document.createElement("span");
    phonePrice.classList = "price";

    phoneBrand.textContent = phone.brand;
    phoneModel.textContent = phone.model;
    phonePrice.textContent = phone.price;

    phoneDiv.append(phoneBrand, phoneModel, phonePrice);
    phonesCon.appendChild(phoneDiv);
})
}

showItems(phones);


//button selection
let select = document.getElementById("phone-brand");

function getSelectedPhone() {
 if (select.value === "All"){
    phonesCon.innerHTML = "";
     showItems(phones);
 } else {
    let phonesArr =  phones.filter(phone => {
        return phone.brand === select.value;
    })

    phonesCon.innerHTML = "";
    showItems(phonesArr);
 }
}



select.addEventListener("change", getSelectedPhone);

let ascBtn = document.getElementById("sort-asc");
let descBtn = document.getElementById("sort-desc");

ascBtn.addEventListener("click", () => {
    let ascArr = phones.sort((a, b) => {
        return a.price - b.price;
    })

    //bubble sort;
    phonesCon.innerHTML = "";
    showItems(ascArr);
})

descBtn.addEventListener("click", () => {
    let descArr = phones.sort((a, b) => {
        return b.price - a.price;
    })

    //bubble sort;
    phonesCon.innerHTML = "";
    showItems(descArr);
})

// To Do List pe care il sortam dupa importanta;
//  