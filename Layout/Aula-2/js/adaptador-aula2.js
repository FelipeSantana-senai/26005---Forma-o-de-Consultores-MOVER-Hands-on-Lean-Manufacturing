/**
 * ADAPTADOR PARA AULA2.HTML
 * Este arquivo conecta o sistema de vídeo interativo com a estrutura existente do aula2.html
 */

class AdaptadorAula2 {
    constructor() {
        this.playerAtivo = null;
        this.episodioAtivo = null;
        this.interacoesCache = new Map();
    }

    /**
     * Inicializar sistema de vídeos interativos
     */
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupMenuClicks();
            this.setupPlayButton();
        });
    }

    /**
     * Setup para cliques no menu de episódios
     */
    setupMenuClicks() {
        // Encontrar todos os elementos de episódio
        document.querySelectorAll('[data-sa][data-num]').forEach(element => {
            const id = element.id;
            element.addEventListener('click', () => {
                this.carregarEpisodio(id);
            });
        });
    }

    /**
     * Setup para botão Play Hero
     */
    setupPlayButton() {
        const btnPlay = document.getElementById('heroPlayBtn');
        if (btnPlay) {
            btnPlay.addEventListener('click', () => {
                const primeiroEpisodio = document.querySelector('[data-sa][data-num="1"]');
                if (primeiroEpisodio) {
                    this.carregarEpisodio(primeiroEpisodio.id);
                    this.rolarParaPlayer();
                }
            });
        }
    }

    /**
     * Carregar episódio e criar player
     */
    carregarEpisodio(episodioId) {
        const episode = document.getElementById(episodioId);
        if (!episode) {
            console.error(`Episódio ${episodioId} não encontrado`);
            return;
        }

        this.episodioAtivo = episode;

        // Extrair dados do elemento
        const titulo = episode.querySelector('.title')?.innerText || 'Vídeo';
        const duracao = episode.querySelector('.duration')?.innerText || '';
        const videoLink = episode.querySelector('.video')?.getAttribute('href') || '';
        const thumb = episode.querySelector('.thumb')?.getAttribute('src') || '';
        const sinopse = episode.querySelector('.sinopse')?.innerText || '';

        if (!videoLink) {
            console.error('Nenhum link de vídeo encontrado');
            return;
        }

        // Atualizar UI com informações do episódio
        this.atualizarInfoEpisodio(titulo, duracao, thumb, sinopse);

        // Obter interações para este episódio
        const interacoes = this.obterInteracoes(episodioId);

        // Destruir player anterior se existir
        if (this.playerAtivo) {
            this.playerAtivo.destroy();
        }

        // Criar container para player
        let container = document.getElementById('video-player-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'video-player-container';
            container.style.cssText = `
                max-width: 100%;
                margin: 20px auto;
                padding: 0 15px;
            `;
            
            // Inserir antes do section de books
            const bookSection = document.querySelector('.bookSection');
            if (bookSection) {
                bookSection.parentNode.insertBefore(container, bookSection);
            } else {
                document.querySelector('main').appendChild(container);
            }
        }

        // Limpar container
        container.innerHTML = '';

        // Criar player
        this.playerAtivo = new VideoInterativoUniversal({
            containerId: 'video-player-container',
            videoUrl: videoLink,
            autoplay: true,
            interacoes: interacoes
        });

        // Atualizar texto do botão play
        const btnText = document.getElementById('heroPlayBtnText');
        if (btnText) {
            btnText.innerText = 'Reproduzindo...';
            setTimeout(() => {
                btnText.innerText = 'Começar';
            }, 2000);
        }
    }

    /**
     * Atualizar informações do episódio na UI
     */
    atualizarInfoEpisodio(titulo, duracao, thumb, sinopse) {
        const bookTitle = document.getElementById('bookTitle');
        if (bookTitle) {
            bookTitle.innerText = titulo;
        }

        const bookImage = document.getElementById('bookImage');
        if (bookImage && thumb) {
            bookImage.src = thumb;
            bookImage.style.display = 'block';
        }

        const bookText = document.getElementById('bookText');
        if (bookText && sinopse) {
            bookText.innerHTML = `<p>${sinopse}</p>`;
        }
    }

    /**
     * Obter interações específicas para um episódio
     * Pode ser customizado para cada episódio
     */
    obterInteracoes(episodioId) {
        // Verificar se já foram cacheadas
        if (this.interacoesCache.has(episodioId)) {
            return this.interacoesCache.get(episodioId);
        }

        // Definir interações por episódio
        const interacoes = {
            's1recap': [
                {
                    tempo: 3,
                    titulo: "Revisão",
                    pergunta: "O que você deve revisar antes de prosseguir?",
                    opcoes: [
                        { texto: "Fundamentos matemáticos", correta: true, msg: "Correto! A matemática é a base." },
                        { texto: "Apenas história", correta: false, msg: "Não, matemática é essencial." }
                    ]
                }
            ],
            's1e1': [
                {
                    tempo: 5,
                    titulo: "Conceito 1",
                    pergunta: "O que permite que a eletricidade flua?",
                    opcoes: [
                        { texto: "Elétrons livres", correta: true, msg: "Exato! Elétrons livres são a base." },
                        { texto: "Prótons apenas", correta: false, msg: "Não, são os elétrons." }
                    ]
                },
                {
                    tempo: 25,
                    titulo: "Conceito 2",
                    pergunta: "Qual material é melhor condutor?",
                    opcoes: [
                        { texto: "Cobre", correta: true, msg: "Correto! Cobre é excelente condutor." },
                        { texto: "Borracha", correta: false, msg: "Borracha é isolante." }
                    ]
                }
            ],
            's1e2': [
                {
                    tempo: 8,
                    titulo: "Tensão",
                    pergunta: "Tensão é como qual analogia?",
                    opcoes: [
                        { texto: "Pressão da água", correta: true, msg: "Perfeito! Mesma lógica." },
                        { texto: "Temperatura", correta: false, msg: "Não, pressão é mais correto." }
                    ]
                }
            ],
            's1e3': [
                {
                    tempo: 10,
                    titulo: "Corrente",
                    pergunta: "Como se mede corrente com multímetro?",
                    opcoes: [
                        { texto: "Em série", correta: true, msg: "Correto! Sempre em série." },
                        { texto: "Em paralelo", correta: false, msg: "Paralelo é para voltagem." }
                    ]
                }
            ],
            's1e4': [
                {
                    tempo: 7,
                    titulo: "Resistência",
                    pergunta: "O que afeta a resistência de um fio?",
                    opcoes: [
                        { texto: "Comprimento e espessura", correta: true, msg: "Ótimo! E também o material." },
                        { texto: "Apenas cor", correta: false, msg: "Cor não afeta resistência." }
                    ]
                }
            ],
            's1e5': [
                {
                    tempo: 5,
                    titulo: "Lei de Ohm",
                    pergunta: "Qual é a fórmula correta?",
                    opcoes: [
                        { texto: "V = R × I", correta: true, msg: "Perfeito! Lei de Ohm." },
                        { texto: "V = R + I", correta: false, msg: "Não, é multiplicação." }
                    ]
                }
            ],
            's1e6': [
                {
                    tempo: 6,
                    titulo: "Potência",
                    pergunta: "Potência é medida em qual unidade?",
                    opcoes: [
                        { texto: "Watts (W)", correta: true, msg: "Correto! W de Watt." },
                        { texto: "Amperes (A)", correta: false, msg: "Amperes é para corrente." }
                    ]
                }
            ]
        };

        const resultado = interacoes[episodioId] || [];
        this.interacoesCache.set(episodioId, resultado);
        return resultado;
    }

    /**
     * Rolar até o player
     */
    rolarParaPlayer() {
        setTimeout(() => {
            const container = document.getElementById('video-player-container');
            if (container) {
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    }

    /**
     * Atualizar menu com episódio ativo
     */
    atualizarMenuAtivo(episodioId) {
        document.querySelectorAll('[data-sa][data-num]').forEach(el => {
            el.classList.remove('ativo');
        });
        
        const episodio = document.getElementById(episodioId);
        if (episodio) {
            episodio.classList.add('ativo');
        }
    }

    /**
     * Obter próximo episódio
     */
    proximoEpisodio() {
        if (!this.episodioAtivo) return null;

        const sa = this.episodioAtivo.getAttribute('data-sa');
        const num = parseInt(this.episodioAtivo.getAttribute('data-num')) + 1;
        
        const proximo = document.querySelector(`[data-sa="${sa}"][data-num="${num}"]`);
        return proximo ? proximo.id : null;
    }

    /**
     * Obter episódio anterior
     */
    episodioAnterior() {
        if (!this.episodioAtivo) return null;

        const sa = this.episodioAtivo.getAttribute('data-sa');
        const num = parseInt(this.episodioAtivo.getAttribute('data-num')) - 1;
        
        const anterior = document.querySelector(`[data-sa="${sa}"][data-num="${num}"]`);
        return anterior ? anterior.id : null;
    }
}

// Inicializar automaticamente
const adaptador = new AdaptadorAula2();

// Verificar se estamos em aula2.html
if (document.body.id === 'master' || document.querySelector('main [data-sa]')) {
    adaptador.init();

    // Adicionar controles de navegação
    document.addEventListener('DOMContentLoaded', function() {
        // Botão próximo episódio
        const btnProximo = document.querySelector('[href="#"]:last-of-type');
        if (btnProximo) {
            btnProximo.addEventListener('click', (e) => {
                e.preventDefault();
                const proximoId = adaptador.proximoEpisodio();
                if (proximoId) {
                    adaptador.carregarEpisodio(proximoId);
                    adaptador.rolarParaPlayer();
                }
            });
        }

        // Botão anterior episódio
        const btnAnterior = document.querySelector('a[href="aula1.html"]');
        if (btnAnterior) {
            btnAnterior.addEventListener('click', (e) => {
                const anteriorId = adaptador.episodioAnterior();
                if (anteriorId) {
                    e.preventDefault();
                    adaptador.carregarEpisodio(anteriorId);
                    adaptador.rolarParaPlayer();
                }
            });
        }
    });
}

// Exportar para uso externo
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdaptadorAula2;
}
