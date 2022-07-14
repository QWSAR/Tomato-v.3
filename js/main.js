let x = 0,
    y = 0;

document.addEventListener('keydown', function(e){
  if(e.which == 37) y -= 7;
  if(e.which == 39) y += 7;
  if(e.which == 38) x += 7;
  if(e.which == 40) x -= 7;
 
 document.querySelector('.cube').style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
});


// let god = 2020;
// let rojdenie = Number(prompt('Введите год рождения: '));

// let vozrast = god - rojdenie;

// alert(vozrast);

