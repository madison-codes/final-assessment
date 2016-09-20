import React from 'react';
import Input from './Input';

export default class InputForm extends React.Component {
  render(){
    return(
      <form>
        { this.props.children }
      </form>
    );
  }
}
