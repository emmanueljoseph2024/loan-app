import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      {/* Error message */}
      <h1>Oops! Something went wrong 😢</h1>
      <p>We can't find the page you're looking for.</p>

      {error?.status && (
        <p style={{ color: "gray" }}>
          Error {error.status}: {error.statusText || error.message}
        </p>
      )}

      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Go Back Home
      </a>
    </div>
  );
}
