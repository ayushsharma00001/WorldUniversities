// Generating random color for Heading
let header = document.querySelector(".header");
let btn = document.querySelector(".btn");
let dictionary = document.querySelector(".dictionary");
function randColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let color = `rgb(${red},${green},${blue})`;
  header.style.color = color;
  btn.style.backgroundColor = color;
  btn.style.border = `2px solid ${color}`;
  dictionary.style.color = color;
}
randColor();

// calling api
async function recData(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (err) {
    alert("Data not Available");
  }
}
let url = "http://universities.hipolabs.com/search?name=";
let input = document.querySelector(".input");
btn.addEventListener("click", async () => {
  let country = input.value;
  console.log(country);
  let data = await recData(country);
  console.log(data);
  addData(data);
});

ul = document.querySelector(".uol");
function addData(data) {
  ul.innerHTML = "";
  data.forEach((element) => {
    let li = document.createElement("li");
    li.setAttribute("class", "clg");
    li.innerText = element.name;
    ul.appendChild(li);
  });
}
