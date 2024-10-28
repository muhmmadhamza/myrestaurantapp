// RestaurantCard

import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
const RestaurantCard = ({ image, name, ratings, deliveryTime, tag }) => {
  const [rating, setRating] = useState(ratings);
  const [isRated, setIsRated] = useState(false); 

  const handleRatingClick = () => {
    setIsRated(!isRated); 
  };
  return (
    <Card >

      <Box sx={{ position: "relative" }}>
        <Image src={image}
          height={200}
          width={390}
          alt='hamza'
        />
        {tag && (
          <TagChip
            label={tag}
            sx={{
              backgroundColor:
                tag === 'New'
                  ? '#4caf50'
                  : tag === '1+1'
                    ? '#673ab7'
                    : '#f44336',
            }}
          />
        )}
      </Box>
      <StyledCardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1" fontWeight="bold">
            {name}
          </Typography>



        </Box>
        <Box display="flex" justifyContent="flex-start" alignItems="center" marginTop={1}>
          <Box display="flex" alignItems="center">
          <StyledButton onClick={handleRatingClick}>
          <StarIcon fontSize="small" color={isRated ? "primary" : "action"} />              <Typography variant="body2" sx={{ marginLeft: 0.5 }}>
                {rating}
              </Typography>
            </StyledButton>
          </Box>
          <StyledButton sx={{ marginLeft: "1rem" }}>
            <Typography variant="body2" color="text.secondary">
              {deliveryTime} min
            </Typography>
          </StyledButton>
        </Box>
      </StyledCardContent>
    </Card>
  );
};

export default RestaurantCard;



const StyledCard = styled(Card)(({ theme }) => ({
  width: 250,
  margin: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  overflow: 'hidden',
  '&:hover': {
    boxShadow: theme.shadows[6],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 100,
});
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: ".5rem",
  backgroundColor: theme.palette.background.default,
  borderRadius: "10px",
  '&.Mui-selected': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.tertiary,
  },
  '&:hover': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
}));


const StyledCardContent = styled(CardContent)({
  padding: '8px 16px',
});

const TagChip = styled(Chip)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 600,
  color: theme.palette.common.white,
  height: 24,
  position: "absolute",
  top: 0,
  left: 0,
  padding: "14px",
  borderTopLeftRadius: "0px",
  borderBottomLeftRadius: "0px",
  // borderBottomRightRadius:"0px",
  borderTopRightRadius: "0px",
  borderBottomRightRadius: "10px",

}));
