import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js'
import { pieChartData } from '../../data/dummyData'

ChartJS.register(
  Tooltip, Legend, ArcElement
)

export default function PieChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom"
      }
    }
  }

  return (
    <Doughnut options={options} data={pieChartData} />
  )
}