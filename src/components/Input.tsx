export default function Input (props: {
  id: string
  label: string
  name: string
  type: string
  placeholder: string
}) {
  return (
    <fieldset>
      <label
        className='block mb-2 text-sm font-medium text-gray-300'
        htmlFor={props.id}
      >{props.label}
      </label>
      <input
        className='shadow border text-sm rounded-lg block w-full p-2.5 bg-white/5 placeholder-gray-400 text-white border-gray-600'
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </fieldset>
  )
}
