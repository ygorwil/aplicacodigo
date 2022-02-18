function preload () {
  doceimg = loadImage('imagens/docinho.png');  // Imagem dos docinhos.
  pimentaimg = loadImage('imagens/pimenta.png'); // Imagem das pimentas.
  maoimg = loadImage('imagens/mao.png');  // Imagem da mãozinha.
  garoto = loadImage('imagens/garoto.png');  // Imagem do menino que aparece no menu.
  formiga = loadImage('imagens/formiguinha.png');  // Imagem da formiguinha que aparece na tela de vitória da primeira fase.
  escovar = loadImage('imagens/escovar.png')  // Imagem da garota escovando os dentes que aparece na tela de final

}

let Pagina = 0

let DocinhoX = []; // Valores dos docinhos na posição "X" (horizontal)
let DocinhoY = [0, 0, 0, 0, 0, 0]; // Um vetor para guardar as informações que usaremos para os docinhos em Y (vertical)

let PimentaX = [0, 0]; // Valores das pimentas na posição "X" (horizontal)
let PimentaY = [0, 0]; // Um vetor para guardar as informações que usaremos para as pimentas em Y (vertical)

let Tdocinho = []; // Cria um vetor para guardar a informação sobre o diametro dos docinhos que estão caindo

let Tpimenta = []; // Cria um vetor para guardar a informação sobre o diametro das pimentas que estão caindo

let Tjogador = 50; // Referente ao tamanho do jogador, nesse caso a mãozinha

let Distancia = []; // Cria um vetor para a distância dos docinhos que vão caindo

let velocidade = []; // Vetor para guardar a velocidade dos docinhos

let QtdDocinhos = 0; // Variável para o número de docinhos pegos

let QtdPimentas = 3; // Variável para o número de pimentas que o jogador pode pegar

let Vidas = 3; // Variável para o número de vidas disponíveis para o jogador


function setup() {
  createCanvas(600, 500);
  
   // Dá início aos primeiros docinhos caindo sendo em uma sequência de cinco por vez, surgindo randômicamente à partir do começo do eixo X. Para a primeira fase, serão cinco docinhos que "caem" por vez. Para a segunda, serão seis.
  for(let i = 0; i < 5; i++){
    DocinhoX[i] = random(0, width - 15);
    //
  }
  
  // Diametro dos docinhos que também são resetados um à um de acordo com a regra do "i" passada anteriormente.
  for(let i = 0; i < 5; i++){
    Tdocinho[i] = random(50, 60);
  }
  
  // Velocidade randômica dos docinhos, de forma que a velocidade entre eles seja variada.
  for(let i = 0; i < 5; i++){
    velocidade[i] = random(1.5, 3.5);
  }
  
   // Dá início as primeiras pimentas caindo sendo em uma sequência de duas por vez, surgindo randômicamente.
  for(let i = 0; i < 2; i++){
    PimentaX[i] = random(0, width - 15);
    //
  }
  
  // Diametro das pimentas que também são resetados um à um de acordo com a regra do "i" passada anteriormente.
  for(let i = 0; i < 2; i++){
    Tpimenta[i] = random(40, 50);
  }
}

