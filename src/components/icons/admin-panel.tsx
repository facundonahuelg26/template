import { FC } from 'react'

interface Props {
  className: string
}
const AdminPanel: FC<Props> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='30'
      viewBox='0 -960 960 960'
      width='30'
      {...props}
    >
      <path
        fill='currentColor'
        d='M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q32 0 57.5-14t42.5-38q-23-14-48-21t-52-7q-27 0-52 7t-48 21q17 24 42.5 38t57.5 14Zm-200 26q-115-36-191.5-142T212-516v-208l268-100 268 100v226q-6-2-14-3.5t-14-3.5v-200l-240-89-240 89v189q0 63 19 119.5t51.5 103q32.5 46.5 76.5 80t93 49.5l3-1q3 6 7 12t9 12q-5 2-9.5 3.5T480-134Zm200 2q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM480-479Z'
      />
    </svg>
  )
}

export default AdminPanel
