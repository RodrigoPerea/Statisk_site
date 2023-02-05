/* https://kea-alt-del.dk/t7/api/products */

// 1. hente data
async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products "); //hentet data

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

  // 5. klone dem
  // 6. skifte data
  // 7. appende (tilføje til dommen)
}

/* 
articletype: "Tshirts"
​​brandname: "Nike"
​​category: "Apparel"
​​discount: null
​​gender: "Men"
​​id: 1163
​​price: 895
​​productdisplayname: "Sahara Team India Fanwear Round Neck Jersey"
​​productionyear: 2011
​​season: "Summer"
​​soldout: 0
​​subcategory: "Topwear"
​​usagetype: "Sports"


*/
