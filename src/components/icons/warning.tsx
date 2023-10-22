import { FC } from 'react'

interface Props {
  className?: string
}
const Warning: FC<Props> = (props) => {
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
        d='m130-172 350-604 350 604H130Zm48-28h604L480-720 178-200Zm302-60q8.5 0 14.25-5.75T500-280q0-8.5-5.75-14.25T480-300q-8.5 0-14.25 5.75T460-280q0 8.5 5.75 14.25T480-260Zm-14-80h28v-200h-28v200Zm14-120Z'
      />
    </svg>
  )
}

export default Warning
