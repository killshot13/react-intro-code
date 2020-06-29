// import React from 'react';

// function App() {

//   return (
//     <div className="App">
//       <h1>Niko pico rico</h1>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar'
import Project from './components/project/Project'

class App extends Component {
  state = {
    name: "Niko pico rico",
    age: 26,
    birthDate: "5/11/94",
    names: ['Stefan', 'Andrew', 'Renzo'],
    projects: [
      {
        name: "project 1",
        technology: "JS"
      },
      {
        name: "project 2",
        technology: "React"
      },
      {
        name: "project 3",
        technology: "Express"
      }
    ]
  }

  changeName = () => {
    // this.state.name = "Juan" DO NOT DO THIS
    this.setState({
      name: "Juan"
    })
  }

  displayProjects = () => {
    return this.state.projects.map(project => {
      return <Project name={project.name} tech={project.technology}/>
    })
  }

  simpleLoop = () => {
    let arr = this.state.names.map(name => <div><h3>Name: {name}</h3></div>)
    return arr
  }

  render() {
    return (
      <div>
        <Navbar hello={this.state.name} />
        <h1>Welcome {this.state.name} from App.js</h1>
        <button onClick={this.changeName}>Click</button>
        {/* <Project name={this.state.projects[0].name} tech={this.state.projects[0].technology}/>
        <Project name={this.state.projects[1].name} tech={this.state.projects[1].technology}/>
        <Project name={this.state.projects[2].name} tech={this.state.projects[2].technology}/> */}
        {this.displayProjects()}
        {this.simpleLoop()}
        {/* <div>
          <h3>{this.state.projects[0].name}</h3>
          <p>Technologies used: {this.state.projects[0].techonology}</p>
        </div>
        <div>
          <h3>{this.state.projects[1].name}</h3>
          <p>Technologies used: {this.state.projects[1].techonology}</p>
        </div>
        <div>
          <h3>{this.state.projects[2].name}</h3>
          <p>Technologies used: {this.state.projects[2].techonology}</p>
        </div> */}
      </div>
    );
  }
}

export default App;

// How to create the react app boilerplate
// npx create-react-app theNameOfTheApp
// In terminal go to where package.json is located and run $ npm start
// Anything in App.js will be shown on browser

// Functional (stateless) vs Class (has state) --> state
// When to use state? when there's data that you want to manipulate

// When to use Fuctional compo vs class comp - depends on whether you will be managing data in the component

// When do you know when to use a component?
// There's not black and white answer but if you find yourself repeating a certain block of code then you can probably make it into a component

// State - hold data that you want to manipulate
// setState - whenever you want to update or add to the state then you use setState. When you call setState it will rerender (i.e. update) your page
// props - are immutable (you cannot change them)
// state - mutable in the component where it is declared, you manage the data in state from the component where you created it

// Steps to creating a a new component
// create the component
// import the component where you want to use it
// call the component <ComponentName />

// Steps to creating a prop
// go to where you called the component (example: <ComponentName/>)
// between the component name and the backlash create the prop name and then give it a value 
// (example: <ComponentName propName={this.state.propertyName} />)
// (example: <ComponentName propName='string' />) 