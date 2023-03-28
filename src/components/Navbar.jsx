import React from 'react';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: 'sticky', backgroundColor: '#000', top: 0, justifyContent: 'space-between', display: 'flex', flexDirection: {xs: 'column', sm: 'row', md: 'row'}, gap: {xs : '20px 0', sm: '0'} }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} style={{ width: '40px', height: '40px' }} />
        <h3 style={{ color: '#fff', margin: '0 10px' }}>Playtube</h3>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar