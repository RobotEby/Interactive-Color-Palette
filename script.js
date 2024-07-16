// adicionar à página o título "Paleta de Cores".
const title = document.querySelector('.title');
title.innerText = 'Paleta de Cores';

// adicionar cores definidas.
  const colors = ['black', 'red', 'blue', 'green'];

  // acessar todas as classes color.
  const setPaletColors = document.querySelectorAll('.color');
  
  // somente uma das cores da paleta deve ter a classe selected de cada vez;
  // a classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;
  // note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.
  setPaletColors.forEach((element) => {      
    element.addEventListener('click', function() {
      setPaletColors.forEach(colors => colors.classList.remove('selected'));
      element.classList.add('selected');
    });
  });
    const pixelBoard = document.getElementById('pixel-board');
    
    setPaletColors.forEach((Element, index) => {
      addEventListener('click', () => {
        if (Element.classList.contains("selected")) {
          selectedColor = Element.style.backgroundColor
        }
      })
        Element.style.backgroundColor = colors[index];

        // Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels.
            if ('black' === colors[index]) {
                selectedColor = colors[index];
            }
      });
  // adicionar um quadro de pixels, com 25 pixels.
for (index = 0; index < 5; index++) {
  //  5 elementos de largura
  const row = document.createElement('tr');
  for (let index = 0; index < 5; index++) {
    // 5 elementos de comprimento;
    const cell = document.createElement('td');
    cell.classList.add('pixel');
    cell.addEventListener('click', function() {
      if (selectedColor) {
        cell.style.backgroundColor = selectedColor;
      }
    })
    row.appendChild(cell);
  }
  pixelBoard.appendChild(row);
};