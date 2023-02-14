import React, { useState, CSSProperties, PropsWithChildren } from 'react';

interface ThemedButtonProps {
  normal: CSSProperties,
  hover: CSSProperties,
  click: CSSProperties,
};
export default function ThemedButton({ normal, hover, click, children }: PropsWithChildren<ThemedButtonProps>) {
  const [state, set_state] = useState<'normal' | 'hover' | 'click'>('normal');
  let style = normal;
  if (state === 'hover') {
    style = hover;
  }
  if (state === 'click') {
    style = click;
  }
  return (
    <button
      style={style}
      onMouseEnter={() => set_state('hover')}
      onMouseLeave={() => set_state('normal')}
      onMouseDown={() => set_state('click')}
      onMouseUp={() => set_state('hover')}
    >
      {children}
    </button>
  );
}
