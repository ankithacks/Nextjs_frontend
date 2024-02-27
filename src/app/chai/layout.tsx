export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h2>Navbar bhai</h2>  
        {children}
    </>
  );
}
