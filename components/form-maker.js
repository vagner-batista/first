import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextInput from './TextInput';

const components = {
  text: mountTextInput,
};

const mountComponent = (field) => {
  console.log(components[field.type]);
  return Object.keys(components).includes(field.type)
    ? components[field.type]
    : null;
};

function mountTextInput(fieldData, register, errors) {
  const { label, dataType, name, required, fullWidth, maxLength } = fieldData;
  return (
    <TextInput
      key={name}
      label={label}
      mask={dataType}
      name={name}
      register={register}
      errors={errors}
      required={required}
      fullWidth={fullWidth}
      maxLength={maxLength ? maxLength : null}
    />
  );
}

function mountTextInputTest(fieldData, reg, err) {
  return (
    <div key="chave" id="testeDiv">
      Teste Div
    </div>
  );
}
export default function FormMaker(props) {
  const { register, formState: errors } = useForm();
  console.log(props.schema);
  const { fields } = props.schema;
  const { name, id, action, method, variants } = props.schema.config;
  return (
    <form name={name} id={id}>
      <TextField name="teste"></TextField>
      {fields.map((field) => mountTextInput(field, register, errors))}
    </form>
  );
}
