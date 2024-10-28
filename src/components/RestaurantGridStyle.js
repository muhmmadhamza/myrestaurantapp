import { Grid, Button, ButtonGroup, TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';


 export const StyledButton = styled(Button)(({ theme, active }) => ({
    color: theme.palette.text.primary,
    borderColor: theme.palette.secondary.main,
    borderRadius: "10px",
    backgroundColor: active ? '#ffa500' : 'transparent', // Yellow background for active button
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
    },
  }));
  
  export const StyledTextField = styled(TextField)(({ theme }) => ({
    width: '30%',
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    color: theme.palette.text.primary,
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
  
  export  const LoadMoreButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderColor: theme.palette.secondary.main,
    borderRadius: "10px",
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  }));