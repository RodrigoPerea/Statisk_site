/* https://kea-alt-del.dk/t7/api/products */

// 1. hente data
async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=10 "); //hentet data

  const data = await response.json();
  console.log(data);

  // 2. loope  // 3. for hver

  data.forEach(showProduct); //loope
}
getData();

//funktionen vil modtage et produkt af gangen
function showProduct(product) {
  console.log(product);
  // 4.fange vore template
  const template = document.querySelector("#smallProductTemplate").content;
  console.log(template);
  // 5. klone dem
  const copy = template.cloneNode(true);
  // 6. skifte data
  copy.querySelector("h2").textContent = product.brandname;
  copy.querySelector(".produkt .pris").textContent = product.price;

  if (product.soldout) {
    copy.querySelector(".produkt").classList.add("udsolgt");
  }

  if (product.discount) {
    copy.querySelector(".produkt").classList.add("rabat");
  }

  /*  function newPriceDiscount() {
    let currentPrice = Number(document.querySelector.price).value;
    let discounValue = Number(document.querySelector.discount).value;
    let totalValue = currentPrice * (discounValue / 100);
    document.querySelector(".produkt .newPrice ").textContent = product.totalValue;
    console.log(newTotalPrice);
  } */
  // 7. appende (tilføje til dommen)
  document.querySelector("main").appendChild(copy);
}

/* 
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0




*/
