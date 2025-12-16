import Providers from '@components/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-us">
      <body className="theme-dark tint-green">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
