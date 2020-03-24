module.exports = {
    plugins: {
        'postcss-px2rem': {
            remUnit: 37.5, //UI图片的基准值 750px就是75,640px就是64,默认为75
            remPrecision: 6, //准换成rem后的小数点精确数位 默认为6
            baseDpr: 2 //基准device pixel ratio值 默认为2
        }
    }
}
