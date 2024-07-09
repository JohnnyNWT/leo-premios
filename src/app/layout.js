import "./globals.css";

export const metadata = {
  title: "Leo Premios",
  description: "Site Oficial Leo Premios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f1f1f1]">{children}</body>
    </html>
  );
}
