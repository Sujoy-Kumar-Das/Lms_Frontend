import Footer from "@/_components/shared/footer/Footer";
import Navbar from "@/_components/shared/navbar/Navbar";
import { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
