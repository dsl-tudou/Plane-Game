 
/*
 * 敌方小型飞机
 *
 * */

var url = 'gameArts.png';

//坐标
var smallImgs = [

    //飞机正常飞行坐标
    {x: 82, y: 655},

    //飞机爆炸坐标
    {x: 45, y: 655},
    {x: 420, y: 732},
    {x: 470, y: 720}

];

//创建小飞机的行为
var smallEnemyFly = function () {

    //设定基准时间
    this.smallEnemyLastTime = 0;

    //间隔时间
    this.smallEnemyInteralTime = 10;

}

smallEnemyFly.prototype = {

    execute: function (sprite, context, time) {

        //判断时间间隔
        if (time - this.smallEnemyLastTime >= this.smallEnemyInteralTime && sprite.hp > 0) {

            sprite.top = sprite.top + sprite.vy * (this.smallEnemyInteralTime / 1000);

            //更新基准时间
            this.smallEnemyLastTime = time;
        }
    }

}

//创建小飞机对象  [工厂模式]
function createSmallEnemy(x, y) {

    //实例化精灵对象
    var smallEnemy = new sprite('小飞机', new spritePainter(url, smallImgs), [new smallEnemyFly()]);

    //初始化
    smallEnemy.left = x;
    smallEnemy.top = y;
    smallEnemy.width = 34;
    smallEnemy.height = 27;
    smallEnemy.vy = Math.random() * 100 + 200;//200 ~ 299
    smallEnemy.hp = 1;

    return smallEnemy;
}
