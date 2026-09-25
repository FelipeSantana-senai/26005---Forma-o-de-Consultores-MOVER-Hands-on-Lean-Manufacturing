const themeBtn = document.getElementById('themeSwitcher')
const grayBtn = document.getElementById("graySwitcher")
const daltBtn = document.getElementById("daltonicSwitcher")
const htmlAcess = document.getElementById("master")

//===========================================================================
// CONFIGURANDO LOCAL STORAGE
//===========================================================================

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

var settings = {
    darkMode: prefersColorScheme.matches,
    colorblind: false,
    monochrome: false,
    fontSize: 90,
}

function setSettingsAccessibilityStorage(object) {
    localStorage.setItem('settingsAccessibility', JSON.stringify(object))
}

// Caso exista dados salvos, aplicar todos os padrões ja aplicados do localstorage
if (localStorage.getItem('settingsAccessibility')) {
    settings = JSON.parse(localStorage.getItem('settingsAccessibility'))
}

// Funções para marcar vídeos assistidos
function markAsWatched(videoUrl) {
    let watched = JSON.parse(localStorage.getItem('watchedVideos') || '[]');
    if (!watched.includes(videoUrl)) {
        watched.push(videoUrl);
        localStorage.setItem('watchedVideos', JSON.stringify(watched));
    }
}

function isWatched(videoUrl) {
    let watched = JSON.parse(localStorage.getItem('watchedVideos') || '[]');
    return watched.includes(videoUrl);
}

function updateWatchedChecks() {
    const thumbs = document.querySelectorAll('.episode-thumb');
    thumbs.forEach(thumb => {
        const img = thumb.querySelector('img');
        if (img) {
            const videoUrl = episodesData.find(ep => ep.thumb === img.src)?.video;
            if (videoUrl) {
                let check = thumb.querySelector('.watched-check');
                if (!check) {
                    check = document.createElement('div');
                    check.className = 'watched-check';
                    thumb.appendChild(check);
                }
                check.style.display = isWatched(videoUrl) ? 'flex' : 'none';
            }
        }
    });
}

window.currentVideoUrl = "";
window.nextEpisodeTimer = null;
window.interactivePlayerInstance = null;

function updateHeroButton() {
    const lastPlayed = localStorage.getItem('lastPlayedEpisode');
    const heroBtnText = document.getElementById('heroPlayBtnText');
    const heroBtnIcon = document.querySelector('#heroPlayBtn i');

    if (lastPlayed && heroBtnText) {
        heroBtnText.innerText = 'Continuar';
        if (heroBtnIcon) {
            heroBtnIcon.className = 'bx bx-play-circle';
            heroBtnIcon.title = 'continuar';
        }
    } else if (heroBtnText) {
        heroBtnText.innerText = 'Começar';
        if (heroBtnIcon) {
            heroBtnIcon.className = 'bx bx-play';
            heroBtnIcon.title = 'play';
        }
    }
}

function saveProgress(videoUrl) {
    localStorage.setItem('lastPlayedEpisode', videoUrl);
    updateHeroButton();
}

// Setando valores dos inputs e temas
function validadeThemesAndInputs() {

    grayBtn.checked = settings.monochrome
    daltBtn.checked = settings.colorblind
    themeBtn.checked = settings.darkMode

    if (themeBtn.checked) {
        document.body.classList.add('theme-2')
        document.body.classList.remove('theme-1')
    } else {
        document.body.classList.add('theme-1')
        document.body.classList.remove('theme-2')
    }

    grayBtn.checked ? htmlAcess.classList.add('theme-3') : htmlAcess.classList.remove('theme-3')
    daltBtn.checked ? htmlAcess.classList.add('theme-4') : htmlAcess.classList.remove('theme-4')

    $('html').css("font-size", settings.fontSize + "%");
    $("#size").val(settings.fontSize)

}

validadeThemesAndInputs()

//===========================================================================
// FORM SELEÇÃO DE TEMA
//===========================================================================
const buttons = document.getElementsByClassName("form-check-input");
const arr = [...buttons];

arr.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.opacity = "1";
        arr
            .filter(function (item) {
                return item != element;
            })
            .forEach((item) => {
                item.style.opacity = "1";
            });
    });
});

//===========================================================================
// SELETOR DE TEMA
//===========================================================================

// Botão de switch de tema

function switchTheme() {
    settings.darkMode = !settings.darkMode;
    themeBtn.checked = settings.darkMode;

    document.body.classList.toggle('theme-1');
    document.body.classList.toggle('theme-2');

    setSettingsAccessibilityStorage(settings);
}

themeBtn.addEventListener('change', switchTheme);

