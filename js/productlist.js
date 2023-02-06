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
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h2").textContent = product.brandname;
  copy.querySelector(".produkt .pris").textContent = product.price;
  copy.querySelector(".under_line p").textContent = product.productdisplaynam;

  if (product.soldout > 0) {
    copy.classList.add("udsolgt");
  }

  if (product.discount) {
    copy.querySelector(".produkt").classList.add(".rabatProcent");
    /* copy.querySelector(".produkt").classList.add(".rabatProcent"); */

    //Berging
    let currentPrice = Number(document.querySelector.price);
    let discount = Number(document.querySelector.discount);
    let totalValue = currentPrice * (discount / 100);
    copy.querySelector(".produkt .newPrice").Number = product.totalValue;
  }

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
