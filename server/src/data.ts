import Category from "./types/Category.js";
import Product from "./types/Product.js";

const products: Product[] = [
  {
    id: "a86eaf9c-9ebe-4393-a52f-82c140cc1afe",
    name: "Product 1",
    salePrice: 29.99,
    quantity: 10,
    description: "Description for Product 1.",
    category: "Category A",
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
      tag1: "Tag B",
    },
    discountPercentage: 6789, 
  },
  {
    id: "a86eaf9c-9ebe-4393-a52f-82c141cc1afe",
    name: "Product 2",
    salePrice: 49.99,
    quantity: 15,
    description: "Description for Product 2.",
    category: "Category B",
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
      tag1: "Tag D",
    },
    discountPercentage: 6789,
  },
  {
    id: "a86eaf9c-9ebe-4393-a52f-82c142cc1afe",
    name: "Product 6",
    salePrice: 79.99,
    quantity: 20,
    description: "Description for Product 6.",
    category: "Category C",
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
      tag1: "Tag F",
    },
    discountPercentage: 6789,
  },
  {
    id: "a86eaf9c-9ebe-4393-a52f-82c143cc1afe",
    name: "Product 7",
    salePrice: 99.99,
    quantity: 12,
    description: "Description for Product 7.",
    category: "Category A",
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
      tag1: "Tag H",
    },
    discountPercentage: 6789,
  },
  {
    id: "a86eaf9c-9ebe-4393-a52f-82c149cc1afe",
    name: "Product 5",
    salePrice: 99.99,
    quantity: 12,
    description: "Description for Product 5.",
    category: "Category A",
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
      tag1: "Tag H",
    },
    discountPercentage: 6789, 
  },
];

  const categories:Category[] = [
    {
      _id: "1",
      name: "Category A",
      clicked: 150,
    },
    {
      _id: "2",
      name: "Category B",
      clicked: 200,
    },
    {
      _id: "3",
      name: "Category C",
      clicked: 120,
    },
    {
      _id: "4",
      name: "Category D",
      clicked: 180,
    },
    {
      _id: "5",
      name: "Category E",
      clicked: 90,
    },
  ];
export  {products,categories}