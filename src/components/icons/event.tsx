import { FC } from 'react'

interface Props {
  className: string
}
const Event: FC<Props> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='38'
      viewBox='0 -960 960 960'
      width='38'
      {...props}
    >
      <path
        fill='currentColor'
        d='M600-240q-33 0-56.5-23.5T520-320q0-33 23.5-56.5T600-400q33 0 56.5 23.5T680-320q0 33-23.5 56.5T600-240ZM172-132v-616h140v-92h32v92h276v-92h28v92h140v616H172Zm28-28h560v-368H200v368Zm0-396h560v-164H200v164Zm0 0v-164 164Z'
      />
    </svg>
  )
}

export default Event