function draw() {
  background('#9e3ac9');
  noStroke();
  
    if (Pagina == 0) {
    fill("#191970");
    image(garoto, 410, 265, 200, 250);
    push();
    textSize(40);
    textFont('Trebuchet MS');
    textStyle(BOLD)
    textAlign(CENTER)
    fill('#ffffff');
    text('🍭 PEGUE OS DOCINHOS 🍬', 300, 110);
    fill('#ffffff');
    textStyle(NORMAL)
    textAlign(CENTER)
    textFont('Trebuchet MS');
    textSize(20);
    rect(197, 150, 200, 50, 10);
    fill('#000000');
    text("JOGAR", 197, 165, 200, 50);
      
   // Coordenadas para quando o mouse passa por cima do botão, dar a impressão que ele muda de cor ao criar um novo rect e texto em cima com outras cores.
  if( mouseX> 197 && mouseX< 197+200 && mouseY> 145 && mouseY< 145+50){
    fill("#feb5ff")
    rect(197, 150, 200, 50, 10);
    fill('#000000');
    text("JOGAR", 197, 165, 200, 50);
    if(mouseIsPressed){
    Pagina = 1
    }
  }
      
  // Segundo botão.
  fill("#FFFFFF");
  rect(197, 225, 200, 50, 10);
  fill('#000000');
  text("INSTRUÇÕES", 197, 242, 200, 50);
  if( mouseX> 197 && mouseX< 197+200 && mouseY> 225 && mouseY< 225+50){
    fill("#feb5ff")
    rect(197, 225, 200, 50, 10);
    fill('#000000');
    text("INSTRUÇÕES", 197, 242, 200, 50);
    if(mouseIsPressed){
    Pagina = 4
    }
  }
    
  // Terceiro botão.
  fill("#FFFFFF");
  rect(197, 305, 200, 50, 10);
  fill('#000000');
  text("CRÉDITOS", 197, 322, 200, 50);
  if( mouseX> 197 && mouseX< 197+200 && mouseY> 305 && mouseY< 305+50){
    fill("#feb5ff")
    rect(197, 305, 200, 50, 10);
    fill('#000000');
    text("CRÉDITOS", 197, 322, 200, 50);
    if(mouseIsPressed){
    Pagina = 5
    }
  }  

    fill('#FFFFFF');
    textSize(16);
    text("Criado com o ❤️", 197, 450, 200, 50);
      
}

  else if(Pagina == 1) {
    
  fill(0, 254, 202);
  
  // Desenha os docinhos na tela e os guia na direção correta (vertical), mas pela regra surgirão em locais diferentes.
  for(let i = 0; i < 5; i++){
    image(doceimg, DocinhoX[i], DocinhoY[i], Tdocinho[i], Tdocinho[i]);
  }
  
  // Usando a mesma regra e o que foi ensinado nas aulas, abaixo temos a forma de movimentar o docinho. Como seguem a regra do "i", são velocidades aleatórias 
  for(let i = 0; i < 5; i++){
    DocinhoY[i] = DocinhoY[i] + velocidade[i];
  }
  
  // Faz com que a mãozinha siga o mouse onde o jogador passá-lo na tela. Foi alterado em "-30" para que o mouse ficasse mais próximo ao centro da mão.
  fill(255, 255, 255, 100); 
  image(maoimg, mouseX - 30, mouseY - 30, Tjogador, Tjogador); 
  
  // Diz ao programa onde os docinhos vão interagir com o jogador, ou seja, a distância entre a mãozinha e os docinhos.
  for(let i = 0; i < 5; i++){
    Distancia[i] = dist(DocinhoX[i], DocinhoY[i], mouseX, mouseY);
  }
  
  // Diz ao mouse que quando a mãozinha estiver próxima ele irá pegá-lo.
  for(let i = 0; i < 5; i++){
    if(Distancia[i] < 53){
     
  // Desenha um novo docinho de forma randômica vindo de X e descendo em Y
      DocinhoY[i] = 0;
      DocinhoX[i] = random(0, width - 15);
      
  // Faz com que os novos docinhos que surjam tenham entre "40" e "60" de tamanho.
      Tdocinho[i] = random(40, 60);
      
      // Aumenta o valor em uma unidade na pontuação a cada docinho que for pêgo.
      QtdDocinhos = QtdDocinhos + 1;
    }
  }
    
    if (Vidas) {
    fill('#ffffff');
    textAlign(RIGHT)
    textSize(18);
    text('❤️'.repeat(Vidas), 570, 35);
  } 
  
  // Identificador que representa que os docinhos chegaram ao final da tela para serem resetados.
  for(let i = 0; i < 5; i++){
    if(DocinhoY[i] > height){
      DocinhoY[i] = 0;
      DocinhoX[i] = random(0, width - 15);
      Tdocinho[i] = random(20, 60);
      Vidas -= 1;
    }
  }
  
  // Local onde ficam os pontos do jogador.
  fill('#ffffff');
  textStyle(NORMAL)
  textAlign(LEFT);
  textSize(20);
  text('Você pegou ' + QtdDocinhos + ' docinhos!', 30, 470);

if(QtdDocinhos == 50){
  xDocinho = width + 20;
  yDocinho = height + 20;
  velocidade = 0;

    fill('#9e3ac9');
    ellipse(mouseX - 30, mouseY - 30, 150, 150);   
    fill('#9e3ac9')
    image(formiga, 5, 285, 200, 160);
    rect(30, 450, 250, 50)
    fill('#ffffff')
    textFont('Trebuchet MS');
    textStyle(BOLD)
    textAlign(CENTER)  
    textSize(35);
    text('Você venceu!!', 300, 130)
    textStyle(NORMAL)
    textAlign(CENTER)  
    textSize(15);
    text('Cuidado pois na próxima fase, além de pegar os docinhos antes\nque eles atinjam o final da área do jogo, você também precisa\nter cuidado para não pegar as pimentas. 🌶️\n\nPor elas serem muito picantes, acabam te fazendo perder uma vida! 😨', 300, 170)
    textSize(18);
    rect(197, 305, 200, 50, 10);
    rect(197, 365, 200, 50, 10);
    textStyle(NORMAL)
    fill('#9e3ac9')
    text('Voltar ao Menu', 295, 335)
    text('Próxima fase ▶️', 295, 395)

  if( mouseX> 198 && mouseX< 395 && mouseY> 305 && mouseY< 354){
    fill("#feb5ff")
    rect(197, 305, 200, 50, 10);
    fill('#000000');
    text("Voltar ao Menu", 295, 335);
    }
  
  if( mouseX> 198 && mouseX< 395 && mouseY> 365 && mouseY< 415){
    fill("#feb5ff")
    rect(197, 365, 200, 50, 10);
    fill('#000000');
    text("Próxima fase ▶️", 295, 395);
    } 
  } 

  if(Vidas == 0){
    xDocinho = width + 20;
    yDocinho = height + 20;
    velocidade = 0;
    Pagina = 7;
    reiniciar();
  }      
}
  
  else if(Pagina == 2) {   
    
  fill(0, 254, 202);    
    
  // Desenha as pimentas na direção correta (vertical), mas pela regra surgirão em locais diferentes. Nessa fase surgem duas por vez.
  for(let i = 0; i < 2; i++){
    image(pimentaimg, PimentaX[i], PimentaY[i], Tpimenta[i] - 5, Tpimenta[i] - 5);
  }
  
  // Usando a mesma regra e o que foi ensinado nas aulas, abaixo temos a forma de movimentar a pimenta. Como seguem a regra do "i", são velocidades aleatórias. Nesse primeiro momento estão um pouco mais lentar (-0.2) para não tornarem a fase tão difícil
  for(let i = 0; i < 2; i++){
    PimentaY[i] = PimentaY[i] + (velocidade[i] - 0.2);
  }  
  
  // Diz ao programa onde as pimentas vão interagir com o jogador, ou seja, a distância entre a mãozinha e os docinhos.
  for(let i = 0; i < 2; i++){
    Distancia[i] = dist(PimentaX[i], PimentaY[i], mouseX, mouseY);
  }
  
  // Diz ao mouse que quando a mãozinha estiver próxima ele irá pegá-lo.
  for(let i = 0; i < 2; i++){
    if(Distancia[i] < 50){
     
  // Desenha uma nova pimentinha de forma randômica vindo de X e descendo em Y
      PimentaY[i] = 0;
      PimentaX[i] = random(0, width - 15);
      
  // Faz com que as novas pimentinhas que surjam tenham entre "30" e "50" de tamanho.
      Tpimenta[i] = random(30, 50);
      
  // Aumenta o valor em uma unidade na pontuação a cada docinho que for pêgo.
      QtdPimentas = QtdPimentas - 1;
      Vidas -= 1
    }
  }
    
    
    // Área dos Docinhos
  
  // Desenha os docinhos na tela e os guia na direção correta (vertical), mas pela regra surgirão em locais diferentes. Nessa fase surgem seis por vez, diferente da anterior que são 5.
  for(let i = 0; i < 6; i++){
    image(doceimg, DocinhoX[i], DocinhoY[i], Tdocinho[i], Tdocinho[i]);
  }
  
  // Usando a mesma regra e o que foi ensinado nas aulas, abaixo temos a forma de movimentar o docinho. Como seguem a regra do "i", são velocidades aleatórias 
  for(let i = 0; i < 6; i++){
    DocinhoY[i] = DocinhoY[i] + (velocidade[i] + 0.2);
  }
  
  // Faz com que a mãozinha siga o mouse onde o jogador passá-lo na tela. Foi alterado em "-30" para que o mouse ficasse mais próximo ao centro da mão.
  fill(255, 255, 255, 100); 
  image(maoimg, mouseX - 30, mouseY - 30, Tjogador, Tjogador); 
  
  // Diz ao programa onde os docinhos vão interagir com o jogador, ou seja, a distância entre a mãozinha e os docinhos.
  for(let i = 0; i < 6; i++){
    Distancia[i] = dist(DocinhoX[i], DocinhoY[i], mouseX, mouseY);
  }
  
  // Diz ao mouse que quando a mãozinha estiver próxima ele irá pegá-lo.
  for(let i = 0; i < 6; i++){
    if(Distancia[i] < 53){
     
  // Desenha um novo docinho de forma randômica vindo de X e descendo em Y
      DocinhoY[i] = 0;
      DocinhoX[i] = random(0, width - 15);
      
  // Faz com que os novos docinhos que surjam tenham entre "30" e "50" de tamanho.
      Tdocinho[i] = random(30, 50);
      
      // Aumenta o valor em uma unidade na pontuação a cada docinho que for pêgo.
      QtdDocinhos = QtdDocinhos + 1;
    }
  }
     
    if (Vidas) {
    fill('#ffffff');
    text('❤️'.repeat(Vidas), 500, 35);
  } 
  
  // Identificador que representa que as pimentas e docinhos chegaram ao final da tela para serem resetados.
    
  for(let i = 0; i < 2; i++){
    if(PimentaY[i] > height){
      PimentaY[i] = 0;
      PimentaX[i] = random(0, width);
      Tpimenta[i] = random(20, 60);
    }
  }
    
  for(let i = 0; i < 5; i++){
    if(DocinhoY[i] > height){
      DocinhoY[i] = 0;
      DocinhoX[i] = random(0, width);
      Tdocinho[i] = random(20, 60);
      Vidas -= 1;
    }
  }
    
  // Local onde ficam os pontos do jogador.
  fill('#ffffff');
  textStyle(NORMAL)
  textAlign(LEFT);
  textSize(20);
  text('Você pegou ' + QtdDocinhos + ' docinhos!', 30, 470);

if(QtdDocinhos == 50){
  xDocinho = width + 20;
  yDocinho = height + 20;
  velocidade = 0;

    fill('#9e3ac9');
    ellipse(mouseX - 30, mouseY - 30, 150, 150);   
    fill('#9e3ac9')
    image(formiga, 5, 285, 200, 160);
    rect(30, 450, 250, 50)
    fill('#ffffff')
    textFont('Trebuchet MS');
    textStyle(BOLD)
    textAlign(CENTER)  
    textSize(35);
    text('Você venceu!!', 300, 130)
    textStyle(NORMAL)
    textAlign(CENTER)  
    textSize(15);
    text('Poxa vida, você já está bem rápido, hein?\n\nDeixa eu te contar uma coisa:\nAquelas pimentinhas danadas, na próxima\nfase estarão mais rápidas, cuidado!! 😨', 300, 170)
    textSize(18);
    rect(197, 305, 200, 50, 10);
    rect(197, 365, 200, 50, 10);
    textStyle(NORMAL)
    fill('#9e3ac9')
    text('Voltar ao Menu', 295, 335)
    text('Próxima fase ▶️', 295, 395)

  if( mouseX> 198 && mouseX< 395 && mouseY> 305 && mouseY< 354){
    fill("#feb5ff")
    rect(197, 305, 200, 50, 10);
    fill('#000000');
    text("Voltar ao Menu", 295, 335);
    }
  
  if( mouseX> 198 && mouseX< 395 && mouseY> 365 && mouseY< 415){
    fill("#feb5ff")
    rect(197, 365, 200, 50, 10);
    fill('#000000');
    text("Próxima fase ▶️", 295, 395);
    }
  
  }    
    
if(QtdPimentas == 0){
  xDocinho = width + 20;
  yDocinho = height + 20;
  velocidade = 0;
  Pagina = 7;
  }     
    
if(Vidas == 0){
  xDocinho = width + 20;
  yDocinho = height + 20;
  velocidade = 0;
  Pagina = 7;
  }    
    
}
  
  else if(Pagina == 3) {   
    
  fill(0, 254, 202);    
    
  // Desenhas as pimentas e guia na direção correta (vertical), mas pela regra surgirão em locais diferentes.
  for(let i = 0; i < 2; i++){
    image(pimentaimg, PimentaX[i], PimentaY[i], Tpimenta[i] - 5, Tpimenta[i] - 5);
  }
  
  // Usando a mesma regra e o que foi ensinado nas aulas, abaixo temos a forma de movimentar a pimenta. Como seguem a regra do "i", são velocidades aleatórias 
  for(let i = 0; i < 2; i++){
    PimentaY[i] = PimentaY[i] + (velocidade[i] + 1);
  }
  
  
  // Diz ao programa onde as pimentas vão interagir com o jogador, ou seja, a distância entre a mãozinha e as pimentas.
  for(let i = 0; i < 2; i++){
    Distancia[i] = dist(PimentaX[i], PimentaY[i], mouseX, mouseY);
  }
  
  // Diz ao mouse que quando a mãozinha estiver próxima ele irá pegá-lo.
  for(let i = 0; i < 2; i++){
    if(Distancia[i] < 50){
     
  // Desenha uma nova pimentinha de forma randômica vindo de X e descendo em Y
      PimentaY[i] = 0;
      PimentaX[i] = random(0, width);
      
  // Faz com que as novas pimentinhas que surjam tenham entre "30" e "50" de tamanho.
      Tpimenta[i] = random(30, 50);
      
  // Aumenta o valor em uma unidade na pontuação a cada docinho que for pêgo.
      QtdPimentas = QtdPimentas - 1;
      Vidas -= 1
    }
  }
  
  // Desenha os docinhos na tela e os guia na direção correta (vertical), mas pela regra surgirão em locais diferentes. Nessa fase surgem seis por vez, diferente da anterior que são 5.
  for(let i = 0; i < 6; i++){
    image(doceimg, DocinhoX[i], DocinhoY[i], Tdocinho[i], Tdocinho[i]);
  }
  
  // Usando a mesma regra e o que foi ensinado nas aulas, abaixo temos a forma de movimentar o docinho. Como seguem a regra do "i", são velocidades aleatórias 
  for(let i = 0; i < 6; i++){
    DocinhoY[i] = DocinhoY[i] + (velocidade[i] + 0.2);
  }
  
  // Faz com que a mãozinha siga o mouse onde o jogador passá-lo na tela. Foi alterado em "-30" para que o mouse ficasse mais próximo ao centro da mão.
  fill(255, 255, 255, 100); 
  image(maoimg, mouseX - 30, mouseY - 30, Tjogador, Tjogador); 
  
  // Diz ao programa onde os docinhos vão interagir com o jogador, ou seja, a distância entre a mãozinha e os docinhos.
  for(let i = 0; i < 6; i++){
    Distancia[i] = dist(DocinhoX[i], DocinhoY[i], mouseX, mouseY);
  }
  
  // Diz ao mouse que quando a mãozinha estiver próxima ele irá pegá-lo.
  for(let i = 0; i < 6; i++){
    if(Distancia[i] < 53){
     
  // Desenha um novo docinho de forma randômica vindo de X e descendo em Y
      DocinhoY[i] = 0;
      DocinhoX[i] = random(0, width - 15);
      
  // Faz com que os novos docinhos que surjam tenham entre "30" e "50" de tamanho.
      Tdocinho[i] = random(30, 50);
      
      // Aumenta o valor em uma unidade na pontuação a cada docinho que for pêgo.
      QtdDocinhos = QtdDocinhos + 1;
    }
  }
     
    if (Vidas) {
    fill('#ffffff');
    text('❤️'.repeat(Vidas), 500, 35);
  } 
  
  // Identificador que representa que as pimentas e docinhos chegaram ao final da tela para serem resetados.
    
  for(let i = 0; i < 2; i++){
    if(PimentaY[i] > height){
      PimentaY[i] = 0;
      PimentaX[i] = random(0, width);
      Tpimenta[i] = random(20, 60);
    }
  }
    
  for(let i = 0; i < 5; i++){
    if(DocinhoY[i] > height){
      DocinhoY[i] = 0;
      DocinhoX[i] = random(0, width);
      Tdocinho[i] = random(20, 60);
      Vidas -= 1;
    }
  }
    
  // Local onde ficam os pontos do jogador.
  fill('#ffffff');
  textStyle(NORMAL)
  textAlign(LEFT);
  textSize(20);
  text('Você pegou ' + QtdDocinhos + ' docinhos!', 30, 470);

if(QtdDocinhos == 50){
  xDocinho = width + 20;
  yDocinho = height + 20;
  velocidade = 0;
  Pagina = 6;
  
  }    
    
if(QtdPimentas == 0){
  xDocinho = width + 20;
  yDocinho = height + 20;
  velocidade = 0;
  Pagina = 7;
  }     
    
if(Vidas == 0){
  xDocinho = width + 20;
  yDocinho = height + 20;
  velocidade = 0;
  Pagina = 7;
  }      
}
  
  else if(Pagina == 4) {
    
    fill("#191970");
    push();
    textSize(40);
    textFont('Trebuchet MS');
    textStyle(BOLD)
    textAlign(CENTER)
    fill('#ffffff');
    text('🍭 INSTRUÇÕES 🍬', 300, 110);
    fill('#ffffff');
    textStyle(NORMAL)
    textAlign(CENTER)
    textFont('Trebuchet MS');
    textSize(17);
    text('· Para pegar os docinhos, mova o mouse em direção a eles 🖱️', 300, 170);
    text('· Pegue 50 docinhos para ganhar cada uma das fases 🥳', 300, 210);
    text('· A cada docinho que passar por você, perderás uma vida 😟', 300, 250);
    text('· A velocidade e quantidade de docinhos aumenta à cada fase 🍬', 300, 290);
    text('· Pegando as pimentas você também perde vidas 🌶️', 300, 330);
    text('· Ao perder 3 vidas, você perde o jogo 💀', 300, 370);
    textSize(22);
    text('BOA SORTE! 🤗', 300, 420);
    
  if(mouseX>=10 && mouseX<=80 && mouseY>=460 && mouseY<=490){
    fill("#daa6ff")
  }else{
    fill("#FFFFFF")
  }
  strokeWeight(2)  
  rect(10, 460, 70, 30, 10)
  textSize(12);
  fill("#000000");
  text("VOLTAR", 12, 470, 70, 30);
    
    
  } 
  
  else if(Pagina == 5) {
    
    fill("#191970");
    push();
    textSize(40);
    textFont('Trebuchet MS');
    textStyle(BOLD)
    textAlign(CENTER)
    fill('#ffffff');
    text('🍭 CRÉDITOS 🍬', 300, 110);
    fill('#ffffff');
    textStyle(NORMAL)
    textAlign(CENTER)
    textFont('Trebuchet MS');
    textSize(20);
    text('DESENVOLVEDOR:', 300, 180);
    textSize(18);
    text('Ygor Wilmington Braga de Mendonça', 300, 210);
    textSize(18);
    text('INSTRUTOR:', 300, 270);
    textSize(16);
    text('Pablo Durkheim Nascimento', 300, 300);
    
      if(mouseX>=10 && mouseX<=80 && mouseY>=460 && mouseY<=490){
    fill("#daa6ff")
  } else {
    fill("#FFFFFF")
  } 
    
    strokeWeight(0);
    rect(10, 460, 70, 30, 10)
    textSize(12);
    fill("#000000");
    text("VOLTAR", 12, 470, 70, 30);   
  }  
  
  else if(Pagina == 6) {
    
    fill("#191970");
    push();
    textSize(40);
    image(escovar, 415, 295, 198, 206);
    textFont('Trebuchet MS');
    textStyle(BOLD)
    textAlign(CENTER)
    fill('#ffffff');
    text('🥳 PARABÉNS! 🎉', 300, 110);
    fill('#ffffff');
    textStyle(NORMAL)
    textAlign(CENTER)
    textFont('Trebuchet MS');
    textSize(24);
    text('Você é o mestre dos docinhos!', 300, 170);
    textSize(20);
    text('Agora você pode mostrar a todos os seus\namigos quem é o verdadeiro campeão!!', 300, 205);
    textSize(18);
    textStyle(BOLD)
    text('Uma super dica:', 300, 285);
    textStyle(NORMAL)
    textSize(16);
    text('Mesmo os mestres dos docinhos precisam\nlembrar de escovar os dentes sempre.\nTambém é muito importante não exagerar\nnos doces, hein?', 300, 315);
    
      if(mouseX>=10 && mouseX<=80 && mouseY>=460 && mouseY<=490){
    fill("#daa6ff")
  }else{
    fill("#FFFFFF")
  } 
    
  strokeWeight(0);
  rect(10, 460, 70, 30, 10)
  textSize(12);
  fill("#000000");
  text("VOLTAR", 12, 470, 70, 30); 
    
    
  }  
  
  else if(Pagina == 7) {

    fill("#ffffff");
    push();
    textFont('Trebuchet MS');
    textStyle(BOLD)
    textAlign(CENTER)  
    textSize(35);
    text('Você perdeu, que pena 🙁', 300, 200)
    textSize(18);
    rect(95, 250, 200, 50, 10);
    rect(305, 250, 200, 50, 10);
    textStyle(NORMAL)
    fill('#9e3ac9')
    text('Tentar Novamente', 195, 280)
    text('Voltar ao Menu', 400, 280)

  if( mouseX> 95 && mouseX< 295 && mouseY> 250 && mouseY< 300){
    fill("#feb5ff")
    rect(95, 250, 200, 50, 10);
    fill('#000000');
    text("Tentar Novamente", 195, 280);
      
    }
    
  if( mouseX> 305 && mouseX< 505 && mouseY> 250 && mouseY< 300){
    fill("#feb5ff")
    rect(305, 250, 200, 50, 10);
    fill('#000000');
    text("Voltar ao Menu", 400, 280);
    }   
  }    
}

