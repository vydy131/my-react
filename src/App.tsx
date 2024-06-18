import React, { useState } from 'react';


function App() {
  // return (
  //   <h1>Hello React</h1>
  // )


  

  return React.createElement('div', {className : 'container'}, 
    React.createElement('h1', {className: 'font-bold', key:0}, 'Test JSX'),
    React.createElement('button', {className : 'py-2, px-4 border', key:1, onClick : () => console.log('Clicked!')}, 'click me')
  )
}

export default App;
