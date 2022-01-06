import { Typography, Container } from '@mui/material';
import Link from '../components/CustomLink';
import FormMaker from '../components/form-maker';
import SignUpForm from '../components/signup';

const testSchema = {
  config: {
    name: 'otherForm',
    id: 'myOtherFormId',
    action: '/api/gettoken',
    method: 'post',
    variants: 'standard',
  },
  fields: [
    {
      name: 'cpf2',
      type: 'text',
      dataType: 'cpf',
      label: 'CPF',
      required: true,
      fullWidth: true,
    },
    {
      name: 'name',
      type: 'text',
      dataType: 'email',
      label: 'E-mail',
      required: true,
      fullWidth: true,
    },
    {
      name: 'telefone',
      type: 'text',
      dataType: 'tel',
      label: 'Telefone',
      required: true,
      fullWidth: true,
    },
  ],
};

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Typography element="h1" variant="h1">
        <Link href="/" underline="none">
          {' '}
          Home Page
        </Link>
      </Typography>
      <SignUpForm></SignUpForm>
      <FormMaker schema={testSchema} />
    </Container>
  );
}
