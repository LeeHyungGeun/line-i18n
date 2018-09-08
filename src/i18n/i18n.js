import React from 'react';
import getLanguage from './getLanguage';
import messages from './messages';

const i18nComponent = Component => {
    return class __ extends React.Component {
        render() {
            return (<Component M={messages[getLanguage()]} />);
        };
    };
}

export default i18nComponent;