import React from "react";
import { ReactComponent as ReactLogo } from "./error.svg";
import { StyledErrorBoundary, ErrorText } from "./StyledCards";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <StyledErrorBoundary className="errorBoundary">
          <ReactLogo className="logoError" />
          <ErrorText>Something went wrong.</ErrorText>
        </StyledErrorBoundary>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
