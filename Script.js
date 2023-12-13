document.addEventListener("DOMContentLoaded", () => {
    const continents = ['Asia', 'Africa', 'Europe', 'North America', 'South America', 'Oceania'];
    const populationData = [4641054775, 1340598147, 747636026, 592072212, 430759766, 43155556]; // Example data (in billions)

    const ctx = document.getElementById('populationChart').getContext('2d');

    const populationChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: continents,
            datasets: [{
                label: 'World Population by Continent',
                data: populationData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Population (in billions)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Continents'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            tooltips: {
                enabled: false,
                custom: function(tooltipModel) {
                    const tooltip = document.querySelector('.tooltip');
                    if (tooltipModel.opacity > 0) {
                        tooltip.style.opacity = 1;
                        tooltip.style.left = tooltipModel.caretX + 'px';
                        tooltip.style.top = tooltipModel.caretY + 'px';
                        tooltip.textContent = 'Population: ' + tooltipModel.dataPoints[0].raw;
                    } else {
                        tooltip.style.opacity = 0;
                    }
                }
            }
        }
    });
});
