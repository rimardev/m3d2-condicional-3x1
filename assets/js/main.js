function tarea1() {
  let borde = document.querySelector("#img01");
  if (borde.style.border == "5px solid royalblue"){
    borde.style.border = "none";
    btn01 = document.querySelector("#btn01");
    btn01.innerHTML = "+ Borde";
  } else {
    borde.style.border = "5px solid royalblue";
    btn01 = document.querySelector("#btn01");
    btn01.innerHTML = "- Borde";
  };  
};

function tarea2() {
  let input1 = Number(document.querySelector("#input1").value);
  let input2 = Number(document.querySelector("#input2").value);
  let input3 = Number(document.querySelector("#input3").value);
  let msg = document.querySelector(".msg");
  if (input1 < 0 || input2 < 0 || input3 < 0){    
    msg.innerHTML = "Los numeros NO PUEDEN ser Negativos";
  } else {
    let suma = input1 + input2 + input3;
    if (suma > 10){
      msg.innerHTML = "Llevas demasiados stickers";
    } else {
      msg.innerHTML = "Llevas " + suma + " stickers";
    };
  };  
};