/* https://kea-alt-del.dk/t7/api/products */

// 1. hente data
async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=500 "); //hentet data

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
  copy.querySelector("img").alt = product.productdisplayname;
  copy.querySelector("h2").textContent = product.brandname;
  copy.querySelector(".pris").textContent = product.price;
  /* copy.querySelector(".produkt .pris").textContent = Math.floor(product.price - (product.price / 100) * product.discount); */
  copy.querySelector(".under_line p").textContent = product.productdisplayname;

  if (product.soldout > 0) {
    copy.querySelector(".produkt").classList.add("udsolgt");
    /* copy.querySelector(".read_more").classList.add("gem"); */
  }

  if (product.discount > 0) {
    copy.querySelector(".rabatProcent").textContent = product.discount;
    copy.querySelector(".newPrice").textContent = Math.floor(product.price - (product.price / 100) * product.discount);
    copy.querySelector(".pris").style.textDecoration = "line-through red";
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
