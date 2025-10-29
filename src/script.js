import { useState, useEffect } from "react";
import { toast } from "react-toastify";
// ------------------ بيانات المنتجات ------------------
export const slides = [
  {title: "Choco Boqute",desc: "Discover our stunning flower arrangements for any celebration.",img: "/images/chocoboquet6.jpg",link: "/ChocoBoqute"
  },
  {title: "birthdays",desc: "Celebrate birthdays with colorful and cheerful floral gifts.",img: "/images/birthday2.jpg",link: "/birthdays"
  },
  {title: "Mini Bouquets",desc: "Elegant floral sets to beautify your home or office.",img: "/images/miniboquet1.jpg",link: "/minibouquets"
  },
  { title: "Shabka Trays", desc: "Thoughtful flower gifts for your loved ones and special moments.", img: "/images/shabka1.jpg", link: "/shabkatrays"
  },
  {title: "Graduation",desc: "Luxury and premium floral arrangements for extraordinary occasions.",img: "/images/gradution1.jpg",link: "/graduation"
  },
  {title: "Gift box",desc: "Floral-themed accessories and cute decorations for everyday joy.",img: "/images/giftbox1.jpg",link: "/giftbox"
  },
];

export const products = {
  ChocoBoqute: [
    {id: 1, title: "Rose Elegance Bouquet", description: "Luxurious red and white roses, perfect for romantic moments.", image: "/images/chocoboquet1.jpg"},
    {id: 2, title: "Pink Harmony Bouquet", description: "Soft pink roses and lilies for a delicate and elegant touch.", image: "/images/chocoboquet2.jpg"},
    {id: 3, title: "Sunset Blooms", description: "Orange and yellow roses bringing the warmth of sunset indoors.", image: "/images/chocoboquet3.jpg"},
    {id: 4, title: "White Whisper Bouquet", description: "Elegant white roses and lilies, perfect for calm, peaceful vibes.", image: "/images/chocoboquet4.jpg"},
    {id: 5, title: "Lavender Dreams Bouquet", description: "Relaxing lavender and white roses creating a soothing atmosphere.", image: "/images/chocoboquet5.jpg"},
    {id: 6, title: "Golden Radiance Bouquet", description: "Bright yellow roses with peach flowers, full of sunshine.", image: "/images/chocoboquet6.jpg"},
  ],

  birthdays: [
    {id: 7, title: "Birthday Bloom Box", description: "Colorful flowers wrapped beautifully to celebrate birthdays.", image: "/images/birthday1.jpg"},
    {id: 8, title: "Sunshine Birthday Bouquet", description: "Yellow and white roses spreading happiness on a special day.", image: "/images/birthday2.jpg"},
    {id: 9, title: "Joyful Celebration Set", description: "Cheerful mix of roses, chocolates, and confetti for joy.", image: "/images/birthday3.jpg"},
  ],

  MiniBouquets: [
    {id: 10, title: "Home Décor Floral Set", description: "Pastel artificial flowers adding life and charm to any room.", image: "/images/miniboquet1.jpg"},
    {id: 11, title: "Lavender Room Jar", description: "Preserved lavender in a jar, perfect for home or office décor.", image: "/images/miniboquet2.jpg"},
    {id: 12, title: "Modern Table Arrangement", description: "Minimalistic floral set in a clear vase for modern interiors.", image: "/images/miniboquet3.jpg"},
    {id: 13, title: "Mini Rose Delight", description: "Tiny fresh roses in a cute jar, ideal for gifting or desk.", image: "/images/miniboquet4.jpg"},
    {id: 14, title: "Pastel Bloom Cluster", description: "Soft pastel flowers arranged in a charming mini bouquet.", image: "/images/miniboquet5.jpg"},
    {id: 15, title: "Candle & Flower Duo", description: "Small floral arrangement paired with a scented candle.", image: "/images/miniboquet6.jpg"},
  ],

  ShabkaTrays: [
    {id: 16, title: "Love Gift Box", description: "Romantic gift with roses, teddy bear, and scented candles.", image: "/images/shabka1.jpg"},
    {id: 17, title: "Sweet Moments Combo", description: "Fresh tulips, chocolates, and a message card for special moments.", image: "/images/shabka2.jpg"},
    {id: 18, title: "Forever Friendship Box", description: "Colorful flowers with a bracelet to celebrate friendship.", image: "/images/shabka3.jpg"},
    {id: 19, title: "Romantic Evening Set", description: "Curated tray of roses, chocolates, and sparkling lights.", image: "/images/shabka4.jpg"},
    {id: 20, title: "Anniversary Special Box", description: "Elegant flowers with a card and small gift for anniversaries.", image: "/images/shabka5.jpg"},
    {id: 21, title: "Morning Sunshine Tray", description: "Bright flowers and treats to start the day with joy.", image: "/images/shabka6.jpg"},
  ],

  Graduation: [
    {id: 22, title: "Luxury Rose Dome", description: "Preserved red rose in glass dome, lasting over a year.", image: "/images/gradution1.jpg"},
    {id: 23, title: "Deluxe Romantic Basket", description: "Mixed roses, lilies, and chocolates for romantic celebrations.", image: "/images/gradution2.jpg"},
    {id: 24, title: "Golden Anniversary Set", description: "White and gold flowers for special life milestones.", image: "/images/gradution3.jpg"},
    {id: 25, title: "Graduation Joy Bouquet", description: "Colorful roses and lilies celebrating achievement in style.", image: "/images/gradution4.jpg"},
    {id: 26, title: "Success Celebration Box", description: "Mix of flowers and gourmet treats for academic milestones.", image: "/images/gradution5.jpg"},
    {id: 27, title: "Cap & Rose Set", description: "Mini graduation cap with vibrant floral arrangement.", image: "/images/gradution6.jpg"},
  ],

  Giftbox: [
    {id: 28, title: "Floral Scent Candle", description: "Handmade candle with a gentle floral fragrance.", image: "/images/giftbox1.jpg"},
    {id: 29, title: "Mini Succulent Pot", description: "Cute mini succulent plant in a ceramic pot for gifting.", image: "/images/giftbox2.jpg"},
    {id: 30, title: "Flower Hair Clip Set", description: "Stylish floral hair clips for a soft, natural look.", image: "/images/giftbox3.jpg"},
    {id: 31, title: "Scented Soap Flower Set", description: "Soap flowers crafted to look and smell amazing.", image: "/images/giftbox4.jpg"},
    {id: 32, title: "Mini Gift Hamper", description: "Small hamper with chocolates, flowers, and a tiny card.", image: "/images/giftbox5.jpg"},
    {id: 33, title: "Tea & Blossom Box", description: "Curated box with herbal teas and mini floral arrangement.", image: "/images/giftbox6.jpg"},
  ],
};

