import "./globals.css";

const RootLayout = ({ children, }: Readonly<{ children: React.ReactNode; }>) => {

  return (
    <html lang="uz">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout