<link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto&display=swap" rel="stylesheet" />

export default function Home() {
    return (
        <>

            <section className="container banner">
                <div className="banner-text">
                    <div className="Titulo">Classic Cotton T-Shirt</div>

                    <p>Experience ultimate comfort with our premium cotton t-shirts. Perfect for everyday wear, they provide a stylish
                        and relaxed fit for any occasion.</p>
                    <button className="btn-red">Shop Now →</button>
                </div>

                <div className="banner-img">
                    <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=500&q=80"
                        alt="Classic Cotton T-Shirt" />
                </div>
            </section>

            <section className="container collections">
                <div className="collection-item">
                    <img src="https://www.estilomarciabrito.com.br/wp-content/uploads/2023/04/street-style.jpg.webp"
                        alt="Modern Collection" />
                    <div className="collection-text">Modern Collection</div>
                    <button className="collection-btn">Shop Now →</button>
                </div>
                <div className="collection-item">
                    <img src="https://eltonsantana.com.br/wp-content/uploads/2020/08/Dicas-de-Moda-Masculina-Jovem.jpg"
                        alt="Classic Collection" />
                    <div className="collection-text">Classic Collection</div>
                    <button className="collection-btn">Shop Now →</button>
                </div>
                <div className="collection-item">
                    <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
                        alt="New Collection" />
                    <div className="collection-text">New Collection</div>
                    <button className="collection-btn">Shop Now →</button>
                </div>
            </section>

            <section className="about-us">
                <h2>About Us</h2>
                <p>Ac varius lectus tellus tellus quisque tristique aenean. Volutpat velit nulla eu iaculis risus in urna. Eu morbi
                    vel purus velit dui vel egestas purus sed. Eget turpis tincidunt faucibus montes arcu in nullam tortor orci. Nulla
                    tellus sed purus vestibulum sagittis pretium donec nec mattis ollis porta sit ut.</p>
                <button className="btn-light">About Us →</button>
            </section>

            <button className="GetinNow">
                <h2>
                    <a href="#" aria-label="Cart">&#128722;</a> Get in Now
                </h2>
            </button>
        </>
    );
}