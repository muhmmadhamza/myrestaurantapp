import { Button, ButtonGroup, TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';


export default function CategoryFilter({ restaurants }) {
    const categories = ['All', 'Sushi', 'Pizza', 'Burgers', 'Hot Meals', 'Desserts', 'Drinks'];
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState();
    const theme = useTheme();

    const handleCategoryClick = (category) => {
        const filteredByCategory = category === 'All'
            ? restaurants
            : restaurants.filter(restaurant => restaurant.category === category);
        
        const filteredRestaurants = filteredByCategory.filter(restaurant => 
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        setFilteredRestaurants(filteredRestaurants);
    };

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        const filteredBySearch = restaurants.filter(restaurant =>
            restaurant.name.toLowerCase().includes(term.toLowerCase())
        );
        

        setFilteredRestaurants(filteredBySearch);
    };

  
    return (
        <Box display="flex" flexDirection="column" gap={2}>
        <StyledTextField
            label="Enter restaurant name..."
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ width: '30%', marginBottom: theme.spacing(2) }}
        />
        <ButtonGroup variant="outlined" aria-label="category button group">
            {categories.map((category) => (
                <StyledButton key={category} onClick={() => handleCategoryClick(category)}>
                    {category}
                </StyledButton>
            ))}
        </ButtonGroup>
    </Box>
    );
}



const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    borderColor: theme.palette.secondary.main,
    borderRadius:"10px",
    '&.Mui-selected': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.tertiary,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
    },
  }));

  const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '30%',
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.background.paper,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.secondary,
    },
  }));
  