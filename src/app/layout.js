import "./globals.css";
import { Inter, Varela } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "@/components/nav";

const varela = Varela({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={varela.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-screen min-h-screen flex flex-col items-center gap-4">
            <Nav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
