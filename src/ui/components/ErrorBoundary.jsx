import React from 'react';

import Error from './Error.jsx';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { children, context } = this.props;
    const { error } = this.state;
    if (error) {
      return <Error context={context} error={error} />;
    }
    return children;
  }
}

export default ErrorBoundary;
