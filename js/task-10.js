  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  const controlsDiv = document.querySelector('#controls');
  const createButton = controlsDiv.querySelector('[data-create]');
  const destroyButton = controlsDiv.querySelector('[data-destroy]');
  const boxesDiv = document.querySelector('#boxes');

  createButton.addEventListener('click', createBoxes);
  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = +document.querySelector('input').value;
    
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.classList.add('box');
      boxesDiv.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = '';
  }
