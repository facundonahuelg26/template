import { FC } from 'react'

interface Props {
  className: string
}
const Home: FC<Props> = (props) => {
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
        d='M240-200h156v-234h168v234h156v-360L480-742 240-560v360Zm-28 28v-402l268-203 268 203v402H536v-234H424v234H212Zm268-299Z'
      />
    </svg>
  )
}

export default Home
