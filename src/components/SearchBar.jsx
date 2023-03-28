import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'

const SearchBar = () => {
    return (
        <Paper 
            component="form"
            sx={{
                borderRadius: '20px',
                border: '1px solid #e3e3e3',
                px: 2,
                boxShadow: 'none',
                mr: {sm: 5},
                display: 'flex',
                minWidth: '200px'
            }}
            onSubmit={() => {}}
        >
            <input 
                className='search-bar'
                placeholder='Search...'
                value=""
                onChange={() => {}}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'red'}}>
                <SearchOutlined />
            </IconButton>
        </Paper>
    )
}

export default SearchBar