// ==================== SIGN UP ====================
export const signupUser = (username, email, password) => {
  const cleanUsername = String(username).trim();
  const cleanEmail = String(email).trim().toLowerCase();
  const cleanPassword = String(password).trim();

  if (!cleanUsername || !cleanEmail || !cleanPassword) {
    toast.warn("Please fill all fields!");
    return { success: false };
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((u) => u.username === cleanUsername)) {
    toast.error("Username already exists!");
    return { success: false };
  }
  const newUser = { username: cleanUsername, email: cleanEmail, password: cleanPassword };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  toast.success("Account created successfully!");
  return { success: true };
};
// ==================== LOGIN ====================
export const loginUser = (username, password) => {
  const cleanUsername = String(username).trim();
  const cleanPassword = String(password).trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const savedUser = users.find(
    (user) => user.username === cleanUsername && user.password === cleanPassword
  );
  if (!savedUser) {
    toast.error("Invalid username or password!");
    return { success: false };
  }
  localStorage.setItem("currentUser", JSON.stringify(savedUser));
  toast.success(`Welcome back, ${cleanUsername}!`);
  return { success: true, user: savedUser };
};
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
  toast.info("You have been logged out.");
  setTimeout(() => {
    window.location.href = "/";
  }, 1500);
};
export const useAuth = () => {
  const [user, setUser] = useState(() => {
    const current = JSON.parse(localStorage.getItem("currentUser"));
    return current ? current.username : null;
  });
  const login = (u, p) => {
    const result = loginUser(u, p);
    if (result.success) setUser(result.user);
    return result;
  };
  const signup = (u, e, p) => signupUser(u, e, p);
  const logout = () => {
    logoutUser();
    setUser(null);
  };
  return { user, login, signup, logout };
};

