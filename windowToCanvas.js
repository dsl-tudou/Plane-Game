 

//自定义canvas坐标转换函数

function windowToCanvas(canvas, x, y) {

    /*
     getBoundingClientRect()

     这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。
     分别表示元素各边与页面上边和左边的距离。
     *
     * */
    var canvasBox = canvas.getBoundingClientRect();

    // console.log("x:"+x,"y:"+y);
    // console.log('left:' + canvasBox.left, 'top:' + canvasBox.top);

    var canvasX = x - canvasBox.left;
    var canvasY = y - canvasBox.top;

    // console.log(canvasX, canvasY);

    return {x: canvasX, y: canvasY};

}
