console.log("hello world !");

// CLignotement des x
const tds = document.getElementsByTagName("td");

const myCallback = (e) => {
  e.classList.toggle("luminus");
};

for (let key in tds) {
  if (tds[key]["innerHTML"] === "x") {
    let e = tds[key];
    setInterval(myCallback, 2000, e);
  }
}

// Img modal

document.addEventListener("click", function (e) {
  e.preventDefault();
  let getElement = e.target;
  let getModal = document.getElementById("modal");
  getModal.val = getElement;
  console.log(getModal);
});
