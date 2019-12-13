const { override, fixBabelImports, addLessLoader ,addDecoratorsLegacy} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',

   style: true,
  }),
 addLessLoader({
   javascriptEnabled: true,
   modifyVars: { '@primary-color': '#ffedef',
   "@layout-sider-background": "#ff0000"},
  
 }),
 addDecoratorsLegacy()
);