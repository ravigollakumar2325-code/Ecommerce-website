import React, { useMemo, useState } from "react";
import "./App.css";
import products from "./data/products";

const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" className="icon">
    <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="m20 20-4-4" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const HeartIcon = ({ filled = false }) => (
  <svg viewBox="0 0 24 24" className="icon">
    <path
      d="M20.8 8.8c0 5.2-8.8 10-8.8 10s-8.8-4.8-8.8-10A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const BagIcon = () => (
  <svg viewBox="0 0 24 24" className="icon">
    <path d="M5 8h14l1 13H4L5 8Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" className="icon">
    <path d="m3 11 9-8 9 8v9H3v-9Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M9 20v-6h6v6" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const categories = [
  { name: "Electronics", icon: "📱" },
  { name: "Fashion", icon: "👕" },
  { name: "Accessories", icon: "⌚" },
  { name: "Home & Kitchen", icon: "🏠" },
  { name: "Beauty", icon: "✨" },
  { name: "Travel", icon: "🧳" },
];

function App() {
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 1800);
  };

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navigate = (nextPage) => {
    setPage(nextPage);
    goTop();
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setSelectedImage(0);
    setQuantity(1);
    setSelectedColor(product.colors?.[0] || "");
    setSelectedSize(product.sizes?.[0] || "");
    setSelectedStorage(product.storageOptions?.[0] || "");
    navigate("details");
  };

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

    showToast(
      wishlist.includes(id)
        ? "Removed from wishlist"
        : "Added to wishlist"
    );
  };

  const addToCart = (product = selectedProduct) => {
    if (!product) return;

    const newItem = {
      id: product.id,
      quantity,
      color: selectedColor,
      size: selectedSize,
      storage: selectedStorage,
    };

    setCart((current) => {
      const existing = current.find(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.size === newItem.size &&
          item.storage === newItem.storage
      );

      if (existing) {
        return current.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...current, newItem];
    });

    showToast("Added to cart");
  };

  const updateCartQuantity = (index, amount) => {
    setCart((current) =>
      current.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeFromCart = (index) => {
    setCart((current) => current.filter((_, i) => i !== index));
    showToast("Removed from cart");
  };

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const searchable = [
        product.name,
        product.brand,
        product.category,
        product.subCategory,
        ...(product.tags || []),
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [search, category]);

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  const cartProducts = cart.map((item) => ({
    ...item,
    product: products.find((product) => product.id === item.id),
  }));

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = cartProducts.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const originalTotal = cartProducts.reduce(
    (sum, item) => sum + item.product.originalPrice * item.quantity,
    0
  );

  const totalSavings = originalTotal - subtotal;

  const featuredProducts = products.filter((product) => product.isFeatured);
  const bestSellers = products.filter((product) => product.isBestSeller);
  const newProducts = products.filter((product) => product.isNew);

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <div className="product-image-box" onClick={() => openProduct(product)}>
        <img src={product.images?.[0]} alt={product.name} />
        {product.discountPercentage > 0 && (
          <span className="discount-badge">
            {product.discountPercentage}% OFF
          </span>
        )}

        <button
          className={`wishlist-btn ${wishlist.includes(product.id) ? "active" : ""
            }`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          aria-label="Wishlist"
        >
          <HeartIcon filled={wishlist.includes(product.id)} />
        </button>
      </div>

      <div className="product-card-content">
        <span className="product-brand">{product.brand}</span>

        <h3 onClick={() => openProduct(product)}>{product.name}</h3>

        <div className="rating-row">
          <span className="rating">★ {product.rating}</span>
          <span className="reviews">({product.totalReviews})</span>
        </div>

        <div className="price-row">
          <strong>{money(product.price)}</strong>
          <del>{money(product.originalPrice)}</del>
          <span>{product.discountPercentage}% off</span>
        </div>

        <button
          className="add-cart-small"
          onClick={() => {
            setSelectedColor(product.colors?.[0] || "");
            setSelectedSize(product.sizes?.[0] || "");
            setSelectedStorage(product.storageOptions?.[0] || "");
            setQuantity(1);
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  const Header = () => (
    <header className="main-header">
      <div className="header-inner">
        <div className="logo" onClick={() => navigate("home")}>
          <span>Shop</span>Ease
        </div>

        <div className="search-box">
          <SearchIcon />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") navigate("shop");
            }}
            placeholder="Search for products, brands and more..."
          />
        </div>

        <nav className="header-actions">
          <button onClick={() => navigate("home")} aria-label="Home">
            <HomeIcon />
          </button>

          <button
            className="count-button"
            onClick={() => navigate("wishlist")}
            aria-label="Wishlist"
          >
            <HeartIcon filled={wishlist.length > 0} />
            {wishlist.length > 0 && <span>{wishlist.length}</span>}
          </button>

          <button
            className="count-button"
            onClick={() => navigate("cart")}
            aria-label="Cart"
          >
            <BagIcon />
            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  );

  const HomePage = () => (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO SHOPEASE</p>
          <h1>Everything you need.<br />All in one place.</h1>
          <p>
            Discover trending fashion, electronics, accessories and
            everyday essentials at great prices.
          </p>
          <button
            className="primary-btn"
            onClick={() => {
              setCategory("All");
              navigate("shop");
            }}
          >
            Shop Now
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
            alt="Shopping"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span>EXPLORE</span>
            <h2>Shop by Category</h2>
          </div>
          <button onClick={() => navigate("shop")}>View All</button>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <button
              className="category-card"
              key={item.name}
              onClick={() => {
                setCategory(item.name);
                setSearch("");
                navigate("shop");
              }}
            >
              <span>{item.icon}</span>
              <strong>{item.name}</strong>
              <small>
                {products.filter((p) => p.category === item.name).length}{" "}
                Products
              </small>
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span>HANDPICKED FOR YOU</span>
            <h2>Featured Products</h2>
          </div>
          <button onClick={() => navigate("shop")}>View All</button>
        </div>

        <div className="product-grid">
          {featuredProducts.slice(0, 5).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="offer-banner">
        <div>
          <span>LIMITED TIME OFFER</span>
          <h2>Big Savings. Better Choices.</h2>
          <p>Save more on selected products while stocks last.</p>
          <button
            className="primary-btn"
            onClick={() => navigate("shop")}
          >
            Explore Deals
          </button>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span>TRENDING NOW</span>
            <h2>Best Sellers</h2>
          </div>
        </div>

        <div className="product-grid">
          {bestSellers.slice(0, 5).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="benefits">
        <div>
          <strong>🚚 Fast Delivery</strong>
          <span>Quick delivery across India</span>
        </div>
        <div>
          <strong>🔒 Secure Payments</strong>
          <span>100% safe and secure checkout</span>
        </div>
        <div>
          <strong>↩ Easy Returns</strong>
          <span>Simple return experience</span>
        </div>
        <div>
          <strong>✓ Genuine Products</strong>
          <span>Quality products from trusted sellers</span>
        </div>
      </section>
    </>
  );

  const ShopPage = () => (
    <section className="section shop-page">
      <div className="shop-top">
        <div>
          <span>OUR COLLECTION</span>
          <h1>All Products</h1>
          <p>{filteredProducts.length} products found</p>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          <option value="All">All Categories</option>
          {categories.map((item) => (
            <option value={item.name} key={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="empty-box">
          <h2>No products found</h2>
          <p>Try another search or category.</p>
          <button
            className="primary-btn"
            onClick={() => {
              setSearch("");
              setCategory("All");
            }}
          >
            Show All Products
          </button>
        </div>
      )}
    </section>
  );
  const ProductDetails = () => {
    const product = selectedProduct;

    if (!product) return null;

    return (
      <section className="details-page section">
        <button className="back-btn" onClick={() => navigate("shop")}>
          ← Back to Products
        </button>

        <div className="details-layout">
          <div className="gallery">
            <div className="thumbnail-list">
              {product.images?.map((image, index) => (
                <button
                  key={image}
                  className={selectedImage === index ? "selected" : ""}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>

            <div className="main-product-image">
              <img
                src={product.images?.[selectedImage]}
                alt={product.name}
              />
            </div>
          </div>

          <div className="details-content">
            <span className="detail-brand">{product.brand}</span>
            <h1>{product.name}</h1>

            <div className="detail-rating">
              <span>★ {product.rating}</span>
              <span>{product.totalReviews} Reviews</span>
              <span>{product.totalRatings} Ratings</span>
            </div>

            <p className="detail-description">
              {product.description}
            </p>

            <div className="detail-price">
              <strong>{money(product.price)}</strong>
              <del>{money(product.originalPrice)}</del>
              <span>{product.discountPercentage}% OFF</span>
            </div>

            <p className="stock-text">
              {product.stockStatus} · {product.stock} units available
            </p>

            {product.colors?.length > 0 && (
              <div className="option-group">
                <h4>Color</h4>
                <div className="option-list">
                  {product.colors.map((color) => (
                    <button
                      className={selectedColor === color ? "chosen" : ""}
                      key={color}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes?.length > 0 && (
              <div className="option-group">
                <h4>Size</h4>
                <div className="option-list">
                  {product.sizes.map((size) => (
                    <button
                      className={selectedSize === size ? "chosen" : ""}
                      key={size}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {product.storageOptions?.length > 0 && (
              <div className="option-group">
                <h4>Storage</h4>
                <div className="option-list">
                  {product.storageOptions.map((storage) => (
                    <button
                      className={
                        selectedStorage === storage ? "chosen" : ""
                      }
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="quantity-row">
              <strong>Quantity</strong>
              <div className="quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  −
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="detail-actions">
              <button
                className="primary-btn add-detail"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              <button
                className={`detail-wishlist ${wishlist.includes(product.id) ? "active" : ""
                  }`}
                onClick={() => toggleWishlist(product.id)}
                aria-label="Wishlist"
              >
                <HeartIcon filled={wishlist.includes(product.id)} />
              </button>
            </div>

            <div className="product-info-box">
              <div>
                <strong>🚚 Delivery</strong>
                <span>{product.delivery}</span>
              </div>
              <div>
                <strong>🛡 Warranty</strong>
                <span>{product.warranty}</span>
              </div>
              <div>
                <strong>🏪 Seller</strong>
                <span>{product.seller}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="details-bottom">
          <div>
            <h2>Key Features</h2>
            <ul>
              {(product.features || []).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Specifications</h2>
            <div className="spec-list">
              {Object.entries(product.specifications || {}).map(
                ([key, value]) => (
                  <div key={key}>
                    <span>{key}</span>
                    <strong>{value}</strong>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          {(product.reviews || []).map((review) => (
            <div className="review-card" key={review.id}>
              <div>
                <strong>{review.name}</strong>
                <span>★ {review.rating}</span>
              </div>
              <p>{review.comment}</p>
              <small>{review.date}</small>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const WishlistPage = () => (
    <section className="section">
      <div className="page-title">
        <span>YOUR SAVED ITEMS</span>
        <h1>My Wishlist</h1>
      </div>

      {wishlistProducts.length > 0 ? (
        <div className="product-grid">
          {wishlistProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="empty-box">
          <div className="empty-icon">♡</div>
          <h2>Your wishlist is empty</h2>
          <p>Save products you love and find them here later.</p>
          <button
            className="primary-btn"
            onClick={() => navigate("shop")}
          >
            Start Shopping
          </button>
        </div>
      )}
    </section>
  );

  const CartPage = () => (
    <section className="section cart-page">
      <div className="page-title">
        <span>YOUR SHOPPING BAG</span>
        <h1>Shopping Cart</h1>
      </div>

      {cartProducts.length > 0 ? (
        <div className="cart-layout">
          <div className="cart-items">
            {cartProducts.map((item, index) => (
              <div className="cart-item" key={`${item.id}-${index}`}>
                <img
                  src={item.product.images?.[0]}
                  alt={item.product.name}
                  onClick={() => openProduct(item.product)}
                />

                <div className="cart-item-info">
                  <span>{item.product.brand}</span>
                  <h3>{item.product.name}</h3>

                  {item.color && <small>Color: {item.color}</small>}
                  {item.size && <small>Size: {item.size}</small>}
                  {item.storage && (
                    <small>Storage: {item.storage}</small>
                  )}

                  <strong>{money(item.product.price)}</strong>
                </div>

                <div className="cart-quantity">
                  <button onClick={() => updateCartQuantity(index, -1)}>
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateCartQuantity(index, 1)}>
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <aside className="summary-box">
            <h2>Order Summary</h2>

            <div>
              <span>Original Price</span>
              <strong>{money(originalTotal)}</strong>
            </div>

            <div>
              <span>Discount</span>
              <strong className="saving">
                -{money(totalSavings)}
              </strong>
            </div>

            <div>
              <span>Delivery</span>
              <strong>FREE</strong>
            </div>

            <hr />

            <div className="total-row">
              <span>Total</span>
              <strong>{money(subtotal)}</strong>
            </div>

            <button
              className="primary-btn checkout-btn"
              onClick={() => showToast("Checkout feature coming soon")}
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      ) : (
        <div className="empty-box">
          <div className="empty-icon">🛍</div>
          <h2>Your cart is empty</h2>
          <p>Add some products to see them here.</p>
          <button
            className="primary-btn"
            onClick={() => navigate("shop")}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </section>
  );

  return (
    <div className="app">
      <Header />

      <main>
        {page === "home" && <HomePage />}
        {page === "shop" && <ShopPage />}
        {page === "details" && <ProductDetails />}
        {page === "wishlist" && <WishlistPage />}
        {page === "cart" && <CartPage />}
      </main>

      <footer className="footer">
        <div>
          <div className="footer-logo">
            <span>Shop</span>Ease
          </div>
          <p>
            Your trusted destination for fashion, electronics,
            accessories and everyday essentials.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <button onClick={() => navigate("home")}>Home</button>
          <button onClick={() => navigate("shop")}>Products</button>
          <button onClick={() => navigate("wishlist")}>Wishlist</button>
          <button onClick={() => navigate("cart")}>Cart</button>
        </div>

        <div>
          <h3>Categories</h3>
          {categories.slice(0, 4).map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setCategory(item.name);
                navigate("shop");
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div>
          <h3>About</h3>
          <p>Designed and developed by Ravinadh.</p>
          <p>© 2026 ShopEase. All rights reserved.</p>
        </div>
      </footer>

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}

export default App;
