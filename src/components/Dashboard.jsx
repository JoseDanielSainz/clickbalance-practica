import BarChart from './graficas/BarChart'
import LineGraph from './graficas/LineGraph'
import PieChart from './graficas/PieChart'

export default function Dashboard({ isOpen }) {
  return (
    <div className={`db-container ${isOpen ? "" : "closed"}`}>
      <div className="db-first-row">
        <div className="db-card db-ad">
        </div>

        <div className="db-first-row-second-column">
          <div className="db-card db-assistant">
            <span>Asistente Empresarial</span>
            <div className="slider">
              <div className="toggle"></div>
            </div>
          </div>

          <div className="db-card db-membership">
            <div>
              <h3>Membresía Clickbalance</h3>
              <div className="membership-info">
                <div>
                  <p>Membresía</p>
                  <p>12729</p>
                </div>
                <div>
                  <p>Vencimiento</p>
                  <p>2024-12-31</p>
                </div>
              </div>

            </div>
            <div className="progress-bar">
              <div className="days-left">
                <h2>09</h2>
                <span>DÍAS RESTANTES</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="db-second-row">

        <div className="db-card main-graph">
          <div className="graph-header">
            <div className="graph-title">
              <h3>Comparativo anual de ventas</h3>
              <p>Empresa de pruebas y sistemas, S. A. de C. V.</p>
              <div className="date-selector">
                <i className="fa-regular fa-calendar"></i>
                <input type="date" />
              </div>
            </div>
            <div className="graph-actions">
              <i className="fa-regular fa-file"></i>
              <i className="fa-solid fa-chart-line"></i>
              <i className="fa-solid fa-chart-simple"></i>
              <i className="fa-solid fa-download"></i>
            </div>
          </div>

          <BarChart />


        </div>

        <div className="db-card recent-activity">
          <h3>Actividad Reciente</h3>
          <div className="recent-charts">
            <PieChart />
            <LineGraph />
          </div>
        </div>
      </div>

    </div >
  )
}