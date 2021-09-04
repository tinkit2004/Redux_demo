import React, { Component } from "react";
//16. import the connect function from react-redux to connect react and redux
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
//17. import the action from action.js
import { setSearchField, requestRobots } from "../actions";
//19. Declare the mapStateToProps function. It tells redux what states you want to pass as props
// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    // searchRobots come from the reducer.js
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
    robots: state.requestRobots.robots,
    error: state.requestRobots.error,
  };
};
//20. Declare the mapDispatchToProps function and tell redux what action you want to turn into props
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
class App extends Component {
  componentDidMount() {
    //21. Use the action as props
    this.props.onRequestRobots();
  }

  render() {
    //22. Use the states as props
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
//18.Use the connect function. It accepts 2 parameter. MapStateToProps is a function that tell redux which states you want to pass as props
// mapDispatchToProps is a function that tell redux what action you want to pass as props to your react project
export default connect(mapStateToProps, mapDispatchToProps)(App);
