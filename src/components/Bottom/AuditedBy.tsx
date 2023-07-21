import { Box, Typography } from '@mui/material'

export default function AuditedBy() {
  return (
    <Box
      display="grid"
      justifyItems={{ xs: 'left', sm: 'center' }}
      padding={{ xs: '80px 24px', md: '10rem 120px' }}
      borderTop="1px solid #000000"
    >
      <Typography
        textTransform={'uppercase'}
        variant="h5"
        fontSize={{ xs: 32, lg: 64 }}
        whiteSpace={'nowrap'}
      >
        Audited By
      </Typography>
      <Typography fontSize={{ xs: 14, md: 20 }} mt={32}>
        We will announce the auditor list later. Please stay tuned.
      </Typography>
    </Box>
  )
}
