import React from 'react';
import ReactDOM from 'react-dom';


import { Pagination } from 'antd';

function itemRender(current, type, originalElement) {
  
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}


ReactDOM.render(<Pagination total={500} itemRender={itemRender} />, document.getElementById('Pagination'));