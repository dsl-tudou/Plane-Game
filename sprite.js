 
/*
 * 精灵框架
 * 精灵对象一般用来封装游戏中的常用属性和方法
 * 构造方法  prototype原型
 * 绘制器  行为
 * */

function sprite(name, painter, behaviors) {

    //为当前精灵初始化属性
    this.name = name;
    this.painter = painter;
    this.behaviors = behaviors || [];//容错机制

    //初始化公共属性
    this.top = 0;
    this.left = 0;

    this.width = 0;
    this.height = 0;

    this.vx = 0;
    this.vy = 0;

    this.hp = 0;

    //设置飞机的显示状态
    this.visible = true;//true是显示  false是不显示

    //精灵是否处于动画状态
    this.animating = false; //默认没有动画

}

//添加精灵框架的方法
sprite.prototype = {


    //行为
    update: function (cxt, time) {

        //遍历行为中的方法
        for (var i = 0; i < this.behaviors.length; i++) {
            this.behaviors[i].execute(this, cxt, time);
        }
    },
    //绘制
    paint: function (context) {

        //判断
        if (this.painter != undefined && this.visible == true) {
            this.painter.paint(this, context);
        }

    }
}

//定义图形绘制器
var imagePainter = function (url, x, y) {

    //初始化全局属性
    this.img = new Image();
    this.img.src = url;
    this.x = x;
    this.y = y;


}

//定义图形绘制器的方法
imagePainter.prototype = {

    //设置paint方法
    paint: function (sprite, context) {


        /*
        * 参数	描述
         img	规定要使用的图像、画布或视频。
         sx	可选。开始剪切的 x 坐标位置。
         sy	可选。开始剪切的 y 坐标位置。
         swidth	可选。被剪切图像的宽度。
         sheight	可选。被剪切图像的高度。
         x	在画布上放置图像的 x 坐标位置。
         y	在画布上放置图像的 y 坐标位置。
         width	可选。要使用的图像的宽度。（伸展或缩小图像）
         height	可选。要使用的图像的高度。（伸展或缩小图像）
        * */
        if(this.img.complete){
            context.drawImage(
                this.img,
                this.x,this.y,
                sprite.width,sprite.height,
                sprite.left,sprite.top,
                sprite.width,sprite.height
            );
        }

    }

}












