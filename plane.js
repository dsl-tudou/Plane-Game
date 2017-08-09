 

var url = 'gameArts.png';

//飞机爆炸的坐标
var imgs = [

    //飞机的飞行行为坐标
    {x: 430, y: 0},
    {x: 430, y: 332},

    //飞机的爆炸行为坐标
    {x: 430, y: 246},
    {x: 430, y: 82},
    {x: 430, y: 164}
];

//定义绘制器
var planePainter = new spritePainter(url, imgs);

//飞机的行为
//1.飞机的喷火行为
var myPlanePenFire = function () {

    //初始化参考时间
    this.lastTime = 0;

    //初始化两次喷火之间的时间间隔
    this.intervalTime = 200;

}

myPlanePenFire.prototype = {

    //execute
    execute: function (sprite, context, time) {

        sprite.painter.cellIndexStart = 0;
        sprite.painter.cellIndexEnd = 1;

        //切换图片
        if (time - this.lastTime >= this.intervalTime && sprite.hp > 0) {

            sprite.painter.advanced();
            //更新时间
            this.lastTime = time;
        }

    }

};

//2.飞机的爆炸行为
var planeBoom = function () {

    //最后一次执行的时间
    this.lastTime = 0;
    //两次图片切换时间间隔
    this.intervalTime = 300;
}

planeBoom.prototype = {


    execute: function (sprite, context, time) {


        sprite.painter.cellIndexStart = 2;
        sprite.painter.cellIndexEnd = 4;

        if (time - this.lastTime >= this.intervalTime && sprite.hp == 0) {
            //切换图片
            sprite.painter.advanced();
            //更新最后绘制的时间
            this.lastTime = time;
        }

    }

}

var penFire = new myPlanePenFire();

var pBoom = new planeBoom();

//生成我方飞机 [工厂模式]
function createPlane(name) {
    //生成我方飞机对象
    var plane = new sprite(name, planePainter, [penFire, pBoom]);

    //初始化我方飞机的参数
    plane.width = 69;
    plane.height = 82;
    plane.left = 120;
    plane.top = 360;
    plane.hp = 1;//血量

    return plane;

}