//===========================================================================
// ACESSIBILIDADE
//===========================================================================

grayBtn.addEventListener('click', () => {

    if (grayBtn.checked == true) {

        htmlAcess.classList.remove("theme-4")
        htmlAcess.classList.add("theme-3")
        daltBtn.checked = false

        settings = { ...settings, monochrome: true, colorblind: false }
        setSettingsAccessibilityStorage(settings)

    } else {
        htmlAcess.classList.remove("theme-4")
        htmlAcess.classList.remove("theme-3")
        daltBtn.checked = false

        settings = { ...settings, monochrome: false, colorblind: false }
        setSettingsAccessibilityStorage(settings)

    }
})

daltBtn.addEventListener('click', () => {

    if (daltBtn.checked == true) {
        htmlAcess.classList.remove("theme-3")
        htmlAcess.classList.add("theme-4")
        grayBtn.checked = false

        settings = { ...settings, monochrome: false, colorblind: true }
        setSettingsAccessibilityStorage(settings)

    } else {
        htmlAcess.classList.remove("theme-3")
        htmlAcess.classList.remove("theme-4")
        grayBtn.checked = false

        settings = { ...settings, monochrome: false, colorblind: false }
        setSettingsAccessibilityStorage(settings)

    }
})

//IMAGEM

const btn = document.querySelectorAll("button");
const root = document.documentElement;

function mudaCor(bt) {
    //pega o valor do data-cor do botão clicado e coloca como valor da variável --cor no :root;
    btn.forEach((datac) => {
        datac = this.getAttribute('data-cor');
        root.style.setProperty('--cor', datac);
    });

    //coloca classe ativo no btn clicado e remove dos irmãos
    btn.forEach((limpa) => {
        limpa.classList.remove('ativo');
    })
    bt.currentTarget.classList.add('ativo');
}

// função que ativa quando o btn é clicado
btn.forEach((trocar) => {
    trocar.addEventListener('click', mudaCor);
});

//===========================================================================
// MUDANÇA DE FONTE
//===========================================================================
$("#size").change(function () {
    $('html').css("font-size", $(this).val() + "%");

    settings.fontSize = $(this).val()
    setSettingsAccessibilityStorage(settings)

});


//===========================================================================
// TIMELINE
//===========================================================================
(function () {

    // VARIABLES
    const track = document.querySelector(".timeline ol"),
        cards = document.querySelectorAll(".timeline li > div"),
        arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
        arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
        disabledClass = "disabled",
        mobileQuery = window.matchMedia("(max-width: 599px)");

    // START
    window.addEventListener("load", init);

    function init() {
        if (!track) return;
        layout();
        if (arrowPrev && arrowNext) {
            arrowPrev.addEventListener("click", () => scrollTl(-1));
            arrowNext.addEventListener("click", () => scrollTl(1));
            track.addEventListener("scroll", updateArrows);
        }
        window.addEventListener("resize", layout);
        mobileQuery.addEventListener ? mobileQuery.addEventListener("change", layout) : mobileQuery.addListener(layout);
    }

    // AJUSTA ALTURAS E ESPACAMENTO VERTICAL CONFORME O CONTEUDO
    function layout() {
        if (mobileQuery.matches) {
            track.style.paddingTop = "";
            track.style.paddingBottom = "";
            cards.forEach((card) => (card.style.height = ""));
        } else {
            setEqualHeights(cards);
        }
        track.scrollLeft = 0;
        updateArrows();
    }

    // SET EQUAL HEIGHTS + PADDING SUFICIENTE PARA OS CARDS ACIMA/ABAIXO DA LINHA
    function setEqualHeights(el) {
        let maxHeight = 0;
        el.forEach((card) => {
            card.style.height = "auto";
            maxHeight = Math.max(maxHeight, card.offsetHeight);
        });
        el.forEach((card) => (card.style.height = `${maxHeight}px`));
        track.style.paddingTop = `${maxHeight + 40}px`;
        track.style.paddingBottom = `${maxHeight + 70}px`;
    }

    // SCROLL HORIZONTAL COM LIMITES REAIS
    function scrollTl(direction) {
        const step = Math.max(280, Math.round(track.clientWidth * 0.8));
        track.scrollBy({ left: direction * step, behavior: "smooth" });
    }

    // SET STATE OF PREV/NEXT ARROWS BASEADO NA POSICAO DO SCROLL
    function updateArrows() {
        const maxScroll = track.scrollWidth - track.clientWidth;
        setBtnState(arrowPrev, track.scrollLeft <= 1);
        setBtnState(arrowNext, track.scrollLeft >= maxScroll - 1);
    }

    function setBtnState(el, disabled) {
        if (!el) return;
        el.classList.toggle(disabledClass, disabled);
        el.disabled = disabled;
    }

})();

