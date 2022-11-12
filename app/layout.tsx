import React from 'react';
import '@styles/tailwind.css';
const MainLayout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <div>{children}</div>;
};
export default MainLayout;
