const products = [
    {
        id: 1,
        name: "Apple iPhone 15",
        slug: "apple-iphone-15",
        brand: "Apple",
        category: "Electronics",
        subCategory: "Smartphones",
        images: [
            "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1695048133142-1a20484d4d4d?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1696446702203-1a7b5a8e3f5c?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1592286927505-2fd0b3e8f5d7?auto=format&fit=crop&w=900&q=85"
        ],
        price: 69999,
        originalPrice: 79900,
        discountPercentage: 12,
        discountAmount: 9901,
        currency: "INR",
        rating: 4.6,
        totalReviews: 1248,
        totalRatings: 1380,
        stock: 18,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Powerful smartphone with a 6.1-inch Super Retina display and advanced camera system.",
        description: "Apple iPhone 15 combines a bright Super Retina XDR display, powerful performance and a versatile camera system in a compact premium design.",
        colors: ["Black", "Blue", "Green", "Pink"],
        storageOptions: ["128GB", "256GB", "512GB"],
        sizes: [],
        specifications: {
            display: "6.1-inch Super Retina XDR",
            processor: "A16 Bionic chip",
            ram: "6GB",
            storage: "128GB",
            rearCamera: "48MP + 12MP",
            frontCamera: "12MP",
            battery: "Up to 20 hours video playback",
            operatingSystem: "iOS"
        },
        features: [
            "Super Retina XDR display",
            "48MP Main camera",
            "Dynamic Island",
            "USB-C connectivity",
            "Face ID"
        ],
        boxContents: [
            "iPhone 15",
            "USB-C Cable",
            "Documentation"
        ],
        warranty: "1 Year Apple Limited Warranty",
        delivery: "Free delivery in 2-5 business days",
        seller: {
            name: "Appario Retail Private Ltd",
            rating: 4.7,
            verified: true
        },
        offers: [
            "10% instant discount on selected bank cards",
            "No-cost EMI available",
            "Exchange offers available"
        ],
        tags: ["iphone", "apple", "smartphone", "5g"],
        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "Apple iPhone 15 128GB",
            description: "Buy Apple iPhone 15 with powerful performance and advanced camera features.",
            keywords: ["iPhone 15", "Apple smartphone", "iPhone"]
        },
        reviews: [
            {
                name: "Rahul",
                rating: 5,
                title: "Excellent phone",
                comment: "The display and camera quality are excellent.",
                date: "2026-08-21"
            },
            {
                name: "Sneha",
                rating: 4,
                title: "Premium experience",
                comment: "Very smooth performance and good battery life.",
                date: "2026-08-16"
            }
        ]
    },

    {
        id: 2,
        name: "Samsung Galaxy S24",
        slug: "samsung-galaxy-s24",
        brand: "Samsung",
        category: "Electronics",
        subCategory: "Smartphones",
        images: [
            "https://images.unsplash.com/photo-1707231675931-1d8f3d8e9e8a?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1610945265078-4c7e1b6c7c6e?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=85"
        ],
        price: 64999,
        originalPrice: 74999,
        discountPercentage: 13,
        discountAmount: 10000,
        currency: "INR",
        rating: 4.5,
        totalReviews: 986,
        totalRatings: 1102,
        stock: 24,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Premium Galaxy smartphone with AMOLED display and powerful camera performance.",
        description: "Samsung Galaxy S24 delivers a premium smartphone experience with a compact design, bright AMOLED display and advanced camera features.",
        colors: ["Onyx Black", "Cobalt Violet", "Marble Gray", "Amber Yellow"],
        storageOptions: ["128GB", "256GB", "512GB"],
        sizes: [],
        specifications: {
            display: "6.2-inch Dynamic AMOLED 2X",
            processor: "Exynos 2400",
            ram: "8GB",
            storage: "128GB",
            rearCamera: "50MP + 12MP + 10MP",
            frontCamera: "12MP",
            battery: "4000mAh",
            operatingSystem: "Android"
        },
        features: [
            "Dynamic AMOLED 2X display",
            "50MP high-resolution camera",
            "AI-powered features",
            "5G connectivity",
            "IP68 water resistance"
        ],
        boxContents: [
            "Galaxy S24",
            "USB Type-C Cable",
            "SIM Ejector",
            "Quick Start Guide"
        ],
        warranty: "1 Year Samsung Warranty",
        delivery: "Free delivery in 2-5 business days",
        seller: {
            name: "RetailNet",
            rating: 4.6,
            verified: true
        },
        offers: [
            "Bank cashback available",
            "Exchange bonus available",
            "No-cost EMI available"
        ],
        tags: ["samsung", "galaxy", "smartphone", "android"],
        isFeatured: true,
        isBestSeller: false,
        isNew: true,
        isWishlisted: false,
        seo: {
            title: "Samsung Galaxy S24",
            description: "Shop Samsung Galaxy S24 with AMOLED display and advanced camera technology.",
            keywords: ["Samsung S24", "Galaxy S24", "Samsung smartphone"]
        },
        reviews: [
            {
                name: "Kiran",
                rating: 5,
                title: "Great compact phone",
                comment: "The display is sharp and the phone feels premium.",
                date: "2026-08-25"
            },
            {
                name: "Arjun",
                rating: 4,
                title: "Good performance",
                comment: "Fast performance and excellent camera quality.",
                date: "2026-08-19"
            }
        ]
    },

    {
        id: 3,
        name: "Sony WH-1000XM5 Wireless Headphones",
        slug: "sony-wh-1000xm5",
        brand: "Sony",
        category: "Electronics",
        subCategory: "Headphones",
        images: [
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=85"
        ],
        price: 24990,
        originalPrice: 34990,
        discountPercentage: 29,
        discountAmount: 10000,
        currency: "INR",
        rating: 4.7,
        totalReviews: 2140,
        totalRatings: 2398,
        stock: 31,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Premium wireless headphones with industry-leading noise cancellation.",
        description: "Sony WH-1000XM5 headphones provide immersive sound, advanced active noise cancellation and comfortable all-day listening.",
        colors: ["Black", "Silver"],
        storageOptions: [],
        sizes: [],
        specifications: {
            driverSize: "30mm",
            connectivity: "Bluetooth 5.2",
            battery: "Up to 30 hours",
            charging: "USB Type-C",
            microphone: "Built-in",
            weight: "250g"
        },
        features: [
            "Industry-leading noise cancellation",
            "30-hour battery life",
            "Multipoint connection",
            "Touch controls",
            "Speak-to-chat"
        ],
        boxContents: [
            "Wireless Headphones",
            "Carrying Case",
            "USB-C Cable",
            "Audio Cable"
        ],
        warranty: "1 Year Sony Warranty",
        delivery: "Free delivery in 2-5 business days",
        seller: {
            name: "Electronics Hub",
            rating: 4.6,
            verified: true
        },
        offers: [
            "Instant bank discount available",
            "No-cost EMI available",
            "Additional exchange offers"
        ],
        tags: ["sony", "headphones", "wireless", "noise-cancellation"],
        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "Sony WH-1000XM5 Wireless Headphones",
            description: "Premium Sony wireless headphones with advanced noise cancellation.",
            keywords: ["Sony headphones", "WH-1000XM5", "wireless headphones"]
        },
        reviews: [
            {
                name: "Vijay",
                rating: 5,
                title: "Amazing sound",
                comment: "Noise cancellation works extremely well.",
                date: "2026-08-27"
            },
            {
                name: "Manoj",
                rating: 5,
                title: "Worth the price",
                comment: "Very comfortable for long listening sessions.",
                date: "2026-08-12"
            }
        ]
    },

    {
        id: 4,
        name: "Nike Air Max Running Shoes",
        slug: "nike-air-max-running-shoes",
        brand: "Nike",
        category: "Fashion",
        subCategory: "Men's Footwear",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85"
        ],
        price: 4799,
        originalPrice: 7995,
        discountPercentage: 40,
        discountAmount: 3196,
        currency: "INR",
        rating: 4.4,
        totalReviews: 864,
        totalRatings: 932,
        stock: 42,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Lightweight running shoes designed for everyday comfort and active use.",
        description: "Nike Air Max running shoes combine cushioning, breathable materials and a sporty silhouette suitable for running and everyday wear.",
        colors: ["Black", "White", "Red", "Blue"],
        storageOptions: [],
        sizes: ["6", "7", "8", "9", "10", "11"],
        specifications: {
            upperMaterial: "Mesh and synthetic",
            soleMaterial: "Rubber",
            closure: "Lace-up",
            cushioning: "Air cushioning",
            shoeType: "Running Shoes",
            gender: "Men"
        },
        features: [
            "Lightweight construction",
            "Breathable upper",
            "Responsive cushioning",
            "Durable rubber outsole",
            "Everyday running comfort"
        ],
        boxContents: [
            "1 Pair of Shoes",
            "Original Shoe Box"
        ],
        warranty: "3 Months Manufacturer Warranty",
        delivery: "Free delivery in 3-5 business days",
        seller: {
            name: "Nike India",
            rating: 4.7,
            verified: true
        },
        offers: [
            "Extra discount on selected cards",
            "Exchange available",
            "Limited-time fashion offer"
        ],
        tags: ["nike", "shoes", "running", "men"],
        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "Nike Air Max Running Shoes",
            description: "Shop Nike Air Max running shoes with lightweight cushioning and comfort.",
            keywords: ["Nike shoes", "running shoes", "Air Max"]
        },
        reviews: [
            {
                name: "Rohit",
                rating: 5,
                title: "Very comfortable",
                comment: "Good cushioning and comfortable for daily use.",
                date: "2026-08-22"
            },
            {
                name: "Sandeep",
                rating: 4,
                title: "Good quality",
                comment: "Looks stylish and fits well.",
                date: "2026-08-10"
            }
        ]
    },

    {
        id: 5,
        name: "Adidas Men's Sports T-Shirt",
        slug: "adidas-mens-sports-tshirt",
        brand: "Adidas",
        category: "Fashion",
        subCategory: "Men's Clothing",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1583743814966-8936f37f4678?auto=format&fit=crop&w=900&q=85"
        ],
        price: 1299,
        originalPrice: 2499,
        discountPercentage: 48,
        discountAmount: 1200,
        currency: "INR",
        rating: 4.3,
        totalReviews: 642,
        totalRatings: 710,
        stock: 55,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Comfortable regular-fit sports T-shirt made for workouts and everyday wear.",
        description: "Adidas men's sports T-shirt features a lightweight design and comfortable fit that works well for workouts, outdoor activities and casual styling.",
        colors: ["Black", "White", "Navy Blue", "Grey"],
        storageOptions: [],
        sizes: ["S", "M", "L", "XL"],
        specifications: {
            material: "Polyester blend",
            fit: "Regular Fit",
            neck: "Round Neck",
            sleeve: "Half Sleeve",
            pattern: "Solid",
            gender: "Men"
        },
        features: [
            "Lightweight fabric",
            "Regular fit",
            "Moisture management",
            "Breathable construction",
            "Suitable for sports and casual wear"
        ],
        boxContents: [
            "1 T-Shirt"
        ],
        warranty: "6 Months Manufacturing Warranty",
        delivery: "Free delivery in 3-5 business days",
        seller: {
            name: "Adidas India",
            rating: 4.5,
            verified: true
        },
        offers: [
            "Buy 2 and get additional discount",
            "Extra bank discount available",
            "Easy returns available"
        ],
        tags: ["adidas", "tshirt", "men", "sports"],
        isFeatured: false,
        isBestSeller: true,
        isNew: true,
        isWishlisted: false,
        seo: {
            title: "Adidas Men's Sports T-Shirt",
            description: "Buy Adidas men's sports T-shirt in multiple sizes and colours.",
            keywords: ["Adidas T-shirt", "sports T-shirt", "men clothing"]
        },
        reviews: [
            {
                name: "Akash",
                rating: 5,
                title: "Good quality",
                comment: "Comfortable material and fitting is good.",
                date: "2026-08-24"
            },
            {
                name: "Praveen",
                rating: 4,
                title: "Nice for workouts",
                comment: "Lightweight and comfortable during exercise.",
                date: "2026-08-15"
            }
        ]
    },
    {
        id: 6,
        name: "boAt Airdopes 141 Wireless Earbuds",
        slug: "boat-airdopes-141",
        brand: "boAt",
        category: "Electronics",
        subCategory: "Earbuds",
        images: [
            "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1588423771071-1f1c1c4f1a4d?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85"
        ],
        price: 1299,
        originalPrice: 4490,
        discountPercentage: 71,
        discountAmount: 3191,
        currency: "INR",
        rating: 4.2,
        totalReviews: 3850,
        totalRatings: 4210,
        stock: 75,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "True wireless earbuds with powerful sound and long battery life.",
        description: "boAt Airdopes 141 delivers an enjoyable wireless audio experience with low-latency mode, comfortable earbuds and extended playback.",
        colors: ["Black", "White", "Blue", "Green"],
        storageOptions: [],
        sizes: [],
        specifications: {
            connectivity: "Bluetooth 5.0",
            battery: "Up to 42 hours",
            driver: "8mm",
            charging: "USB Type-C",
            microphone: "Built-in",
            waterResistance: "IPX4"
        },
        features: [
            "42-hour total playback",
            "Low latency gaming mode",
            "Type-C charging",
            "Environmental noise cancellation",
            "Lightweight design"
        ],
        boxContents: [
            "2 Earbuds",
            "Charging Case",
            "USB Type-C Cable",
            "Extra Ear Tips",
            "User Manual"
        ],
        warranty: "1 Year boAt Warranty",
        delivery: "Free delivery in 2-5 business days",
        seller: {
            name: "Imagine Marketing Limited",
            rating: 4.5,
            verified: true
        },
        offers: [
            "Extra bank discount available",
            "No-cost EMI available",
            "Limited-time offer"
        ],
        tags: ["boat", "earbuds", "wireless", "bluetooth"],
        isFeatured: false,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "boAt Airdopes 141 Wireless Earbuds",
            description: "Buy boAt Airdopes wireless earbuds with long battery life.",
            keywords: ["boAt Airdopes", "wireless earbuds", "Bluetooth earbuds"]
        },
        reviews: [
            {
                name: "Nikhil",
                rating: 5,
                title: "Good for the price",
                comment: "Battery backup is impressive and sound is clear.",
                date: "2026-08-28"
            },
            {
                name: "Varun",
                rating: 4,
                title: "Nice earbuds",
                comment: "Comfortable and easy to connect.",
                date: "2026-08-18"
            }
        ]
    },

    {
        id: 7,
        name: "Puma Men's Casual Sneakers",
        slug: "puma-mens-casual-sneakers",
        brand: "Puma",
        category: "Fashion",
        subCategory: "Men's Footwear",
        images: [
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1554130848-2f6a4a7d5e5c?auto=format&fit=crop&w=900&q=85"
        ],
        price: 2399,
        originalPrice: 4999,
        discountPercentage: 52,
        discountAmount: 2600,
        currency: "INR",
        rating: 4.3,
        totalReviews: 721,
        totalRatings: 805,
        stock: 36,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Stylish casual sneakers designed for everyday comfort.",
        description: "Puma casual sneakers feature a modern silhouette, cushioned footbed and durable outsole for everyday use.",
        colors: ["White", "Black", "Navy"],
        storageOptions: [],
        sizes: ["6", "7", "8", "9", "10"],
        specifications: {
            upperMaterial: "Synthetic leather",
            soleMaterial: "Rubber",
            closure: "Lace-up",
            shoeType: "Casual Sneakers",
            gender: "Men",
            occasion: "Casual"
        },
        features: [
            "Cushioned footbed",
            "Durable outsole",
            "Modern casual design",
            "Lightweight construction",
            "Everyday comfort"
        ],
        boxContents: [
            "1 Pair of Sneakers",
            "Original Shoe Box"
        ],
        warranty: "3 Months Manufacturer Warranty",
        delivery: "Free delivery in 3-5 business days",
        seller: {
            name: "Puma Sports India",
            rating: 4.6,
            verified: true
        },
        offers: [
            "Extra 10% off on selected cards",
            "Easy returns",
            "Additional fashion offers"
        ],
        tags: ["puma", "sneakers", "casual", "men"],
        isFeatured: false,
        isBestSeller: true,
        isNew: true,
        isWishlisted: false,
        seo: {
            title: "Puma Men's Casual Sneakers",
            description: "Shop Puma men's casual sneakers for everyday comfort.",
            keywords: ["Puma sneakers", "casual shoes", "men shoes"]
        },
        reviews: [
            {
                name: "Rakesh",
                rating: 5,
                title: "Looks great",
                comment: "The design is stylish and comfortable.",
                date: "2026-08-23"
            },
            {
                name: "Sai",
                rating: 4,
                title: "Good purchase",
                comment: "Quality is good for the price.",
                date: "2026-08-14"
            }
        ]
    },

    {
        id: 8,
        name: "OnePlus Nord CE 4 5G",
        slug: "oneplus-nord-ce-4",
        brand: "OnePlus",
        category: "Electronics",
        subCategory: "Smartphones",
        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=900&q=85"
        ],
        price: 24999,
        originalPrice: 29999,
        discountPercentage: 17,
        discountAmount: 5000,
        currency: "INR",
        rating: 4.4,
        totalReviews: 1190,
        totalRatings: 1305,
        stock: 29,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Fast 5G smartphone with a smooth display and large battery.",
        description: "OnePlus Nord CE 4 combines fast performance, a smooth AMOLED display, 5G connectivity and a large battery for everyday users.",
        colors: ["Dark Chrome", "Celadon Marble"],
        storageOptions: ["128GB", "256GB"],
        sizes: [],
        specifications: {
            display: "6.7-inch AMOLED",
            processor: "Snapdragon 7 Gen 3",
            ram: "8GB",
            storage: "128GB",
            rearCamera: "50MP + 8MP",
            frontCamera: "16MP",
            battery: "5500mAh",
            operatingSystem: "OxygenOS"
        },
        features: [
            "120Hz AMOLED display",
            "5500mAh battery",
            "100W SUPERVOOC charging",
            "5G connectivity",
            "Dual stereo speakers"
        ],
        boxContents: [
            "OnePlus Nord CE 4",
            "Charger",
            "USB Type-C Cable",
            "SIM Tool",
            "User Guide"
        ],
        warranty: "1 Year OnePlus Warranty",
        delivery: "Free delivery in 2-5 business days",
        seller: {
            name: "SuperComNet",
            rating: 4.5,
            verified: true
        },
        offers: [
            "Bank cashback available",
            "No-cost EMI available",
            "Exchange bonus available"
        ],
        tags: ["oneplus", "nord", "5g", "smartphone"],
        isFeatured: true,
        isBestSeller: false,
        isNew: true,
        isWishlisted: false,
        seo: {
            title: "OnePlus Nord CE 4 5G",
            description: "Buy OnePlus Nord CE 4 with AMOLED display and fast charging.",
            keywords: ["OnePlus Nord", "Nord CE 4", "5G phone"]
        },
        reviews: [
            {
                name: "Deepak",
                rating: 5,
                title: "Fast and smooth",
                comment: "Performance is excellent and charging is very fast.",
                date: "2026-08-26"
            },
            {
                name: "Ajay",
                rating: 4,
                title: "Good phone",
                comment: "Display and battery are the highlights.",
                date: "2026-08-17"
            }
        ]
    },

    {
        id: 9,
        name: "HP 15s Intel Core i5 Laptop",
        slug: "hp-15s-core-i5-laptop",
        brand: "HP",
        category: "Electronics",
        subCategory: "Laptops",
        images: [
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1496180727794-817822f65950?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=900&q=85"
        ],
        price: 57990,
        originalPrice: 69990,
        discountPercentage: 17,
        discountAmount: 12000,
        currency: "INR",
        rating: 4.3,
        totalReviews: 538,
        totalRatings: 601,
        stock: 16,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "15.6-inch laptop designed for work, study and everyday productivity.",
        description: "HP 15s offers reliable everyday performance with an Intel Core processor, Full HD display, fast SSD storage and a slim design.",
        colors: ["Natural Silver"],
        storageOptions: ["512GB SSD"],
        sizes: [],
        specifications: {
            display: "15.6-inch Full HD",
            processor: "Intel Core i5",
            ram: "16GB DDR4",
            storage: "512GB SSD",
            graphics: "Intel Integrated Graphics",
            operatingSystem: "Windows 11",
            battery: "3-cell battery"
        },
        features: [
            "Full HD anti-glare display",
            "16GB RAM",
            "Fast SSD storage",
            "Wi-Fi 6",
            "Full-size keyboard"
        ],
        boxContents: [
            "HP Laptop",
            "Power Adapter",
            "User Documentation"
        ],
        warranty: "1 Year HP Warranty",
        delivery: "Free delivery in 2-5 business days",
        seller: {
            name: "Appario Retail Private Ltd",
            rating: 4.6,
            verified: true
        },
        offers: [
            "No-cost EMI available",
            "Exchange offers available",
            "Selected bank discount"
        ],
        tags: ["hp", "laptop", "core-i5", "windows"],
        isFeatured: true,
        isBestSeller: false,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "HP 15s Intel Core i5 Laptop",
            description: "Shop HP 15s laptop with Intel Core i5 processor and 16GB RAM.",
            keywords: ["HP laptop", "HP 15s", "Core i5 laptop"]
        },
        reviews: [
            {
                name: "Suresh",
                rating: 5,
                title: "Good laptop for work",
                comment: "Fast enough for office work and development.",
                date: "2026-08-20"
            },
            {
                name: "Harsha",
                rating: 4,
                title: "Value for money",
                comment: "Good display and SSD performance.",
                date: "2026-08-11"
            }
        ]
    },

    {
        id: 10,
        name: "Levi's Men's Slim Fit Jeans",
        slug: "levis-mens-slim-fit-jeans",
        brand: "Levi's",
        category: "Fashion",
        subCategory: "Men's Clothing",
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=900&q=85"
        ],
        price: 1899,
        originalPrice: 3999,
        discountPercentage: 53,
        discountAmount: 2100,
        currency: "INR",
        rating: 4.4,
        totalReviews: 1105,
        totalRatings: 1240,
        stock: 64,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Classic slim-fit jeans with comfortable stretch fabric.",
        description: "Levi's men's slim-fit jeans offer a modern silhouette with comfortable stretch denim suitable for casual everyday styling.",
        colors: ["Dark Blue", "Medium Blue", "Black"],
        storageOptions: [],
        sizes: ["S", "M", "L", "XL"],
        specifications: {
            material: "Cotton Stretch Denim",
            fit: "Slim Fit",
            rise: "Mid Rise",
            closure: "Button and Zip",
            pattern: "Solid",
            gender: "Men"
        },
        features: [
            "Comfort stretch denim",
            "Slim modern fit",
            "Classic five-pocket design",
            "Durable stitching",
            "Everyday casual style"
        ],
        boxContents: [
            "1 Pair of Jeans"
        ],
        warranty: "6 Months Manufacturing Warranty",
        delivery: "Free delivery in 3-5 business days",
        seller: {
            name: "Levi Strauss India",
            rating: 4.6,
            verified: true
        },
        offers: [
            "Buy more save more",
            "Additional bank discount",
            "Easy returns available"
        ],
        tags: ["levis", "jeans", "men", "denim"],
        isFeatured: false,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "Levi's Men's Slim Fit Jeans",
            description: "Buy Levi's men's slim-fit stretch jeans in multiple sizes.",
            keywords: ["Levis jeans", "men jeans", "slim fit jeans"]
        },
        reviews: [
            {
                name: "Naveen",
                rating: 5,
                title: "Perfect fit",
                comment: "Good fitting and comfortable fabric.",
                date: "2026-08-21"
            },
            {
                name: "Vamsi",
                rating: 4,
                title: "Good jeans",
                comment: "The colour and quality are nice.",
                date: "2026-08-09"
            }
        ]
    },

    {
        id: 11,
        name: "Apple MacBook Air M2",
        slug: "apple-macbook-air-m2",
        brand: "Apple",
        category: "Electronics",
        subCategory: "Laptops",
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?auto=format&fit=crop&w=900&q=85"
        ],
        price: 89990,
        originalPrice: 99900,
        discountPercentage: 10,
        discountAmount: 9910,
        currency: "INR",
        rating: 4.8,
        totalReviews: 1650,
        totalRatings: 1785,
        stock: 14,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Slim and powerful laptop with Apple M2 chip and all-day battery life.",
        description: "MacBook Air with the M2 chip combines excellent performance, a sharp Liquid Retina display and a lightweight design for work, study and creative tasks.",
        colors: ["Midnight", "Starlight", "Silver", "Space Grey"],
        storageOptions: ["256GB", "512GB", "1TB"],
        sizes: [],
        specifications: {
            display: "13.6-inch Liquid Retina",
            processor: "Apple M2",
            ram: "8GB Unified Memory",
            storage: "256GB SSD",
            graphics: "8-core GPU",
            operatingSystem: "macOS",
            battery: "Up to 18 hours"
        },
        features: [
            "Apple M2 chip",
            "13.6-inch Liquid Retina display",
            "Backlit Magic Keyboard",
            "Touch ID",
            "Fanless silent design"
        ],
        boxContents: [
            "MacBook Air",
            "USB-C Power Adapter",
            "USB-C Charge Cable",
            "Documentation"
        ],
        warranty: "1 Year Apple Limited Warranty",
        delivery: "Free delivery in 2-5 business days",
        seller: {
            name: "Appario Retail Private Ltd",
            rating: 4.7,
            verified: true
        },
        offers: [
            "No-cost EMI available",
            "Selected bank cashback",
            "Exchange offers available"
        ],
        tags: ["apple", "macbook", "laptop", "m2"],
        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "Apple MacBook Air M2",
            description: "Buy Apple MacBook Air M2 with Liquid Retina display and powerful performance.",
            keywords: ["MacBook Air", "MacBook M2", "Apple laptop"]
        },
        reviews: [
            {
                name: "Abhishek",
                rating: 5,
                title: "Excellent laptop",
                comment: "Very fast, lightweight and battery backup is excellent.",
                date: "2026-08-27"
            },
            {
                name: "Teja",
                rating: 5,
                title: "Premium laptop",
                comment: "Perfect for development and everyday work.",
                date: "2026-08-16"
            }
        ]
    },

    {
        id: 12,
        name: "Fossil Men's Chronograph Watch",
        slug: "fossil-mens-chronograph-watch",
        brand: "Fossil",
        category: "Accessories",
        subCategory: "Watches",
        images: [
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85"
        ],
        price: 7499,
        originalPrice: 14995,
        discountPercentage: 50,
        discountAmount: 7496,
        currency: "INR",
        rating: 4.5,
        totalReviews: 512,
        totalRatings: 580,
        stock: 27,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Classic chronograph watch with a premium stainless-steel design.",
        description: "Fossil men's chronograph watch combines a classic dial, stainless-steel construction and reliable quartz movement for a versatile premium look.",
        colors: ["Black", "Silver", "Brown"],
        storageOptions: [],
        sizes: [],
        specifications: {
            movement: "Quartz",
            caseMaterial: "Stainless Steel",
            strapMaterial: "Leather",
            dialColor: "Black",
            waterResistance: "5 ATM",
            display: "Analog",
            gender: "Men"
        },
        features: [
            "Chronograph function",
            "Stainless-steel case",
            "Leather strap",
            "Water resistant",
            "Date display"
        ],
        boxContents: [
            "Fossil Watch",
            "Warranty Card",
            "Instruction Manual",
            "Fossil Gift Box"
        ],
        warranty: "2 Years Fossil Warranty",
        delivery: "Free delivery in 3-5 business days",
        seller: {
            name: "Fossil India",
            rating: 4.6,
            verified: true
        },
        offers: [
            "Additional bank discount",
            "Gift packaging available",
            "Easy returns available"
        ],
        tags: ["fossil", "watch", "chronograph", "accessories"],
        isFeatured: false,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "Fossil Men's Chronograph Watch",
            description: "Shop Fossil men's chronograph watch with premium stainless-steel design.",
            keywords: ["Fossil watch", "chronograph watch", "men watch"]
        },
        reviews: [
            {
                name: "Karthik",
                rating: 5,
                title: "Premium looking",
                comment: "Looks excellent when worn with formal clothes.",
                date: "2026-08-20"
            },
            {
                name: "Ravi",
                rating: 4,
                title: "Good watch",
                comment: "Nice design and comfortable strap.",
                date: "2026-08-07"
            }
        ]
    },

    {
        id: 13,
        name: "Ray-Ban Classic Wayfarer Sunglasses",
        slug: "ray-ban-classic-wayfarer",
        brand: "Ray-Ban",
        category: "Accessories",
        subCategory: "Sunglasses",
        images: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=85"
        ],
        price: 8290,
        originalPrice: 10990,
        discountPercentage: 25,
        discountAmount: 2700,
        currency: "INR",
        rating: 4.6,
        totalReviews: 438,
        totalRatings: 492,
        stock: 22,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Iconic Wayfarer sunglasses with a timeless frame and UV protection.",
        description: "Ray-Ban Wayfarer sunglasses offer a classic silhouette with quality lenses and a versatile design suitable for everyday outdoor use.",
        colors: ["Black", "Tortoise", "Transparent"],
        storageOptions: [],
        sizes: [],
        specifications: {
            frameMaterial: "Acetate",
            lensMaterial: "Glass",
            lensTechnology: "UV Protection",
            frameShape: "Square",
            gender: "Unisex",
            style: "Wayfarer"
        },
        features: [
            "100% UV protection",
            "Classic Wayfarer design",
            "Durable acetate frame",
            "Comfortable fit",
            "Unisex styling"
        ],
        boxContents: [
            "Sunglasses",
            "Ray-Ban Case",
            "Cleaning Cloth",
            "Authenticity Card"
        ],
        warranty: "2 Years Manufacturer Warranty",
        delivery: "Free delivery in 3-5 business days",
        seller: {
            name: "Ray-Ban India",
            rating: 4.7,
            verified: true
        },
        offers: [
            "Bank discount available",
            "Free protective case",
            "Easy returns available"
        ],
        tags: ["ray-ban", "sunglasses", "wayfarer", "accessories"],
        isFeatured: true,
        isBestSeller: false,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "Ray-Ban Classic Wayfarer Sunglasses",
            description: "Buy Ray-Ban classic Wayfarer sunglasses with UV protection.",
            keywords: ["Ray-Ban", "Wayfarer", "sunglasses"]
        },
        reviews: [
            {
                name: "Vikram",
                rating: 5,
                title: "Classic design",
                comment: "The frame looks premium and fits comfortably.",
                date: "2026-08-18"
            },
            {
                name: "Sanjay",
                rating: 4,
                title: "Stylish",
                comment: "Good sunglasses for everyday use.",
                date: "2026-08-05"
            }
        ]
    },

    {
        id: 14,
        name: "Philips Air Fryer 4.1L",
        slug: "philips-air-fryer-4-1l",
        brand: "Philips",
        category: "Home & Kitchen",
        subCategory: "Kitchen Appliances",
        images: [
            "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1598514982901-ae627d9d3b44?auto=format&fit=crop&w=900&q=85"
        ],
        price: 6999,
        originalPrice: 9995,
        discountPercentage: 30,
        discountAmount: 2996,
        currency: "INR",
        rating: 4.4,
        totalReviews: 762,
        totalRatings: 840,
        stock: 19,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Compact air fryer for healthier frying, baking and roasting at home.",
        description: "Philips Air Fryer uses rapid air technology to prepare crispy food with less oil while offering convenient temperature and time controls.",
        colors: ["Black"],
        storageOptions: [],
        sizes: [],
        specifications: {
            capacity: "4.1 Litres",
            power: "1400 Watts",
            technology: "Rapid Air",
            temperature: "Up to 200°C",
            control: "Digital",
            timer: "60 Minutes"
        },
        features: [
            "Rapid Air Technology",
            "Adjustable temperature",
            "Digital controls",
            "Easy-clean basket",
            "Auto shut-off"
        ],
        boxContents: [
            "Air Fryer",
            "Cooking Basket",
            "User Manual",
            "Warranty Card"
        ],
        warranty: "2 Years Philips Warranty",
        delivery: "Free delivery in 2-5 business days",
        seller: {
            name: "Philips India",
            rating: 4.6,
            verified: true
        },
        offers: [
            "Bank discount available",
            "No-cost EMI available",
            "Additional kitchen offers"
        ],
        tags: ["philips", "air-fryer", "kitchen", "appliance"],
        isFeatured: true,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "Philips Air Fryer 4.1L",
            description: "Buy Philips 4.1L air fryer with Rapid Air technology.",
            keywords: ["Philips air fryer", "air fryer", "kitchen appliance"]
        },
        reviews: [
            {
                name: "Lakshmi",
                rating: 5,
                title: "Very useful",
                comment: "Easy to use and food comes out crispy.",
                date: "2026-08-24"
            },
            {
                name: "Pooja",
                rating: 4,
                title: "Good appliance",
                comment: "Easy cleaning and good cooking results.",
                date: "2026-08-13"
            }
        ]
    },

    {
        id: 15,
        name: "Amazon Echo Smart Speaker",
        slug: "amazon-echo-smart-speaker",
        brand: "Amazon",
        category: "Electronics",
        subCategory: "Smart Home",
        images: [
            "https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&w=900&q=85"
        ],
        price: 3999,
        originalPrice: 5499,
        discountPercentage: 27,
        discountAmount: 1500,
        currency: "INR",
        rating: 4.4,
        totalReviews: 1840,
        totalRatings: 1995,
        stock: 48,
        stockStatus: "In Stock",
        availability: "Available",
        shortDescription: "Smart speaker with Alexa for music, information and smart-home control.",
        description: "Amazon Echo lets you play music, ask questions, set reminders and control compatible smart-home devices using voice commands.",
        colors: ["Charcoal", "Blue", "White"],
        storageOptions: [],
        sizes: [],
        specifications: {
            assistant: "Alexa",
            connectivity: "Wi-Fi and Bluetooth",
            speaker: "3-inch speaker",
            microphone: "Far-field microphone array",
            power: "Power Adapter",
            compatibility: "Smart Home Devices"
        },
        features: [
            "Alexa voice assistant",
            "Smart-home control",
            "Music streaming",
            "Voice reminders",
            "Bluetooth connectivity"
        ],
        boxContents: [
            "Echo Speaker",
            "Power Adapter",
            "Quick Start Guide"
        ],
        warranty: "1 Year Limited Warranty",
        delivery: "Free delivery in 2-5 business days",
        seller: {
            name: "Amazon Retail",
            rating: 4.7,
            verified: true
        },
        offers: [
            "Bank cashback available",
            "No-cost EMI available",
            "Limited-time discount"
        ],
        tags: ["amazon", "echo", "alexa", "smart-home"],
        isFeatured: false,
        isBestSeller: true,
        isNew: false,
        isWishlisted: false,
        seo: {
            title: "Amazon Echo Smart Speaker",
            description: "Buy Amazon Echo smart speaker with Alexa voice assistant.",
            keywords: ["Amazon Echo", "Alexa", "smart speaker"]
        },
        reviews: [
            {
                name: "Naveen",
                rating: 5,
                title: "Very useful",
                comment: "Alexa responds quickly and the speaker sounds good.",
                date: "2026-08-22"
            },
            {
                name: "Meena",
                rating: 4,
                title: "Good smart speaker",
                comment: "Useful for music and reminders.",
                date: "2026-08-06"
            }
        ]
    },

    {
    id: 16,
    name: "L'Oréal Paris Revitalift Face Serum",
    slug: "loreal-revitalift-face-serum",
    brand: "L'Oréal Paris",
    category: "Beauty",
    subCategory: "Skin Care",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556229010-aa3b3f5e9b5f?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85"
    ],
    price: 799,
    originalPrice: 1199,
    discountPercentage: 33,
    discountAmount: 400,
    currency: "INR",
    rating: 4.3,
    totalReviews: 932,
    totalRatings: 1018,
    stock: 58,
    stockStatus: "In Stock",
    availability: "Available",
    shortDescription: "Lightweight facial serum designed for a smooth and hydrated skin feel.",
    description: "L'Oréal Paris Revitalift serum is designed for daily skincare routines with a lightweight texture that absorbs easily into the skin.",
    colors: [],
    storageOptions: [],
    sizes: [],
    specifications: {
      quantity: "30ml",
      skinType: "Normal to Dry",
      texture: "Lightweight Serum",
      usage: "Face and Neck",
      form: "Serum",
      countryOfOrigin: "India"
    },
    features: [
      "Lightweight texture",
      "Quick absorption",
      "Suitable for daily skincare",
      "Easy pump dispenser",
      "Dermatologically tested"
    ],
    boxContents: [
      "1 Face Serum Bottle",
      "Product Information"
    ],
    warranty: "No Warranty",
    delivery: "Free delivery in 3-5 business days",
    seller: {
      name: "L'Oréal India",
      rating: 4.5,
      verified: true
    },
    offers: [
      "Extra discount on selected cards",
      "Buy more save more",
      "Easy returns available"
    ],
    tags: ["loreal", "serum", "skincare", "beauty"],
    isFeatured: false,
    isBestSeller: true,
    isNew: true,
    isWishlisted: false,
    seo: {
      title: "L'Oréal Paris Revitalift Face Serum",
      description: "Shop L'Oréal Paris Revitalift facial serum for daily skincare.",
      keywords: ["L'Oreal serum", "face serum", "skincare"]
    },
    reviews: [
      {
        name: "Anjali",
        rating: 5,
        title: "Nice texture",
        comment: "The serum feels lightweight and absorbs quickly.",
        date: "2026-08-25"
      },
      {
        name: "Divya",
        rating: 4,
        title: "Good product",
        comment: "Easy to apply and convenient packaging.",
        date: "2026-08-12"
      }
    ]
  },
 
  {
    id: 17,
    name: "Prestige Electric Rice Cooker",
    slug: "prestige-electric-rice-cooker",
    brand: "Prestige",
    category: "Home & Kitchen",
    subCategory: "Kitchen Appliances",
    images: [
      "https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"
    ],
    price: 1899,
    originalPrice: 2995,
    discountPercentage: 37,
    discountAmount: 1096,
    currency: "INR",
    rating: 4.2,
    totalReviews: 486,
    totalRatings: 540,
    stock: 33,
    stockStatus: "In Stock",
    availability: "Available",
    shortDescription: "Compact electric rice cooker for convenient everyday cooking.",
    description: "Prestige electric rice cooker is designed for convenient rice preparation and everyday kitchen use with simple controls and durable construction.",
    colors: ["White", "Black"],
    storageOptions: [],
    sizes: [],
    specifications: {
      capacity: "1.8 Litres",
      power: "700 Watts",
      bodyMaterial: "Food-grade material",
      control: "Automatic",
      cookingModes: "Cook and Keep Warm",
      voltage: "230V"
    },
    features: [
      "Automatic cooking",
      "Keep-warm function",
      "Removable cooking bowl",
      "Cool-touch handles",
      "Compact design"
    ],
    boxContents: [
      "Rice Cooker",
      "Cooking Bowl",
      "Measuring Cup",
      "Rice Ladle",
      "User Manual"
    ],
    warranty: "1 Year Prestige Warranty",
    delivery: "Free delivery in 3-5 business days",
    seller: {
      name: "Prestige Retail",
      rating: 4.5,
      verified: true
    },
    offers: [
      "Bank discount available",
      "Easy returns available",
      "Limited-time kitchen offer"
    ],
    tags: ["prestige", "rice-cooker", "kitchen", "appliance"],
    isFeatured: false,
    isBestSeller: true,
    isNew: false,
    isWishlisted: false,
    seo: {
      title: "Prestige Electric Rice Cooker",
      description: "Buy Prestige electric rice cooker with automatic cooking and keep-warm function.",
      keywords: ["Prestige rice cooker", "electric cooker", "kitchen appliance"]
    },
    reviews: [
      {
        name: "Sowmya",
        rating: 5,
        title: "Easy to use",
        comment: "Very convenient for preparing rice every day.",
        date: "2026-08-19"
      },
      {
        name: "Ramesh",
        rating: 4,
        title: "Good cooker",
        comment: "Simple operation and easy to clean.",
        date: "2026-08-08"
      }
    ]
  },
 
  {
    id: 18,
    name: "Wildcraft 30L Laptop Backpack",
    slug: "wildcraft-30l-laptop-backpack",
    brand: "Wildcraft",
    category: "Accessories",
    subCategory: "Bags & Backpacks",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=900&q=85"
    ],
    price: 1399,
    originalPrice: 2999,
    discountPercentage: 53,
    discountAmount: 1600,
    currency: "INR",
    rating: 4.4,
    totalReviews: 1280,
    totalRatings: 1396,
    stock: 47,
    stockStatus: "In Stock",
    availability: "Available",
    shortDescription: "Spacious laptop backpack designed for office, college and travel.",
    description: "Wildcraft laptop backpack provides organized storage for laptops, books and accessories while maintaining a comfortable everyday design.",
    colors: ["Black", "Blue", "Grey"],
    storageOptions: [],
    sizes: [],
    specifications: {
      capacity: "30 Litres",
      laptopCompatibility: "Up to 15.6-inch",
      material: "Polyester",
      compartments: "Multiple",
      closure: "Zip",
      waterResistance: "Water Resistant"
    },
    features: [
      "Dedicated laptop compartment",
      "Multiple storage pockets",
      "Padded shoulder straps",
      "Water-resistant fabric",
      "Suitable for travel and office"
    ],
    boxContents: [
      "1 Backpack"
    ],
    warranty: "1 Year Wildcraft Warranty",
    delivery: "Free delivery in 3-5 business days",
    seller: {
      name: "Wildcraft India",
      rating: 4.6,
      verified: true
    },
    offers: [
      "Additional bank discount",
      "Easy returns available",
      "Buy more save more"
    ],
    tags: ["wildcraft", "backpack", "laptop-bag", "travel"],
    isFeatured: false,
    isBestSeller: true,
    isNew: true,
    isWishlisted: false,
    seo: {
      title: "Wildcraft 30L Laptop Backpack",
      description: "Shop Wildcraft laptop backpack with multiple compartments and padded storage.",
      keywords: ["Wildcraft backpack", "laptop bag", "travel backpack"]
    },
    reviews: [
      {
        name: "Rahul",
        rating: 5,
        title: "Spacious backpack",
        comment: "Enough space for laptop and daily office items.",
        date: "2026-08-23"
      },
      {
        name: "Mohan",
        rating: 4,
        title: "Good quality",
        comment: "Comfortable straps and good material.",
        date: "2026-08-04"
      }
    ]
  },
 
  {
    id: 19,
    name: "LG 43 Inch 4K Smart LED TV",
    slug: "lg-43-inch-4k-smart-tv",
    brand: "LG",
    category: "Electronics",
    subCategory: "Televisions",
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?auto=format&fit=crop&w=900&q=85"
    ],
    price: 32990,
    originalPrice: 49990,
    discountPercentage: 34,
    discountAmount: 17000,
    currency: "INR",
    rating: 4.5,
    totalReviews: 923,
    totalRatings: 1010,
    stock: 12,
    stockStatus: "In Stock",
    availability: "Available",
    shortDescription: "43-inch 4K smart television with vivid picture quality and connected features.",
    description: "LG 4K Smart LED TV offers detailed picture quality, smart streaming features and a modern slim design for home entertainment.",
    colors: ["Black"],
    storageOptions: [],
    sizes: [],
    specifications: {
      display: "43-inch 4K UHD",
      resolution: "3840 x 2160",
      refreshRate: "60Hz",
      operatingSystem: "webOS",
      connectivity: "Wi-Fi, Bluetooth, HDMI",
      speakers: "20W"
    },
    features: [
      "4K Ultra HD resolution",
      "Smart webOS platform",
      "HDR support",
      "Built-in Wi-Fi",
      "Multiple HDMI ports"
    ],
    boxContents: [
      "LG Smart TV",
      "Remote Control",
      "Stand",
      "Power Cable",
      "User Manual"
    ],
    warranty: "2 Years LG Warranty",
    delivery: "Free delivery with installation",
    seller: {
      name: "LG Electronics India",
      rating: 4.7,
      verified: true
    },
    offers: [
      "No-cost EMI available",
      "Bank cashback available",
      "Free installation"
    ],
    tags: ["lg", "smart-tv", "4k", "television"],
    isFeatured: true,
    isBestSeller: true,
    isNew: false,
    isWishlisted: false,
    seo: {
      title: "LG 43 Inch 4K Smart LED TV",
      description: "Buy LG 43-inch 4K Smart LED TV with webOS and HDR support.",
      keywords: ["LG TV", "43 inch TV", "4K Smart TV"]
    },
    reviews: [
      {
        name: "Srinivas",
        rating: 5,
        title: "Great picture quality",
        comment: "The 4K picture looks sharp and colours are good.",
        date: "2026-08-26"
      },
      {
        name: "Prasad",
        rating: 4,
        title: "Good smart TV",
        comment: "Easy to use and installation was smooth.",
        date: "2026-08-15"
      }
    ]
  },
 
  {
    id: 20,
    name: "American Tourister Travel Suitcase",
    slug: "american-tourister-travel-suitcase",
    brand: "American Tourister",
    category: "Travel",
    subCategory: "Luggage",
    images: [
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1597318181409-cf64d0d5a5a8?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85"
    ],
    price: 2999,
    originalPrice: 5999,
    discountPercentage: 50,
    discountAmount: 3000,
    currency: "INR",
    rating: 4.5,
    totalReviews: 675,
    totalRatings: 742,
    stock: 25,
    stockStatus: "In Stock",
    availability: "Available",
    shortDescription: "Durable hard-shell suitcase designed for comfortable and secure travel.",
    description: "American Tourister travel suitcase features a lightweight hard-shell body, smooth wheels and organized compartments for trips and vacations.",
    colors: ["Black", "Blue", "Red"],
    storageOptions: ["55cm", "68cm", "78cm"],
    sizes: [],
    specifications: {
      material: "Polycarbonate",
      capacity: "65 Litres",
      wheels: "4 Spinner Wheels",
      lock: "Combination Lock",
      closure: "Zip",
      luggageType: "Hard Luggage"
    },
    features: [
      "Lightweight hard shell",
      "360-degree spinner wheels",
      "Combination security lock",
      "Telescopic handle",
      "Interior compression straps"
    ],
    boxContents: [
      "1 Suitcase",
      "Warranty Card"
    ],
    warranty: "3 Years International Warranty",
    delivery: "Free delivery in 3-5 business days",
    seller: {
      name: "American Tourister India",
      rating: 4.6,
      verified: true
    },
    offers: [
      "Extra bank discount",
      "Easy returns available",
      "Travel season offer"
    ],
    tags: ["american-tourister", "luggage", "suitcase", "travel"],
    isFeatured: true,
    isBestSeller: false,
    isNew: true,
    isWishlisted: false,
    seo: {
      title: "American Tourister Travel Suitcase",
      description: "Shop American Tourister hard-shell travel suitcase with spinner wheels.",
      keywords: ["American Tourister", "travel suitcase", "luggage"]
    },
    reviews: [
      {
        name: "Chaitanya",
        rating: 5,
        title: "Good travel bag",
        comment: "Wheels move smoothly and the suitcase feels strong.",
        date: "2026-08-21"
      },
      {
        name: "Manish",
        rating: 4,
        title: "Worth buying",
        comment: "Good storage and attractive design.",
        date: "2026-08-10"
      }
    ]
  }
];
 
export default products;