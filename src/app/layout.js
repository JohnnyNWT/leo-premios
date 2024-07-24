import "./globals.css";

export const metadata = {
  title: "Leo Prêmios",
  description: "Site Oficial Leo Prêmios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.ico" />
      </head>
      <body className="bg-[#f1f1f1]">{children}</body>
    </html>
  );
}
