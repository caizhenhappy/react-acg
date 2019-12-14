const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',

    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,   /* 按钮  */         /* 女生~背景颜色 */                /*  ACG女生管理系统的背景颜色 */        /* 左边 < 的颜色 */                  /* button文本颜色 */
    modifyVars: { 
      '@primary-color': '#D3F4FF', 
      '@layout-body-background': '#D3F4FF', '@layout-header-background': '#ffd9e4', '@layout-trigger-background': '#FFD9E4', '@btn-primary-color': '#465881' },
  }),   /* 哔哩哔哩的蓝色66ccff 粉色 #F992A7  #6B96D8 #B1DAFA  #608FF9   #F992A7 */
  addDecoratorsLegacy()
);