function novafase(){
  DocinhoX = 100;
  DocinhoY = 0;
  PimentaX = 100;
  PimentaY = 0;
  velocidade = 1;
  Pontuacao = 0;
  QtdDocinhos = 0
  QtdPimentas = 3;
  
 DocinhoX = [];
 DocinhoY = [0, 0, 0, 0, 0, 0]
  
 PimentaX = [];
 PimentaY = [0, 0, 0, 0, 0, 0]

 Tdocinho = []
 Tpimenta = []
 Tjogador = 50

 Distancia = []

 velocidade = []
  
  
  for(let i = 0; i < 6; i++){
    DocinhoX[i] = random(0, width - 15);
  }
  
  // Diametro dos docinhos que também são resetados um à um de acordo com a regra do "i" passada anteriormente.
  for(let i = 0; i < 6; i++){
    Tdocinho[i] = random(50, 60);
  }
  
  // Velocidade randômica dos docinhos, de forma que a velocidade entre eles seja variada.
  for(let i = 0; i < 6; i++){
    velocidade[i] = random(1.5, 3);
  }
  
  for(let i = 0; i < 6; i++){
    PimentaX[i] = random(0, width - 15);
    //
  }
  
  // Diametro das pimentas que também são resetados um à um de acordo com a regra do "i" passada anteriormente.
  for(let i = 0; i < 6; i++){
    Tpimenta[i] = random(30, 40);
  }  
}

