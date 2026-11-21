import React from 'react';
import { Check, X } from 'lucide-react';

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-page px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Button({ href, children, variant = 'primary', size = 'md', className = '', ...rest }) {
  const base =
    'btn-shine inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-bold tracking-tight text-center transition-[transform,background-color] duration-200 motion-safe:hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40';
  const variants = {
    primary: 'bg-accent text-dark hover:bg-accentHover shadow-lg shadow-accent/25',
    dark: 'bg-primary text-ivory hover:bg-secondary border border-accent/40',
  };
  const sizes = {
    md: 'max-w-full px-5 py-4 text-[0.8rem] sm:px-7 sm:text-base',
    lg: 'max-w-full px-5 py-4 text-[0.8rem] sm:px-8 sm:py-5 sm:text-lg',
    sm: 'px-5 py-3 text-sm',
    block: 'px-3 py-4 text-[0.9rem] sm:px-4 sm:text-base',
  };
  // Sem href vira <button> (envio de formulário)
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} className={`${base} ${variants[variant]} ${sizes[size]} disabled:opacity-60 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

// Campo de formulário. text-base (16px) evita o zoom automático do iOS.
export function Field({ label, id, error, ...rest }) {
  return (
    <div className="text-left">
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ivory/90">{label}</label>
      <input
        id={id}
        name={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-erro` : undefined}
        className="w-full rounded-xl border border-ivory/20 bg-dark/60 px-4 py-3.5 text-base text-white placeholder:text-ivory/35 focus:border-accent focus:outline-none aria-[invalid=true]:border-red-400"
        {...rest}
      />
      {error && <p id={`${id}-erro`} className="mt-1 text-sm text-red-300">{error}</p>}
    </div>
  );
}

export function H2({ children, className = '', tone = 'light' }) {
  const color = tone === 'light' ? 'text-white' : 'text-primary';
  return (
    <h2 className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold leading-[1.08] ${color} ${className}`}>
      {children}
    </h2>
  );
}

export function CheckItem({ children, tone = 'light' }) {
  const ring = tone === 'light' ? 'bg-accent text-dark' : 'bg-primary text-accent';
  const text = tone === 'light' ? 'text-ivory/90' : 'text-primary/90';
  return (
    <li className="flex items-start gap-3">
      <span className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${ring}`}>
        <Check size={14} strokeWidth={3} aria-hidden="true" />
      </span>
      <span className={`text-base leading-relaxed ${text}`}>{children}</span>
    </li>
  );
}

export function XItem({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory/60">
        <X size={14} strokeWidth={3} aria-hidden="true" />
      </span>
      <span className="text-base leading-relaxed text-ivory/75">{children}</span>
    </li>
  );
}
