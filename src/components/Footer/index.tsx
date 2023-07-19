import { Box, Container, Typography } from '@mui/material'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <Box component={'footer'}>
      <Container>
        <Box
          height={{ xs: 116, md: 88 }}
          display={{ xs: 'grid', md: 'flex' }}
          justifyContent={'space-between'}
          alignItems={'center'}
          padding={{ xs: '24px', md: 'unset' }}
        >
          <SocialLinks />
          <Typography fontSize={{ xs: 14, md: 20 }}>
            ©2023 KRAV Ltd. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
