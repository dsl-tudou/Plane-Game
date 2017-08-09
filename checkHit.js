 

/*
 * 碰撞检测
 * */

function checkHit(bulletX, bulletY, rectX, rectY, rectW, rectH) {

    //判断边界碰撞
    if (bulletX >= rectX && bulletX <= rectX + rectW && bulletY >= rectY && bulletY <= rectY + rectH) {
        return true;
    } else {
        return false;
    }


}

