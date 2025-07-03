import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./themeProvider";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libreFranklin",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Xiaohong Zhuang's Portfolio",
  description: "Read my portfolio for details....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${libreFranklin.className}`}>
          <SmoothScroll>
            <div className="relative">
              <Header />
              {children}
              <Footer />
            </div>
          </SmoothScroll>
        </body>
      </ThemeProvider>
    </html>
  );
}
