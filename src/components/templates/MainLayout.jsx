import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="bg-neutral-50 text-neutral-900 font-sans overflow-x-hidden selection:bg-red-600 selection:text-white">
      {children}
    </div>
  );
};

export default MainLayout;
