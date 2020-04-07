let marmore = document.getElementById("marmore");
let metros = document.getElementById("metros");
let form = document.querySelector("form");
let result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validacao(marmore.value, metros.value);
});

form.addEventListener("change", () => {
  if (marmore.value === "" || metros.value === "") {
    result.innerHTML = "";
  }
});

function validacao(marmore, metros) {
  if (marmore === "" || metros === "") {
    result.innerHTML = "Digite valores válidos...";
    setTimeout(() => {
      result.innerHTML = "";
    }, 3000);
  } else {
    valorTotal(marmore, metros);
  }
}

function valorTotal(marmore, metros) {
  let mar = marmore.toLowerCase();
  let branca = 280;
  let preta = 380;

  if (mar === "branca") {
    let tot = metros * branca;
    result.innerHTML = `O valor total é de ${tot}`;
  } else if (mar === "preta") {
    let tot = metros * preta;
    result.innerHTML = `O valor total é de ${tot}`;
  }
}
