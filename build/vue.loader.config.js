module.exports = (isDev) => {
    return {
        preserveWhitepace: true,
        extractCSS: !isDev, // 将vue里的style代码单独提取到一个文件
        cssModules: {
            localIdentName: '[path]-[name]-[hash:base64:5]',
            cameClass: true, //将css横杠命名的class转换成cameClass
        },
        // hotReload: true //根据环境变量热重载
    }
}