import "./globals.css";
import { Metadata } from 'next'

//anything put here will be applied to all pages present in project
 
export const metadata: Metadata = {
  title: 'Home Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body>
        <nav>
          <h1>My Navbar</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
