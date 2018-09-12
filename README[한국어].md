# 소개
이 앱은 다국어 컴포넌트(i18n) 에 대하여 만들어졌습니다. 제 전 회사인 LINE WORKS 도 글로벌 시장(기본: 한국, 일본)을 목표로 하기 때문에 기본적으로 다섯개 언어(한국어, 일본어, 영어, 중국어-간체, 중국어-번체)를 지원 하였습니다. LINE은 더많은 글로벌 시장을 겨냥하기 때문에 이 앱을 준비해봤습니다.

# 앱 실행 방법
``` bash
> npm install
> npm run start
> y 
```

# 컴포넌트에 메세지 키 전달하는 방법
## High Order Component 를 이용하여 메세지 키를 설정
``` javascript
const i18nComponent = Component => {
    return class __ extends React.Component {
        render() {
            return (<Component M={messages[getLanguage()]} />);
        };
    };
}
```

## 데코레이터 패턴을 사용하여 메세지 전달
``` javascript
import React from 'react';
import i18n from './i18n';

@i18n // -> 이 부분이 데코레이터 패턴을 통한 i18n 컴포넌트로 메세지 키를 전달하느 ㄴ부분입니다.
class App extends React.Component {
  render() {
    const { M } = this.props; // M은 메세지 키 오브젝트 입니다.
  }
}
```

# 고객 언어 판단하는 기준
1. localStorage 의 `language` 프로퍼티에 저장된 값으로 판단.
: 고객이 일회 방문후에는 언어를 변경할 수 있습니다. 그럼 그 언어값이 localStorage 에 저장되기 떄문에 사용할 수 있게 됩니다.
2. 브라우저/OS 언어
: 기본적으로 브라우저의 네비게이터 오브젝트를 통하여 판단할 수 있습니다.
3. Default Language is English
: 대부분의 사용자가 기본적으로 영어를 읽을 수 있기 때문에 영어를 마지막 옵션으로 둡니다.