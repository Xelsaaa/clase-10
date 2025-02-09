sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 a a a a a 3 3 a a a a a 3 3 
    3 3 a a a a a 3 3 a a a a a 3 3 
    3 3 a a 1 a a 3 3 a a 1 a a 3 3 
    3 3 a a a a a 3 3 a a a a a 3 3 
    3 3 a a a a a 3 3 a a a a a 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 a a a a a 3 3 3 3 3 3 
    3 3 3 3 3 a a a a a 3 3 3 3 3 3 
    3 3 3 3 3 a 1 1 1 a 3 3 3 3 3 3 
    3 3 3 3 3 1 a a a 1 3 3 3 3 3 3 
    3 3 3 3 3 1 a a a 1 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
let ENEMIGO = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 f f f f f 5 5 1 1 1 1 1 5 5 
    5 5 f f f f f 5 5 1 1 f 1 1 5 5 
    5 5 f f 1 f f 5 5 1 1 f 1 1 5 5 
    5 5 f f f f f 5 5 1 1 1 1 1 5 5 
    5 5 f f f f f 5 5 1 1 1 1 1 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 
    5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 
    5 5 5 5 5 1 f f f 1 5 5 5 5 5 5 
    5 5 5 5 5 f f f f f 5 5 5 5 5 5 
    5 5 5 5 5 f f f f f 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Enemy)
ENEMIGO.setPosition(16, 17)
controller.moveSprite(mySprite)
