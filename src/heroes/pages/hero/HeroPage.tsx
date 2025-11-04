import { useParams } from "react-router"

export const HeroPage = () => {

  const { slugId = '' } = useParams();

  

  return (
    <div>HeroPage</div>
  )
}
