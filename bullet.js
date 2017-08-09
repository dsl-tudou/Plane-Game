 

/*
 * 子弹绘制
 *
 * */

//初始化子弹的参数
var options = {
    url: 'gameArts.png',
    bulletImgs: [{x: 498, y: 0}]
};

//创建子弹的行为
var bulletFly = function () {
    //基准时间
    this.lastTime = 0;

    //子弹变化的间隔时间
    this.intervalTime = 10;
}

bulletFly.prototype = {
    execute: function (sprite, context, time) {

        //判断
        if (time - this.lastTime >= this.intervalTime) {

            //改变子弹的top值让子弹飞起来
            sprite.top = sprite.top - sprite.vy * (this.intervalTime / 1000);

            //更新基准时间
            sprite.lastTime = time;

        }


    }
};

//使用工厂模式创建出子弹对象
function createBullet(x, y) {

    //通过精灵来创建子弹对象
    var bullet = new sprite('子弹', new spritePainter(options.url, options.bulletImgs), [new bulletFly()])

    //初始化子弹对象的属性
    bullet.width = 7;
    bullet.height = 15;

    //设置子弹出现的位置
    bullet.left = x;
    bullet.top = y;
    bullet.vy = 1500;
    bullet.hp = 1;


    return bullet;

}

//测试
// var bullet = new createBullet(100, 200);

// console.log(bullet);

