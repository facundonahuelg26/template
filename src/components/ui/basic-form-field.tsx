import { Input } from '@nextui-org/input'
import React from 'react'
import { Controller } from 'react-hook-form'

interface Messages {
  [fieldName: string]: {
    [errorType: string]: string
  }
}
const message: Messages = {
  email: {
    required: 'Por favor ingresa un valor',
    pattern: 'Por favor ingresa un valor valido'
  },
  name: {
    pattern: 'Por favor ingresa un valor'
  }
}

interface BasicFormFieldProps {
  name: string
  control: any
}

const BasicFormField: React.FC<BasicFormFieldProps> = ({
  name,
  control,
  ...rest
}) => {
  let validationRules = {}

  let type = ''
  let label = ''
  let placeholder = ''
  if (name === 'email') {
    validationRules = {
      required: true,
      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    type = 'email'
    label = 'Correo electrónico'
    placeholder = 'juan@example.com'
  } else if (name === 'name') {
    validationRules = { pattern: /^\d{10}$/ }
    type = 'text'
    label = 'Nombre'
    placeholder = 'escribe tu nombre'
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...validationRules }}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          type={type}
          label={label}
          radius='full'
          labelPlacement='outside'
          className='w-full'
          placeholder={placeholder}
          isInvalid={!!error}
          errorMessage={error ? message[name][error.type] : null}
          {...rest}
        />
      )}
    />
  )
}

export default BasicFormField
