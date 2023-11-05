import { FC } from 'react'

interface Props {
  className: string
}
const Mail: FC<Props> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24'
      viewBox='0 -960 960 960'
      width='24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M132-212v-536h696v536H132Zm348-274L160-698v458h640v-458L480-486Zm0-34 304-200H176l304 200ZM160-698v-22 480-458Z'
      />
    </svg>
  )
}

export default Mail
