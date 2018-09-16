// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if(this.x <= 550){
      this.x = -100;
      this.speed = 100 + Math.floor(Math.random() * 512);
  }

  if (player.x >= this.x - 30
    && player.x <= this.x + 30
    && player.y >= this.y - 30
    && player.y <= this.y + 30) {
      player.x=200;
      player.y=400;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y){
  this.x = x;
  this.y = y;
  this.player = "images/char-cat-girl.png";
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (allowedKeys){
  switch (allowedKeys){
    case 'left':
      this.x <= 10 ? this.x = 0 : this.x -= 100;
      break;
    case 'right':
      this.x >= 400 ? this.x = 400 : this.x += 100;
      break;
    case 'up':
      this.y <= 50 ? this.y =- 10 : this.y += 80;
      break;
    case 'down':
      this.y >= 400 ? this.y = 400 : this.y += 80;
      break;
  }
}

Player.prototype.update = function() {
  if (this.y <= -10){
    this.x = 200;
    this.y = 400;
  }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let player = new Player (200, 400);

let enemy1 = new Enemy(60);
let enemy2 = new Enemy(140);
let enemy3 = new Enemy(220);
let allEnemies = [enemy1, enemy2, enemy3];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
