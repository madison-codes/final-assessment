import React from 'react';
import scoreWord from '../ScoreWord';
import DisplayScore from './DisplayScore';
import Button from './Button';
import InputForm from './InputForm';
import Input from './Input';


export default class Application extends React.Component {
  constructor() {
    super();
      this.state = {
        word: '',
        score: '',
        mult: 1
      };
    }

  componentDidMount() {
    this.setState({ score: scoreWord(this.state.word)});
  }

  handleSubmit() {
    this.setState({
      score: this.state.score +
      scoreWord(this.state.word, this.state.mult)
    });
    this.setState({ word: '', mult: 1});
  }

  render() {
    return(
    <section>
      <InputForm>
        <Input
          item={ this.state.mult }
          action={(e) => this.setState({ mult: e.target.value })} name='Multiplier'>
        </Input>
        <Input
          item={ this.state.word }
          action={(e) => this.setState({ word: e.target.value })} name='Word'>
        </Input>
      </InputForm>
      <Button word={this.state.word} handleSubmit={() => this.handleSubmit() }/>
      <DisplayScore score={ this.state.score }/>
    </section>
    )
  }
}
