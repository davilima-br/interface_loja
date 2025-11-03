// app/components/Header.tsx
import { UserRound, ShoppingCart, Search } from 'lucide-react';

export default function Cabecalio() {
  return (
    <header className="container">
      <div className="logo">Urban</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Shop Blog ▼ </a>
        <a href="#">Blog ▼</a>
        <a href="#">Pages ▼</a>
        <a href="#" className="get-pro">GET PRO</a>
        <a> <Search/></a>
        <a> <UserRound /></a>
        <a href='https:www.youtube.com'> <ShoppingCart/></a>





      </nav>
    </header>
  );
}
