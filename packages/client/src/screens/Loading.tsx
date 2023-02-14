import React, { useState, CSSProperties } from 'react';
import { FullScreen, SectionH, SectionV, ContainerH, ContainerV } from '../components/FixedSection';
import { useAppDispatch } from '../hooks';
import { connected } from '../slices/connected';

const text_style: CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '6em',
};

export default function Loading() {
  const [dots, set_dots] = useState<number>(0);
  setTimeout(() => {
    if (dots < 3) {
      set_dots(dots + 1);
    } else set_dots(0);
  }, 300);
  const dispatch = useAppDispatch();
  return (
    <FullScreen>
      <ContainerH>
        <SectionH ratio={1}>
          <p style={text_style}>
            Conectando com o servidor{'.'.repeat(dots)}
          </p>
        </SectionH>
      </ContainerH>
    </FullScreen>
  );
}
