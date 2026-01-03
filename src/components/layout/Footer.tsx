'use client';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span>Desarrollado por [Sam Padilla]</span>
      <span>© {year}</span>
    </footer>
  );
}