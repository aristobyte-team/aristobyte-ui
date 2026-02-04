'use client';

import { Icons } from '@aristobyte-ui/utils';
import Component from '../components/Component';

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <Icons.AristoByteUI size={80} />
            <span className="header__logo">Aristobyte UI</span>
          </div>
          <div className="header__content">
            <h1 className="header__title">Sandbox</h1>
            <p className="header__subtitle">Single-component playground for focused development and QA.</p>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="main__container">
          <section className="main__sandbox">
            <div className="main__sandbox-panel">
              <Component />
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <p>© {new Date().getFullYear()} AristoByte. Sandbox environment for local component development.</p>
        </div>
      </footer>
    </>
  );
}
