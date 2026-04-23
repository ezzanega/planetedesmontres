import { IProduct } from '../types/product-d-t';

const product_data: IProduct[] = [
  {
    id: 201,

    title: 'Montre Homme Beverly Hills Polo Club BP3880X.390',
    brand: 'Beverly Hills Polo Club',

    category: 'Homme',
    parentCategory: 'Montres',

    img: 'assets/img/montres/Beverly Hells/2.jpg',
    thumb_img: 'assets/img/montres/Beverly Hells/2.jpg',
    big_img: 'assets/img/montres/Beverly Hells/1.jpg',

    related_images: [
      'assets/img/montres/Beverly Hells/2.jpg',
      'assets/img/montres/Beverly Hells/1.jpg',
    ],

    price: 899,
    old_price: 1099,
    discount: 18,

    trending: true,
    bestSeller: false,
    topRated: true,
    new: true,

    rating: 4.3,
   // status: 'in-stock',
   // quantity: 30,
    //orderQuantity: 1,

    colors: ['Noir', 'Argent'],
    sizes: ['44mm'],
    weight: 0.16,
    dimension: '44mm x 12mm',

    sm_desc:
      'Montre élégante Beverly Hills Polo Club avec design moderne, idéale pour un look casual et chic au quotidien.',

    details: {
      details_text:
        'La montre Beverly Hills Polo Club BP3880X.390 allie style sportif et élégance. Conçue pour les hommes modernes, elle offre une finition soignée et un confort optimal.',
      details_list: [
        'Mouvement : Quartz',
        'Boîtier : Acier inoxydable',
        'Bracelet : Acier inoxydable',
        'Couleur du cadran : Noir',
        'Verre : Minéral',
        'Étanchéité : 3 ATM',
      ],
      details_text_2:
        'Un excellent choix pour ceux qui recherchent une montre stylée à un prix accessible.',
    },

    reviews: [
      {
        img: 'assets/img/users/user-1.jpg',
        name: 'Omar K.',
        time: 'Il y a 3 jours',
        rating: 4,
        review_desc:
          'Très bon rapport qualité/prix. Design élégant, je recommande.',
      },
      {
        img: 'assets/img/users/user-2.jpg',
        name: 'Mehdi A.',
        time: 'Il y a 1 semaine',
        rating: 5,
        review_desc:
          'Magnifique montre, parfaite pour tous les jours.',
      },
    ],
  },
  {
    id: 101,
    img: 'assets/img/montres/Festina/1.webp',
    thumb_img: 'assets/img/montres/Festina/4.webp',
    related_images: [
      'assets/img/montres/Festina/1.webp',
      'assets/img/montres/Festina/3.webp',
      'assets/img/montres/Festina/4.webp',
    ],
    big_img: 'assets/img/montres/Festina/4.webp',
    title: 'Festina Timeless Chronograph F20463/4',
    brand: 'Festina',
    category: 'Montres Homme',
    parentCategory: 'Homme',

    price: 1499,
    old_price: 1799,
    discount: 17,

    trending: true,
    bestSeller: true,
    topRated: true,
    new: false,
    banner: false,

    rating: 4.5,
    status: 'in-stock',
    quantity: 50,
    orderQuantity: 1,

    colors: ['Argent', 'Bleu'],
    sizes: ['42mm'],
    weight: 0.15,
    dimension: '42mm x 11mm',

    sm_desc: 'Montre élégante Festina avec chronographe, cadran bleu et bracelet en acier inoxydable, parfaite pour un style classique et moderne.',
    banner_img: 'assets/img/shop/banner/festina-banner.jpg',

    details: {
      details_text:
        'La montre Festina Timeless Chronograph F20463/4 est un modèle raffiné conçu pour les hommes modernes. Elle combine élégance et performance grâce à son mécanisme précis et son design intemporel.',
      details_list: [
        'Mouvement : Quartz',
        'Fonction : Chronographe',
        'Matière du boîtier : Acier inoxydable',
        'Matière du bracelet : Acier inoxydable',
        'Couleur du cadran : Bleu',
        'Verre : Minéral',
        'Étanchéité : 5 ATM (50 mètres)',
      ],
      details_text_2:
        'Idéale pour un usage quotidien ou des occasions spéciales, cette montre offre un excellent rapport qualité-prix et une durabilité remarquable.',
    },

    reviews: [
      {
        img: 'assets/img/users/user-1.jpg',
        name: 'Yassine B.',
        time: 'Il y a 2 jours',
        rating: 5,
        review_desc:
          'Très belle montre, qualité au rendez-vous. Le design est encore mieux en vrai !',
      },
      {
        img: 'assets/img/users/user-2.jpg',
        name: 'Karim L.',
        time: 'Il y a 1 semaine',
        rating: 4,
        review_desc:
          'Bonne montre, élégante et solide. Livraison rapide.',
      }
    ]
  },
  {
    id: 100,
    img: '/assets/img/shop/montres/1.webp',
    trending: true,
    banner: true,
    related_images: ['/assets/img/shop/montres/1.webp'],
    thumb_img: '/assets/img/shop/montres/1.webp',
    banner_img: '',
    parentCategory: 'Homme',
    category: 'Accessories',
    brand: 'Sony',
    title: 'POLO PRIVE-PP-8661-24-SBLBL',
    price: 1000,
    old_price: 120,
    rating: 3,
    quantity: 8,
    sm_desc: 'montre de luxe CAVALIER - POLO PRIVE-PP-8661-24-SBLBL',
    sizes: [],
    colors: [],
    weight: 0.25,
    dimension: '62 × 56 × 12',
    reviews: [],
    details: {
      details_text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
      details_list: [
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
        'Claritas est etiam processus dynamicus.',
        'Qui sequitur mutationem consuetudium lectorum.',
      ],
      details_text_2:
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
    },
  },
  // {
  //   id: 101,
  //   img: 'assets/img/shop/montres/2.webp',
  //   trending: true,
  //   banner: true,
  //   related_images: [],
  //   thumb_img: 'assets/img/shop/montres/2.webp',
  //   banner_img: 'assets/img/shop/banner/banner-6.png',
  //   parentCategory: 'Homme',
  //   category: 'Accessories',
  //   brand: 'Sony',
  //   title: 'POLO PRIVE-PP-8661-24-SBLBL',
  //   price: 96,
  //   old_price: 120,
  //   rating: 3,
  //   quantity: 8,
  //   sm_desc: 'montre de luxe CAVALIER - POLO PRIVE-PP-8661-24-SBLBL',
  //   sizes: [],
  //   colors: [],
  //   weight: 0.25,
  //   dimension: '62 × 56 × 12',
  //   reviews: [],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 1020,
  //   img: 'assets/img/shop/montres/3.webp',
  //   trending: true,
  //   banner: true,
  //   related_images: [],
  //   thumb_img: 'assets/img/shop/montres/3.webp',
  //   banner_img: 'assets/img/shop/banner/banner-6.png',
  //   parentCategory: 'Homme',
  //   category: 'Accessories',
  //   brand: 'Sony',
  //   title: 'POLO PRIVE-PP-8661-24-SBLBL',
  //   price: 96,
  //   old_price: 120,
  //   rating: 3,
  //   quantity: 8,
  //   sm_desc: 'montre de luxe CAVALIER - POLO PRIVE-PP-8661-24-SBLBL',
  //   sizes: [],
  //   colors: [],
  //   weight: 0.25,
  //   dimension: '62 × 56 × 12',
  //   reviews: [],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 102,
  //   img: 'assets/img/shop/montres/4.webp',
  //   trending: true,
  //   banner: true,
  //   related_images: [],
  //   thumb_img: '/assets/img/shop/montres/4.webp',
  //   banner_img: 'assets/img/shop/banner/banner-6.png',
  //   parentCategory: 'Homme',
  //   category: 'Accessories',
  //   brand: 'Sony',
  //   title: 'POLO PRIVE-PP-8661-24-SBLBL',
  //   price: 96,
  //   old_price: 120,
  //   rating: 3,
  //   quantity: 8,
  //   sm_desc: 'montre de luxe CAVALIER - POLO PRIVE-PP-8661-24-SBLBL',
  //   sizes: [],
  //   colors: [],
  //   weight: 0.25,
  //   dimension: '62 × 56 × 12',
  //   reviews: [],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 103,
  //   img: '/assets/img/shop/montres/6.jpg',
  //   trending: true,
  //   banner: true,
  //   related_images: [],
  //   thumb_img: 'assets/img/shop/montres/6.jpg',
  //   banner_img: 'assets/img/shop/banner/banner-6.png',
  //   parentCategory: 'Homme',
  //   category: 'Accessories',
  //   brand: 'Sony',
  //   title: 'POLO PRIVE-PP-8661-24-SBLBL',
  //   price: 96,
  //   old_price: 120,
  //   rating: 3,
  //   quantity: 8,
  //   sm_desc: 'montre de luxe CAVALIER - POLO PRIVE-PP-8661-24-SBLBL',
  //   sizes: [],
  //   colors: [],
  //   weight: 0.25,
  //   dimension: '62 × 56 × 12',
  //   reviews: [],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 104,
  //   img: '/assets/img/shop/montres/7.webp',
  //   trending: true,
  //   banner: true,
  //   related_images: [],
  //   thumb_img: 'assets/img/shop/montres/7.webp',
  //   banner_img: 'assets/img/shop/banner/banner-6.png',
  //   parentCategory: 'Homme',
  //   category: 'Accessories',
  //   brand: 'Sony',
  //   title: 'POLO PRIVE-PP-8661-24-SBLBL',
  //   price: 96,
  //   old_price: 120,
  //   rating: 3,
  //   quantity: 8,
  //   sm_desc: 'montre de luxe CAVALIER - POLO PRIVE-PP-8661-24-SBLBL',
  //   sizes: [],
  //   colors: [],
  //   weight: 0.25,
  //   dimension: '62 × 56 × 12',
  //   reviews: [],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 1,
  //   img: 'assets/img/shop/product/montres/32.gif',
  //   trending: true,
  //   banner: true,
  //   related_images: [],
  //   thumb_img: 'assets/img/shop/product/product_3.png',
  //   banner_img: 'assets/img/shop/banner/banner-6.png',
  //   parentCategory: 'Homme',
  //   category: 'Accessories',
  //   brand: 'Sony',
  //   title: 'Wooden container Bowl',
  //   price: 96,
  //   old_price: 120,
  //   rating: 3,
  //   quantity: 8,
  //   sm_desc:
  //     'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['L', 'XL', 'XXL'],
  //   colors: ['Yellow', 'Blue', 'White', 'Ocean Blue'],
  //   weight: 0.25,
  //   dimension: '62 × 56 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //   ],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 2,
  //   img: 'assets/img/shop/product/montres/49.jpg',
  //   trending: true,
  //   related_images: [
  //     'assets/img/shop/product/product_2.png',
  //     'assets/img/shop/product/product_3.png',
  //     'assets/img/shop/product/product_4.png',
  //   ],
  //   thumb_img: 'assets/img/shop/product/product_5.png',
  //   parentCategory: 'Femme',
  //   category: 'Chair',
  //   brand: 'Sony',
  //   title: 'Euvira Rocking Chair',
  //   price: 90,
  //   old_price: 110,
  //   rating: 4,
  //   quantity: 5,
  //   sm_desc:
  //     'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['XL', 'L'],
  //   colors: ['White', 'Ocean Blue'],
  //   weight: 0.25,
  //   dimension: '62 × 56 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //   ],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 3,
  //   img: 'assets/img/shop/product/montres/11.jpg',
  //   trending: true,
  //   banner: true,
  //   related_images: [
  //     'assets/img/shop/product/product_3.png',
  //     'assets/img/shop/product/product_4.png',
  //     'assets/img/shop/product/product_5.png',
  //   ],
  //   thumb_img: 'assets/img/shop/product/product_1.png',
  //   banner_img: 'assets/img/slider/banner-6.png',
  //   parentCategory: 'Clothing & Oil',
  //   category: 'Clothing',
  //   brand: 'Panasonic',
  //   title: 'Set of 2 baskets',
  //   price: 230,
  //   old_price: 250,
  //   rating: 5,
  //   quantity: 7,
  //   sm_desc:
  //     'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['XXL', 'M'],
  //   colors: ['Orange', 'Green'],
  //   weight: 0.25,
  //   dimension: '62 × 56 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //   ],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 4,
  //   img: 'assets/img/shop/product/montres/17.png',
  //   trending: true,
  //   discount: 8,
  //   new: true,
  //   related_images: [
  //     'assets/img/shop/product/product_4.png',
  //     'assets/img/shop/product/product_5.png',
  //     'assets/img/shop/product/product_6.png',
  //   ],
  //   thumb_img: 'assets/img/shop/product/product_2.png',
  //   parentCategory: 'Femme',
  //   category: 'Lighting',
  //   brand: 'Panasonic',
  //   title: 'Tailored Fit Mesh-Panel',
  //   price: 67,
  //   old_price: 80,
  //   rating: 4,
  //   quantity: 8,
  //   sm_desc:
  //     'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['L', 'M'],
  //   colors: ['Black', 'White'],
  //   weight: 0.25,
  //   dimension: '62 × 56 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //   ],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 9,
  //   img: 'assets/img/shop/product/montres/49.jpg',
  //   discount: 12,
  //   related_images: [
  //     'assets/img/shop/product/montres/49.jpg',
  //     'assets/img/shop/product/product_10.png',
  //     'assets/img/shop/product/product_11.png',
  //   ],
  //   thumb_img: 'assets/img/shop/product/product_7.png',
  //   parentCategory: 'Femme',
  //   category: 'Chair',
  //   brand: 'Samsung',
  //   title: 'Big sale canvas basket',
  //   price: 400,
  //   rating: 4,
  //   quantity: 3,
  //   sm_desc:
  //     'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['XL', 'L'],
  //   colors: ['Gray', 'White'],
  //   weight: 0.28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //   ],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 10,
  //   img: 'assets/img/shop/product/montres/11.jpg',
  //   discount: 25,
  //   related_images: [],
  //   thumb_img: 'assets/img/shop/product/product_8.png',
  //   parentCategory: 'Homme',
  //   category: 'Clothing',
  //   brand: 'Apple',
  //   title: "Haggar Men's Heather",
  //   price: 420,
  //   rating: 4,
  //   quantity: 6,
  //   sm_desc:
  //     'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['L', 'XL'],
  //   colors: ['Gray', 'White'],
  //   weight: 0.28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 50,
  //   img: 'assets/img/shop/product/montres/11.jpg',
  //   trending: true,
  //   banner: true,
  //   related_images: [
  //     'assets/img/shop/product/montres/11-1.jpg',
  //     'assets/img/shop/product/montres/11-2.jpg',
  //     'assets/img/shop/product/montres/11-3.jpg',
  //   ],
  //   thumb_img: 'assets/img/shop/product/montres/11.jpg',
  //   banner_img: 'assets/img/shop/banner/banner-6.png',
  //   parentCategory: 'Femme',
  //   category: 'Montres',
  //   brand: 'Rolex',
  //   title: 'Rolex Lady Datejust Elegant Watch',
  //   price: 96,
  //   old_price: 120,
  //   rating: 4,
  //   quantity: 8,
  //   sm_desc:
  //     'Discover the elegance of the Rolex Lady Datejust, a timeless timepiece crafted with precision and sophistication. Features a stunning diamond-encrusted bezel and a smooth leather strap.',
  //   sizes: [],
  //   colors: [],
  //   weight: 0.15,
  //   dimension: '34mm Case Diameter × 10mm Thickness',
  //   reviews: [],
  //   details: {
  //     details_text:
  //       'The Rolex Lady Datejust is the ultimate symbol of elegance and precision. Crafted with the finest materials, this watch features a stunning stainless steel case, a scratch-resistant sapphire crystal, and an automatic movement with a 48-hour power reserve. The iconic Cyclops lens over the date magnifies it 2.5 times for easy reading.',
  //     details_list: [
  //       'Case Material: Stainless Steel / 18k Gold.',
  //       'Movement: Automatic, Caliber 2236.',
  //       'Water Resistance: 100 meters (330 feet).',
  //       'Crystal: Scratch-resistant Sapphire.',
  //       'Strap: Genuine Leather / Oyster Bracelet.',
  //       'Power Reserve: Approximately 55 hours.',
  //     ],
  //     details_text_2:
  //       'Every Rolex Lady Datejust undergoes rigorous testing to ensure it meets the highest standards of quality and precision. With its timeless design and exceptional craftsmanship, this watch is the perfect companion for any occasion.',
  //   },
  // },
  // {
  //   id: 53,
  //   img: 'assets/img/shop/product/montres/32.gif',
  //   trending: true,
  //   discount: 8,
  //   new: true,
  //   related_images: [
  //     'assets/img/shop/product/product_4.png',
  //     'assets/img/shop/product/product_5.png',
  //     'assets/img/shop/product/product_6.png',
  //   ],
  //   thumb_img: 'assets/img/shop/product/product_2.png',
  //   parentCategory: 'Femme',
  //   category: 'Lighting',
  //   brand: 'Panasonic',
  //   title: 'Tailored Fit Mesh-Panel',
  //   price: 67,
  //   old_price: 80,
  //   rating: 4,
  //   quantity: 8,
  //   sm_desc:
  //     'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: [],
  //   colors: [],
  //   weight: 0.25,
  //   dimension: '62 × 56 × 12',
  //   reviews: [],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 58,
  //   img: 'assets/img/shop/product/montres/26.jpg',
  //   discount: 12,
  //   related_images: [
  //     'assets/img/shop/product/montres/1.png',
  //     'assets/img/shop/product/product_10.png',
  //     'assets/img/shop/product/product_11.png',
  //   ],
  //   thumb_img: 'assets/img/shop/product/product_7.png',
  //   parentCategory: 'Femme',
  //   category: 'Chair',
  //   brand: 'Samsung',
  //   title: 'Big sale canvas basket',
  //   price: 400,
  //   rating: 4,
  //   quantity: 3,
  //   sm_desc:
  //     'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: ['XL', 'L'],
  //   colors: ['Gray', 'White'],
  //   weight: 0.28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [
  //     {
  //       img: 'assets/img/blog/comments/avater-1.png',
  //       name: 'Siarhei Dzenisenka',
  //       time: '3 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-2.png',
  //       name: 'Julias Roy',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //     {
  //       img: 'assets/img/blog/comments/avater-3.png',
  //       name: 'Arista Williamson',
  //       time: '6 Months Ago',
  //       rating: 4,
  //       review_desc:
  //         'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for “lorem ipsum” will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.',
  //     },
  //   ],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 59,
  //   img: 'assets/img/shop/product/montres/1.png',
  //   discount: 25,
  //   related_images: [],
  //   thumb_img: 'assets/img/shop/product/montres/1.png',
  //   parentCategory: 'Clothing & Oil',
  //   category: 'Clothing',
  //   brand: 'Apple',
  //   title: "Haggar Men's Heather",
  //   price: 420,
  //   rating: 4,
  //   quantity: 6,
  //   sm_desc:
  //     'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: [],
  //   colors: [],
  //   weight: 0.28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
  // {
  //   id: 11,
  //   img: 'assets/img/shop/product/montres/2.jpg',
  //   trending: true,
  //   discount: 16,
  //   related_images: [],
  //   thumb_img: 'assets/img/shop/product/montres/2.jpg',
  //   parentCategory: 'Homme',
  //   category: 'Decoration',
  //   brand: 'Sony',
  //   title: 'Cotton Twill Suit',
  //   price: 450,
  //   rating: 4,
  //   quantity: 7,
  //   sm_desc:
  //     'Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.',
  //   sizes: [],
  //   colors: [],
  //   weight: 0.28,
  //   dimension: '62 × 60 × 12',
  //   reviews: [],
  //   details: {
  //     details_text:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
  //     details_list: [
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //       'Claritas est etiam processus dynamicus.',
  //       'Qui sequitur mutationem consuetudium lectorum.',
  //     ],
  //     details_text_2:
  //       'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release.',
  //   },
  // },
];

export default product_data;
