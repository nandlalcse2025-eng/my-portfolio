function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="container nav-bar">
        <div className="brand">CYBERSHIELD</div>
        <ul className="nav-links">
          <li><a href="#threats">Threats</a></li>
          <li><a href="#tips">Safety Tips</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
