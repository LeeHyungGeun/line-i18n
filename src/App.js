import React, { Component } from 'react';
import i18n from './i18n';

@i18n
class App extends Component {
  render() {
    const { M } = this.props;
    return (
      <div>
        {M.name}
      </div>
    );
  }
}

export default App;
