import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class MyQuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
      this.state = {
        randomNumer: 0,
        quotes:{
            users: []
      }
    }
   
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote(){
      this.setState({
        randomNumer: Math.floor(Math.random()*5)
      })
  }

  render() {
    // const answer = possibleAnswers[this.state.randomIndex];
    const quotes = [
        {
            quoteID: 0,
          author: 'Jeff Goldberg',
          quote: 'This is my quote'
        },
        {
            quoteID: 1,
          author: 'Jon Snow',
          quote: 'This is my sword'
        },
        {
            quoteID: 2,
          author: 'Thanos',
          quote: 'Watch me snap'
        },
        {
            quoteID: 3,
          author: 'J.P. Crawford',
          quote: 'Just go out there each day and work'
        }
    ]
    const newRandom = quotes[this.state.randomNumer]
    const newAuthor = newRandom.author;
    const newQuote = newRandom.quote;
    return (
      <div>
        <h1>Random Quote Generator</h1>
        <div class="quote-box">
            <div class="quote--container">
                <span id="text">
                    {newQuote}
                </span>
                <p>{newRandom}</p>
            </div>
            <div class="author--container">
                <span id="author">
                    - {newAuthor}
            </span>
            </div>

            <div class="row">
                <div class="col-md-7">
                    <a class="btn btn-primary" id="tweet-quote" href="twitter.com/intent/tweet"><i class="fab fa-twitter"></i></a>
                </div>
                <div class="col-md-3 quote-button">
                    <button id="new-quote" class="btn btn-primary" onClick={this.handleNewQuote}>
                        New quote
                    </button>
                </div>
            </div>
        
        
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyQuoteGenerator />,
document.getElementById("root"))