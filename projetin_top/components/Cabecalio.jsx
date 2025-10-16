// app/components/Header.tsx
export default function Cabecalio() {
    return (
      <header className="container">
        <div className="logo">Urban</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Shop ▼</a>
          <a href="#">Blog ▼</a>
          <a href="#">Pages ▼</a>
          <a href="#" className="get-pro">GET PRO</a>
          <a href="#" aria-label="Search">&#128269;</a>
          <a href="#" aria-label="User">&#128100;</a>
          <a href="#" aria-label="Cart">&#128722;</a>
        </nav>
      </header>
    );
  }
  