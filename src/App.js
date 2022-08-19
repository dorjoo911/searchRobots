import React, { Component } from "react";
import { CardList } from "./components/card-list/index";
import { SearchBox } from "./components/search-box/index";

import "./styles.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchFeild: ""
    };
  }

  onSearchChanged = (event) => {
    this.setState({ searchFeild: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((responce) => responce.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    const { robots, searchFeild } = this.state;
    const filteredThings = robots.filter((el) =>
      el.name.toLowerCase().includes(searchFeild)
    );

    return (
      <div className="App">
        <h1>Search Robots</h1>
        <SearchBox onSearch={this.onSearchChanged} />
        <CardList robots={filteredThings} />
      </div>
    );
  }
}
