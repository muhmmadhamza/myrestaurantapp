"use client";

import { useState, useEffect } from 'react';
import { Container, Button, TextField, Box, Grid } from '@mui/material';
import RestaurantCard from "@/components/RestaurantGrid";
import RestaurantGrid from '@/components/RestaurantGrid';

const staticRestaurants = [
  {
      image: '/assets/images/download.jpeg',
      name: "Domino's Pizza",
      ratings: 4.7,
      deliveryTime: '50-70',
      tag: 'Gift',
  },
  {
      image: '/assets/images/first.webp',
      name: 'Steak it easy',
      ratings: 4.2,
      deliveryTime: '80-120',
      tag: 'New',
  },
  {
      image: '/assets/images/first.webp',
      name: 'SevenGold',
      ratings: 4.3,
      deliveryTime: '30-60',
      tag: '1+1',
  },
  {
      image: '/assets/images/download.jpeg',
      "name": "Baskin Robbins",
      "ratings": 4.1,
      "deliveryTime": "50-70",
      "tag": "New"
    },
    {
      image: '/assets/images/first.webp',

      "name": "Gabs & co",
      "ratings": 4.3,
      "deliveryTime": "90-120",
      "tag": "Gift"
    },
    {
      image: '/assets/images/first.webp',

      "name": "Zotman Pizza",
      "ratings": 4.7,
      "deliveryTime": "30-50",
      "tag": "Discount"
    },
    {
      image: '/assets/images/first.webp',

      "name": "McDonald's",
      "ratings": 4.8,
      "deliveryTime": "60-120"
    },
    {
      image: '/assets/images/download.jpeg',

      "name": "Starbucks",
      "ratings": 4.3,
      "deliveryTime": "40-70",
      "tag": "Gift"
    },
    {
      image: '/assets/images/first.webp',

      "name": "Gabs & co",
      "ratings": 4.4,
      "deliveryTime": "30-50"
    },
    {
      image: '/assets/images/first.webp',
      name: "Domino's Pizza",
      ratings: 4.7,
      deliveryTime: '50-70',
      tag: 'Gift',
  },
  {
      image: '/assets/images/first.webp',
      name: 'Steak it easy',
      ratings: 4.2,
      deliveryTime: '80-120',
      tag: 'New',
  },
  {
      image: '/assets/images/first.webp',
      name: 'SevenGold',
      ratings: 4.3,
      deliveryTime: '30-60',
      tag: '1+1',
  },
  {
      image: '/assets/images/download.jpeg',
      "name": "Baskin Robbins",
      "ratings": 4.1,
      "deliveryTime": "50-70",
      "tag": "New"
    },
    {
      image: '/assets/images/first.webp',

      "name": "Gabs & co",
      "ratings": 4.3,
      "deliveryTime": "90-120",
      "tag": "Gift"
    },
    {
      image: '/assets/images/first.webp',

      "name": "Zotman Pizza",
      "ratings": 4.7,
      "deliveryTime": "30-50",
      "tag": "Discount"
    },
    {
      image: '/assets/images/first.webp',

      "name": "McDonald's",
      "ratings": 4.8,
      "deliveryTime": "60-120"
    },
    {
      image: '/assets/images/first.webp',

      "name": "Starbucks",
      "ratings": 4.3,
      "deliveryTime": "40-70",
      "tag": "Gift"
    },
    {
      image: '/assets/images/first.webp',

      "name": "Gabs & co",
      "ratings": 4.4,
      "deliveryTime": "30-50"
    },
    {
      image: '/assets/images/first.webp',
      name: 'Steak it easy',
      ratings: 4.2,
      deliveryTime: '80-120',
      tag: 'New',
  },
  {
      image: '/assets/images/first.webp',
      name: 'SevenGold',
      ratings: 4.3,
      deliveryTime: '30-60',
      tag: '1+1',
  },
  {
      image: '/assets/images/download.jpeg',
      "name": "Baskin Robbins",
      "ratings": 4.1,
      "deliveryTime": "50-70",
      "tag": "New"
    },
    {
      image: '/assets/images/first.webp',

      "name": "Gabs & co",
      "ratings": 4.3,
      "deliveryTime": "90-120",
      "tag": "Gift"
    },
    {
      image: '/assets/images/first.webp',

      "name": "Zotman Pizza",
      "ratings": 4.7,
      "deliveryTime": "30-50",
      "tag": "Discount"
    },
    {
      image: '/assets/images/first.webp',

      "name": "McDonald's",
      "ratings": 4.8,
      "deliveryTime": "60-120"
    },
    {
      image: '/assets/images/first.webp',

      "name": "Starbucks",
      "ratings": 4.3,
      "deliveryTime": "40-70",
      "tag": "Gift"
    },
];
export default function Home() {
  const [restaurants, setRestaurants] = useState(staticRestaurants);
  // const [filteredRestaurants, setFilteredRestaurants] = useState();
  // console.log("restaurant22",restaurants);
  

  // useEffect(() => {
  //   // Fetch restaurant data on the client side
  //   async function fetchRestaurants() {
  //     try {
  //       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //       console.log(res.data, "hamza")
  //       const data = await res.json();
  //       setRestaurants(data);
  //       setFilteredRestaurants(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   }

  //   fetchRestaurants();
  // }, []);





  return (
    <Container maxWidth="lg" >
    <RestaurantGrid restaurants={restaurants} />
    </Container>

  );
}

// export async function getServerSideProps() {
//   try {
//       const res = await fetch('https://api.example.com/restaurants'); // Replace with a valid JSON API endpoint
//       const restaurants = await res.json();

//       return {
//           props: {
//               restaurants,
//           },
//       };
//   } catch (error) {
//       console.error('Error fetching data:', error);
//       return {
//           props: {
//               restaurants: [], // Fallback in case of error
//           },
//       };
//   }
// }