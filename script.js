const sonic = document.querySelector('.sonic');
const eggman = document.querySelector('eggman');
const background = document.querySelector('.background');

const jump = () => {
  sonic.classList.add ('jump');
  sonic.src = "imagens/Sonic-Jump.gif";
  sonic.style.width = '110px';
  
  setTimeout (() => {
  sonic.classList.remove ('jump');
  sonic.src ="imagens/Sonic.gif";
  sonic.style.width = '150px'  
  }, 900);
};

const loop = setInterval (() => {
    const eggmanPosition = eggman.offsetLeft;
    const sonicPosition = +window
      .getComputedStyle(sonic)
      .bottom.replace("px", ""); 
    
    if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 220) {
    
        eggman.style.animation = 'none'
        eggman.style.left = `${eggmanPosition}px`;
      
        sonic.style.animation = 'none'
       // sonic.style.left = `${sonicPosition}px`;

        sonic.src = 'imagens/Sonic-Loss.gif';
        sonic.style.width = '150px'
       // sonic.style.marginLeft = '50px'

       background.src = 'imagens/GameoverSMB-1.png';
     } 
} ,10);

//document.addEventListener('click', jump);
document.addEventListener('keydown', jump);