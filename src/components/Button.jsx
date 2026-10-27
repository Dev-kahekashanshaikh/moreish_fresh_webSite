import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  type = 'button',
  disabled = false,
  target,
  rel,
  ariaLabel
}) => {
  const baseClass = `btn btn-${variant} btn-${size} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        onClick={onClick}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        aria-label={ariaLabel}
      >
        {Icon && <Icon size={size === 'sm' ? 16 : 18} aria-hidden="true" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {Icon && <Icon size={size === 'sm' ? 16 : 18} aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
};
