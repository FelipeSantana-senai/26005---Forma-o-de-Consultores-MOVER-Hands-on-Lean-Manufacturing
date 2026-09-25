//=================================================================
// CHART BAR
//=================================================================

const chartBar = document.getElementById('chart-bar'); //ID

new Chart(chartBar, {//identificação 'chatBar' tem que estar igual o const
    type: 'bar', //Tipo de gráfico
    data: {
        labels: ['Juliana', 'Fabiano', 'Camila', 'Paula', 'Zecki', 'Caio', 'Sansone', 'Ederson', 'Allan'],//Quantidade de barras
        datasets: [{
            label: 'Felicidade',
            data: [90, 85, 95, 99, 75, 80, 75, 90, 80],//Referencia numeral das barras | Circulos etc
            backgroundColor: [//Cor das barras
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)',
                'rgba(201, 03, 207, 0.2)',
                'rgba(201, 03, 07, 0.2)'


            ],
            borderColor: [//Cor das bordas das barras
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 23, 207)',
                'rgb(201, 503, 207)',
                'rgb(01, 73, 207)'
            ],
            borderWidth: 1//Largura das bordas
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true//começa do 0 a animação de escala.
            }
        }
    }
});
//=================================================================
// CHART LINE
//=================================================================

const chartLine = document.getElementById('chart-line');

new Chart(chartLine, {
    type: 'line',
    data: {
        labels: ['Isa', 'Tiago', 'Rafael', 'Getulio', 'Matheus', 'Igor', 'Noel'],
        datasets: [{
            label: 'Felicidade',
            data: [5, 8, 8, 9, 5, 5, 10],
            borderWidth: 1,

        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//=================================================================
// CHART DONNOUT
//=================================================================
const chartDoughnut = document.getElementById('chart-doughnut');

new Chart(chartDoughnut, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Votos',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,//Se colocar o border com valor 0 ele automaticamente tira a cor da borda. 

        }]
    },
});


//=================================================================
// CHART PIZZA
//=================================================================
const chartPizza = document.getElementById('chart-pizza');

new Chart(chartPizza, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Votos',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,

        }]
    },
});


//================================================================
//
//================================================================
// const chartPolarArea = document.getElementById('chart-polarArea');

//Para fazer a acessibilidade desse recurso utilizamos o aria-label que sera lido/interpretado diretamente pelo navegador.