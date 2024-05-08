import { NavBar } from "@/components";
import "./globals.css";
export const metadata = {
  title: "Canadian Study Permit Tracker",
  description:
    "This is a simple tracker for fellow study permit applicants to track thier applications and compare it with their fellow applicants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
