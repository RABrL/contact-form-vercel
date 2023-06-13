export default function Button (props: {
  children: React.ReactNode
}) {
  return (
    <button
      type='submit'
      className='px-5 py-3 text-sm font-medium text-center text-white border border-white rounded-full'
    >{props.children}
    </button>
  )
}
