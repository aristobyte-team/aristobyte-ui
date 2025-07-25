"use client";

import * as React from "react";
import Link from "next/link";
import { useConfig, useTranslate } from "@/context";
import { Icons } from "@/config";

import "./Sidebar.scss";

export const Sidebar = () => {
  const [openSection, setOpenSection] = React.useState<number | null>(null);
  const { t } = useTranslate();
  const { config } = useConfig();

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <aside className="sidebar">
      {config.sidebar.sections.map(({ id, links }, index) => (
        <div key={id} className="sidebar__section">
          <button
            className="sidebar__title"
            onClick={() => toggleSection(index)}
          >
            <span className="sidebar__title-text">
              {t(`sidebar.sections.${id}`)}
            </span>
            <span
              className={`sidebar__title-icon ${
                openSection === index ? "sidebar__title-icon--open" : ""
              }`}
              dangerouslySetInnerHTML={{ __html: Icons.ArrowRight }}
            />
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
    </aside>
  );
};
