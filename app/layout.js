import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "FinGeniusAI",
  description: "Smarter money decisions, powered by AI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        {children}
        {/* footer */}
        <footer>
          <div>
            <p>Made with ❤️ by Komal</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
