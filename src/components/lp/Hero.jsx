import React from 'react';
import { Container } from './ui';

// Topo: foto da Eliane sumindo pro fundo, nome do evento, título e o que a página coloca embaixo (children).
export default function Hero({ eyebrow, fotoAlt, titulo, tituloDestaque, children }) {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex w-full max-w-2xl justify-center overflow-hidden pt-4 sm:pt-6">
        <img
          src="/assets/eliane-hero.webp"
          alt={fotoAlt}
          width="2000"
          height="1227"
          className="hero-photo photo-fade relative left-[5.1%] mx-auto w-[120%] max-w-none shrink-0 object-contain sm:left-[4.25%] sm:w-full"
          fetchpriority="high"
        />
      </div>

      <Container>
        <div className="mx-auto -mt-12 max-w-2xl pb-12 text-center sm:-mt-16">
          <p className="hero-in relative font-display text-sm font-bold uppercase tracking-[0.18em] text-accent sm:text-base">{eyebrow}</p>
          <h1 className="hero-in relative mt-2 font-display text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl md:text-5xl">
            {titulo} <span className="block text-[1.5em] leading-none text-accent">{tituloDestaque}</span>
          </h1>
          {children}
        </div>
      </Container>
    </section>
  );
}
