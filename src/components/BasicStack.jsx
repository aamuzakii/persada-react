import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {[1,2,3,4,5].map((text, index) => (
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
