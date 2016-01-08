import React from 'react';

export default class Widgets3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {liked: false};
  }

  handleClick = () => this.setState({liked: !this.state.liked});

  render() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick.bind(this)}>
        You {text} this. Click to toggle. -Widgets3
      </p>
    );
  }
}


