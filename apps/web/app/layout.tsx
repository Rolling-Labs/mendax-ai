import "./globals.css";

export const metadata = {
  title: "Mendax",
  description: "Mendax",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
