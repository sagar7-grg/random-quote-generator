import React from "react";
import ReactDOM from "react-dom";
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
    return (
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.handleClick}
        >
          Next Quote
        </button>
        <h1>{this.state.random.quote}</h1>
        <h1>{this.state.random.author}</h1>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
