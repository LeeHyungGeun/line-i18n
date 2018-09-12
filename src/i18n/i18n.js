import React from 'react';
import getLanguage from './getLanguage';
import messages from './messages';

// High Order Component, we only focus Multi Language code in this component
const i18nComponent = Component => {
    return class __ extends React.Component {
        render() {
            return (<Component M={messages[getLanguage()]} />);
        };
    };
}

export default i18nComponent;