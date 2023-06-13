'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import { toast } from 'sonner'

export default function Form () {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { email, name, message } = Object.fromEntries(formData)

    // vamos a llamar a la API
    const promise = async () => await new Promise((resolve, reject) => {
      fetch('/api/kv-send-message', {
        method: 'POST',
        body: JSON.stringify({ email, name, message }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(async (res) => {
        const data = await res.text()
        if (!res.ok) {
          throw new Error(data)
        }
        resolve(data)
        form.reset()
      }).catch((e) => {
        reject(e.message)
      })
    })

    toast.promise(promise, {
      loading: 'Loading...',
      success: (data) => data,
      error: (data) => data
    })
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 rounded border border-white/10 '>
      <Input
        id='email'
        name='email'
        label='Tu Email'
        type='email'
        placeholder='example@email.com'
      />

      <Input
        id='name'
        name='name'
        label='Tu Nombre'
        type='text'
        placeholder='Goncy Ponzo'
      />

      <Input
        id='message'
        name='message'
        label='Tu Mensaje'
        type='text'
        placeholder='Este es el mensaje que quiero enviar'
      />
      <Button>Enviar</Button>
    </form>
  )
}
