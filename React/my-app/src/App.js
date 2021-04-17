import React from 'react'
import Header from './comp/Header'
import Button from './comp/Button'

function App() { 

  return (    
      <div className="container">
        <Header/> 
        <br/>       
        <h1><i>Hello from React</i></h1>
        <br/>
        <Button text='Number 5'/>
        <br/>
        <Button color='red' text = {0} />
      </div>      
    
  );
}

// class App extends React.Component {
//   render(){
//     return <h1>Hello from a class</h1>
//   }
// }
export default App;
