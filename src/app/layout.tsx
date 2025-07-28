'use client'
import { Box } from "@mui/material";
import "./globals.css"
import { SideBar } from "@/components/LayoutSideBar/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box sx={{ display: 'flex'}}>
          <SideBar/>
          <Box sx={{ flexGrow: '1' }}>
            {children}
          </Box>
        </Box>
      </body>
    </html>
  )
}