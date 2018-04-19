import React, { Component } from 'react';

import './App.css';

import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import InputForm from './components/InputForm';
// import Preview from "./components/Preview";
import Footer from "./components/Footer";

const json = "/listing.json"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: []};
  }
  
  componentDidMount() {
    fetch(json)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          data: data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <JobDetails job={this.state.data} />
          <InputForm />
          
          
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

// <Preview />