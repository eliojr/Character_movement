document.addEventListener('DOMContentLoaded', () => { // Aquarda que todos os elementos da página estejam carregados

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Estado do personagem
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 30,
    height: 50,
    color: 'blue',
    speed: 5
};

// Estado do teclado
const keys = {
    ArrowRight: false,
    ArrowLeft: false,
    ArrowUp: false,
    ArrowDown: false
};

// Adiciona os "ouvintes" de eventos
document.addEventListener('keydown', (event) => {
    if (event.key in keys) {
      event.preventDefault();
      keys[event.key] = true;
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key in keys) {
        keys[event.key] = false;
    }
});

function update() {
    // Movimento para a direita
    if (keys.ArrowRight && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }

    // Movimento para a esquerda
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= player.speed;
    }
    
    if (keys.ArrowUp && player.y > 0){
      player.y -= player.speed;
    }
    
    if(keys.ArrowDown && player.y < canvas.height - player.height){
      player.y += player.speed;
    }
}

function draw() {
    // Limpa o canvas a cada quadro
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha o personagem
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop()
});
