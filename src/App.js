import React,{Component} from 'react';
import { Link, Route} from 'react-router-dom'
import './App.css';
import routes from "./routes"

class App extends Component {
  
  /*constructor(props){
    super(props)
  }
  
  changeState(){
    this.setState({
      name:"Basilio Felipe"
    })
  }
  changeInput(event) {
    let target = event.target
    let index = target.name
    console.log(index)
    this.setState({
      [index]:target.value
    })
  }
  
   */
  render(){
    
    /* let change = ()=> {
      let name = this.state.name == "felipe é o cara"?
      "Felipe é legal":"felipe é o cara";
      
      this.setState({
        name
      })
    } */
    
    
    
    
    return (
      <div>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
        </div>
        
        { 
          
          routes.map((page, key) => 
          (
            <Route 
              key={key} 
              path={page.path} 
              component={page.component}
              exact={page.exact} >
            </Route>
          )
        )
        
        }
        
      </div>
    )
  }
}

export default App;
