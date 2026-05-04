
import { IMenuType, IMobileMenu } from "../types/menu-d-t";

const menuData: IMenuType[] = [
  {
    link: '/',
    title: 'Accueil',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      { link: '/home', title: 'Style d’accueil 1' },
    ]
  },
  {
    link: '/boutique',
    title: 'Boutique',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      {
        link: '/shop',
        title: 'Boutique',
        dropdownMenu: [
          { link: '/boutique', title: 'Boutique standard' },
          { link: '/boutique/shop-right', title: 'Barre latérale droite' },
          { link: '/boutique/shop-4-col', title: '4 colonnes' },
          { link: '/boutique/shop-3-col', title: '3 colonnes' },
          { link: '/boutique', title: 'Tous les produits' },
          { link: '/boutique', title: 'Catalogue' },
          { link: '/boutique', title: 'Défilement infini' },
        ]
      },
      {
        link: '/shop',
        title: 'Produits',
        dropdownMenu: [
          { link: '/boutique/shop-details', title: 'Détails du produit' },
          { link: '/boutique/shop-details', title: 'Produit - Version 2' },
          { link: '/boutique/shop-details', title: 'Produit - Version 3' },
          { link: '/boutique/shop-details', title: 'Produit - Version 4' },
          { link: '/boutique/shop-details', title: 'Produit simple' },
          { link: '/boutique/shop-details', title: 'Produit avec options' },
          { link: '/boutique/shop-details', title: 'Produit externe' },
        ]
      },
      {
        link: '/shop',
        title: 'Autres pages',
        dropdownMenu: [
          { link: '/boutique/wishlist', title: 'Liste de souhaits' },
          { link: '/boutique/compare', title: 'Comparer' },
          { link: '/boutique/cart', title: 'Panier' },
          { link: '/pages/checkout', title: 'Paiement' },
          { link: '/pages/register', title: 'Créer un compte' },
          { link: '/pages/login', title: 'Connexion' },
        ]
      },
    ]
  },
  {
    link: '/pages/about-us',
    title: 'À propos',
  },
  {
    link: '/pages/contact',
    title: 'Contact',
  },
];

export default menuData;

// mobile menus
export const mobile_menus: IMobileMenu[] = [
  {
    title: "Accueil",
    link: "/",
  },

  {
    title: "Boutique",
    link: "/boutique",
    // dropdownMenu: [
    //   { link: '/shop', title: 'Tous les produits' },
    //   { link: '/boutique/shop-4-col', title: '4 colonnes' },
    //   { link: '/boutique/shop-3-col', title: '3 colonnes' },
    //   { link: '/shop/shop-right', title: 'Barre latérale droite' },
    //   { link: '/shop/details-product', title: 'Détails du produit' },
    // ],
  },

  // {
  //   title: "Pages",
  //   dropdownMenu: [
  //     { link: '/shop/wishlist', title: 'Liste de souhaits' },
  //     { link: '/shop/cart', title: 'Panier' },
  //     { link: '/pages/checkout', title: 'Paiement' },
  //     { link: '/pages/register', title: 'Créer un compte' },
  //     { link: '/pages/login', title: 'Connexion' },
  //   ],
  // },

  // {
  //   title: "Ajouter un produit",
  //   link: "/add-product",
  // },

  {
    title: "À propos",
    link: "/pages/about-us",
  },

  {
    title: "Contact",
    link: "/pages/contact",
  },
];



//import { IMenuType, IMobileMenu } from "../types/menu-d-t";
// const menuData: IMenuType[] = [
//   {
//     link: '/',
//     title: 'Home',
//     hasDropdown: false,
//     megamenu: false,
//     dropdownItems: [
//       { link: '/home/home-style-1', title: 'Home Style 1' },
//       // { link: '/home/home-style-2', title: 'Home Style 2' },
//       // { link: '/home/home-style-3', title: 'Home Style 3' },
//       // { link: '/home/home-style-4', title: 'Home Style 4' },
//       // { link: '/home/home-style-5', title: 'Home Style 5' },
//       // { link: '/home/home-style-6', title: 'Home Style 6' },
//       // { link: '/home/home-style-7', title: 'Home Style 7' },
//     ]
//   },
//   {
//     link: '/shop',
//     title: 'Montres',
//     hasDropdown: false,
//     megamenu: false,
//     dropdownItems: [
//       {
//         link: '/shop',
//         title: 'Shop Pages',
//         dropdownMenu: [
//           { link: '/shop', title: 'Standard Shop Page' },
//           { link: '/shop/shop-right', title: 'Shop Right Sidebar' },
//           { link: '/shop/shop-4-col', title: 'Shop 4 Column' },
//           { link: '/shop/shop-3-col', title: 'Shop 3 Column' },
//           { link: '/shop', title: 'Shop Page' },
//           { link: '/shop', title: 'Shop Page' },
//           { link: '/shop', title: 'Shop Infinity' },
//         ]
//       },
//       {
//         link: '/shop',
//         title: 'Products Pages',
//         dropdownMenu: [
//           { link: '/shop/shop-details', title: 'Product Details' },
//           { link: '/shop/shop-details', title: 'Product Page V2' },
//           { link: '/shop/shop-details', title: 'Product Page V3' },
//           { link: '/shop/shop-details', title: 'Product Page V4' },
//           { link: '/shop/shop-details', title: 'Simple Product' },
//           { link: '/shop/shop-details', title: 'Variable Product' },
//           { link: '/shop/shop-details', title: 'External Product' },
//         ]
//       },
//       {
//         link: '/shop',
//         title: 'Other Shop Pages',
//         dropdownMenu: [
//           { link: '/shop/wishlist', title: 'Wishlist' },
//           { link: '/shop/compare', title: 'Compare' },
//           { link: '/shop/cart', title: 'Shopping Cart' },
//           { link: '/pages/checkout', title: 'Checkout' },
//           { link: '/pages/register', title: 'Register' },
//           { link: '/pages/login', title: 'Login' },
//         ]
//       },
//     ]
//   },
//   // {
//   //   link: '/pages/blog',
//   //   title: 'Blog',
//   //   hasDropdown: true,
//   //   megamenu: false,
//   //   dropdownItems: [
//   //     { link: '/pages/blog', title: 'Blog' },
//   //     { link: '/pages/blog-left-sidebar', title: 'Blog Left Sidebar' },
//   //     { link: '/pages/blog-no-sidebar', title: 'Blog No Sidebar' },
//   //     { link: '/pages/blog-2-col', title: 'Blog 2 Column' },
//   //     { link: '/pages/blog-3-col', title: 'Blog 3 Column' },
//   //     { link: '/pages/blog-details', title: 'Blog Details' },
//   //   ]
//   // },
//   // {
//   //   link: '/shop',
//   //   title: 'Pages',
//   //   hasDropdown: true,
//   //   megamenu: false,
//   //   dropdownItems: [
//   //     { link: '/shop/wishlist', title: 'Wishlist' },
//   //     { link: '/shop/cart', title: 'Shopping Cart' },
//   //     { link: '/pages/checkout', title: 'Checkout' },
//   //     { link: '/pages/account', title: 'Account' },
//   //     { link: '/pages/register', title: 'Register' },
//   //     { link: '/pages/login', title: 'Login' },
//   //     { link: '/404', title: 'Error 404' },
//   //   ]
//   // },
//   // {
//   //   link: '/add-product',
//   //   title: 'Add Porduct',
//   // },
//   {
//     link: '/pages/about-us',
//     title: 'à Propos',
//   },
//   {
//     link: '/pages/contact',
//     title: 'Contact',
//   },
// ]

