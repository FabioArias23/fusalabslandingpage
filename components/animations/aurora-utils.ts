/**
 * Aurora utility functions — device detection and WebGL capability checks.
 * Pure functions, no React dependency, SSR-safe.
 */

/** Detect mobile via user agent + screen size */
export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || "";
  const isMobileUA =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isSmallScreen = window.innerWidth < 768;
  return isMobileUA || isSmallScreen;
}

/** Check if WebGL 2 (or 1) is available and functional */
export function isWebGLAvailable(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl2") ||
      canvas.getContext("webgl")) as WebGLRenderingContext | null;
    if (!gl) return false;
    // Try creating a shader to verify GPU isn't blacklisted
    const shader = gl.createShader(gl.VERTEX_SHADER);
    if (!shader) return false;
    gl.deleteShader(shader);
    // Clean up context
    const ext = gl.getExtension("WEBGL_lose_context");
    ext?.loseContext();
    return true;
  } catch {
    return false;
  }
}
