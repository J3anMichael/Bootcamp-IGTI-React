
let bar = new Chart(document.getElementById("barras"), {
    type: 'bar',
    data: {
        labels: ["Palio", "Uno", "Gol", "Corsa", "Up", "Onix"],
        datasets: [
            {
                label: "Realizado",
                data: [10, 35, 24, 11, 12, 19],
                backgroundColor: "green"
            },
            {
                label: "Planejado",
                data: [20, 25, 30, 10, 15, 20],
                backgroundColor: "purple"
            }

        ]

    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: "Vendas de Veiculos"
            }
        }


    }
});


let linhas = new Chart(document.getElementById("linhas"), {
    type: 'line',
    data: {
        labels: ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"],
    datasets: [
        {
            data: [1123, 1109, 1008, 1208, 1423, 1114, 1036],
            label: "Casos confirmados",
            borderColor: "rgb(156, 212, 239)",
            backgroundColor: "rgb(156, 212, 239,0.1)"


        },
        {
            data: [143, 160, 154, 200, 230, 231, 300],
            label: "Obitos",
            borderColor: "rgb(255, 114, 95)",
            backgroundColor: "rgb(255, 114, 95,0.1)"

        }
    ],
},
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'left',

            },
            title: {
                display: true,
                text: 'Curva de Covid'
            },
            layout: {
                padding: {
                    left: 100,
                    right: 100,
                    top: 50,
                    bottom: 10

                }
            }
        }
    }
});

let pizza = new Chart(document.getElementById("pizza"), {
    type: 'pie',
    data: {
        labels: ["Iphone X", "S20", "A32"],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: ["#3e95cd", "#3c8523", "#42F39F"]
        }
      ]
    },
    options: {
       responsive: true,
       plugins: {
           legend: {
               position: 'top'
           },
           title: {
               display: true,
               text: ' Celulares'
           }
       } 
    }
})

setInterval(getData, 10000000);


function getData() {
    pizza.data.labels.push("Iphone 12");
    pizza.data.datasets[0].data.push(30);
    pizza.update();
}