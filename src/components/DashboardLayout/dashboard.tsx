import type { ReactNode } from "react";
import { Footer } from "../Footer/footer";
import { Navbar } from "../Navbar/navbar";
import "./dashboard.css"

export const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dashboard__wrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
