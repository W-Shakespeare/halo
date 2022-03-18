import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import React from "react";

export const WithErrorBoundary = (Component) => {
  const ErrorBoundaryContainer = ({ props }) => {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
  return ErrorBoundaryContainer;
};
