/**
 * EXEMPLO DE USO: VideoInterativoUniversal
 * Este arquivo mostra como usar o sistema de vídeo interativo com diferentes tipos de links
 */

// EXEMPLO 1: Usando com Videolib (HLS) - Como no aula3.html
const configVideolib = {
    containerId: 'video-container', // ID do div onde o player será renderizado
    videoUrl: 'https://cdnvideolib-hls.azureedge.net/asset-2516337137368580375-6dcc3531-c845-4176-beeb-ce72252e9888/index.m3u8?sv=2024-08-04&se=2026-01-28T19%3A06%3A54Z&sr=c&sp=r&sig=YgxXXW%2FMGFABlTM8rOswJAjFqt240lFDUuG3gkR9LtQ%3D',
    autoplay: true,
    interacoes: [
        {
            id: 1,
            tempo: 5, // em segundos
            titulo: "Introdução",
            pergunta: "Onde estamos?",
            opcoes: [
                { texto: "Em casa", correta: false, msg: "Errou, tente novamente!" },
                { texto: "No Sesi", correta: true, msg: "Acertou! Bem-vindo!" }
            ]
        },
        {
            id: 2,
            tempo: 30,
            titulo: "Conteúdo Principal",
            pergunta: "Qual é o tema?",
            opcoes: [
                { texto: "Segurança", correta: true, msg: "Correto!" },
                { texto: "Esporte", correta: false, msg: "Tente outra alternativa." }
            ]
        }
    ]
};

// EXEMPLO 2: Usando com YouTube
const configYouTube = {
    containerId: 'video-container',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Exemplo
    interacoes: [
        {
            tempo: 10,
            titulo: "Questão 1",
            pergunta: "O que você aprendeu?",
            opcoes: [
                { texto: "Resposta A", correta: true, msg: "Ótimo!" },
                { texto: "Resposta B", correta: false, msg: "Não, tente novamente." }
            ]
        }
    ]
};

// EXEMPLO 3: Usando com URL direta (MP4, WebM, etc)
const configDireto = {
    containerId: 'video-container',
    videoUrl: 'https://exemplo.com/video.mp4',
    autoplay: false,
    interacoes: []
};

// EXEMPLO 4: Extraindo dados do aula2.html e criando player interativo
function criarPlayerDeAula2(idEpisodio) {
    const episode = document.getElementById(idEpisodio);
    if (!episode) {
        console.error(`Episódio ${idEpisodio} não encontrado`);
        return;
    }

    // Extrair dados do elemento
    const titulo = episode.querySelector('.title')?.innerText || 'Vídeo';
    const duration = episode.querySelector('.duration')?.innerText || '';
    const videoLink = episode.querySelector('.video')?.getAttribute('href') || '';
    const thumb = episode.querySelector('.thumb')?.getAttribute('src') || '';

    if (!videoLink) {
        console.error('Nenhum link de vídeo encontrado');
        return;
    }

    // Configurar interações (customizar conforme necessário)
    const interacoes = [
        {
            tempo: 5,
            titulo: "Revisão Inicial",
            pergunta: `O que é o tema de "${titulo}"?`,
            opcoes: [
                { texto: "Conceito 1", correta: true, msg: "Correto!" },
                { texto: "Conceito 2", correta: false, msg: "Tente novamente." }
            ]
        }
    ];

    // Criar container se não existir
    let container = document.getElementById('video-player-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'video-player-container';
        container.style.cssText = 'max-width: 900px; margin: 20px auto;';
        episode.parentNode.insertBefore(container, episode);
    }

    // Inicializar player
    const player = new VideoInterativoUniversal({
        containerId: 'video-player-container',
        videoUrl: videoLink,
        interacoes: interacoes
    });

    return player;
}

// EXEMPLO 5: Integração completa com listeners
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se a página é aula2.html
    if (document.body.classList.contains('aula2')) {
        // Encontrar o primeiro episódio e reproduzir
        const primeiroEpisodio = document.querySelector('[id^="s1e"]');
        if (primeiroEpisodio) {
            criarPlayerDeAula2(primeiroEpisodio.id);
        }
    }
});

// EXEMPLO 6: Função helper para converter links Relink
function converterLinkRelink(linkRelink) {
    // Alguns links Relink podem ser redirecionados, extrair ID se necessário
    // Esta é uma função auxiliar que pode ser customizada conforme o padrão do seu Relink
    if (linkRelink.includes('redirect.sp.senai.br')) {
        // Retornar como está - deixar o navegador resolver
        return linkRelink;
    }
    return linkRelink;
}

// EXEMPLO 7: Factory function para criar player baseado no tipo de URL
function criarPlayerPorUrl(videoUrl, config = {}) {
    return new VideoInterativoUniversal({
        ...config,
        videoUrl: videoUrl
    });
}

// EXPORTAR PARA USO EM OUTROS ARQUIVOS
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        criarPlayerDeAula2,
        converterLinkRelink,
        criarPlayerPorUrl
    };
}
