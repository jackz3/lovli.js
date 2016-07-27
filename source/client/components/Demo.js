import React from 'react';

//import Logo from './Logo';
import DemoList from './demo/DemoList';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import styles from 'styles/app';

const App = () => (
  <div>
    <div style={{width:'80%',margin:'30px auto'}}>
      <DemoList />
    </div>
  </div>
);

export default App;
