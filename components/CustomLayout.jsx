// components/CustomLayout.jsx
import React from 'react';

export default function CustomLayout({ children }) {
  return (
    <div className="custom-layout">
      <header>Header Content</header>
      <main>{children}</main>
    </div>
  );
}
