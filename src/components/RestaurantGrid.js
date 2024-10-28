//RestaurantGrid
import { useTheme } from '@mui/material/styles';
import React,{ useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { LoadMoreButton, StyledButton, StyledTextField } from './RestaurantGridStyle';
import { ButtonGroup, Grid , Box} from '@mui/material';

export default function RestaurantGrid({ restaurants }) {
  const categories = ['All', 'Sushi', 'Pizza', 'Burgers', 'Hot Meals', 'Desserts', 'Drinks'];
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  const [displayCount, setDisplayCount] = useState(6); 
  const [activeCategory, setActiveCategory] = useState('All'); 
  const theme = useTheme();

  const handleCategoryClick = (category) => {
    setActiveCategory(category); 
    const filteredByCategory = category === 'All'
      ? restaurants
      : restaurants.filter(restaurant => restaurant.category === category);

    const finalFiltered = filteredByCategory.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredRestaurants(finalFiltered);
    setDisplayCount(6); 
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filteredBySearch = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredRestaurants(filteredBySearch);
    setDisplayCount(6);
  };

  const loadMore = () => {
    setDisplayCount(prev => prev + 6); 
  };

  useEffect(() => {
    setFilteredRestaurants(restaurants);
    setDisplayCount(6); 
  }, [restaurants]);

  return (
    <>
      <Box display="flex" flexDirection="column" gap={2} mb={4}>
        <StyledTextField
          label="Enter restaurant name..."
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ width: '30%', marginBottom: theme.spacing(2), marginTop: theme.spacing(4) }}
        />
        <ButtonGroup variant="outlined" aria-label="category button group" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {categories.map((category) => (
            <StyledButton
              key={category}
              onClick={() => handleCategoryClick(category)}
              variant="outlined"
              active={activeCategory === category} 
            >
              {category}
            </StyledButton>
          ))}
        </ButtonGroup>
      </Box>
      <Grid container spacing={3}>
        {filteredRestaurants.slice(0, displayCount).map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <RestaurantCard
              image={restaurant.image}
              name={restaurant.name}
              ratings={restaurant.ratings}
              deliveryTime={restaurant.deliveryTime}
              tag={restaurant.tag}
            />
          </Grid>
        ))}
      </Grid>

      {filteredRestaurants.length > displayCount && (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <LoadMoreButton variant="outlined" onClick={loadMore}>
            Load More
          </LoadMoreButton>
        </Box>
      )}
    </>
  );
}


