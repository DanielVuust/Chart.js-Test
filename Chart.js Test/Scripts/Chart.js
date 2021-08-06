var testChart = new Chart('myChart', {
    type: 'line',
    data: {
        labels: ['yoo', '2', 'test', '', 'p'],
        datasets: [{
            label: 'yoo',
            data: [0, 0, 0, 0],
            backgroundColor: 'rgba(191, 191, 191, 0.4)',
            pointBackgroundColor: 'black',
            borderColor: 'black',
            tension: 0.5,
            fill: true
        }]
    },
    options: {
        animation: {
            duration: 500
        },
        scales: {
            x: {
            },
            y: {
                min: 0,
                max: 1,
                ticks: {
                    stepSize: 0.2
                }
            }
        }
    }

});






