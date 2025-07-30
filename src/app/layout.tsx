'use client'
import { Box } from "@mui/material";
import "./globals.css"
import { SideBar } from "@/components/LayoutSideBar/SideBar";
import { UserProvider } from "@/common/context/UserContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Box sx={{ display: 'flex', height: '100vh', width: '100vw'}}>
            <SideBar/>
            <Box sx={{ width: '100%' }}>
              {children}
            </Box>
          </Box>
        </UserProvider>
      </body>
    </html>
  )
}