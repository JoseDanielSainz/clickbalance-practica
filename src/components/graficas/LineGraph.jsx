import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { lineChartData } from '../../data/dummyData'

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)



export default function LineGraph() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }

  return (
    <Line options={options} data={lineChartData} />
  )
}