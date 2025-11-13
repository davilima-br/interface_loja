<link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto&display=swap" rel="stylesheet" />
import { ShoppingCart, ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <>

            <section className="container banner">
                <div className="banner-text">
                    <div className="Titulo">Classic Watch Collection </div>

                    <p>Discover timeless elegance with our premium watches. Crafted for both style and durability, our collection offers the perfect timepiece for any occasion — from casual to formal, these watches are designed to complement your lifestyle.</p>
                    <button className="btn-red">Shop Now <ArrowRight className='SetaButton' /></button>
                </div>

                <div className="banner-img">
                    <img src="https://cartier.vtexassets.com/assets/vtex.file-manager-graphql/images/853f52ba-5091-472b-95c4-523f34e31bc7___46952e9ae7171ac5d98da4656765fce5.jpg"
                        alt="Classic Cotton T-Shirt" />
                </div>
            </section>

            <section className="container collections">
                <div className="collection-item">
                    <img src="https://cartier.vtexassets.com/assets/vtex.file-manager-graphql/images/54f1579e-2547-46e4-9878-ead90265a6c3___df80da292e00fab30a38764111d10dce.jpg"
                        alt="Modern Collection" />
                    <div className="collection-text">Modern Collection</div>
                    <button className="collection-btn">Shop Now <ArrowRight className='SetaButton' /></button>
                </div>
                <div className="collection-item">
                    <img src="https://cartier.vtexassets.com/assets/vtex.file-manager-graphql/images/233f42ff-0737-482c-9ab2-82b17df68a9f___dbd7cd3b538b75953c98b2d155be7a75.jpg"
                        alt="Classic Collection" />
                    <div className="collection-text">Classic Collection</div>
                    <button className="collection-btn">Shop Now <ArrowRight className='SetaButton' /></button>
                </div>
                <div className="collection-item">
                    <img src="https://cartier.vtexassets.com/assets/vtex.file-manager-graphql/images/5cb8f7c5-59b9-421c-92b4-581fb4fa87b9___7be823840150a7c8e64fb1f4e89264e8.jpg"
                        alt="New Collection" />
                    <div className="collection-text">New Collection</div>
                    <button className="collection-btn">Shop Now <ArrowRight className='SetaButton' /></button>
                </div>
            </section>

            <section className="about-us">
                <h2>About Us</h2>
                <p>Ac varius lectus tellus tellus quisque tristique aenean. Volutpat velit nulla eu iaculis risus in urna. Eu morbi
                    vel purus velit dui vel egestas purus sed. Eget turpis tincidunt faucibus montes arcu in nullam tortor orci. Nulla
                    tellus sed purus vestibulum sagittis pretium donec nec mattis ollis porta sit ut.</p>
                <button className="btn-light">About Us →</button>
            </section>
        </>
    );
}