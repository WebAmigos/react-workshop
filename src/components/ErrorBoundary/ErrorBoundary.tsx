import { Component, ErrorInfo } from "react";
import { isErrored } from "stream";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  isError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state = {
    isError: false,
  };

  static getDerivedStateFromError() {
    // this.setState({ isError: true});
    return { isError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo): void {
    // send to logger
  }

  render() {
    if (this.state.isError) {
      return this.props.fallback ? (
        this.props.fallback
      ) : (
        <p className="dark:text-slate-300">
          Oh no! Error{" "}
          <button onClick={() => this.setState({ isError: false })}>
            Try again
          </button>
        </p>
      );
    }

    return this.props.children;
  }
}
