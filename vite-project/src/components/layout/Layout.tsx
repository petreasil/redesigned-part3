import React from "react";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 py-8 text-white relative">
      {children}
    </main>
  );
};

export default Layout;
