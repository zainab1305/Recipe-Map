import reshe from "./reshe-removebg-preview.png";

function Header() {
  return (
    <header>
      <div className="logo-title">
        <img src={reshe} alt="Logo" />
        <span>Recipe Map</span>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <button className="download-btn">Download Recipe</button>
      </nav>
    </header>
  );
}

export default Header;
