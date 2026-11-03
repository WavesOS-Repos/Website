import { useRef } from 'react';
import { useScrollTilt } from './use-motion';

export function AtomOrbit() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollTilt(ref);

  return (
    <div className="atom" ref={ref} aria-hidden="true">
      <div className="atom-scene">
        <span className="atom-core" />
        <span className="atom-ring atom-ring-x"><i /></span>
        <span className="atom-ring atom-ring-y"><i /></span>
        <span className="atom-ring atom-ring-z"><i /></span>
      </div>
    </div>
  );
}
