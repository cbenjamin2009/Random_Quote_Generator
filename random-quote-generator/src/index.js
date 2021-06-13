import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

class MyQuoteGenerator extends React.Component {
    constructor(props) {
      super(props);
      // Change code below this line
        this.state = {
          isLoaded: false,
          items: []
      }
     
      this.handleNewQuote = this.handleNewQuote.bind(this);
    }

    componentDidMount() {
        const API_URL = 'https://api.quotable.io/random'
        fetch(API_URL)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }
  
    handleNewQuote(){
                // quote api: https://api.quotable.io/random?tags=technology,famous-quotes 
                const API_URL = 'https://api.quotable.io/random'
        fetch(API_URL)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    
  
    render() {
        var { isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div>Loadig...</div>
        }
        else {
            return (
                <div>
                  <div className="quote-box" id="quote-box">
                  <h1 className="text-center">Random Quote Generator</h1>
                      <div className="quote--container">
                          <span id="text" key={items._id}>
                              {items.content}
                          </span>
                      </div>
                      <div className="author--container">
                          <span id="author" key={items._id}>
                              - {items.author}
                      </span>
                      </div>
          
                      <div className="row">
                          <div className="col-md-7">
                              <a className="btn btn-primary" id="tweet-quote" href="twitter.com/intent/tweet"><i className="fab fa-twitter"></i></a>
                          </div>
                          <div className="col-md-3 quote-button">
                              <button id="new-quote" className="btn btn-primary" onClick={this.handleNewQuote}>
                                  New quote
                              </button>
                          </div>
                      </div>
                  
                  
                  </div>
                </div>
              );

        }
     
    }
  }
  
  ReactDOM.render(<MyQuoteGenerator />,
  document.getElementById("root"))