import type { SVGProps } from "react";

/** Inline line-icon set. Stroke follows `currentColor`; size via width/height (default 22). */
const paths = {
  cross: <path d="M12 5v14M5 12h14" />,
  check: <path d="M20 6L9 17l-5-5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9.5 12l2 2 3.5-4" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-6 8 6v8a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  heart: (
    <path d="M12 20l-1.4-1.3C5.4 14 2 11 2 7.5 2 5 4 3 6.5 3 8 3 9.4 3.7 10 4.8 10.6 3.7 12 3 13.5 3 16 3 18 5 18 7.5c0 3.5-3.4 6.5-8.6 11.2z" />
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8V6a2 2 0 012-2h2M20 8V6a2 2 0 00-2-2h-2M4 16v2a2 2 0 002 2h2M20 16v2a2 2 0 01-2 2h-2" />
      <path d="M7 12h.01M11.5 12h.01M16 12h.01" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M5 3v5a4 4 0 008 0V3" />
      <path d="M9 15a5 5 0 0010 0v-2" />
      <circle cx="19" cy="11" r="2" />
    </>
  ),
  pill: (
    <>
      <rect x="3" y="8" width="18" height="8" rx="4" />
      <path d="M12 8v8" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4h6v3H9zM9 12h6M9 16h4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0112 0" />
      <path d="M16 5.5a3 3 0 010 5.8M18 20a6 6 0 00-3-5.2" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1z" />
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-4 3.5V5z" />
      <path d="M8 10h8M8 13h5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  siren: (
    <>
      <path d="M6 20v-6a6 6 0 0112 0v6" />
      <path d="M4 20h16" />
      <path d="M12 4V2M18.5 6.5l1.4-1.4M5.5 6.5L4.1 5.1" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  whatsapp: (
    <path
      fill="currentColor"
      stroke="none"
      d="M16 3C9.4 3 4 8.3 4 14.9c0 2.3.7 4.5 1.9 6.4L4 29l7-1.8c1.8 1 3.9 1.5 6 1.5 6.6 0 12-5.3 12-11.9C29 8.3 22.6 3 16 3zm0 21.6c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4a9.5 9.5 0 01-1.5-5.2C5 9.4 9.9 5 16 5s11 4.4 11 9.9-4.9 9.7-11 9.7zm5.6-7.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.7 5.8 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.8-.7 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"
    />
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  size = 22,
  ...props
}: { name: IconName; size?: number } & Omit<SVGProps<SVGSVGElement>, "name">) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
