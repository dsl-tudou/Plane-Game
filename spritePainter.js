 
/*
 * 飞机精灵
 * */
var spritePainter = function (url, cells) {

    this.img = new Image();
    this.img.src = url;
    this.cells = cells || [];

    //添加切换坐标的起始位置的索引值
    this.cellIndexStart = 0;
    this.cellIndexEnd = 0;
    //定义图片的索引
    this.cellIndex = this.cellIndexStart;


}

//初始化方法
spritePainter.prototype = {

    //切换图片坐标
    advanced: function () {
        // this.cellIndex == this.cells.length - 1 ? this.cellIndex = 0 : this.cellIndex++;
        this.cellIndex >= this.cellIndexEnd ? this.cellIndex = this.cellIndexStart : this.cellIndex++;
    },

    //绘制方法
    paint: function (sprite, context) {

        //判断
        if (this.img.complete) {

            var current = this.cells[this.cellIndex];

            //绘制图片
            context.drawImage(this.img,
                current.x, current.y,
                sprite.width, sprite.height,
                sprite.left, sprite.top,
                sprite.width, sprite.height
            );
        }
    }

};



