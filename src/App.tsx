import React from 'react';


function App() {
  // return (
  //   <h1>Hello React</h1>
  // )




  return React.createElement('div', {className : 'container'}, 
    React.createElement('h1', {className: 'font-bold'}, 'Test JSX'),
    React.createElement('button', {className : ''}, 'click me')
  )
}

export default App;
