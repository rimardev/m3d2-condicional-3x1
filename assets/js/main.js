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
  let msg2 = document.querySelector("#msg2");
  if (input1 < 0 || input2 < 0 || input3 < 0){    
    msg2.innerHTML = "Los numeros NO PUEDEN ser Negativos";
  } else {
    let suma = input1 + input2 + input3;
    if (suma > 10){
      msg2.innerHTML = "Llevas demasiados stickers";
    } else {
      msg2.innerHTML = "Llevas " + suma + " stickers";
    };
  };  
};

function tarea3() {
  let msg3 = document.querySelector("#msg3");
  let num1 = document.querySelector("#select1").value;
  let num2 = document.querySelector("#select2").value;
  let num3 = document.querySelector("#select3").value;
  let pass = num1 + num2 + num3;
  if (pass === "911" || pass === "714"){
    msg3.innerHTML = "PASSWORD CORRECTO";
    msg3.style.color = "green";
  } else {
    msg3.innerHTML = "PASSWORD INCORRECTO";
    msg3.style.color = "red";
  };
};