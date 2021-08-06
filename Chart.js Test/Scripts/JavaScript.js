function test() {    
    setInterval(test2, 2000);
}

function test2() {
    testChart.data.datasets[0].data.push(Math.random());
    testChart.data.datasets[0].data.shift();    
    testChart.update();
}
function apiTest() {
    console.log('ayy');
}