interface SpotlightProps {
  mousePos: { x: number; y: number };
}

export const Spotlight = ({ mousePos }: SpotlightProps) => (
  <div
    className="fixed inset-0 pointer-events-none z-0"
    style={{
      background: `radial-gradient(1000px circle at ${mousePos.x}px ${mousePos.y}px, rgba(28, 5, 142, 0.05), transparent 80%)`,
    }}
  />
);
