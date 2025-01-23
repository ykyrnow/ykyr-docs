import React from 'react';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

export default function CustomLayout({ children }) {
  const router = useRouter();
  const { pageOpts } = useConfig();
  const menu = pageOpts?.pageMap || [];
  const docsMenu = menu.find(item => item.name === 'docs')?.children || [];

  const renderMenuItems = () => {
    return docsMenu.map((item, idx) => {
      if (item.type === 'separator') {
        return (
          <div key={idx} className="nx-mb-4">
            <h3 className="nx-text-sm nx-font-semibold nx-text-gray-400 nx-mb-2">
              {item.title}
            </h3>
            {item.children && (
              <div className="nx-flex nx-flex-col nx-space-y-1">
                {item.children.map((child, childIdx) => (
                  <a
                    key={childIdx}
                    href={`/docs/${child.name}`}
                    className={`nx-text-sm nx-py-1 nx-px-2 nx-rounded-md ${
                      router.asPath === `/docs/${child.name}`
                        ? 'nx-bg-gray-800 nx-text-white'
                        : 'nx-text-gray-300 hover:nx-bg-gray-800'
                    }`}
                  >
                    {child.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        );
      }

      return (
        <a
          key={idx}
          href={`/docs/${item.name}`}
          className={`nx-text-sm nx-py-1 nx-px-2 nx-rounded-md ${
            router.asPath === `/docs/${item.name}`
              ? 'nx-bg-gray-800 nx-text-white'
              : 'nx-text-gray-300 hover:nx-bg-gray-800'
          }`}
        >
          {item.title}
        </a>
      );
    });
  };

  return (
    <div className="nx-flex">
      <main>{children}</main>
    </div>
  );
}