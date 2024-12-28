export default function BottomMenu() {
  return (
    <>
      <menu className="bottom-menu">
        <div className="menu-item active">
          <i className="fa-solid fa-house"></i>
          <span>Inicio</span>
        </div>
        <div className="menu-item">
          <i className="fa-solid fa-building"></i>
          <span>Mis</span>
          <span>Empresas</span>
        </div>
        <div className="menu-item">
          <i className="fa-solid fa-comment"></i>
          <span>Asistente</span>
          <span>Empresarial</span>
        </div>
        <div className="menu-item">
          <i className="fa-solid fa-user"></i>
          <span>Mi Perfil</span>
        </div>
      </menu>
    </>
  )
}