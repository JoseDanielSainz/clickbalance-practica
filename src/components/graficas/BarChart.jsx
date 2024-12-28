import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { barChartData } from '../../data/dummyData'

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

export default function BarChart() {
  const options = {}

  return (
    <Bar options={options} data={barChartData} />
  )
}