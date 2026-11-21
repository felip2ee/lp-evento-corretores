import React from 'react';
import { Container } from './ui';

// Topo: logo do evento, título e o que a página coloca embaixo (children).
// A foto da Eliane fica em outra seção (App.jsx), pra não disputar espaço com a logo.
export default function Hero({ eyebrow, titulo, tituloDestaque, children }) {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-2xl pb-12 pt-8 text-center sm:pt-12">
          <img
            src="/assets/logo-cha-com-a-rainha.webp"
            alt={eyebrow}
            width="612"
            height="660"
            className="hero-in mx-auto h-48 w-auto sm:h-60"
            fetchpriority="high"
          />
          <h1 className="hero-in mt-5 font-display text-xl font-bold uppercase leading-tight tracking-wide text-ivory/90 sm:text-3xl md:text-4xl">
            {titulo} <span className="text-accent">{tituloDestaque}</span>
          </h1>
          {children}
        </div>
      </Container>
    </section>
  );
}
