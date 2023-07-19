import Logo from '@/assets/svg/logo.svg'
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography
} from '@mui/material'
import MobileMenu from './MobileMenu'

const pages = ['COMMUNITY', 'GOVERNANCE', 'DOCS']

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        padding: '20px 40px'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <MobileMenu pages={pages} />

          <Box
            sx={{
              marginLeft: 'auto',
              display: { xs: 'none', md: 'flex' },
              gap: 80
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography variant="h5"> {page}</Typography>
              </Button>
            ))}
            <Button variant="contained">
              <Typography variant="h5">Launch App</Typography>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
