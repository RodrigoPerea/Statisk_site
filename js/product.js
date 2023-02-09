/* https://kea-alt-del.dk/t7/api/products/1164 */
console.log("product.js");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const productDataFromId = `https://kea-alt-del.dk/t7/api/products/${id}`;

async function getProduct() {
  const response = await fetch(productDataFromId);
  const data = await response.json();
  console.log(data);
  showProduct(data);
}
function showProduct(product) {
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector(".aditional_info h2").textContent = product.brandname;
  document.querySelector(".aditional_info h4").textContent = product.productdisplayname;
  document.querySelector(".aditional_info h6").textContent = product.price;
  document.querySelector(".rabat p").textContent = product.discount;
  document.querySelector(".aditional_info .basecolour").textContent = product.basecolour;
  document.querySelector(".info_folder .description").innerHTML = product.description;
  document.querySelector(".info_folder .product_id").textContent = product.id;
  document.querySelector(".info_folder .material_wasning").innerHTML = product.materialcaredesc;
  document.querySelector(".info_folder .gender").textContent = product.gender;
  document.querySelector(".info_folder .category").textContent = product.category;
  document.querySelector(".info_folder .sub_category").textContent = product.subcategory;
  document.querySelector(".info_folder .articletype").textContent = product.articletype;
  document.querySelector(".info_folder .season").textContent = product.season;
  document.querySelector(".info_folder .brandbio_tx").textContent = product.brandbio;

  if (product.soldout > 0) {
    copy.querySelector(".produkt").classList.add("udsolgt");
  }

  if (product.discount > 0) {
    copy.querySelector(".rabatProcent").textContent = product.discount;
    copy.querySelector(".newPrice").textContent = Math.floor(product.price - (product.price / 100) * product.discount);
    copy.querySelector(".pris").style.textDecoration = "line-through red";
  }
}

getProduct();
