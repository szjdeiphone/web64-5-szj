// 获取canvas元素
const cvs = document.getElementById('bg');

// 获取窗口尺寸
const width = window.innerWidth * devicePixelRatio,
    height = window.innerHeight * devicePixelRatio;

// 设置canvas 尺寸为窗口尺寸
cvs.width = width;
cvs.height = height;

// 获取绘制上下文
const ctx = cvs.getContext('2d');

// 字体大小
const  fontSize = 20 * devicePixelRatio;

//列宽
const columnWidth = fontSize;

//列数
const columnCount = Math.floor(width / columnWidth);

// 每一列下一个文字是第几个文字
const nextChar = new Array(columnCount).fill(0);

//画一行文字 
function draw() {
    ctx.fillStyle = 'rgba(240, 240, 240, 0.1)';
    ctx.fillRect (0, 0, width, height);
    for (let i = 0; i< columnCount; i++){
        // 画一个字符
        // 颜色， 字符， 字体 位置
        ctx.fillStyle = getRandomColor();
        const char = getRandomChar();
        ctx.font = `${fontSize}px "Roboto Mono"`;
        const x = i * columnWidth;
        const y = (s + 1) * fontSize;
        const s = nextChar[i];
        ctx.fillText(char, x, y);
        if(y > height) {
            nextChar[i] = 0;
        } else
        {
            nextChar[i]++
        }
        nextChar[i]++
    }
}

//随机颜色
function getRandomColor() {
    const fontColors = [
        '#33B5E5',
        '#AA66CC',
        'FF4444',
        'DD3553',
        'EA5522'
    ];
    return fontColors[Math.floor(Math.random() * fontColors.length)];
}

//随机文字 
function getRandomChar(){
    const str = 'constole.log("helloWorldl")';
    return str [Math.floor(Math.random() * str.length)];
}

draw();

setInterval(draw, 30);
 