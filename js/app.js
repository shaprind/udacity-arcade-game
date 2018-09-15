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

Player.prototype.update = function(){
  if(this.ctlKey === 'left' && this.x > 0){
    this.x = this.x - 50;
    //if r ight key is pressed and player is not on edge of map increment x
  } else if(this.ctlKey === 'right' && this.x != 400){
    this.x = this.x + 50;
    //if up key is pressed increment y
  } else if(this.ctlKey === 'up'){
    this.y = this.y - 50;
    //if down key is pressed and player is not on edge of map decrement y
  } else if (this.ctlKey === 'down' && this.y != 400){
    this.y = this.y + 50;
  }
  this.ctlKey = null;

  //If on water, pop a message and reset the game
  if(this.y < 25){

    player.x=200;
    player.y=400;
  }
};

Player.prototype.handleInput = function(e) {
  this.ctlKey = e;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player (200, 400);

var allEnemies=[];

var enemyLocation = [60,140,220];
var enemy;
enemyPosition.forEach(function(locY){
  enemy = new Enemy(0,locY,100+Math.floor(Math.random()*512));
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
