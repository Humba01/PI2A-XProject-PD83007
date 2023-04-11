// DOM manipulação
let gancho = document.getElementById("tabuleiro")
  ,counter = 0
  ,corIndicada;

for(let i = 1; i <= 8; i++) { 
  
  for(let j = 1; j <= 8; j++) {
    
    let element = document.createElement("div");
    counter++;
    element.id = `cs${i}${j}`;
    element.style.gridColumn = j;
    element.style.gridRow = i; 
    element.classList.add("layout-tabuleiro-casa");
    
    if(i == 1 || i == 3 || i == 5 || i == 7) { 
      if(counter % 2 == 0) { element.classList.add("layout-tabuleiro-casa-par"); }
      if(counter % 2 == 1) { element.classList.add("layout-tabuleiro-casa-impar"); }
    } else {
      if(counter % 2 == 0) { element.classList.add("layout-tabuleiro-casa-impar"); }
      if(counter % 2 == 1) { element.classList.add("layout-tabuleiro-casa-par"); }
    }

    gancho.appendChild(element);

  }

}
