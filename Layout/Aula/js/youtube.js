var option = {
    youtubeId: 'sc5AMSL-U6I',//id do youtube referencia ao codigo da url do youtube
    id: 'youtube1',//Id do video 
    loadingText: '<p>Carregando Video</p>',
    fluid: true,
    width: '100%',
    height: 'auto',
    playerVars: {
        iv_load_policy: 3,
        showinfo: 0,
        modestbranding: 1,
        wmode: 'transparent'
    },
    
    showTime: true,
    chapters: [
        {
            'time': '0m 0s',
            'title': '01 - Capítulo 1',
            'id': 'id1',
            'text': '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ytbvideo"> Iniciar </button>'
        },
        {
            'time': '01:43',
            'title': '02 - Capítulo 2',
            'id': 'id2',
            'text': ''
        },
        {
            'time': '02:43',
            'title': '03 - Capítulo 3',
            'id': 'id3',
            'text': ''
        },
        {
            'time': '03:43',
            'title': '04 - Capítulo 4',
            'id': 'id4',
            'text': ''
        },
    ]
};

YTC('#player1', option);
