import React from 'react';

export default class Widgets3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {liked: false};
  };

  static propTypes = {
    // message: React.PropTypes.boolean,
  };

  static defaultProps = {
    message: ['elike','haven\'t eliked']
  };

  handleClick = () => this.setState({liked: !this.state.liked});

  render() {
    var text = this.state.liked ? this.props.message[0] : this.props.message[1];
    return (
      <p onClick={this.handleClick}>
        Messages are: {text} ... Click to toggle. -Widgets3
      </p>
    );
  }
}


