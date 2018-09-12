import React, { Component } from 'react';
import i18n from './i18n';

@i18n // High Order Component to pass a message key through a Decorator Pattern.
class App extends Component {
  render() {
    const { M } = this.props;
    return (
      <section role="main">
        <div className="main-intro">
          <div>{M.name}</div>
          <div>{M.occupation}</div>
          <div>{M.description}</div>
        </div>
      </section>
    );
  }
}

export default App;
