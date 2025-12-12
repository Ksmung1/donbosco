import { useOutletContext } from "react-router-dom"
import HsAcademics from "../HSLC/HsAcademics"


const Academics = () => {
  const {state} = useOutletContext()

  return (
    <div>
      {state === 'hs' ? (
          <HsAcademics/>
      ) : ""}

    </div>
  )
}

export default Academics