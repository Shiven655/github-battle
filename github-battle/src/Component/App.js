import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Loader from "./Loader";
import SingleLanguage from "./SingleLanguage";
import Battle from "./Battle";
import Final from "./Final";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      darkmode: false,
    };
  }
  componentDidMount() {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  }

  handleMode() {
    this.setState((previousState) => ({
      darkmode: !previousState.darkmode,
    }));
  }
  render() {
    return (
      <div className={this.state.darkmode ? "dark-background" : ""}>
        <div className="container">
          <Header
            handleMode={() => this.handleMode()}
            darkmode={this.state.darkmode}
          />
          <Menu data={this.state.data} />
          <Routes>
            <Route path="/" element={<Main data={this.state.data} />} />

            <Route path="/post/:language" element={<SingleLanguage />} />
            <Route path="/battle" element={<Battle />} />
            <Route path="/battle/final" element={<Final />} />
          </Routes>
        </div>
      </div>
    );
  }
}
export default App;
