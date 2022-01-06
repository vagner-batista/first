import { TextField } from '@mui/material';
import InputMask from 'react-input-mask';

export default function TextInput(props) {
  const {
    label,
    mask,
    name,
    register,
    errors,
    variant = 'standard',
    required = false,
    maxLength = 100,
    fullWidth = false,
  } = props;

  const masks = {
    cpf: {
      mask: '999.999.999-9?',
      pattern: /[\d]{3}.[\d]{3}.[\d]{3}-[\d]{1,2}/,
    },
    tel: {
      pattern: /[(][\d]{2}[)]\s[\d]{3} [\d]{2} [\d]{4}/,
      mask: '(99) 999 99 9999',
    },
    number: {
      pattern: RegExp(`[\\d]{${maxLength}}`),
      mask: new Array(maxLength + 1).join('?'),
    },
    cnpj: {
      pattern: /[\d]{2}.[\d]{3}.[\d]{3}\/[\d]{4}-[\d]{1,2}/,
      mask: '99.999.999/9999-9?',
    },
    email: {
      pattern:
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      mask: new Array(200).join('?'),
    },
  };

  const type = ['email', 'tel', 'number'].includes(mask) ? mask : 'text';
  const optionalChars = type !== 'email' ? '[0-9]' : '.';

  return (
    <InputMask
      mask={masks[mask].mask}
      formatChars={{ 9: '[0-9]', '?': optionalChars }}
      maskChar={null}
      {...register(name, { required: required, pattern: masks[mask].pattern })}
    >
      {() => (
        <TextField
          fullWidth={fullWidth || false}
          error={errors[name] !== undefined}
          id={name}
          name={name}
          label={label}
          type="text"
          variant={variant}
          helperText={
            errors.hasOwnProperty(name)
              ? errors[name]?.message
                ? errors[name].message
                : masks[mask].mask.replace('?', '9')
              : ''
          }
        />
      )}
    </InputMask>
  );
}
