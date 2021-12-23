import { Typography, Container } from '@mui/material';
import Link from '../components/CustomLink';

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Typography element="h1" variant="h1">
        <Link href="/" underline="none">
          {' '}
          Home Page
        </Link>
      </Typography>
    </Container>
  );
}
