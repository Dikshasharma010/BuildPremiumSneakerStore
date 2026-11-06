import { FormEvent, useState } from "react";

type IconName =
  | "search"
  | "heart"
  | "user"
  | "bag"
  | "menu"
  | "close"
  | "arrow"
  | "instagram"
  | "facebook";

const photos = {
  hero: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=2200&q=90",
  black:
    "https://images.unsplash.com/photo-1574020462714-5451391cc336?auto=format&fit=crop&w=1200&q=85",
  white:
    "https://images.unsplash.com/photo-1756707235708-01aa79b8bf51?auto=format&fit=crop&w=1200&q=85",
  lace: "https://images.unsplash.com/photo-1789522465342-be7fca0aa3f7?auto=format&fit=crop&w=1200&q=85",
  street:
    "https://images.unsplash.com/photo-1630717730181-f0d16fbf8d16?auto=format&fit=crop&w=1400&q=85",
  red: "https://images.unsplash.com/photo-1573566332962-d9ac3009098d?auto=format&fit=crop&w=1400&q=85",
  lifestyle:
    "https://images.unsplash.com/photo-1617212321775-32af775d6c44?auto=format&fit=crop&w=1400&q=85",
  performance:
    "https://images.unsplash.com/photo-1745177110209-3895eac45bcf?auto=format&fit=crop&w=1400&q=85",
  urban:
    "https://images.unsplash.com/photo-1647309330899-3195579594b8?auto=format&fit=crop&w=1400&q=85",
};

const products = [
  {
    id: 1,
    name: "AERO SHIFT 01",
    desc: "Responsive everyday runner",
    price: "7,999",
    rating: "4.9",
    image: photos.hero,
    colors: ["#14213d", "#1769ff", "#e7e9ed"],
  },
  {
    id: 2,
    name: "NOVA STREET",
    desc: "Premium urban essential",
    price: "6,499",
    rating: "4.8",
    image: photos.black,
    colors: ["#0a0a0b", "#9aa2ad", "#f5f5f3"],
  },
  {
    id: 3,
    name: "FLUX RUNNER",
    desc: "Lightweight daily trainer",
    price: "8,499",
    rating: "4.9",
    image: photos.white,
    colors: ["#edf0f4", "#113469", "#d66b32"],
  },
  {
    id: 4,
    name: "COURT VISION",
    desc: "Heritage basketball profile",
    price: "9,299",
    rating: "4.7",
    image: photos.red,
    colors: ["#b42025", "#f4f1ea", "#111111"],
  },
  {
    id: 5,
    name: "FORM TRAINER",
    desc: "Stable multidirectional grip",
    price: "7,499",
    rating: "4.8",
    image: photos.lace,
    colors: ["#e7e4dc", "#45566c", "#16191d"],
  },
  {
    id: 6,
    name: "APEX HIGH",
    desc: "Elevated street silhouette",
    price: "10,999",
    rating: "5.0",
    image: photos.street,
    colors: ["#b72c30", "#101113", "#d8dbe0"],
  },
];

const categories = [
  { name: "RUNNING", count: "24 styles", image: photos.white },
  { name: "LIFESTYLE", count: "38 styles", image: photos.lifestyle },
  { name: "BASKETBALL", count: "16 styles", image: photos.red },
  { name: "TRAINING", count: "21 styles", image: photos.black },
];

const navLinks = ["Home", "Men", "Women", "New Arrivals", "Collections", "Sale", "About Us"];
const navTarget = (link: string) =>
  link === "Sale" ? "new-arrivals" : link.toLowerCase().replaceAll(" ", "-");

