import React from 'react';
import './styles.css';
import './builder-init'; // initialize Builder SDK
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import { BuilderComponent } from '@builder.io/react';

export default function App() {
  return (
    <div className="app">
      <Hero />
      <main>
        {/* Sample Builder content embed: this will render content for the "page" model from your Builder account */}
        <BuilderComponent model="page" />
        <Gallery />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Metooha Art — Built with React</p>
      </footer>
    </div>
  );
}
