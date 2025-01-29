/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let arr = [who, action, what, when];
  let excuse = [];
  for (let i = 0; i < arr.length; i++) {
    let generateExcuse = Math.floor(Math.random() * arr[i].length);
    excuse.push(arr[i][generateExcuse]);
  }
  let frase = excuse.join(" ");
  document.querySelector("#frase").innerHTML = frase;
  console.log(frase);
};
