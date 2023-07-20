import { Helmet } from 'react-helmet-async';

import {QrScanner} from '@yudiel/react-qr-scanner';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
import qrSample from '../assets/qrSample.jpeg'
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';


// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: QR | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            QR Reader
          </Typography>
        </Stack>


        <Stack direction="row" alignItems="center" >
          <Typography variant="h5" gutterBottom>
            Escanee el codigo QR del invitado
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" >
        <QrScanner
          onDecode={(result) => console.log(result)}
          onError={(error) => console.log(error?.message)}
        />
        </Stack>
    
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Leer QR
          </Button>

          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            Buscar
          </Button>
        </Stack>

      </Container>
    </>
  );
}
