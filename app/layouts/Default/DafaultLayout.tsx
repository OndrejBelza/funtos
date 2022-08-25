import type { FC } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export type DefaultLayoutProps = {
  children?: React.ReactNode;
};

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-col flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
