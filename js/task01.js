import ReactDOM from 'react-dom';

import React, { Component } from 'react';

function App(props) {
     return (
          <>
               <h1>Hello World</h1>
               <span>Ostatni Egzamin</span>
          </>
     );
}
/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById('app'));

export default App;
