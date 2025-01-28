// Header y navegacion

import logoLightBg from "/src/assets/clickbalance-logo-lightbg.png"
import logoDarkBg from "/src/assets/clickbalance-logo-darkbg.png"

export default function Header({ onHambuergerClick }) {
  return (
    <>
      <header>
        <div className="header-logo">
          <i onClick={onHambuergerClick} className="fa-solid fa-bars"></i>
          <img src={logoLightBg} alt="Clickbalance logo" className="logo-lightbg" />
          <img src={logoDarkBg} alt="Clickbalance logo" className="logo-darkbg" />
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