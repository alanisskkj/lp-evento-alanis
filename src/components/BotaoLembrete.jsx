import { useState } from "react";

function BotaoLembrete() {
    const [mensagem, setMensagem] = useState("");

    async function ativarLembrete() {
        if (!("Notification" in window)) {
            setMensagem("Este navegador não aceita notificações.");
            return;
        }

        try {
            const permissao = await Notification.requestPermission();
            if (permissao !== "granted") {
                setMensagem("Você não permitiu as notificações.");
                return;
            }

            if (!("serviceWorker" in navigator)) {
                setMensagem("Não foi possível ativar o lembrete.");
                return;
            }

            const registro = await navigator.serviceWorker.ready;
            await registro.showNotification("Festival Som da Alta Paulista", {
                body: "Não se esqueça: 13 e 14 de março de 2027, no Parque das Águas!",
                icon: "/icone-192.png",
            });
            setMensagem("Lembrete ativado!");
        } catch (erro) {
            console.error("Não foi possível ativar o lembrete.", erro);
            setMensagem("Não foi possível ativar o lembrete.");
        }
    }

    return (
        <div className="mt-6">
            <button
                type="button"
                onClick={ativarLembrete}
                className="rounded-full bg-destaque px-6 py-3 font-bold text-white shadow-lg transition-colors hover:bg-white hover:text-primaria"
            >
                Me lembre do evento
            </button>
            {mensagem && (
                <p role="status" className="mt-2">
                    {mensagem}
                </p>
            )}
        </div>
    );
}

export default BotaoLembrete;