//===========================================================================
// VLIBRAS HABILIT
//===========================================================================
// O plugin oficial do VLibras (v7) não usa mais a marcação antiga <div vw> /
// #vlibras-show: ele injeta, no <body>, dois hosts em Shadow DOM:
//   - #vlibras-access-wrapper : botão de acesso (fixo na lateral);
//   - #vlibras-app-root       : painel do tradutor.
// Esta função alterna a visibilidade desses hosts, respeitando também as
// versões legadas (<div vw> / #vlibras-show).
function vlibrasHosts() {
    return Array.from(
        document.querySelectorAll("#vlibras-access-wrapper, #vlibras-app-root")
    );
}

function isVLibrasShown() {
    const hosts = vlibrasHosts();
    if (hosts.length) return hosts.some(h => h.style.display !== "none");
    const vw = document.querySelector("div[vw]");
    if (vw) return vw.classList.contains("enabled");
    const legacy = document.getElementById("vlibras-show");
    return legacy ? legacy.classList.contains("active") : false;
}

function setVLibras(shown) {
    const hosts = vlibrasHosts();
    if (hosts.length) {
        hosts.forEach(h => { h.style.display = shown ? "" : "none"; });
        return;
    }
    const vw = document.querySelector("div[vw]");
    if (vw) {
        vw.classList.toggle("enabled", shown);
        return;
    }
    const legacy = document.getElementById("vlibras-show");
    if (legacy) legacy.classList.toggle("active", shown);
}

function vlibrashow() {
    const shown = !isVLibrasShown();
    setVLibras(shown);
    const btn = document.getElementById("vlibrasToggle");
    if (btn) {
        btn.setAttribute("aria-pressed", String(shown));
    }
    return shown;
}
//===========================================================================
// VIDEOS COM VLIBRAS
//===========================================================================

function toggleAllVideos(isLibras) {
    Object.keys(videos).forEach(videoId => {
        const iframe = document.getElementById(`video-iframe-${videoId}`);
        if (iframe) {
            iframe.src = ""; // Pausa o vídeo atual
            iframe.src = isLibras ? videos[videoId].comLibras : videos[videoId].semLibras;
        }
    });
    document.querySelectorAll('.btn-sem-libras').forEach(btn => {
        btn.disabled = !isLibras;
        btn.classList.toggle('btn-primary', !isLibras);
        btn.classList.toggle('btn-outline-primary', isLibras);
    });
    document.querySelectorAll('.btn-com-libras').forEach(btn => {
        btn.disabled = isLibras;
        btn.classList.toggle('btn-primary', isLibras);
        btn.classList.toggle('btn-outline-primary', !isLibras);
    });

    localStorage.setItem('isLibrasVideoActive', isLibras); // Persiste o estado dos vídeos
}

function toggleVLibrasAndVideos() {
    const enabled = vlibrashow(); // Chama a função original do VLibras
    const isLibrasVideoActive = localStorage.getItem('isLibrasVideoActive') === 'true';

    // Só troca os vídeos se o estado do VLibras não corresponder ao estado dos vídeos
    if (enabled && !isLibrasVideoActive) {
        toggleAllVideos(true); // Ativa vídeos com Libras
    } else if (!enabled && isLibrasVideoActive) {
        toggleAllVideos(false); // Desativa vídeos com Libras
    }
}

// Carrega vídeos com base no estado salvo no localStorage
document.addEventListener("DOMContentLoaded", () => {
    const isLibrasVideoActive = localStorage.getItem('isLibrasVideoActive') === 'true';
    if (typeof videos !== "undefined") {
        toggleAllVideos(isLibrasVideoActive);
    }
    // Sincroniza a indicação visual do botão com o estado real do VLibras
    const btn = document.getElementById("vlibrasToggle");
    if (btn) {
        btn.setAttribute("aria-pressed", String(isVLibrasShown()));
    }
});

//===========================================================================
// ITEM SPOT IMG MODAL
//===========================================================================
$('.modal').click(function () {
    var id = $(this).attr('id');
    id = $(this).attr("id").replace(/highlight-spot-modal-/g, "");
    $("#item-spot" + id).addClass("highlight-spot-visited");
});



