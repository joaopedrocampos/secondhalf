import { useId } from 'react'

export default function MilanJersey({ className }: { className?: string }) {
  const clipId = useId()

  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a red and black striped football jersey"
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M62 30 L84 18 C89 30 111 30 116 18 L138 30 L138 205 L62 205 Z" />
        </clipPath>
      </defs>
      <path d="M62 30 L34 48 L46 84 L64 72 Z" fill="#1a1a1a" />
      <path d="M138 30 L166 48 L154 84 L136 72 Z" fill="#1a1a1a" />
      <path
        d="M62 30 L84 18 C89 30 111 30 116 18 L138 30 L138 205 L62 205 Z"
        fill="#C0181F"
      />
      <g clipPath={`url(#${clipId})`}>
        <rect x="62" y="18" width="11" height="190" fill="#131313" />
        <rect x="84" y="18" width="11" height="190" fill="#131313" />
        <rect x="106" y="18" width="11" height="190" fill="#131313" />
        <rect x="128" y="18" width="11" height="190" fill="#131313" />
      </g>
      <path
        d="M84 18 C89 30 111 30 116 18 L110 14 C107 22 93 22 90 14 Z"
        fill="#f5f5f0"
      />
      <text
        x="100"
        y="130"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="44"
        fill="#f5f5f0"
        fontWeight="bold"
      >
        10
      </text>
    </svg>
  )
}
