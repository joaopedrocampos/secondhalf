import { useId } from 'react'

export default function FiorentinaJersey({ className }: { className?: string }) {
  const clipId = useId()

  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a purple football jersey"
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M62 30 L84 18 C89 30 111 30 116 18 L138 30 L138 205 L62 205 Z" />
        </clipPath>
      </defs>
      <path d="M62 30 L34 48 L46 84 L64 72 Z" fill="#3D2260" />
      <path d="M138 30 L166 48 L154 84 L136 72 Z" fill="#3D2260" />
      <path
        d="M62 30 L84 18 C89 30 111 30 116 18 L138 30 L138 205 L62 205 Z"
        fill="#3D2260"
      />
      <g clipPath={`url(#${clipId})`}>
        <rect x="62" y="60" width="76" height="3" fill="#C81E3A" />
        <rect x="62" y="67" width="76" height="3" fill="#f5f5f0" />
      </g>
      <path
        d="M84 18 C89 30 111 30 116 18 L110 14 C107 22 93 22 90 14 Z"
        fill="#C81E3A"
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
        21
      </text>
    </svg>
  )
}
