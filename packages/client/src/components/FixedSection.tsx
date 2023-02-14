import React, { PropsWithChildren } from 'react';
import './FixedSection.css';

interface Props {
  ratio: number,
  style?: React.CSSProperties,
}

export function FullScreen({ children }: PropsWithChildren) {
  return (
    <div className="Full-Screen">
      {children}
    </div>
  );
}


export function ContainerH({ children }: PropsWithChildren) {
  return (
    <div
      className="Container-H"
    >
      {children}
    </div>
  );
}

export function ContainerV({ children }: PropsWithChildren) {
  return (
    <div
      className="Container-V"
    >
      {children}
    </div>
  );
}

export function SectionH({ ratio, style, children }: PropsWithChildren<Props>) {
  return (
    <div
      style={{ width: '100%', height: `${ratio * 100}%`, ...style }}
      className="Section-H"
    >
      {children}
    </div>
  );
}

export function SectionV({ ratio, style, children }: PropsWithChildren<Props>) {
  return (
    <div
      style={{ width: `${ratio * 100}%`, height: '100%', ...style }}
      className="Section-V"
    >
      {children}
    </div>
  );
}
