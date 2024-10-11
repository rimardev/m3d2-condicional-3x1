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