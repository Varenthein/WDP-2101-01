const initialState = {
  deviceType: '',
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'sofa',
      price: 30,
      oldPrice: 140,
      stars: 3,
      userRating: 4,
      promo: 'sale',
      newFurniture: true,
      imageSource:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
      isFavorite: false,
      isExchange: false,
      hotDeal: true,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'dining',
      price: 30,
      stars: 4,
      userRating: 3,
      promo: 'sale',
      newFurniture: true,
      imageSource:
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
      isFavorite: true,
      isExchange: false,
      hotDeal: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'chair',
      price: 30,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      imageSource:
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80',
      isFavorite: true,
      isExchange: true,
      hotDeal: true,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'chair',
      price: 30,
      oldPrice: 40,
      stars: 2,
      userRating: 2,
      promo: 'sale',
      newFurniture: true,
      imageSource:
        'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1301&q=80',
      isFavorite: false,
      isExchange: true,
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'sofa',
      price: 30,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'table',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=881&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'chair',
      price: 30,
      oldPrice: 40,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'table',
      price: 30,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'dining',
      price: 30,
      stars: 4,
      userRating: 3,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'dining',
      price: 30,
      oldPrice: 140,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'dining',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1551516594-56cb78394645?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2216&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'dining',
      price: 30,
      stars: 1,
      userRating: 3,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1532588213355-52317771cce6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2167&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2179&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'chair',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'chair',
      price: 30,
      oldPrice: 140,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'chair',
      price: 30,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'dining',
      price: 30,
      stars: 4,
      promo: 'sale',
      userRating: 5,
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1544030288-e6e6108867f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'dining',
      price: 30,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1686&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1300&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'dining',
      price: 30,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1461418749540-8c49a1d7369e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1258&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'dining',
      price: 30,
      stars: 3,
      userRating: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1551216223-37c8d1dbec5c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
      hotDeal: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'table',
      price: 30,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isExchange: false,
      imageSource:
        'https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1275&q=80',
      hotDeal: false,
    },
  ],
  cart: {
    products: [],
  },
<<<<<<< HEAD
  brands: [
    {
      id: '1',
      image: 'https://cdn.pixabay.com/photo/2013/11/28/11/32/dog-220324_960_720.jpg',
    },
    {
      id: '2',
      image:
        'https://cdn.pixabay.com/photo/2015/08/27/00/34/elephant-909273_960_720.jpg',
    },
    {
      id: '3',
      image:
        'https://cdn.pixabay.com/photo/2017/07/04/10/57/quality-2470673_960_720.png',
    },
    {
      id: '4',
      image:
        'https://cdn.pixabay.com/photo/2018/02/22/07/03/silhouette-3172280_960_720.png',
    },
    {
      id: '5',
      image:
        'https://cdn.pixabay.com/photo/2020/09/07/13/42/rooster-5551912_960_720.jpg',
    },
    {
      id: '6',
      image: 'https://cdn.pixabay.com/photo/2015/08/18/21/26/dog-894851_960_720.jpg',
    },
    {
      id: '7',
      image:
        'https://cdn.pixabay.com/photo/2017/10/05/11/54/seagull-2819181_960_720.jpg',
    },
    {
      id: '8',
      image: 'https://cdn.pixabay.com/photo/2015/10/15/03/04/wagon-988818_960_720.jpg',
    },
    {
      id: '9',
      image:
        'https://cdn.pixabay.com/photo/2015/08/26/21/49/kangaroo-909138_960_720.jpg',
    },
    {
      id: '10',
      image: 'https://cdn.pixabay.com/photo/2020/02/11/14/34/bear-4839771_960_720.jpg',
    },
    {
      id: '11',
      image:
        'https://cdn.pixabay.com/photo/2016/11/22/11/48/mountain-1849091_960_720.png',
  promotions: [
    {
      type: 'large',
      imageUrl:
        'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      heading: 'guest room',
      textStrong: 'sofa',
      priceoff: '-20%',
    },
    {
      type: 'small-top',
      imageUrl:
        'https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      heading: 'chair',
      textStrong: 'office',
      subtitle: 'collection',
      priceoff: '$200.00',
    },
    {
      type: 'small-bottom',
      imageUrl:
        'https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      heading: 'collection',
      textStrong: 'special',
      priceoff: 'save up 45% of furniture',
    },
  ],
  feedback: [
    {
      id: 1,
      imageUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque harum soluta voluptate, accusantium iure sunt neque consectetur natus fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque harum soluta voluptate.',
      author: 'John Smith',
      aboutAuthor: 'Our Client',
    },
    {
      id: 2,
      imageUrl:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque harum soluta voluptate, accusantium iure sunt neque consectetur natus fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      author: 'Samantha Stress',
      aboutAuthor: 'Our Client',
    },
    {
      id: 3,
      imageUrl:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae cumque harum soluta voluptate.',
      author: 'Mitis Novel',
      aboutAuthor: 'Our Client',
=======
  ads: [
    {
      id: '1',
      imageSource:
        'https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_960_720.jpg',
      title: 'INDOOR FURNITURE1',
      description: 'SAVE UP TO 50% OF ALL FURNITURE',
    },
    {
      id: '2',
      imageSource:
        'https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_960_720.jpg',
      title: 'INDOOR FURNITURE2',
      description: 'BEST FURNITURE ON MARKET',
    },
    {
      id: '3',
      imageSource:
        'https://cdn.pixabay.com/photo/2018/01/20/09/42/sofa-3094153_960_720.jpg',
      title: 'INDOOR FURNITURE3',
      description: 'SAVE UP TO 50% OF ALL FURNITURE',
>>>>>>> 4ebe49f... stage1
    },
  ],
};

export default initialState;
