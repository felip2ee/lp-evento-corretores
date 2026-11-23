import React from 'react';
import { Container } from './ui';

// Topo: logo pequena do evento, foto da Eliane sumindo pro fundo, título e o que a página coloca embaixo (children).
export default function Hero({ eyebrow, fotoAlt, titulo, tituloDestaque, children }) {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/assets/logo-cha-com-a-rainha.webp"
        alt={eyebrow}
        width="612"
        height="660"
        className="hero-in mx-auto mt-5 h-20 w-auto sm:h-24"
      />

      <div className="mx-auto flex w-full max-w-2xl justify-center overflow-hidden">
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
          <h1 className="hero-in relative font-display text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl md:text-5xl">
            {titulo} <span className="block text-[1.5em] leading-none text-accent">{tituloDestaque}</span>
          </h1>
          {children}
        </div>
      </Container>
    </section>
  );
}
