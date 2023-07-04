export function RenderIcon({ icon, alt, width }) {
  return (
    <img
      src={icon}
      alt={alt}
      className={width ? null : "default-width-for-icons"}
      style={width ? { width } : null}
    />
  );
}
