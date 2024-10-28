import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RestaurantGrid from '../RestaurantGrid';
import RestaurantCard from '../RestaurantCard';

jest.mock('../RestaurantCard', () => {
  return jest.fn(({ name }) => <div>{name}</div>);
});

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

describe('RestaurantGrid Component', () => {
  test('renders initial restaurants', () => {
    render(<RestaurantGrid restaurants={staticRestaurants} />);
    
    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.getByText('Pizza Place')).toBeInTheDocument();
    expect(screen.getByText('Burger Place')).toBeInTheDocument();
  });

  test('filters restaurants by category', () => {
    render(<RestaurantGrid restaurants={staticRestaurants} />);
    
    fireEvent.click(screen.getByText('Sushi'));
    
    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.queryByText('Pizza Place')).not.toBeInTheDocument();
    expect(screen.queryByText('Burger Place')).not.toBeInTheDocument();
  });

  test('loads more restaurants', () => {
    render(<RestaurantGrid restaurants={staticRestaurants} />);
    
    const loadMoreButton = screen.getByText('Load More');
    
    fireEvent.click(loadMoreButton);
    
    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.getByText('Pizza Place')).toBeInTheDocument();
    expect(screen.getByText('Burger Place')).toBeInTheDocument();
  });

  test('searches restaurants', () => {
    render(<RestaurantGrid restaurants={staticRestaurants} />);
    
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Sushi' } });
    
    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.queryByText('Pizza Place')).not.toBeInTheDocument();
    expect(screen.queryByText('Burger Place')).not.toBeInTheDocument();
  });
});
