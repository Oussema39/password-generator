import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Password Generator",
  description: "Created by Oussema Heni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black min-h-screen min-w-full text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
