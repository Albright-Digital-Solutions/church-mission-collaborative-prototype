import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:{default:"Church Mission Collaborative",template:"%s | Church Mission Collaborative"},description:"Serving local churches by helping leaders turn ministry vision into sustainable action.",icons:{icon:"/assets/cmc-logo-square.png"} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