//===========================================================================
// POPUP MODAL JAVASCRIPT POPUP
//===========================================================================
function popup(url, params) {
    if (typeof params == 'undefined') params = {};
    if (typeof params['win_name'] == 'undefined') params['win_name'] = 'jan_pop';
    if (typeof params['w'] == 'undefined') params['w'] = 810;
    if (typeof params['h'] == 'undefined') params['h'] = screen.height - 55;
    if (typeof params['scroll'] == 'undefined') params['scroll'] = 'yes';
    if (typeof params['resizable'] == 'undefined') params['resizable'] = 'yes';
    params['win'] = window.open(url, params['win_name'], 'scrollbars=' + params['scroll']
        + ',resizable=' + params['resizable'] + ',toolbar=no,location=no,directories=no,'
        + 'menubar=no,status=yes,top=0,left='
        + ((screen.width - params['w']) / 2) + ',width=' + params['w'] + ',height=' + params['h']);
    params['win'].focus();
}
//

$(function () {
    $('.scroll-down').click(function () {
        $('html, body').animate({ scrollTop: $('section.ok').offset().top }, 'slow');
        return false;
    });
});

//===========================================================================
// SCROLL PROGRESS
//===========================================================================

let progressSection = document.querySelector(".progress_section");
let progressBar = document.querySelector(".progress_bar");
let progressNum = document.querySelector(".progress_num");

function ScroolPercent() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        return 100;
    }
    var porcentagem = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (porcentagem > 100) {
        porcentagem = 100;
    }

    return porcentagem;
}

window.addEventListener("scroll", () => {
    progressBar.style.width = `${ScroolPercent()}%`;
    progressNum.innerHTML = `${Math.ceil(ScroolPercent())}%`;
})


// MENU
function loadMenu() {
    const menuContainer = document.getElementById('menu-container');
    if (!menuContainer) {
        console.error('Elemento #menu-container não encontrado no DOM.');
        return;
    }

    // Obtém o nome do arquivo da página atual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Cria uma cópia do menuData para evitar modificar o original
    const data = JSON.parse(JSON.stringify(menuData));

    // Define isOpen com base na página atual
    data.menu.forEach(item => {
        item.isOpen = item.page === currentPage;
    });

    // Gera o HTML do menu
    let html = '<div uk-accordion>';
    data.menu.forEach(item => {
        const isOpenClass = item.isOpen ? 'uk-open' : '';
        html += `
            <li class="${isOpenClass}">
                <a class="uk-accordion-title" style="font-size: var(--bs-nav-link-font-size)!important;">
                    <i class="${item.icon}"></i>
                    ${item.title}
                </a>
                <div class="uk-accordion-content">
                    <ul class="icons-list">
                        ${renderSubitems(item.subitems)}
                    </ul>
                </div>
            </li>`;
    });
    html += '</div>';

    // Insere o HTML no contêiner
    menuContainer.innerHTML = html;
}

function renderSubitems(subitems) {
    let subHtml = '';
    let currentLevel = 0;

    subitems.forEach(subitem => {
        const level = parseInt(subitem.nivel) || 1;
        const marginClass = `ms-${level * 2}`;

        // Fecha listas anteriores se o nível diminuir
        while (currentLevel > level) {
            subHtml += '</ul></li>';
            currentLevel--;
        }

        // Abre uma nova sublista se o nível aumentar
        if (level > currentLevel) {
            subHtml += '<li><ul class="icons-list">';
            currentLevel = level;
        } else if (currentLevel === 0) {
            subHtml += '<ul class="icons-list">';
            currentLevel = level;
        }

        subHtml += `
            <li>
                <a class="nav-link my-1 ${marginClass}" href="${subitem.link}">
                    ${subitem.title}
                </a>
            </li>`;
    });

    // Fecha todas as listas abertas
    while (currentLevel > 0) {
        subHtml += '</ul></li>';
        currentLevel--;
    }

    return subHtml;
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        loadMenu();
    } catch (error) {
        console.error('Erro ao carregar o menu:', error);
    }
});

//===========================================================================
// LÓGICA DO PLAYER ESTILO NETFLIX (UNIFICADO)
//===========================================================================

let currentZoom = 1;

/**
 * Abre o player de vídeo do Bootstrap
 * @param {string} url - Link do vídeo
 */

// --- DATA INITIALIZATION ---
// This logic allows backgroundVideos to be defined in HTML for better semantics
if (typeof backgroundVideos === 'undefined') {
    window.backgroundVideos = {};
}

function syncBackgroundVideosFromHTML() {
    const bgContainer = document.querySelector('.backgroundVideos');
    if (bgContainer) {
        bgContainer.querySelectorAll('a').forEach(link => {
            if (link.id) {
                window.backgroundVideos[link.id] = link.href;
            }
        });
    }
}

