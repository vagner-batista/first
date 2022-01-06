import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextInput from './TextInput';

const components = {
  text: mountTextInput,
};

const mountComponent = (field) => {
  console.log(field);
  return Object.keys(components).includes(field.type)
    ? components[field.type]
    : null;
};

function mountTextInput(fieldData, reg, err) {
  const { label, dataType, name, required, fullWidth } = fieldData;
  console.log(reg);
  const inp = (
    <TextInput
      key={name}
      label={label}
      mask={dataType}
      name={name}
      register={reg}
      errors={err}
      required={required}
      fullWidth={fullWidth}
      maxLength={maxLength}
    />
  );
  console.log(inp);
  return inp;
}

export default function FormMaker(props) {
  const { register, errors } = useForm();
  console.log(props.schema);
  const { fields } = props.schema;
  const { name, id, action, method, variants } = props.schema.config;
  return (
    <form name={name} id={id}>
      <TextField name="teste"></TextField>
      {fields.forEach((field) => mountComponent(field, register, errors))}
    </form>
  );
}
