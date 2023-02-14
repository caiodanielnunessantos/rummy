import React from 'react';
import {
  ContainerH, ContainerV, SectionH, SectionV, FullScreen
} from '../components/FixedSection';
import Login from './Login';

export default function Authentication() {
  return (
    <FullScreen>
      <ContainerV>
        <SectionV ratio={7 / 10} style={{ backgroundColor: 'pink' }}>
          <Login />
        </SectionV>
        <SectionV ratio={3 / 10} style={{ backgroundColor: 'blue' }}>
          
        </SectionV>
      </ContainerV>
    </FullScreen>
  );
}