function syncEpisodesFromHTML() {
    const epContainer = document.querySelector('.episodesData');
    if (!epContainer) return;

    window.episodesData = [];
    epContainer.querySelectorAll('[id]').forEach(epEl => {
        let rawInterations = epEl.getAttribute('data-interacoes');
        let parsedInteractions = [];
        try {
            if (rawInterations) {
                parsedInteractions = JSON.parse(rawInterations);
            }
        } catch (e) {
            console.error(`Erro ao processar interações para o episódio ${epEl.id}:`, e);
        }

        const ep = {
            id: epEl.id,
            sa: epEl.getAttribute('data-sa') || 's1',
            special: epEl.getAttribute('data-special') || null,
            num: parseInt(epEl.getAttribute('data-num')) || 0,
            type: epEl.getAttribute('data-type') || 'video',
            title: epEl.querySelector('.title')?.innerHTML || '',
            duration: epEl.querySelector('.duration')?.innerHTML || '',
            video: epEl.querySelector('.video')?.getAttribute('href') || '',
            thumb: epEl.querySelector('.thumb')?.getAttribute('src') || '',
            sinopse: epEl.querySelector('.sinopse')?.innerHTML || '',
            bookText: epEl.querySelector('.book-text')?.innerHTML || '',
            formulaHTML: epEl.querySelector('.formula')?.innerHTML || '',
            interacoes: parsedInteractions
        };
        window.episodesData.push(ep);
    });
}

const ICONS = {
    video: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5V19L19 12L8 5Z" fill="currentColor"/></svg>',
    podcast: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C7.03 3 3 7.03 3 12V19C3 20.1 3.9 21 5 21H7V15H5V12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12V15H17V21H19C20.1 21 21 20.1 21 19V12C21 7.03 16.97 3 12 3Z" fill="currentColor"/><rect x="5" y="15" width="2" height="6" fill="currentColor"/><rect x="17" y="15" width="2" height="6" fill="currentColor"/></svg>',
    mesacast: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.33 13 0 14.33 0 17V19H16V17C16 14.33 10.67 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.33 17 17V19H24V17C24 14.33 18.67 13 16 13Z" fill="currentColor"/></svg>'
};

const TYPE_LABELS = {
    video: "Vídeo Aula",
    podcast: "Podcast",
    mesacast: "Mesacast"
};


// --- LÓGICA DO PLAYER ---
function toggleMute() {
    const video = document.getElementById('heroVideo');
    const btn = document.getElementById('muteBtn');
    const content = document.getElementById('heroContent');
    const gradient = document.getElementById('heroGradient');
    const logo = document.getElementById('heroLogo');

    if (video.muted) {
        // UNMUTE: Som LIGADO -> REINICIA O VÍDEO
        video.currentTime = 0;
        video.muted = false;

        btn.innerHTML = '🔊';
        btn.style.backgroundColor = 'rgba(255,255,255,0.9)';
        btn.style.color = '#000';

        content.style.opacity = '0';
        gradient.style.opacity = '0';
        logo.style.opacity = '0';
    } else {
        // MUTE: Som DESLIGADO
        video.muted = true;
        btn.innerHTML = '🔇';
        btn.style.backgroundColor = 'rgba(20,20,20,0.6)';
        btn.style.color = '#fff';

        content.style.opacity = '1';
        gradient.style.opacity = '1';
        logo.style.opacity = '1';
    }
}

function changeSeason() {
    syncBackgroundVideosFromHTML();
    renderEpisodes(); // FIX: Atualizar a lista ao trocar SA
    const season = document.getElementById('seasonSelector').value;
    const videoElement = document.getElementById('heroVideo');
    if (window.backgroundVideos && window.backgroundVideos[season]) {
        videoElement.src = window.backgroundVideos[season];
        videoElement.load();
        videoElement.muted = true;

        const btn = document.getElementById('muteBtn');
        btn.innerHTML = '🔇';
        btn.style.backgroundColor = 'rgba(20,20,20,0.6)';
        btn.style.color = '#fff';
        document.getElementById('heroContent').style.opacity = '1';
        document.getElementById('heroGradient').style.opacity = '1';
        document.getElementById('heroLogo').style.opacity = '1';

        videoElement.play().catch(e => console.log("Autoplay bloqueado."));
    }
    renderEpisodes();
}

