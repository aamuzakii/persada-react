import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#007FFF',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: 'white',
}));

export default function BottomPaper() {
  return (
    <Box sx={{ 
      width: '90vw',
      margin: '5vw'
    }}>
      <Stack spacing={2}>
        {[1].map((text, index) => (
            <Item>
            <Typography variant="h7" component="div" color="text.primary">
              Semua Produk
            </Typography>
            <Typography variant="body4" sx={{ mb: 1.5 }} color="text.secondary">
              1 produk
            </Typography>
          </Item> 
        ))}
      </Stack>
    </Box>
  );
}
