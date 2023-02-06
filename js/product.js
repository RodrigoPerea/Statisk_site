/* https://kea-alt-del.dk/t7/api/products/1164 */
console.log("product.js");

async function getProduct() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products/1164");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}
function showProduct(product) {
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".aditional_info h2").textContent = product.brandname;
  document.querySelector(".aditional_info h4").textContent = product.productdisplayname;
  document.querySelector(".aditional_info h6").textContent = product.price;
  document.querySelector(".rabat p").textContent = product.discount;
  document.querySelector(".aditional_info .basecolour").textContent = product.basecolour;
  document.querySelector(".info_folder .description").innerHTML = product.description;
  document.querySelector(".info_folder .product_id").textContent = product.id;
  document.querySelector(".info_folder .material_wasning").textContent = product.materialcaredesc;
  document.querySelector(".info_folder .gender").textContent = product.gender;
  document.querySelector(".info_folder .category").textContent = product.category;
  document.querySelector(".info_folder .sub_category").textContent = product.subcategory;
  document.querySelector(".info_folder .articletype").textContent = product.articletype;
  document.querySelector(".info_folder .season").textContent = product.season;
  document.querySelector(".info_folder .brandbio_tx").textContent = product.brandbio;
}

getProduct();
