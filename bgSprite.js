 
/*
 * 背景精灵设定
 * */

var options = {
    url: 'gameArts.png',
    width: 320,
    height: 480,
    imgX: 0,
    imgY: 0,
    left: 0,
    top: 0,
    vy: 100//背景的Y轴移动速度
};

var bgSprite = function (options) {

    //公用属性
    this.img = new Image();
    this.img.src = options.url;

    //位于canvas画布的位置
    this.left = options.left || 0;
    this.top = options.top || 0;

    //图像开始的位置的坐标
    this.imgX = options.imgX;
    this.imgY = options.imgY;

    //图像的大小
    this.width = options.width || 0;
    this.height = options.height || 0;

    //移动速度
    this.vy = options.vy;

    //设置全局基准时间
    this.lastTime = 0;

}

//初始化方法
bgSprite.prototype = {

    paint: function (context) {

        //保证图像加载完成
        if (this.img.complete) {
            //绘制
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
            context.drawImage(
                this.img,
                this.imgX, this.imgY,
                this.width, this.height,
                this.left,
                this.top,
                this.width,
                this.height
            );
            context.drawImage(
                this.img,
                this.imgX, this.imgY,
                this.width, this.height,
                this.left,
                this.top - this.height,
                this.width,
                this.height
            );


        }
    },

    //更新
    update: function (context, time) {

        //改变top值
        this.top = this.top + this.vy * ((time - this.lastTime) / 1000);

        this.lastTime = time;

        //判断两层背景是否已经走完
        this.top = Math.abs(this.top) >= this.height ? 0 : this.top;


    }

}

var bg = new bgSprite(options);

// console.log(bg);


//自定义一个背景绘制函数
function drawbackgroundImage(context, time) {
    bg.update(context, time);
    bg.paint(context);
}









