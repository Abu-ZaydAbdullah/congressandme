import React, { Component } from "react";

class Search extends Component {
  filterUpdate() {
    const val = this.myValue.value;
    this.props.filterUpdate(val);
  }
  render() {
    return (
      <form>
        <input
          type="text"
          ref={value => {
            this.myValue = value;
          }}
          placeholder="Name of Representative"
          onChange={this.filterUpdate.bind(this)}
          className="form-control"
          style={{marginBottom: '1%'}}
        />
      </form>
    );
  }
}
export default Search;