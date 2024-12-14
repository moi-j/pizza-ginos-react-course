import { Component } from "react";
import { Link } from "@tanstack/react-router";
import { usePizzaOfTheDay } from "./usePizzaOfTheDay";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    //send to Sentry or whatever
    console.log("ErrorBoundary caught some error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            There was an error with this page.
            <Link to="/">Click here</Link> to go back to the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

// How to use hooks on Class Components
// eslint-disable-next-line no-unused-vars
function EBWithHooks() {
  const potd = usePizzaOfTheDay();
  return <ErrorBoundary potd={potd} />;
}

export default ErrorBoundary;
