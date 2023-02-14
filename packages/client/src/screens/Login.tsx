import React, { useState, CSSProperties, FormEvent, useEffect } from 'react';
import { ContainerH, ContainerV, SectionH, SectionV } from '../components/FixedSection';
import ThemedButton from '../components/ThemedButton';
import { socket } from '../connection';
import EventFeed from './EventFeed';

const form_style: CSSProperties = {
  display: 'flex',
  flexDirection: 'column'
}

const label_style: CSSProperties = {
  padding: '15px',
  backgroundColor: 'turquoise',
}

const input_style: CSSProperties = {
  width: '100%',
  fontSize: '3em',
  padding: '15px',
}

const button_style: CSSProperties = {
  border: 'none',
  backgroundColor: 'yellow',
  fontSize: '3em',
  padding: '15px',
}

const button_style_hover: CSSProperties = {
  border: 'none',
  backgroundColor: 'brown',
  fontSize: '3.1em',
  padding: '15px',
}

const button_style_click: CSSProperties = {
  border: 'none',
  backgroundColor: 'red',
  fontSize: '2.9em',
  padding: '15px',
}

const text_style: CSSProperties = {
  fontFamily: 'monospace',
  fontSize: '3em',
};

export default function Login() {
  const [name, set_name] = useState<string>('');
  const form_submit = (event: FormEvent) => {
    event.preventDefault();
    socket.emit('set_name', name);
  };
  const set_focus = (_event: KeyboardEvent) => {
    if (document.getElementById('name'))
      document.getElementById('name')!.focus();
  };
  useEffect(() => {
    window.addEventListener('keydown', set_focus);
    return () => {
      window.removeEventListener('keydown', set_focus);
    }
  }, []);
  return (
    <form autoComplete="off" style={form_style} onSubmit={form_submit}>
      <label style={label_style} htmlFor="name">
        <p style={text_style}>Digite seu nome pra jogar</p>
      </label>
      <input
        onFocus={() => window.removeEventListener('keydown', set_focus)}
        onBlur={() => window.addEventListener('keydown', set_focus)}
        placeholder="Nome"
        style={input_style}
        id="name"
        value={name}
        onChange={(event) => set_name(event.target.value)}
      />
      <ThemedButton normal={button_style} hover={button_style_hover} click={button_style_click}>
        Clique para jogar
      </ThemedButton>
    </form>
  );
}
