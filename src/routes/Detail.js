import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(location.state);
    if (location.state === undefined) {
      history.push('/');
    }
  }

  state = {};

  render() {
    const { location } = this.props;
    return <section>{location.state.title}</section>;
  }
}

export default Detail;
