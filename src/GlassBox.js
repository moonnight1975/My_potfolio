
import React from 'react';
import { Box } from '@mui/material';

const GlassBox = () => {
  return (
    <Box
      sx={{
        width: 200,
        height: 200,
        borderRadius: 2,
        bgcolor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}
    />
  );
};

export default GlassBox;
