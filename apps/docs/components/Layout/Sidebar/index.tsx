'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { useConfig, useTranslate } from '@/context';
import { Icons } from '@aristobyte-ui/utils';
import pkg from '../../../package.json';

import './Sidebar.scss';

// @TODO: @UI - move to UI lib

interface IAccordion {
  isOpen: boolean;
  children: React.ReactNode;
}

const Accordion: React.FC<IAccordion> = ({ isOpen, children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.scrollHeight);
    }
  }, [children]);

  return (
    <div
      className={`sidebar__accordion ${isOpen ? 'sidebar__accordion--open' : ''}`}
      style={{ height: isOpen ? height : 0 }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const [_, category, unit] = usePathname().split('/');
  const { t } = useTranslate();
  const {
    config: {
      sidebar: { sections },
    },
  } = useConfig();
  const [openedSection, setOpenedSection] = React.useState<string[]>([sections[0]!.id]);

  const toggleSection = (id: string) => {
    setOpenedSection((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const closeAllSectionsOnRouteChange = React.useCallback(() => {
    const newOpenedSection = sections.find(
      ({ id, links }) => id === category && links.find(({ id }) => id === unit)
    )?.id;
    if (!newOpenedSection) return;

    setOpenedSection([newOpenedSection]);
  }, [sections, category, unit]);

  React.useEffect(() => {
    closeAllSectionsOnRouteChange();
  }, [closeAllSectionsOnRouteChange]);

  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <div className="sidebar__header-logo">
          <Icons.AristoByteUI size={40} />
        </div>
        <div className="sidebar__header-content">
          <h1 className="sidebar__header-title">{t('sidebar.header.title')}</h1>
          <h2 className="sidebar__header-subtitle">{t('sidebar.header.subtitle')}</h2>
        </div>
      </header>

      <div className="sidebar__container">
        {sections.map(({ id, links, icon }) => (
          <div key={id} className="sidebar__section">
            <button
              className={'sidebar__button' + (category === id ? ' sidebar__button--active' : '')}
              onClick={() => toggleSection(id)}
            >
              <span className={`sidebar__button-icon sidebar__button-icon--${id}`}>{icon({ size: 16 })}</span>
              <span className="sidebar__button-text">{t(`sidebar.sections.${id}`)}</span>
              <span
                className={`sidebar__button-arrow ${openedSection.includes(id) ? 'sidebar__button-arrow--open' : ''}`}
              >
                <Icons.ArrowRight size={16} />
              </span>
            </button>

            <Accordion isOpen={openedSection.includes(id)}>
              <ul className="sidebar__links">
                {links.map(({ id: linkId, href, target }, index) => (
                  <li
                    key={linkId}
                    style={{
                      transitionDelay: `${openedSection.includes(id) ? 200 + index * 20 : 0}ms`,
                    }}
                  >
                    <Link
                      href={href}
                      target={target}
                      className={'sidebar__link' + (unit === linkId ? ' sidebar__link--active' : '')}
                    >
                      {t(`sidebar.links.${linkId}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion>
          </div>
        ))}
      </div>

      <footer className="sidebar__footer">
        <h3 className="sidebar__footer-title">{t('sidebar.footer.title')}</h3>
        <h4 className="sidebar__footer-subtitle">{t('sidebar.footer.subtitle').replace('{{version}}', pkg.version)}</h4>
      </footer>
    </aside>
  );
};
