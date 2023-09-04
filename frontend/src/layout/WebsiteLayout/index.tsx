// lib
import { type ReactNode } from "react";

// components
import WebsiteNavbar from "../../components/Navbar/WebsiteNavbar";
import WebsiteFooter from "../../components/Footer/WebsiteFooter";

type Props = {
  children: ReactNode;
};

const WebsiteLayout = ({ children }: Props) => {
  return (
    <div>
      <WebsiteNavbar />
      {children}
      <WebsiteFooter />
    </div>
  );
};

export default WebsiteLayout;
