import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Button } from "../components/ui/Button";

type RouteError = {
    status?: number;
    message?: string;
    statusText?: string;
}

const ErrorPage: React.FC = () => {
    const error = useRouteError() as RouteError;

    return (
        <div className="flex flex-col items-center">
            <h2 className="my-4">Oops! Something went wrong.</h2>
            {error?.message && <div>{error.message}</div>}
            {error?.status && <div className="text-lg font-extrabold">{error.statusText}</div>}
            <Link to="/">
                <Button>Go back to Home</Button>
            </Link>
        </div>
    );
};

export default ErrorPage;
