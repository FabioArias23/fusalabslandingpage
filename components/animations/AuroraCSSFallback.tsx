"use client";

interface AuroraCSSFallbackProps {
  isDark: boolean;
}

/**
 * Pure CSS animated gradient that visually mimics the WebGL aurora effect.
 * Used as fallback when WebGL is unavailable or fails on the device.
 */
export default function AuroraCSSFallback({ isDark }: AuroraCSSFallbackProps) {
  const gradient = isDark
    ? "linear-gradient(135deg, #1C058E 0%, #7d769c 25%, #1C058E 50%, #3a1d8e 75%, #7d769c 100%)"
    : "linear-gradient(135deg, #e6e6e6 0%, #ffffff 25%, #e6e6e6 50%, #f5f5f5 75%, #ffffff 100%)";

  return (
    <div
      className="absolute inset-0 w-full h-full"
      style={{
        background: gradient,
        backgroundSize: "400% 400%",
        animation: "auroraShift 20s ease infinite",
        opacity: isDark ? 0.7 : 0.5,
      }}
    >
      <style jsx>{`
        @keyframes auroraShift {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
