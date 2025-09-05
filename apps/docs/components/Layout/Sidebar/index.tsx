"use client";

import * as React from "react";
import Link from "next/link";

import { useConfig, useTranslate } from "@/context";
import { Icons } from "@aristobyte-ui/utils";

import "./Sidebar.scss";

const Accordion: React.FC<{ isOpen: boolean; children: React.ReactNode }> = ({
  isOpen,
  children,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [children]);

  return (
    <div
      className={`sidebar__accordion ${isOpen ? "sidebar__accordion--open" : ""}`}
      style={{
        height: isOpen ? height : 0,
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const [openedSection, setOpenedSection] = React.useState<string | null>(null);
  const { t } = useTranslate();
  const { config } = useConfig();

  const toggleSection = (id: string) => {
    setOpenedSection((prev) => (prev === id ? null : id));
  };

  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <div className="sidebar__header-logo">
          <Icons.Logo />
        </div>
        <div className="sidebar__header-content">
          <h1 className="sidebar__header-title">AristoByte UI</h1>
          <h2 className="sidebar__header-subtitle">Documentation</h2>
        </div>
      </header>

      <div className="sidebar__container">
        {config.sidebar.sections.map(({ id, links, icon }) => {
          const isOpen = openedSection === id;
          return (
            <div key={id} className="sidebar__section">
              <button
                className="sidebar__button"
                onClick={() => toggleSection(id)}
              >
                <span
                  className={`sidebar__button-icon sidebar__button-icon--${id}`}
                >
                  {icon({ size: 16 })}
                </span>
                <span className="sidebar__button-text">
                  {t(`sidebar.sections.${id}`)}
                </span>
                <span
                  className={`sidebar__button-arrow ${
                    isOpen ? "sidebar__button-arrow--open" : ""
                  }`}
                >
                  <Icons.ArrowRight size={16} />
                </span>
              </button>

              <Accordion isOpen={isOpen}>
                <ul className="sidebar__links">
                  {links.map(({ id: linkId, href, target }, index) => (
                    <li
                      key={linkId}
                      style={{
                        transitionDelay: `${isOpen ? 200 + index * 20 : 0}ms`,
                      }}
                    >
                      <Link
                        href={href}
                        target={target}
                        className="sidebar__link"
                      >
                        {t(`sidebar.links.${linkId}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
