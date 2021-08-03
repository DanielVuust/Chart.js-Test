

var xValues = [100, 200, 400, 500, 600, 700, 800, 900, 1000];
let testChart = new Chart('myChart', {
    type: 'line',
    data:{
        labels: ['yoo', '2', 'test', ''],
        datasets: [{
            label:'yoo',
            data: [10, 20, 25, 20],
            backgroundColor: 'rgba(191, 191, 191, 0.4)',
            pointBackgroundColor: 'black',
            borderColor: 'black',
            tension: 0.5,
            fill:true
        }]
    }
})
setTimeout(() => { console.log('Yhellow'); }, 10000);