function Icon({
  name,
  size = 20,
  filled = false,
}: {
  name: IconName;
  size?: number;
  filled?: boolean;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  const paths: Record<IconName, React.ReactNode> = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    heart: (
      <path
        fill={filled ? "currentColor" : "none"}
        d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"
      />
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    bag: (
      <>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </>
    ),
    menu: (
      <>
        <path d="M3 7h18M3 12h18M3 17h18" />
      </>
    ),
    close: <path d="m5 5 14 14M19 5 5 19" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
      </>
    ),
    facebook: <path d="M14 8h4V3h-4c-4 0-6 2-6 6v3H4v5h4v4h5v-4h4l1-5h-5V9c0-.7.3-1 1-1Z" />,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`logo ${light ? "text-white" : "text-[#07152d]"}`}
      aria-label="Kicksora home"
    >
      KICK<span>$</span>ORA
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [toast, setToast] = useState("");
  const [email, setEmail] = useState("");

  const flash = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2400);
  };

  const toggleWishlist = (id: number) => {
    setWishlist((items) =>
      items.includes(id) ? items.filter((item) => item !== id) : [...items, id],
    );
    flash(wishlist.includes(id) ? "Removed from wishlist" : "Saved to your wishlist");
  };

  const addToBag = (id: number) => {
    setCart((items) => [...items, id]);
    flash("Added to your bag");
  };

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();
    if (!email.includes("@")) return flash("Please enter a valid email");
    setEmail("");
    flash("You're on the list");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#07152d]">
      <div className="announcement">
        FREE SHIPPING ON ORDERS ABOVE ₹2,999 <span /> EASY 7-DAY RETURNS
      </div>
      <header className="nav-shell">
        <nav className="page-width nav" aria-label="Main navigation">
          <button className="mobile-icon" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Icon name="menu" size={23} />
          </button>
          <Logo />
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link} href={`#${navTarget(link)}`}>
                {link}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button onClick={() => setSearchOpen(true)} aria-label="Search">
              <Icon name="search" />
            </button>
            <button
              onClick={() => scrollTo("new-arrivals")}
              aria-label={`Wishlist with ${wishlist.length} items`}
              className="badge-wrap"
            >
              <Icon name="heart" />
              {wishlist.length > 0 && <b>{wishlist.length}</b>}
            </button>
            <button
              onClick={() => flash("Account access coming soon")}
              aria-label="Account"
              className="desktop-action"
            >
              <Icon name="user" />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              aria-label={`Shopping bag with ${cart.length} items`}
              className="badge-wrap"
            >
              <Icon name="bag" />
              {cart.length > 0 && <b>{cart.length}</b>}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <img src={photos.hero} alt="Premium sneaker against an urban graffiti backdrop" />
          <div className="hero-overlay" />
          <div className="page-width hero-content">
            <p className="eyebrow light">THE NEW STANDARD / 2025</p>
            <h1>
              FIND YOUR
              <br />
              PERFECT STRIDE.
            </h1>
            <p className="hero-copy">
              Discover premium sneakers engineered for comfort, style and everyday performance.
            </p>
            <div className="button-row">
              <button className="btn btn-white" onClick={() => scrollTo("new-arrivals")}>
                SHOP NOW <Icon name="arrow" />
              </button>
              <button className="btn btn-ghost" onClick={() => scrollTo("collections")}>
                EXPLORE COLLECTION
              </button>
            </div>
          </div>
          <div className="hero-index">K$ / 001</div>
        </section>

        <section id="collections" className="section page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SHOP BY MOTION</p>
              <h2>BUILT FOR YOUR WORLD.</h2>
            </div>
            <button className="text-link" onClick={() => scrollTo("new-arrivals")}>
              VIEW ALL CATEGORIES <Icon name="arrow" />
            </button>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <button
                key={category.name}
                className="category-card"
                onClick={() => scrollTo("new-arrivals")}
              >
                <img
                  src={category.image}
                  alt={`${category.name.toLowerCase()} sneaker collection`}
                />
                <div className="category-shade" />
                <span className="category-number">0{index + 1}</span>
                <span className="category-meta">
                  <b>{category.name}</b>
                  <small>{category.count}</small>
                </span>
                <span className="round-arrow">
                  <Icon name="arrow" />
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="new-arrivals" className="section products-section">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">JUST LANDED</p>
                <h2>NEW ARRIVALS.</h2>
              </div>
              <a className="text-link" href="#new-arrivals">
                SHOP ALL NEW <Icon name="arrow" />
              </a>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    <span className="product-tag">NEW</span>
                    <button
                      className={`wish-btn ${wishlist.includes(product.id) ? "active" : ""}`}
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={`Add ${product.name} to wishlist`}
                    >
                      <Icon name="heart" filled={wishlist.includes(product.id)} />
                    </button>
                  </div>
                  <div className="product-info">
                    <div className="product-top">
                      <div>
                        <h3>{product.name}</h3>
                        <p>{product.desc}</p>
                      </div>
                      <span className="rating">★ {product.rating}</span>
                    </div>
                    <div className="color-row">
                      {product.colors.map((color) => (
                        <i key={color} style={{ background: color }} />
                      ))}
                      <small>+2</small>
                    </div>
                    <div className="product-bottom">
                      <b>₹{product.price}</b>
                      <button onClick={() => addToBag(product.id)}>
                        ADD TO BAG <Icon name="bag" size={17} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="men" className="editorial-section">
          <div className="page-width editorial-heading">
            <p className="eyebrow light">BEST SELLERS / EDITOR'S PICK</p>
            <h2>
              THE ONES
              <br />
              EVERYONE WANTS.
            </h2>
          </div>
          <div className="page-width editorial-grid">
            <div className="editorial-main">
              <img src={photos.street} alt="Red and white high top sneakers in the city" />
              <div className="editorial-caption">
                <span>01 / APEX HIGH</span>
                <button onClick={() => addToBag(6)}>
                  SHOP THE ICON <Icon name="arrow" />
                </button>
              </div>
            </div>
            <div className="editorial-side">
              <img src={photos.black} alt="Black performance sneaker detail" />
              <p>
                Designed for the pace of the city. Built to look sharp from first step to last call.
              </p>
              <div>
                <b>NOVA STREET</b>
                <span>₹6,499</span>
              </div>
              <button className="btn btn-blue" onClick={() => addToBag(2)}>
                ADD TO BAG
              </button>
            </div>
          </div>
        </section>

        <section id="women" className="performance">
          <div className="performance-image">
            <img src={photos.performance} alt="Athlete lacing a premium performance sneaker" />
          </div>
          <div className="performance-copy">
            <p className="eyebrow light">K$ PERFORMANCE LAB</p>
            <h2>
              BUILT TO
              <br />
              MOVE.
            </h2>
            <p>Engineered cushioning. Lightweight construction. All-day comfort.</p>
            <div className="tech-stats">
              <span>
                <b>248g</b>ULTRALIGHT
              </span>
              <span>
                <b>42mm</b>ENERGY FOAM
              </span>
              <span>
                <b>8mm</b>HEEL DROP
              </span>
            </div>
            <button className="btn btn-white" onClick={() => scrollTo("new-arrivals")}>
              SHOP PERFORMANCE <Icon name="arrow" />
            </button>
          </div>
        </section>

        <section id="about-us" className="story section page-width">
          <div className="story-title">
            <p className="eyebrow">OUR STORY / EST. 2025</p>
            <h2>
              MORE THAN
              <br />A SNEAKER.
            </h2>
          </div>
          <div className="story-image">
            <img src={photos.urban} alt="Streetwear creative in an urban setting" />
            <span>
              MADE FOR THE
              <br />
              FORWARD MOVING.
            </span>
          </div>
          <div className="story-copy">
            <p className="lead">
              KICK$ORA lives at the intersection of modern street style and performance-driven
              footwear.
            </p>
            <p>
              We obsess over considered materials, all-day comfort and future-facing design—creating
              sneakers that move as confidently as you do.
            </p>
            <a href="#about-us" className="text-link">
              DISCOVER OUR STORY <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="reviews section">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">FIELD TESTED</p>
                <h2>WORN. LOVED. REPEATED.</h2>
              </div>
              <div className="review-score">
                <b>4.9</b>
                <span>
                  ★★★★★<small>2,400+ VERIFIED REVIEWS</small>
                </span>
              </div>
            </div>
            <div className="review-grid">
              {[
                [
                  "“THE COMFORT IS UNREAL.”",
                  "Wore the Aero Shift through a full travel day and my feet still felt fresh. They look even better in person.",
                  "ARJUN M.",
                ],
                [
                  "“MY NEW DAILY PAIR.”",
                  "The quality and finish feel genuinely premium. Easy to style, and the cushioning holds up all day.",
                  "RIYA S.",
                ],
                [
                  "“WORTH EVERY RUPEE.”",
                  "Fast delivery, excellent packaging and the fit was perfect. The Nova Street gets compliments everywhere.",
                  "KABIR R.",
                ],
                [
                  "“DESIGN DONE RIGHT.”",
                  "Finally, performance footwear that does not compromise on style. Clean lines and brilliant support.",
                  "MEERA K.",
                ],
              ].map(([title, copy, name]) => (
                <article key={name}>
                  <div className="stars">★★★★★</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <footer>
                    <span>{name}</span>
                    <small>VERIFIED BUYER</small>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter">
          <div className="newsletter-line">
            NEW DROPS / MEMBERS ONLY / EARLY ACCESS / <span>STAY AHEAD</span> / NEW DROPS / MEMBERS
            ONLY
          </div>
          <div className="page-width newsletter-inner">
            <div>
              <p className="eyebrow light">K$ INSIDER</p>
              <h2>
                STEP INTO
                <br />
                WHAT'S NEXT.
              </h2>
            </div>
            <form onSubmit={handleSubscribe}>
              <p>Sign up for early access to new drops, exclusive offers and sneaker releases.</p>
              <div className="email-field">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="YOUR EMAIL ADDRESS"
                  aria-label="Email address"
                />
                <button>
                  SUBSCRIBE <Icon name="arrow" />
                </button>
              </div>
              <small>By subscribing, you agree to our Privacy Policy.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <Logo light />
            <p>
              Premium footwear for the
              <br />
              forward moving.
            </p>
            <div>
              <a href="https://instagram.com" aria-label="Instagram">
                <Icon name="instagram" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <Icon name="facebook" />
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest">
                P
              </a>
            </div>
          </div>
          <div>
            <h4>SHOP</h4>
            <a href="#men">Men</a>
            <a href="#women">Women</a>
            <a href="#new-arrivals">New Arrivals</a>
            <a href="#collections">Collections</a>
            <a href="#new-arrivals">Sale</a>
          </div>
          <div>
            <h4>CUSTOMER SUPPORT</h4>
            <a href="mailto:hello@kicksora.com">Contact</a>
            <a href="#shipping">Shipping & Returns</a>
            <a href="#faq">FAQs</a>
            <a href="#size">Size Guide</a>
            <a href="#track">Track Order</a>
          </div>
          <div>
            <h4>ABOUT</h4>
            <a href="#about-us">Our Story</a>
            <a href="#journal">Journal</a>
            <a href="#careers">Careers</a>
            <a href="#stores">Store Locator</a>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© 2025 KICK$ORA. ALL RIGHTS RESERVED.</span>
          <div>
            <a href="#privacy">PRIVACY POLICY</a>
            <a href="#terms">TERMS & CONDITIONS</a>
          </div>
          <span>MADE TO MOVE.</span>
        </div>
      </footer>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="menu-close" onClick={() => setMenuOpen(false)}>
            <Icon name="close" />
          </button>
          <Logo />
          {navLinks.map((link, i) => (
            <a key={link} onClick={() => setMenuOpen(false)} href={`#${navTarget(link)}`}>
              <span>0{i + 1}</span>
              {link}
            </a>
          ))}
        </div>
      )}
      {searchOpen && (
        <div className="search-overlay">
          <button onClick={() => setSearchOpen(false)} aria-label="Close search">
            <Icon name="close" size={28} />
          </button>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearchOpen(false);
              scrollTo("new-arrivals");
            }}
          >
            <label>WHAT ARE YOU LOOKING FOR?</label>
            <div>
              <input autoFocus placeholder="Search sneakers, collections..." />
              <Icon name="search" size={30} />
            </div>
            <small>POPULAR: RUNNING / LIFESTYLE / AERO SHIFT</small>
          </form>
        </div>
      )}
      <div
        className={`drawer-backdrop ${cartOpen ? "show" : ""}`}
        onClick={() => setCartOpen(false)}
      />
      <aside className={`cart-drawer ${cartOpen ? "show" : ""}`} aria-hidden={!cartOpen}>
        <div className="drawer-head">
          <h3>
            YOUR BAG <span>({cart.length})</span>
          </h3>
          <button onClick={() => setCartOpen(false)}>
            <Icon name="close" />
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="empty-bag">
            <Icon name="bag" size={42} />
            <h4>YOUR BAG IS EMPTY</h4>
            <p>Your next favourite pair is waiting.</p>
            <button
              className="btn btn-blue"
              onClick={() => {
                setCartOpen(false);
                scrollTo("new-arrivals");
              }}
            >
              SHOP NEW ARRIVALS
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((id, i) => {
                const product = products.find((item) => item.id === id)!;
                return (
                  <div className="cart-item" key={`${id}-${i}`}>
                    <img src={product.image} alt="" />
                    <div>
                      <b>{product.name}</b>
                      <small>SIZE: UK 8</small>
                      <span>₹{product.price}</span>
                    </div>
                    <button
                      onClick={() => setCart((items) => items.filter((_, index) => index !== i))}
                    >
                      <Icon name="close" size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="cart-total">
              <div>
                <span>SUBTOTAL</span>
                <b>
                  ₹
                  {cart
                    .reduce(
                      (sum, id) =>
                        sum + Number(products.find((p) => p.id === id)!.price.replace(",", "")),
                      0,
                    )
                    .toLocaleString("en-IN")}
                </b>
              </div>
              <small>Shipping calculated at checkout</small>
              <button
                className="btn btn-blue"
                onClick={() => flash("Checkout is ready for integration")}
              >
                CHECKOUT
              </button>
            </div>
          </>
        )}
      </aside>
      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
