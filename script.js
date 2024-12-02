const ctx = document.getElementById("barChart");

new Chart(
    ctx, {
        type: 'bar',
        data: {
            labels: ["Pink", "Purple", "Fuchsia", "Maroon"],
            datasets: [
                {
                    label: 'Votes',
                    data: [12,19,3,10],
                    borderWidth: 2, 
                    backgroundColor: ['pink','purple','fuchsia','maroon'],
                    borderColor: ['black']
                }
            ]
        }
    }
)