// export default menuData;

// // mobile menus
// // export const mobile_menus: IMobileMenu[] = [
// //   {
// //     title: "Home",
// //     dropdownMenu: [
// //       { link: '/home/home-style-1', title: 'Home Style 1' },
// //       { link: '/home/home-style-2', title: 'Home Style 2' },
// //       { link: '/home/home-style-3', title: 'Home Style 3' },
// //       { link: '/home/home-style-4', title: 'Home Style 4' },
// //       { link: '/home/home-style-5', title: 'Home Style 5' },
// //       { link: '/home/home-style-6', title: 'Home Style 6' },
// //       { link: '/home/home-style-7', title: 'Home Style 7' },
// //     ],
// //   },
// //   {
// //     title: "Shop",
// //     dropdownMenu: [
// //       { link: '/shop', title: 'Standard Shop Page' },
// //       { link: '/shop/shop-right', title: 'Shop Right Sidebar' },
// //       { link: '/shop/shop-4-col', title: 'Shop 4 Column' },
// //       { link: '/shop/shop-3-col', title: 'Shop 3 Column' },
// //       { link: '/shop/shop-details', title: 'Product Details' },
// //     ],
// //   },
// //   {
// //     title: "Other Pages",
// //     dropdownMenu: [
// //       { link: '/shop/wishlist', title: 'Wishlist' },
// //       { link: '/shop/compare', title: 'Compare' },
// //       { link: '/shop/cart', title: 'Shopping Cart' },
// //       { link: '/pages/checkout', title: 'Checkout' },
// //       { link: '/pages/register', title: 'Register' },
// //       { link: '/pages/account', title: 'Account' },
// //       { link: '/pages/login', title: 'Login' },
// //       { link: '/404', title: 'Error 404' },
// //     ],
// //   },
// //   {
// //     title: "Blog",
// //     dropdownMenu: [
// //       { link: '/pages/blog', title: 'Blog' },
// //       { link: '/pages/blog-left-sidebar', title: 'Blog Left Sidebar' },
// //       { link: '/pages/blog-no-sidebar', title: 'Blog No Sidebar' },
// //       { link: '/pages/blog-2-col', title: 'Blog 2 Column' },
// //       { link: '/pages/blog-3-col', title: 'Blog 3 Column' },
// //       { link: '/pages/blog-details', title: 'Blog Details' },
// //     ],
// //   },
// //   {
// //     title: "Contact",
// //     link: '/pages/contact',
// //   },
// // ];
// export const mobile_menus: IMobileMenu[] = [
//   {
//     title: "Home",
//     link: "/", // 👈 direct access instead of dropdown (better UX on mobile)
//   },

//   {
//     title: "Shop",
//     dropdownMenu: [
//       { link: '/shop', title: 'All Products' },
//       { link: '/shop/shop-4-col', title: '4 Columns' },
//       { link: '/shop/shop-3-col', title: '3 Columns' },
//       { link: '/shop/shop-right', title: 'Right Sidebar' },
//       { link: '/shop/details-product', title: 'Product Details' }, // 👈 FIXED route
//     ],
//   },

//   {
//     title: "Pages",
//     dropdownMenu: [
//       { link: '/shop/wishlist', title: 'Wishlist' },
//       { link: '/shop/cart', title: 'Cart' },
//       { link: '/pages/checkout', title: 'Checkout' },
//       { link: '/pages/register', title: 'Register' },
//       { link: '/pages/login', title: 'Login' },
//     ],
//   },

//   {
//     title: "Add Product", // 👈 FIXED typo
//     link: "/add-product",
//   },

//   {
//     title: "À Propos",
//     link: "/pages/about-us", // or create /about later
//   },

//   {
//     title: "Contact",
//     link: "/pages/contact",
//   },
// ];
