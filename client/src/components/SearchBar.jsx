import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { FaSearch } from "react-icons/fa";
import {setSearch, getSearch } from "../redux/actions/searchActions";

{/* 
    Here I will implement SearchBar component which handles multiple features
    1. Handle states for showing modal for login. (optional)
    2. Handle onClick events for multiple states
        a. Run action for api request
        b. Trigger user to log in, if not logged in.
*/}

export class SearchBar extends Component {
  onSubmit = e => {
    // prevent default behavior of button when onSubmit is triggered
    e.preventDefault();
    this.props.getSearch(this.props.text);
  };  

  // pass this input to the searchActions setSearch
  onChange = e => {
    this.props.setSearch(e.target.value);
  };

  render() {
    return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
            <div className="container form-outline w-50">
                <form className="form-inline mb-2" id="searchBarMovie" onSubmit={this.onSubmit}>
                    <div className="form-group mb-2">
                        <input
                            className="form-control"
                            name="SearchBarMovie" 
                            type="text"
                            placeholder="Search with Movie Title"
                            onChange = {this.onChange}
                        />
                    </div>
                    <button className="btn btn-outline-success btn-bg  my-2 my-sm-0" type="submit">Search</button>
                </form>
                <p className="lead">
                    <button className="btn btn-primary btn-md">Filter (coming soon...)</button>
                </p>
            </div>
        </div>
    )
  }
}

// required for calling connect function
const mapStateToProps = state => ({
    // searchList is from the store.js where we defined combineReducers 
    text: state.searchList.text
})

export default connect(mapStateToProps, {getSearch, setSearch})(SearchBar);