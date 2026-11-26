import { useEffect, useState } from 'react';

const CHAVE_STORAGE = 'tema-festival';

/**
 * Hook para gerenciar o tema Claro/Escuro.
 * Prioriza escolha salva no localStorage e respeita prefers-color-scheme do sistema.
 */
export function useTema() {
  const [tema, setTema] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    try {
      const salvo = window.localStorage.getItem(CHAVE_STORAGE);
      if (salvo === 'dark' || salvo === 'light') return salvo;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (tema === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    const metaTema = document.querySelector('meta[name="theme-color"]');
    if (metaTema) {
      metaTema.setAttribute('content', tema === 'dark' ? '#121212' : '#F7F5F0');
    }
  }, [tema]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const aoMudarSistema = (event) => {
      try {
        const salvo = window.localStorage.getItem(CHAVE_STORAGE);
        if (!salvo) {
          setTema(event.matches ? 'dark' : 'light');
        }
      } catch {
        // Ignora falhas de acesso ao localStorage
      }
    };
    media.addEventListener('change', aoMudarSistema);
    return () => media.removeEventListener('change', aoMudarSistema);
  }, []);

  function alternarTema() {
    setTema((atual) => {
      const proximo = atual === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(CHAVE_STORAGE, proximo);
      } catch {
        // Ignora falhas de acesso ao localStorage
      }
      return proximo;
    });
  }

  return { tema, alternarTema };
}
