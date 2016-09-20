import React from 'react';
import scoreWord from '../ScoreWord';
import DisplayScore from './DisplayScore';

export default class Application extends React.Component {
  constructor() {
    super();
      this.state = {
        word: '',
        score: '',
        mult: ''
      };
    }

  componentDidMount() {
    this.setState({ score: scoreWord(this.state.word)});
  }

  handleSubmit(e) {
    e.preventDefault();
    const newestScore = scoreWord(this.state.word, this.state.mult);
    const sumScore = this.state.score + newestScore;
    this.setState({ score: sumScore});
    this.setState({ word: '', mult: ''});
  }

  render() {
    const word = this.state.word;
    return(
    <section>
      <form>
        <input
          type='text'
          placeholder='Multiplier'
          onChange={(e) => this.setState({ mult: e.target.value })}
          value={ this.state.mult }
        />
        <input
          type='text'
          placeholder='Word'
          onChange={(e) => this.setState({ word: e.target.value })}
          value={ this.state.word }
        />
        <button
          disabled={!this.state.word}
          onClick={(e) => this.handleSubmit(e)}
        >Submit
        </button>
      </form>
      <DisplayScore score={ this.state.score }/>
    </section>
    )
  }
}
