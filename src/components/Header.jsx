// Header y navegacion

export default function Header({ onHambuergerClick }) {
  return (
    <>
      <header>
        <div className="header-logo">
          <i onClick={onHambuergerClick} className="fa-solid fa-bars"></i>
          <img src="/src/assets/clickbalance-logo-lightbg.png" alt="Clickbalance logo" className="logo-lightbg" />
          <img src="/src/assets/clickbalance-logo-darkbg.png" alt="Clickbalance logo" className="logo-darkbg" />
        </div>
        <div className="header-actions">
          <i className="fa-solid fa-cart-shopping"></i>
          <i className="fa-solid fa-question"></i>
          <i className="fa-regular fa-square-plus"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </header>
    </>
  )
}