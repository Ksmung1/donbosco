import { useOutletContext } from "react-router-dom"
import HsAdmissions from "../HSLC/HsAdmissions"


const Admissions = () => {
  const {state} = useOutletContext()

  return (
    <div>
      {state === 'hs' ? (
          <HsAdmissions/>
      ) : ""}

    </div>
  )
}

export default Admissions