const humber = document.querySelector(".humberger");
const navItems = document.querySelector(".nav-list");
// const cardTitle = document.getElementById("card-title");
// const cardImage = document.getElementById("card-image");
const fetchData2 = document.getElementById("data");
humber.addEventListener("click", () => {
  navItems.classList.toggle("hide");
});

let api_url = "https://fakestoreapi.com/products";
async function productData() {
  const products = await fetch(api_url);
  const resposne = await products.json();
  //   return resposne;

  fetchData(resposne);
}
productData();

const fetchData = (resposne) => {
  resposne.map((product,idx) => {
    console.log(idx)
    console.log(product.title);
    fetchData2.innerHTML += `<div class = 'cart' >
        <img src=${product.image} class = 'cart-image'/>
        <p>${"INR " + product.price}</p>
        <p>${"category : " + product.category}</p>
        <p>${"Rating's " + product.rating.rate} <span>⭐️</span></p>
        </div>`;

  });
};
