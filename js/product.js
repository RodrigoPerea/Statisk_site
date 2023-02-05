/* https://kea-alt-del.dk/t7/api/products/1164 */
console.log("product.js");

async function getProduct() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products/1164");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}
function showProduct(product) {
  document.querySelector(".aditional_info h2").textContent = product.brandname;
  document.querySelector(".aditional_info h4").textContent = product.productdisplayname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

getProduct();
