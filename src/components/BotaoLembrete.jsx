import { useState } from 'react';

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState('');

  async function ativarLembrete() {
    if (!('Notification' in window)) {
      setMensagem('Este navegador não oferece suporte a notificações.');
      return;
    }

    try {
      const permissao = await Notification.requestPermission();
      if (permissao !== 'granted') {
        setMensagem('Permissão de notificação não concedida.');
        return;
      }

      if (!('serviceWorker' in navigator)) {
        setMensagem('Lembrete registrado para esta sessão.');
        return;
      }

      const registro = await navigator.serviceWorker.ready;
      await registro.showNotification('Festival Som da Alta Paulista', {
        body: '12, 13 e 14 de março de 2027, no Parque das Águas — Osvaldo Cruz.',
        icon: '/icone-192.png',
      });
      setMensagem('Lembrete ativado com sucesso.');
    } catch (erro) {
      console.error('Não foi possível ativar o lembrete.', erro);
      setMensagem('Não foi possível ativar o lembrete.');
    }
  }

  return (
    <div className="inline-flex flex-col items-start">
      <button
        type="button"
        onClick={ativarLembrete}
        className="border border-offwhite/50 bg-transparent px-5 py-3 text-sm font-bold uppercase tracking-wider text-offwhite transition-colors hover:border-offwhite hover:bg-offwhite hover:text-carvao"
      >
        Ativar lembrete
      </button>
      {mensagem && (
        <p role="status" className="mt-2 text-xs font-medium text-offwhite/90">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
