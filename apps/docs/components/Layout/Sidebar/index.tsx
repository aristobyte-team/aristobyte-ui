"use client";

import * as React from "react";
import Link from "next/link";

import { useConfig, useTranslate } from "@/context";

import "./Sidebar.scss";
import { Icons } from "@aristobyte-ui/utils";

export const Sidebar: React.FC = () => {
  const [openSection, setOpenSection] = React.useState<number | null>(null);
  const { t } = useTranslate();
  const { config } = useConfig();

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
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
        {config.sidebar.sections.map(({ id, links, icon }, index) => (
          <div key={id} className="sidebar__section">
            <button
              className="sidebar__button"
              onClick={() => toggleSection(index)}
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
                  openSection === index ? "sidebar__button-arrow--open" : ""
                }`}
              >
                <Icons.ArrowRight size={16} />
              </span>
            </button>

            <ul
              className={`sidebar__links ${
                openSection === index ? "sidebar__links--open" : ""
              }`}
            >
              {links.map(({ id: linkId, href, target }) => (
                <li key={linkId}>
                  <Link href={href} target={target} className="sidebar__link">
                    {t(`sidebar.links.${linkId}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};
