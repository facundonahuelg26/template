import { useForm, SubmitHandler } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { ROUTES } from '@/features/navigation/navigation-routes'
import { toast } from 'sonner'

interface FormData {
  email: string
  password: string
  name: string
}
interface Error {
  error: string
  status: number
  ok: boolean
  url: null
}
export const useLogin = () => {
  const [error, setError] = useState<null | Error>(null)

  const {
    handleSubmit,
    control,
    formState: { isValid }
  } = useForm<FormData>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { email, password } = data
    const resNextAuth = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (!resNextAuth?.ok) {
      console.log(resNextAuth)
      setError(resNextAuth as Error)
      toast.error('Correo o contraseña incorrectos')
      return
    }
    window.location.replace(ROUTES.dashboard.path)
  }

  return {
    onSubmit,
    handleSubmit,
    control,
    isValid,
    error
  }
}
