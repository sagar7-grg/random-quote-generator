import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const API =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quotes: "", random: "" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const ran = Math.floor(Math.random() * this.state.quotes.length);
    const rQuotes = this.state.quotes[ran];

    this.setState({
      random: rQuotes
    });
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())

      .then(data => {
        this.setState({ quotes: data.quotes }, this.handleClick);
      });
  }

  render() {
    const tweet = `https://twitter.com/intent/tweet?text=${
      this.state.random.quote
    }-${this.state.random.author}`;
    return (
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.state.random.quote}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                -{this.state.random.author}
              </h6>
              <div className="d-flex flex-row bd-highlight mb-3 justify-content-between">
                <div className="p-2 bd-highlight ">
                  <a
                    className="btn btn-primary "
                    href={tweet}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>

                <div className="p-2 bd-highlight">
                  <button
                    onClick={this.handleClick}
                    className="btn btn-primary "
                  >
                    Next quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
