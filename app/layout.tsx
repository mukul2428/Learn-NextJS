import './globals.css'

//anything put here will be applied to all pages present in project
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <nav>
        <h1>My Navbar</h1>
      </nav>
      <body>{children}</body>
    </html>
  )
}
