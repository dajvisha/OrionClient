import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)
library.add(faComment)

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default App;
