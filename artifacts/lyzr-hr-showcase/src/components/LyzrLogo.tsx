interface LyzrLogoProps {
  small?: boolean;
}

export default function LyzrLogo({ small = false }: LyzrLogoProps) {
  const size = small ? 20 : 32;
  return (
    <img
      src="/lyzr-logo.png"
      alt="Lyzr"
      width={size}
      height={size}
      style={{ borderRadius: "6px", display: "block" }}
    />
  );
}