function reiniciar(){
  DocinhoX = 100;
  DocinhoY = 0;
  velocidade = 1;
  Pontuacao = 0;
  QtdDocinhos = 0;
  QtdPimentas = 3;
  Vidas = 3
  
 DocinhoX = [];
 DocinhoY = [0, 0, 0, 0, 0, 0]

 Tdocinho = []
 Tjogador = 50

 Distancia = []

 velocidade = []
  
  
  for(let i = 0; i < 5; i++){
    DocinhoX[i] = random(0, width - 15);
    //
  }
  
  // Diametro dos docinhos que também são resetados um à um de acordo com a regra do "i" passada anteriormente.
  for(let i = 0; i < 5; i++){
    Tdocinho[i] = random(50, 60);
  }
  
  // Velocidade randômica dos docinhos, de forma que a velocidade entre eles seja variada.
  for(let i = 0; i < 5; i++){
    velocidade[i] = random(1.5, 3.5);
  }
  
}


// Função responsável por dizer ao programa que o mouse foi clicado nas coordenadas que foram passadas de X e Y (horizontal e vertical).

function mouseClicked() {
  
  console.log("Tela: "+ Pagina + " x: " + mouseX + " y: "+mouseY)

  
  if(Pagina == 1){ 
    //Botão de voltar ao menu inicial quando ganha na primeira fase.
  if(QtdDocinhos >= 50)
  if(mouseX> 198 && mouseX< 395 && mouseY> 305 && mouseY< 354){
    reiniciar()
    Pagina = 0
  }
  
  //Quando clica no botão "próxima fase", avança para a segunda fase.
  if(QtdDocinhos >= 50)
  if( mouseX> 198 && mouseX< 395 && mouseY> 365 && mouseY< 401){
    novafase()
    Pagina = 2
  }
    
  } else {
    
  if(Pagina == 2){ 
    //Botão de voltar ao menu inicial quando ganha na primeira fase.
  if(QtdDocinhos >= 50)
  if(mouseX> 198 && mouseX< 395 && mouseY> 305 && mouseY< 354){
    reiniciar()
    Pagina = 0
  }
  
  //Quando clica no botão "próxima fase", avança para a segunda fase.
  if(QtdDocinhos >= 20)
  if( mouseX> 198 && mouseX< 395 && mouseY> 365 && mouseY< 401){
    novafase()
    Pagina = 3
  }     
    
  } else {
      
    if(Pagina == 7){
        
  // Voltar ao menu principal
  if( mouseX> 305 && mouseX< 505 && mouseY> 250 && mouseY< 300){
    reiniciar()
    Pagina = 0
  }

  // Tentar novamente
  if( mouseX> 95 && mouseX< 295 && mouseY> 250 && mouseY< 300){  
    reiniciar()
    novafase()
    Pagina = 1 
        }     
      } 
    }

  if((Pagina == 4 || Pagina == 5 || Pagina == 6) &&  mouseX>=10 && mouseX<=80 && mouseY>=460 && mouseY<=490){
    reiniciar()
    Pagina = 0
  }    
  } 
  } 