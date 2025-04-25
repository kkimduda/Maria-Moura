function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw () {
  background('#E07EF0');
  fill('#F3CE9E');
  circle(200,200,300); //rosto
  fill('white');
  circle(150,150,60); //olho esquerdo
  circle(250,150,60); //olho direito
  line(150,270,250,255);
  fill('rgb(234,83,108)');
  triangle(200,180,170,220,220,220); //nariz
  line(123,115,178,113); //sobrancelha esquerda
  line(225,116,279,109); //sobrancelha direita
  //circle(150,150,15); //pupila esquerda
  //circle(250,150,15); //pupila direita
  
  olhoX = map(mouseX,0,400,130,170);
  olhoY = map(mouseY,0,400,130,170);
  
  circle(olhoX,olhoY,15); // nova pupila esquerda
  circle(olhoX+100,olhoY,15); // nova pupila direita
  if(mouseIsPressed){
     console.log(mouseX,mouseY);
     }
}