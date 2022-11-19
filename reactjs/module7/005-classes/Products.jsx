import React from "react";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  
  render() {
    return (
      <div>
        <h1>Title: {this.props.title}</h1>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Products;
