import "./globals.css";

export const metadata = {
  title: "KVS Charitable Trust | Joy of Giving",
  description: "Spreading the joy of giving by supporting underprivileged children.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
