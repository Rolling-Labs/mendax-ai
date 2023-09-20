import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
