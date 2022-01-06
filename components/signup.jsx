import { Button, Container, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextInput from './TextInput';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    setFormLoading(true);
    const formReceived = await sendForm(data);
    setFormLoading(false);
    setIsSafeToReset(true);
    resetForm(data);
    console.log('FORM RECEIVED\n', formReceived?.data);
  };

  const sendForm = async (data) => {
    const returnData = await axios.post('/api/gettoken', {
      data: data,
      withCredentials: true,
    });
    return returnData;
  };

  const resetForm = (data) => {
    Object.keys(data).forEach((field) => {
      console.log(field);
      setValue(field, '');
    });
  };
  const getToken = async () => {
    const token = await axios.get('/api/gettoken', { withCredentials: true });
    return token.data;
  };

  const [formLoading, setFormLoading] = useState(true);
  const [tokenElement, setTokenElement] = useState();
  const [isSafeToReset, setIsSafeToReset] = useState(false);
  const [tokenHidden, setTokenHidden] = useState('');

  useEffect(() => {
    const inputTokenHiddenElement = (token) => (
      <input
        type="hidden"
        name="token"
        id="token"
        value={token.token}
        {...register('token')}
      />
    );
    const preloadFormTokens = async () => {
      const token = await getToken();
      setFormLoading(false);
      setTokenElement(inputTokenHiddenElement(token));
      setTokenHidden(token.token);
    };
    preloadFormTokens();
  }, []);

  return (
    <>
      <Container maxWidth="40%">
        <form id="myForm" name="myForm" onSubmit={handleSubmit(onSubmit)}>
          {tokenElement}

          <Grid container direction="column" spacing={4}>
            <Grid item></Grid>
            <Grid item>
              <TextInput
                label="CPF"
                mask="cpf"
                name="cpf"
                register={register}
                errors={errors}
                required="CPF obrigatório"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextInput
                label="Celular"
                mask="tel"
                name="telefone"
                register={register}
                errors={errors}
                required="Telefone obrigatório"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextInput
                label="Número"
                mask="number"
                name="numero"
                register={register}
                errors={errors}
                required="Número obrigatório"
                fullWidth
                maxLength={7}
              />
            </Grid>
            <Grid item>
              <TextInput
                label="CNPJ"
                mask="cnpj"
                name="cnpj"
                register={register}
                errors={errors}
                required="CNPJ obrigatório"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextInput
                label="E-mail"
                mask="email"
                name="email"
                register={register}
                errors={errors}
                required="E-mail obrigatório"
                fullWidth
              />
            </Grid>
            <Grid item>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{
                  color: 'white',
                }}
                disabled={formLoading ? formLoading : false}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