function renderEpisodes() {
    const season = document.getElementById('seasonSelector').value;
    const container = document.getElementById('episodesListContainer');
    container.innerHTML = '';

    const filtered = episodesData.filter(ep => ep.sa === season);

    filtered.forEach(ep => {
        const row = document.createElement('div');
        row.className = 'episode-row';
        if (ep.special) row.classList.add('special-episode');
        if (isWatched(ep.video)) row.classList.add('watched-row');

        row.onclick = () => openVideoPlayer(ep.video);

        let num = ep.num;
        if (ep.special === 'recap') num = '↺';
        if (ep.special === 'teaser') num = '»';

        let iconSvg = ICONS[ep.type] || ICONS['video'];
        let typeLabel = TYPE_LABELS[ep.type] || "Vídeo";

        row.innerHTML = `
            <div class="episode-num">${num}</div>
            
            <div class="episode-thumb" onmouseover="this.children[1].style.opacity='1'" onmouseout="this.children[1].style.opacity='0'">
                <img src="${ep.thumb}" onerror="this.src='https://via.placeholder.com/160x90/333/fff?text=Play'" alt="${ep.title}">
                <div class="episode-play-overlay" title="${typeLabel}">
                    <span class="episode-play-icon">${iconSvg}</span>
                </div>
                <div class="watched-check" style="display: ${isWatched(ep.video) ? 'block' : 'none'};">✓</div>
            </div>
            
            <div class="episode-details">
                <h5>${ep.title}</h5>
                <p>${ep.sinopse}</p>
            </div>
            <div class="episode-meta">
                <span class="episode-duration">${ep.duration}</span>
                <div class="episode-type-icon" title="${typeLabel}">
                    ${iconSvg}
                </div>
            </div>
        `;
        container.appendChild(row);
    });
}

// --- FUNÇÕES DE NAVEGAÇÃO DOS MODAIS ---
/**
 * Abre o player de vídeo
 */
function openVideoPlayer(url) {
    if (!url || url.includes("COLE_AQUI")) {
        alert("Conteúdo demonstrativo. Insira o link real no código.");
        return;
    }

    const modal = document.getElementById('videoModal');

    // Destruir instância anterior se existir
    if (window.interactivePlayerInstance) {
        window.interactivePlayerInstance.destroy();
        window.interactivePlayerInstance = null;
    }

    // Buscar dados do episódio para as interações
    const currentEpisode = episodesData.find(ep => ep.video === url);
    const interacoes = currentEpisode ? (currentEpisode.interacoes || []) : [];

    // RESOLVER URL REAL (Mapeamento de Redirecionamento para Link Direto)
    let finalUrl = url;
    if (currentEpisode && (typeof videos !== 'undefined')) {
        const mappedUrls = videos[currentEpisode.id] || videos[currentEpisode.num];
        if (mappedUrls) {
            const isLibras = localStorage.getItem('isLibrasVideoActive') === 'true';
            finalUrl = isLibras ? mappedUrls.comLibras : mappedUrls.semLibras;
            console.log(`Mapeando vídeo ${currentEpisode.id}: ${url} -> ${finalUrl}`);
        }
    }

    // Rastrear URL original para o progresso, mas usar finalUrl para o player
    window.currentVideoUrl = url;
    saveProgress(url);

    // Abrir modal
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = '1', 10);
    document.body.classList.add('modal-open');

    // Inicializar Player Interativo
    window.interactivePlayerInstance = new VideoInterativoUniversal({
        containerId: 'interactiveVideoContainer',
        videoUrl: finalUrl,
        autoplay: true,
        interacoes: interacoes
    });

    // Marcar como assistido
    markAsWatched(url);
    updateWatchedChecks();
    renderEpisodes();

    // Sincronizar UI do modal
    syncModalContent(url);

    // Adicionar event listener para ESC
    document.addEventListener('keydown', handleEscapeKey);
}

