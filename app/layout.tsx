import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-center">
        {/* Removed Sidebar */}
        <main className="w-full max-w-7xl p-6">
          {children}
        </main>
      </body>
    </html>
  );
}