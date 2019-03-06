// import Raven from 'raven-js';

// const sentry_key = 'ecc3ced23f0b11e98eb84201c0a8d032';
// const sentry_app = 'react';
// export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

// export function logException(ex, context) {
//   Raven.captureException(ex, {
//     extra: context
//   });
//   /*eslint no-console:0*/
//   window && window.console && console.error && console.error(ex);
// }
import React from 'react';
import * as Sentry from '@sentry/browser';

// Sentry.init({
//  dsn: "https://ac0ca6e4586340909b4c71d211036b6f@sentry.io/1407973"
// });
// should have been called before using it here
// ideally before even rendering your react app 

class ExampleBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error });
      Sentry.withScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key]);
        });
        Sentry.captureException(error);
      });
    }

    render() {
        if (this.state.error) {
            //render fallback UI
            return (
              <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
            );
        } else {
            //when there's not an error, render children untouched
            return this.props.children;
        }
    }
}
export default ExampleBoundary;
