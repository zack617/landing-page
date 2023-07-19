'use client'

import { Box, Typography, Menu, MenuItem, IconButton } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export default function MobileMenu({ pages }: { pages: string[] }) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <Box
      sx={{
        flexGrow: 0,
        display: { xs: 'flex', md: 'none' },
        marginLeft: 'auto'
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        disableScrollLock
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        slotProps={{
          paper: {
            sx: {
              boxShadow: 'none',
              border: '1px solid #000000'
            }
          }
        }}
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center" variant="h5">
              {page}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
