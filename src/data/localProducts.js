const localProducts = [
        {
            id: 1,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739082554/08197079400-e1_ghtbhy.jpg",
            category: "women's clothing",
            subCategory: "jackets",
            title: "TRF RHINESTONE DENIM JACKET",
            price: 19.99
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739174372/05320040800-e1_tay2om.jpg",
            category: "women's clothing",
            subCategory: "jackets",
            title: "PUFFER WINTER JACKET",
            price: 49.99
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739174372/07627041712-e1_obqeep.jpg",
            category: "women's clothing",
            subCategory: "jackets",
            title: "ELEGANT SPRING JACKET",
            price: 29.99
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739174372/05063302802-e1_sau81r.jpg",
            category: "women's clothing",
            subCategory: "jackets",
            title: "CHIC CASUAL BLAZER",
            price: 35.99
        },
        {
            id: 5,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739174372/08073252716-e1_j1c3cx.jpg",
            category: "women's clothing",
            subCategory: "jackets",
            title: "STYLISH CORDUROY JACKET",
            price: 42.99
        },
        {
            id: 6,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739174373/05070153715-e1_bdfkc7.jpg",
            category: "women's clothing",
            subCategory: "jackets",
            title: "CLASSIC TRENCH COAT",
            price: 59.99
        },
        {
            id: 7,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739174373/04391769803-e1_igl4rr.jpg",
            category: "women's clothing",
            subCategory: "jackets",
            title: "Fashionable Fedora",
            price: 35.99,
        },
        {
            id: 8,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739232628/2_d91ypf.jpg",
            category: "women's clothing",
            subCategory: "tops",
            title: "Casual V-Neck Blouse",
            price: 29.99
        },
        {
            id: 9,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739232628/1_qoiwnz.jpg",
            category: "women's clothing",
            subCategory: "tops",
            title: "Sleeveless Summer Top",
            price: 24.99
        },
        {
            id: 10,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739232628/3_fuvuoq.jpg",
            category: "women's clothing",
            subCategory: "tops",
            title: "Chic Button-Up Shirt",
            price: 34.99
        },
        {
            id: 11,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739232628/7_fvcwdu.jpg",
            category: "women's clothing",
            subCategory: "tops",
            title: "Elegant Long-Sleeve Blouse",
            price: 39.99
        },
        {
            id: 12,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739232628/5_sk4mgr.jpg",
            category: "women's clothing",
            subCategory: "tops",
            title: "Trendy Crop Top",
            price: 22.99
        },
        {
            id: 13,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739232628/6_karssv.jpg",
            category: "women's clothing",
            subCategory: "tops",
            title: "Relaxed Fit T-Shirt",
            price: 19.99
        },
        {
            id: 14,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739232628/4_pj3bld.jpg",
            category: "women's clothing",
            subCategory: "tops",
            title: "Bohemian Floral Blouse",
            price: 31.99
        },
        {
            id: 15,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233086/3_fciego.jpg",
            category: "women's clothing",
            subCategory: "pants",
            title: "Slim Fit Denim Jeans",
            price: 49.99
        },
        {
            id: 16,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233086/1_ezmdlk.jpg",
            category: "women's clothing",
            subCategory: "pants",
            title: "Casual High-Waist Trousers",
            price: 39.99
        },
        {
            id: 17,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233086/2_khzgc8.jpg",
            category: "women's clothing",
            subCategory: "pants",
            title: "Wide-Leg Cotton Pants",
            price: 45.99
        },
        {
            id: 18,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233086/08372035712-e1_jgt80f.jpg",
            category: "women's clothing",
            subCategory: "pants",
            title: "Vintage Straight-Leg Jeans",
            price: 52.99
        },
        {
            id: 19,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233086/4_zs0txl.jpg",
            category: "women's clothing",
            subCategory: "pants",
            title: "Chic Office Trousers",
            price: 41.99
        },
        {
            id: 20,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233088/06050307807-e1_gwhbqu.jpg",
            category: "women's clothing",
            subCategory: "pants",
            title: "Comfy Jogger Pants",
            price: 37.99
        },

        {
            id: 21,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233098/03067416251-e1_aahoeh.jpg",
            category: "women's clothing",
            subCategory: "skirts",
            title: "Elegant Pleated Skirt",
            price: 45.99
        },
        {
            id: 22,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233098/00858171800-e1_o811lh.jpg",
            category: "women's clothing",
            subCategory: "skirts",
            title: "Casual Denim Skirt",
            price: 39.99
        },
        {
            id: 23,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233098/03067402800-e1_lct0th.jpg",
            category: "women's clothing",
            subCategory: "skirts",
            title: "Classic Pencil Skirt",
            price: 42.99
        },
        {
            id: 24,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233099/03067412724-e1_oiidpw.jpg",
            category: "women's clothing",
            subCategory: "skirts",
            title: "Chic A-Line Skirt",
            price: 47.99
        },
        {
            id: 25,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233099/08534396800-e2_pg7lp9.jpg",
            category: "women's clothing",
            subCategory: "skirts",
            title: "Bohemian Maxi Skirt",
            price: 49.99
        },
        {
            id: 26,
            image: "https://res.cloudinary.com/di4p9r8bb/image/upload/v1739233099/02011399681-e1_zacbjt.jpg",
            category: "women's clothing",
            subCategory: "skirts",
            title: "Trendy Wrap Skirt",
            price: 44.99
        }
  ];
  
  export default localProducts;
  