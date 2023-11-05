'use client'
import { Input } from '@nextui-org/input'
import Visibility from '@/components/icons/visibility'
import VisibilityOff from '@/components/icons/visibility-off'
import { FC, useState } from 'react'
import { Controller } from 'react-hook-form'

const message: Messages = {
  password: {
    required: 'Por favor ingresa un valor'
  }
}

interface Messages {
  [fieldName: string]: {
    [errorType: string]: string
  }
}

interface Props {
  name: string
  control: any
}

const PasswordField: FC<Props> = ({ name, control }) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  let validationRules = {}

  let type = ''
  let label = ''
  let placeholder = ''
  if (name === 'password') {
    validationRules = {
      required: true
    }

    type = 'password'
    label = 'Contraseña'
    placeholder = '********'
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
          radius='full'
          label={label}
          placeholder={placeholder}
          className='w-full'
          labelPlacement='outside'
          type={isVisible ? 'text' : 'password'}
          isInvalid={!!error}
          errorMessage={error ? message[name][error.type] : null}
          endContent={
            <button
              className='focus:outline-none'
              type='button'
              onClick={toggleVisibility}
            >
              {isVisible ? <Visibility /> : <VisibilityOff />}
            </button>
          }
        />
      )}
    />
  )
}

export default PasswordField
