import React, { Component, ErrorInfo, ReactNode } from 'react';
import {Link} from "react-router-dom";

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex justify-center content-center">
                    <h2>Oops! Something went wrong.</h2>
                    <Link to="/">
                        <button className="button">Go back to Home</button>
                    </Link>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
