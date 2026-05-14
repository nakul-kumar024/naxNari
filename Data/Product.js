// Data/Product.js

// You can later move this array to a separate JSON file (products.json)
// or fetch it from Sanity/Supabase/etc.

// For now — simple array with realistic jewelry fields

"use cleint";
export const products = [
    {
      id: "1",
      slug: "kundan-pearl-necklace-set",
      name: "Kundan Pearl Necklace Set",
      price: 3499,
      originalPrice: 4499,
      category: "necklace-sets",
      images: ["/background.jpg"],
      description:
        "Elegant 22kt gold-plated kundan necklace set with real freshwater pearls. Perfect for weddings and festive occasions.",
      stock: 12,
      variants: [
        { color: "Gold", inStock: true },
        { color: "Rose Gold", inStock: false },
      ],
      isNew: true,
      isFeatured: true,
    },
    {
      id: "2",
      slug: "polki-jhumka-earrings",
      name: "Polki Jhumka Earrings",
      price: 2899,
      originalPrice: null,
      category: "earrings",
      images: ["/background.jpg"],
      description:
        "Handcrafted polki diamond jhumkas with intricate detailing. Lightweight and ideal for daily wear or ethnic looks.",
      stock: 8,
      variants: [
        { color: "Silver", inStock: true },
        { color: "Gold Plated", inStock: true },
      ],
      isNew: false,
      isFeatured: true,
    },
    {
      id: "3",
      slug: "matha-patti-bridal",
      name: "Bridal Matha Patti",
      price: 5999,
      originalPrice: 7499,
      category: "bridal",
      images: ["/background.jpg"],
      description:
        "Stunning bridal matha patti with polki stones and pearl drops. A statement piece for your big day.",
      stock: 5,
      variants: [{ color: "Gold", inStock: true }],
      isNew: true,
      isFeatured: false,
    },
    {
      id: "4",
      slug: "choker-necklace-set",
      name: "Temple Choker Necklace Set",
      price: 4199,
      originalPrice: null,
      category: "chokers",
      images: ["/background.jpg"],
      description:
        "Traditional South Indian temple-inspired choker with Kemp stones and gold finish.",
      stock: 15,
      variants: [{ color: "Gold with Kemp", inStock: true }],
      isNew: false,
      isFeatured: true,
    },
    {
      id: "41",
      slug: "choker-necklace-set",
      name: "Temple Choker Necklace Set",
      price: 4199,
      originalPrice: null,
      category: "chokers",
      images: ["/background.jpg"],
      description:
        "Traditional South Indian temple-inspired choker with Kemp stones and gold finish.",
      stock: 15,
      variants: [{ color: "Gold with Kemp", inStock: true }],
      isNew: false,
      isFeatured: true,
    },
    {
      id: "42",
      slug: "choker-necklace-set",
      name: "Temple Choker Necklace Set",
      price: 4199,
      originalPrice: null,
      category: "chokers",
      images: ["/background.jpg"],
      description:
        "Traditional South Indian temple-inspired choker with Kemp stones and gold finish.",
      stock: 15,
      variants: [{ color: "Gold with Kemp", inStock: true }],
      isNew: false,
      isFeatured: true,
    },
    {
      id: "43",
      slug: "choker-necklace-set",
      name: "Temple Choker Necklace Set",
      price: 4199,
      originalPrice: null,
      category: "chokers",
      images: ["/background.jpg"],
      description:
        "Traditional South Indian temple-inspired choker with Kemp stones and gold finish.",
      stock: 15,
      variants: [{ color: "Gold with Kemp", inStock: true }],
      isNew: false,
      isFeatured: true,
    },
    {
      id: "44",
      slug: "choker-necklace-set",
      name: "Temple Choker Necklace Set",
      price: 4199,
      originalPrice: null,
      category: "chokers",
      images: ["/background.jpg"],
      description:
        "Traditional South Indian temple-inspired choker with Kemp stones and gold finish.",
      stock: 15,
      variants: [{ color: "Gold with Kemp", inStock: true }],
      isNew: false,
      isFeatured: true,
    },
    // Add more products here...
    // {
    //   id: "5",
    //   slug: "...",
    //   name: "...",
    //   ...
    // }
  ];
  
  // Optional helper functions (you can import and use them anywhere)
  
  export function getFeaturedProducts() {
    return products.filter((p) => p.isFeatured);
  }
  
  export function getNewArrivals() {
    return products.filter((p) => p.isNew);
  }
  
  export function getProductById(id) {
    return products.find((p) => p.id === id);
  }
  
  export function getProductBySlug(slug) {
    return products.find((p) => p.slug === slug);
  }
  
  export function getProductsByCategory(category) {
    return products.filter((p) => p.category === category);
  }