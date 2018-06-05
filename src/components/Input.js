import React from 'react';
import Read from './Read';
import './Input.css'

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Przeczytasz ten tekst szybko'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* w tym propsie zrobisz iteracje po wyrazach */}
        <Read tekst={this.state.value}/> 
      </div>
    );
  }
}

export default Input;