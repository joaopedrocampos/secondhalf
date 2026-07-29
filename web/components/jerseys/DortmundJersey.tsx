import { useId } from 'react'

export default function DortmundJersey({ className }: { className?: string }) {
  const clipId = useId()

  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a yellow football jersey with black trim"
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M62 30 L84 18 C89 30 111 30 116 18 L138 30 L138 205 L62 205 Z" />
        </clipPath>
      </defs>
      <path d="M62 30 L34 48 L46 84 L64 72 Z" fill="#FFCC00" />
      <path d="M138 30 L166 48 L154 84 L136 72 Z" fill="#FFCC00" />
      <path d="M35 49 L38 60 L50 52 L47 45 Z" fill="#131313" />
      <path d="M165 49 L162 60 L150 52 L153 45 Z" fill="#131313" />
      <path
        d="M62 30 L84 18 C89 30 111 30 116 18 L138 30 L138 205 L62 205 Z"
        fill="#FFCC00"
      />
      <g clipPath={`url(#${clipId})`}>
        <path d="M62 150 L138 120 L138 136 L62 166 Z" fill="#131313" opacity="0.9" />
        <path d="M62 172 L138 142 L138 150 L62 180 Z" fill="#131313" opacity="0.55" />
      </g>
      <path
        d="M84 18 C89 30 111 30 116 18 L110 14 C107 22 93 22 90 14 Z"
        fill="#131313"
      />
      <text
        x="100"
        y="110"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="44"
        fill="#131313"
        fontWeight="bold"
      >
        9
      </text>
    </svg>
  )
}