function syncModalContent(url) {
    const currentEpisode = episodesData.find(ep => ep.video === url);
    if (!currentEpisode) return;

    // Título e Sinopse
    document.getElementById('currentEpisodeSynopsis').innerHTML = `<strong>${currentEpisode.title}</strong><br><br>${currentEpisode.sinopse}<hr>${currentEpisode.bookText}`;

    // Playlist de Episódios
    const seasonEpisodes = episodesData.filter(ep => ep.sa === currentEpisode.sa).sort((a, b) => a.num - b.num);
    const fullList = document.getElementById('fullEpisodesList');
    if (fullList) {
        fullList.innerHTML = '';
        seasonEpisodes.forEach(ep => {
            const epDiv = document.createElement('div');
            epDiv.className = `playlist-episode-item ${ep.video === url ? 'active' : ''}`;
            epDiv.onclick = () => changeVideo(ep.video);
            epDiv.innerHTML = `
                <div class="playlist-episode-thumb">
                    <img src="${ep.thumb}" onerror="this.src='https://via.placeholder.com/60x34/333/fff?text=Play'" alt="${ep.title}">
                    <div class="watched-check" style="display: ${isWatched(ep.video) ? 'block' : 'none'};">✓</div>
                </div>
                <div class="playlist-episode-info">
                    <div class="playlist-episode-title">${ep.num}. ${ep.title}</div>
                    <div class="next-episode-duration">${ep.duration}</div>
                </div>
            `;
            fullList.appendChild(epDiv);
        });
    }

    // Lógica do botão "Próximo Episódio" (Timer)
    if (window.nextEpisodeTimer) clearTimeout(window.nextEpisodeTimer);
    const nextBtnContainer = document.getElementById('nextEpisodeBtnContainer');
    if (nextBtnContainer) nextBtnContainer.style.display = 'none';

    const nextEpisodes = episodesData.filter(ep => ep.sa === currentEpisode.sa && ep.num > currentEpisode.num && !ep.special).sort((a, b) => a.num - b.num);
    if (nextEpisodes.length > 0) {
        window.nextEpisodeTimer = setTimeout(() => {
            const nextBtn = document.getElementById('nextEpisodeBtnContainer');
            if (nextBtn) {
                nextBtn.style.display = 'block';
                document.getElementById('nextEpisodeBtn').onclick = () => changeVideo(nextEpisodes[0].video);
            }
        }, 20000); // FIX: Mostra após 20 segundos fixos
    }

    // Resetar scroll do modal
    const modalContent = document.querySelector('.video-modal-content');
    if (modalContent) modalContent.scrollTop = 0;

    // Abrir aba de Sinopse por padrão
    const synopsisTab = document.getElementById('synopsis-tab');
    if (synopsisTab) {
        const tab = new bootstrap.Tab(synopsisTab);
        tab.show();
    }
}

function parseDuration(durationStr) {
    if (!durationStr) return 0;
    const match = durationStr.match(/(\d+)\s*min/);
    if (match) {
        return parseInt(match[1]) * 60;
    }
    return 0;
}


function changeVideo(url) {
    if (!url || url.includes("COLE_AQUI")) {
        alert("Conteúdo demonstrativo. Insira o link real no código.");
        return;
    }

    // Destruir instância anterior se existir
    if (window.interactivePlayerInstance) {
        window.interactivePlayerInstance.destroy();
        window.interactivePlayerInstance = null;
    }

    const currentEpisode = episodesData.find(ep => ep.video === url);
    const interacoes = currentEpisode ? (currentEpisode.interacoes || []) : [];

    // RESOLVER URL REAL
    let finalUrl = url;
    if (currentEpisode && (typeof videos !== 'undefined')) {
        const mappedUrls = videos[currentEpisode.id] || videos[currentEpisode.num];
        if (mappedUrls) {
            const isLibras = localStorage.getItem('isLibrasVideoActive') === 'true';
            finalUrl = isLibras ? mappedUrls.comLibras : mappedUrls.semLibras;
            console.log(`Mapeando vídeo ${currentEpisode.id} (change): ${url} -> ${finalUrl}`);
        }
    }

    // Rastrear URL
    window.currentVideoUrl = url;
    saveProgress(url);

    // Inicializar Player Interativo
    window.interactivePlayerInstance = new VideoInterativoUniversal({
        containerId: 'interactiveVideoContainer',
        videoUrl: finalUrl,
        autoplay: true,
        interacoes: interacoes
    });

    // Marcar como assistido
    markAsWatched(url);
    updateWatchedChecks();
    renderEpisodes();

    // Sincronizar UI do modal
    syncModalContent(url);
}

function playNextEpisode() {
    const currentEpisode = episodesData.find(ep => ep.video === window.currentVideoUrl);
    if (currentEpisode) {
        const nextEpisodes = episodesData.filter(ep => ep.sa === currentEpisode.sa && ep.num > currentEpisode.num && !ep.special).sort((a, b) => a.num - b.num);
        if (nextEpisodes.length > 0) {
            changeVideo(nextEpisodes[0].video);
        }
    }
}

function toggleFullscreen() {
    const elem = document.getElementById('senai-player-wrapper');
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function closeVideoPlayer() {
    const modal = document.getElementById('videoModal');

    if (window.interactivePlayerInstance) {
        window.interactivePlayerInstance.destroy();
        window.interactivePlayerInstance = null;
    }

    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }, 300);

    // Remover event listener para ESC
    document.removeEventListener('keydown', handleEscapeKey);
}

function playFirstEpisode() {
    const lastPlayed = localStorage.getItem('lastPlayedEpisode');
    if (lastPlayed) {
        openVideoPlayer(lastPlayed);
    } else {
        const season = document.getElementById('seasonSelector').value;
        const firstEp = episodesData.find(ep => ep.sa === season && !ep.special);
        if (firstEp) {
            openVideoPlayer(firstEp.video);
        }
    }
}

function openDetails() {
    const modal = document.getElementById('detailsModal');
    modal.style.display = 'flex';
    setTimeout(() => modal.style.opacity = '1', 10);
    filterDetailsGrid();
}

