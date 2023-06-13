import kv from '@vercel/kv'

export async function POST (req: Request) {
  const { name, email, message } = await req.json()

  if (name === '' || email === '' || message === '') {
    return new Response('Please provide all fields', { status: 400 })
  }

  const uuid = crypto.randomUUID()
  const timesatmp = Date.now()
  try {
    await kv.set(`contact-${uuid}`, { name, email, message, timesatmp })

    return new Response('Contact saved!', { status: 200 })
  } catch (error) {
    return new Response('Internal error', { status: 500 })
  }
}
