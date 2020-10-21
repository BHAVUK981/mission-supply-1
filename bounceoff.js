function bounceoff(){
    if (packageSprite.x -groundSprite.x < groundSprite.width/2 + packageSprite.width/2
        && groundSprite.x - packageSprite.x < groundSprite.width/2 + packageSprite.width/2) {
      packageSprite.velocityX = packageSprite.velocityX * (-1);
      groundSprite.velocityX = groundSprite.velocityX * (-1);
    }
    if (packageSprite.y - groundSprite.y < groundSprite.height/2 + packageSprite.height/2
      && groundSprite.y - packageSprite.y < groundSprite.height/2 + packageSprite.height/2){
      packageSprite.velocityY = packageSprite.velocityY * (-1);
      groundSprite.velocityY = groundSprite.velocityY * (-1);
    }
    }