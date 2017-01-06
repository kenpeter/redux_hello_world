import React from "react";

import HelloCon from '../containers/HelloCon';
import HiCon from '../containers/HiCon';

const App = () => {
  return (
    <div className="container">
      <HelloCon />
      
      <hr/>
      
      <HiCon />
    </div>
  );
}

export default App;
