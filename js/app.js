/// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
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

    // when off canvas, reset position of enemy to move across again
    if (this.x >= 550) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 512);
    }

    // Check for collision between player and enemies
    if (player.x <= this.x + 30 &&
        player.x + 30 >= this.x &&
        player.y <= this.y + 30 &&
        30 + player.y >= this.y) {
        player.x = 200;
        player.y = 400;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

/* Code reference
 * https://github.com/brenopolanski/udacity-classic-arcade-game-clone/blob/master/js/app.js
 */
Player.prototype.update = function() {
    // Prevent player from moving beyond canvas boundaries
    if (this.y > 380) {
        this.y = 380;
    }

    if (this.x > 400) {
        this.x = 400;
    }

    if (this.x < 0) {
        this.x = 0;
    }

    // Player getting to the water
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
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
      this.y <= 50 ? this.y =- 10 : this.y -= 80;
      break;
    case 'down':
      this.y >= 400 ? this.y = 400 : this.y += 80;
      break;
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let player = new Player(200, 400);
let allEnemies = [];

// Start location for enemies
let enemyLocation = [60, 140, 220];
let enemy;

//Creating the enemies
/* Code reference
 * https://github.com/brenopolanski/udacity-classic-arcade-game-clone/blob/master/js/app.js
 */
enemyLocation.forEach(function(locY) {
    enemy = new Enemy(0, locY, 100 + Math.floor(Math.random() * 512));
    allEnemies.push(enemy);
});

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
