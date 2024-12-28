export const lineChartData = {
  labels: [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ],
  datasets: [
    {
      label: "Ventas",
      data: [300, 200, 340, 140, 530, 400, 340],
      borderColor: "#44BAE8",
    },
  ],
}

export const barChartData = {
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
  ],
  datasets: [
    {
      label: "Ventas 2022",
      data: [49000, 68000, 81000, 55000, 43000, 68000, 34000, 51000, 81000, 49000, 68000, 71000],
      backgroundColor: ["#efefef"]
    },
    {
      label: "Ventas 2023",
      data: [39000, 58000, 71000, 45000, 33000, 58000, 24000, 41000, 71000, 39000, 58000, 61000],
      backgroundColor: [
        " #2579bc ",
        " #3dbded ",
        " #053358 ",
      ]
    },
  ]

}

export const pieChartData = {
  labels: ["Ventas", "Inventarios", "Administración", "Finanzas"],
  datasets: [
    {
      data: [38.6, 22.5, 30.8, 8.1],
      backgroundColor: [
        " #3dbded ",
        " #2579bc ",
        " #053358 ",
        "#93D25F",
      ],
      hoverOffset: 10,
    }
  ]
}