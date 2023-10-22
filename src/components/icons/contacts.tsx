import { FC } from 'react'

interface Props {
  className: string
}
const Contacts: FC<Props> = (props) => {
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
        d='M186-124v-28h588v28H186Zm0-684v-28h588v28H186Zm293.882 420Q519-388 546.5-415.382q27.5-27.383 27.5-66.5Q574-521 546.618-548.5q-27.383-27.5-66.5-27.5Q441-576 413.5-548.618q-27.5 27.383-27.5 66.5Q386-443 413.382-415.5q27.383 27.5 66.5 27.5ZM132-212v-536h696v536H132Zm166-28q45-36 90-52t92-16q47 0 92 16t90 52h138v-480H160v480h138Zm50 0h264q-29-20-62.5-30T480-280q-36 0-69.5 10T348-240Zm132-176q-27 0-46.5-19.5T414-482q0-27 19.5-46.5T480-548q27 0 46.5 19.5T546-482q0 27-19.5 46.5T480-416Zm0-64Z'
      />
    </svg>
  )
}

export default Contacts
