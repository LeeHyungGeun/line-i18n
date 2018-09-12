# Introduce
This App is about Multi Language Component(i18n). Since my previous company LINE WORKS is looking for a Global market: Korea, Japan, and Europe so I normally developed with five languages: Korean, Japanese, English, Chinese-Simplified and Chinese-Traditional. In addition, LINE is looking for more than five languages so I prepared this App. 

# How to start
``` bash
> npm install
> npm run start
> y 
```

# How to pass message keys to a component
Create High Order Component to config a message keys
``` javascript
const i18nComponent = Component => {
    return class __ extends React.Component {
        render() {
            return (<Component M={messages[getLanguage()]} />);
        };
    };
}
```

Use a decorator pattern to pass message keys
``` javascript
import React from 'react';
import i18n from './i18n';

@i18n // -> this is the decorator pattern to pass message keys
class App extends React.Component {
  render() {
    const { M } = this.props; // M is an object of message keys
  }
}
```

# How to determine customer language
1. `language` property of localStorage
: if customer visited the service, and switched a language, the value is stored in a `localStorage` so it can be determined in a first option.
2. Browser/OS language
: Normally, it can be determine by Browser/OS language through BOM(Browser Object Model)
3. Default Language is English
: Since most people can understand English, English is set as Default. It is just in case.