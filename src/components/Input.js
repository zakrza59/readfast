import React from 'react';
import Read from './Read';
import './Input.css'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'text2',
      tekst: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.iterateSenteces = this.iterateSenteces.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  iterateSenteces() {
    var a = this.state;
    console.log(a);
    this.setState({tekst: "setstate działa"})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.iterateSenteces}>
          <label>
            Put here your text(text1)
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Run!" />
        </form>
        {/* w tym propsie zrobisz iteracje po wyrazach */}
        <Read tekst={this.state.tekst}/> 
      </div>
    );
  }
}

export default Input;