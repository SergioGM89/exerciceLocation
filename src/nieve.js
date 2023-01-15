import './commons.css';
import "./snow.css"; // Remember to import style.css
import { createSnow, showSnow } from "pure-snow.js";

createSnow(); // creates snowflakes and generate css for them
showSnow(true); // snow can be disabled using showSnow function

document.getElementById('to-index').addEventListener('click', () => {
  window.location.pathname = '/index.html'
})

// params = new URLSearchParams(window.location.search)
// for(let param of params.entries()) {
//   const [name, value] = param
//   console.log(`Param name:${name} value:${value}`)
// }


