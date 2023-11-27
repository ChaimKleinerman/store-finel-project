import Product from "./types/Product.js";
import Category from "./types/Category.js";

const foo:Product[] = [
  {
    id: "1",
    name: "Product 1",
    salePrice: 29.99,
    quantity: 10,
    description: "Description for Product 1.",
    category: "Category A",
    discountPercentage: 10,
    rating: 4.5,
    click: 100,
    coordinate: {
      longitude1: 40.7128,
      longitude2: -74.0060,
      longitude3: 45.5122,
      latitude1: -74.0060,
      latitude2: 40.7128,
      latitude3: -122.6795,
    },
    image: {
      url: "https://example.com/product1.jpg",
      alt: "Product 1 Image",
    },
    tags: {
      tag: "Tag A",
      tag2: "Tag B",
    },
  },
  
  {
    id: "2",
    name: "Product 2",
    salePrice: 49.99,
    quantity: 15,
    description: "Description for Product 2.",
    category: "Category B",
    discountPercentage: 15,
    rating: 4.2,
    click: 150,
    coordinate: {
      longitude1: 34.0522,
      longitude2: -118.2437,
      longitude3: 51.5074,
      latitude1: -118.2437,
      latitude2: 34.0522,
      latitude3: 0.1278,
    },
    image: {
      url: "https://example.com/product2.jpg",
      alt: "Product 2 Image",
    },
    tags: {
      tag: "Tag C",
      tag2: "Tag D",
    },
  },
    {
      id: "6",
      name: "Product 6",
      salePrice: 79.99,
      quantity: 20,
      description: "Description for Product 6.",
      category: "Category C",
      discountPercentage: 5,
      rating: 4.7,
      click: 80,
      coordinate: {
        longitude1: -33.8688,
        longitude2: 151.2093,
        longitude3: 35.6895,
        latitude1: 151.2093,
        latitude2: -33.8688,
        latitude3: 139.6917,
      },
      image: {
        url: "https://example.com/product6.jpg",
        alt: "Product 6 Image",
      },
      tags: {
        tag: "Tag E",
        tag2: "Tag F",
      },
    },
    {
      id: "7",
      name: "Product 7",
      salePrice: 99.99,
      quantity: 12,
      description: "Description for Product 7.",
      category: "Category A",
      discountPercentage: 20,
      rating: 4.0,
      click: 120,
      coordinate: {
        longitude1: -37.8136,
        longitude2: 144.9631,
        longitude3: 51.5074,
        latitude1: 144.9631,
        latitude2: -37.8136,
        latitude3: -0.1278,
      },
      image: {
        url: "https://example.com/product7.jpg",
        alt: "Product 7 Image",
      },
      tags: {
        tag: "Tag G",
        tag2: "Tag H",
      },
    },
    {
      id: "5",
      name: "Product 5",
      salePrice: 99.99,
      quantity: 12,
      description: "Description for Product 5.",
      category: "Category A",
      discountPercentage: 20,
      rating: 4.0,
      click: 120,
      coordinate: {
        longitude1: -37.8136,
        longitude2: 144.9631,
        longitude3: 51.5074,
        latitude1: 144.9631,
        latitude2: -37.8136,
        latitude3: -0.1278,
      },
      image: {
        url: "https://example.com/product7.jpg",
        alt: "Product 5 Image",
      },
      tags: {
        tag: "Tag G",
        tag2: "Tag H",
      },
    },
  ];
  

  const categories:Category[] = [
    {
      id: "1",
      name: "Category 1",
      clicked: 150,
    },
    {
      id: "2",
      name: "Category 2",
      clicked: 200,
    },
    {
      id: "3",
      name: "Category 3",
      clicked: 120,
    },
    {
      id: "4",
      name: "Category 4",
      clicked: 180,
    },
    {
      id: "5",
      name: "Category 5",
      clicked: 90,
    },
  ];
  


export  {foo,categories}

