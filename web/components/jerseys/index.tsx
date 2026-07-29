import type { Shirt } from '@/data/shirts'
import MilanJersey from './MilanJersey'
import DortmundJersey from './DortmundJersey'
import FiorentinaJersey from './FiorentinaJersey'

const jerseysByStyle: Record<Shirt['kitStyle'], React.ComponentType<{ className?: string }>> = {
  milan: MilanJersey,
  dortmund: DortmundJersey,
  fiorentina: FiorentinaJersey,
}

export function JerseyIllustration({
  kitStyle,
  className,
}: {
  kitStyle: Shirt['kitStyle']
  className?: string
}) {
  const Jersey = jerseysByStyle[kitStyle]
  return <Jersey className={className} />
}
