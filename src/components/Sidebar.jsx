// Barra de navegacion lateral

import { useState } from 'react'
import sidebarData from '/src/data/sidebarData.jsx'

export default function Sidebar({ isOpen }) {
  // El concepto de "State" en React ayuda a poder controlar como los componentes se comportan dependiendo de su "estado".
  // Quiero supervisar cuales elementos de la barra lateral estan expandidos con el objeto "expanded", poder actualizar su estado dinamicamente con la funcion "setExpanded"
  const [expanded, setExpanded] = useState({})

  const toggleExpand = key => {
    setExpanded(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <nav className={`sidebar ${isOpen ? "" : "closed"}`} >

      <div className="sidebar-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Buscar..." />
      </div>



      <div className="sidebar-nav">
        <div className="divisor"></div>
        <div className="sidebar-section-title">
          <i className="fa-regular fa-building"></i>
          <span>Empresas</span>
        </div>

        <ul>
          {sidebarData.map((item, index) => (
            <li key={index}>
              <div onClick={() => item.children && toggleExpand(index)}>
                <span>{item.name} </span>
                {item.children && <span className="sidebar-el-expand">{expanded[index] ? <i className="fa-solid fa-minus"></i> : <i class="fa-solid fa-plus"></i>}</span>}
              </div>
              {expanded[index] && item.children && (
                <ul>
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>{child}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>


      <div className="sidebar-config">
        <div className="divisor"></div>
        <div className="sidebar-section-title">
          <i className="fa-solid fa-gear"></i>
          <span>Configuración</span>
        </div>
        <div className="sidebar-section-title">
          <i className="fa-solid fa-right-from-bracket"></i>
          <span>Salir</span>
        </div>
      </div>

    </nav>
  )
}