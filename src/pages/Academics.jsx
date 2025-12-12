import { useOutletContext } from "react-router-dom"
import HsAcademics from "../HSLC/HsAcademics"
import HrAcademics from "../HR/HrAcademics"
import JbAcademics from "../JB/JbAcademics"

const Academics = () => {
  const {state} = useOutletContext()

  return (
    <div>
      {state === 'hs' ? (
          <HsAcademics/>
      ) : state === 'hr' ? (
          <HrAcademics/>
      ) : state === 'jb' ? (
          <JbAcademics/>
      ) : (
          <HsAcademics/>
      )}
    </div>
  )
}

export default Academics