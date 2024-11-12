import React from 'react';

export default function CustomLayout({ children }) {
  return (
    <div className="custom-layout">
      <header className="nx-flex nx-items-center nx-justify-between nx-py-4 nx-px-6">
        <div className="nx-flex nx-items-center nx-gap-4">
          {/* Increased size of SVG */}
          <div className="nx-flex nx-items-center">
          <svg 
              width="120"
              height="40"   // Reduced height to remove vertical padding
              viewBox="0 0 400 167" 
              fill="currentColor"
              className="nx-text-white"
              preserveAspectRatio="xMidYMid meet" // This helps maintain proportions
              style={{ margin: 0, padding: 0 }} // Explicitly remove any spacing
            >
              <path d="M400,166.2l-27.9-40h23.5V47.1c0-25.9-21.2-47.1-47.1-47.1H264l-12.3,50.9L239.4,0h-74.2l-20.6,82.9h-0.9V0H64.8L52.5,50.9L40.2,0H0l31.7,114.3v51.8h41.5v-51.8l29-104.7v156.5h41.5v-40h10.9v40h46l-27.9-58.1L200.6,4.9l30.4,109.4v51.8h41.5v-51.8l29-104.7v156.5H343v-40H354v40L400,166.2L400,166.2z M343,87.3V43.6H354v43.8H343z" />
            </svg>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}