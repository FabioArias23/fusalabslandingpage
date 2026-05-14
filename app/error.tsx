"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050505",
        color: "#ffffff",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        /
      </div>
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "0.75rem",
        }}
      >
        Algo no cargó correctamente
      </h2>
      <p
        style={{
          fontSize: "1rem",
          color: "rgba(255,255,255,0.5)",
          marginBottom: "2rem",
          maxWidth: "400px",
        }}
      >
        Estamos trabajando en ello. Intentá recargar la página.
      </p>
      <button
        onClick={reset}
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "8px",
          padding: "12px 32px",
          color: "#ffffff",
          fontSize: "1rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.16)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255,255,255,0.08)")
        }
      >
        Recargar
      </button>
    </div>
  );
}
