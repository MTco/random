window.onload = function() {
	var game = new Phaser.Game(
		480,
		320,
		Phaser.AUTO,
		"", {
			preload: preload,
			create: create,
			update: update
		}
	);

	var sprite;
	var keyboard;

	function preload() {
		game.load.tilemap("map", "assets/house.json", null, Phaser.Tilemap.TILED_JSON);
		game.load.spritesheet("guy", "assets/guy.png", 17, 25, 12); 
		game.load.image("tiles", "assets/tiles.png");
	}
	
	function create() {
		game.physics.startSystem(Phaser.Physics.ARCADE);

		var map = game.add.tilemap("map");
		map.addTilesetImage("Tiles", "tiles");
		map.createLayer("First").resizeWorld();
		map.createLayer("Second");
		map.createLayer("Third");

		sprite = game.add.sprite(305, 200, "guy", 1);
		sprite.anchor.setTo(0.0, 0.0);
		sprite.enableBody = true;

		sprite.animations.add("up", [9, 10, 11, 10], 5);
		sprite.animations.add("down", [0, 1, 2, 1], 5);
		sprite.animations.add("left", [6, 7, 8, 7], 5);
		sprite.animations.add("right", [3, 4, 5, 4], 5);
		
		game.physics.enable(sprite);
		sprite.body.collideWorldBounds = true;

		game.camera.follow(sprite);

		keyboard = game.input.keyboard.createCursorKeys();
	}
	
	var direction = "";

	function update() {
		var speed = 1;
		var newDirection;

		if (keyboard.up.isDown) {
			sprite.y -= speed;	
			newDirection = "up";
		} else if (keyboard.down.isDown) {
			sprite.y += speed;	
			newDirection = "down";
		} else if (keyboard.left.isDown) {
			sprite.x -= speed;
			newDirection = "left";
		} else if (keyboard.right.isDown) {
			sprite.x += speed;	
			newDirection = "right";
		}

		if (!newDirection) {
			sprite.animations.stop();
		} else if (newDirection != direction) {
			direction = newDirection;
			sprite.animations.play(direction, null, true);
		}
	}
};