function closeDetails() {
    const modal = document.getElementById('detailsModal');
    modal.style.opacity = '0';
    setTimeout(() => modal.style.display = 'none', 300);
}

function filterDetailsGrid() {
    const grid = document.getElementById('detailsGrid');
    grid.innerHTML = '';
    const season = document.getElementById('detailsSeasonSelect').value;

    // FILTRO APLICADO: Ignora itens "special" (recap e teaser) nesta visualização
    const filtered = episodesData.filter(ep => ep.sa === season && !ep.special);

    filtered.forEach(ep => {
        const card = document.createElement('div');
        card.style.cssText = "background-color: #2f2f2f; border-radius: 4px; overflow: hidden; cursor: pointer; display: flex; flex-direction: column; transition: transform 0.2s;";
        card.onmouseover = function () {
            this.style.transform = 'scale(1.03)';
            this.style.backgroundColor = '#444';
        };
        card.onmouseout = function () {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = '#2f2f2f';
        };
        card.onclick = () => {
            openConcept(ep.id);
        };

        let iconSvg = ICONS[ep.type] || ICONS['video'];
        let typeLabel = TYPE_LABELS[ep.type] || "Vídeo";

        card.innerHTML = `
            <div style="position:relative;">
                <img src="${ep.thumb}" onerror="this.src='https://via.placeholder.com/300x170/333/fff?text=EP${ep.num}'" style="width:100%; aspect-ratio:16/9; object-fit:cover; display:block;">
                <div style="position:absolute; bottom:5px; right:5px; background:rgba(0,0,0,0.8); color:white; font-size:0.8rem; padding:2px 5px; border-radius:2px;">${ep.duration}</div>
                <div title="${typeLabel}" style="position:absolute; top:5px; left:5px; background:rgba(0,0,0,0.6); padding:4px; border-radius:2px; display:flex;">
                    <div style="width:16px; height:16px;">${iconSvg}</div>
                </div>
            </div>
            <div style="padding:10px;">
                <div style="font-weight:bold; font-size:0.9rem; color:white; margin-bottom:5px;">${ep.num}. ${ep.title}</div>
                <div style="font-size:0.8rem; color:#aaa;">Clique para detalhes</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openConcept(id) {
    const ep = episodesData.find(e => e.id === id);
    if (ep) {
        document.getElementById('bookTitle').innerText = ep.title;
        document.getElementById('bookText').innerHTML = ep.bookText;
        document.getElementById('bookFormula').innerText = ep.formulaHTML || "-";
        document.getElementById('bookImage').src = ep.thumb;

        document.getElementById('detailsModal').style.display = 'none';
        const modal = document.getElementById('conceptModal');
        modal.style.display = 'flex';
        setTimeout(() => modal.style.opacity = '1', 10);
    }
}

function closeConcept() {
    const modal = document.getElementById('conceptModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.getElementById('detailsModal').style.display = 'flex';
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    syncBackgroundVideosFromHTML();
    syncEpisodesFromHTML();
    if (typeof episodesData !== 'undefined' && episodesData.length > 0) {
        renderEpisodes();
    }
    updateHeroButton();
});

// Event listener para fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const videoModal = document.getElementById('videoModal');
        const detailsModal = document.getElementById('detailsModal');
        const conceptModal = document.getElementById('conceptModal');

        if (videoModal.style.display === 'flex') {
            closeVideoPlayer();
        } else if (detailsModal.style.display === 'flex') {
            closeDetails();
        } else if (conceptModal.style.display === 'flex') {
            closeConcept();
        }
    }
});


//
// Simulador teste
//


// Função auxiliar para fechar modal com ESC
function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        const videoModal = document.getElementById('videoModal');
        const detailsModal = document.getElementById('detailsModal');
        const conceptModal = document.getElementById('conceptModal');

        if (videoModal && videoModal.style.display === 'flex') {
            closeVideoPlayer();
        } else if (detailsModal && detailsModal.style.display === 'flex') {
            closeDetails();
        } else if (conceptModal && conceptModal.style.display === 'flex') {
            closeConcept();
        }
    }
}


// função para trocar o modal de creditos
function alterarCreditos() {
    let btnCheck = document.querySelector("#checkDN")
    if (!btnCheck.checked) {
        document.querySelector("[data-bs-target='#creditosSP']").style.display = "block"
        document.querySelector("[data-bs-target='#creditosDN']").style.display = "none"
    } else {
        document.querySelector("[data-bs-target='#creditosDN']").style.display = "block"
        document.querySelector("[data-bs-target='#creditosSP']").style.display = "none"
    }

}