import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';
import './index.css'


const App = () => {

  return (
    <div className='App'>
      <Input />
    </div>
  )
}




ReactDOM.render(
<App />, 
  document.getElementById('root')
);

