import { useOutletContext } from "react-router-dom"
import HsAdmissions from "../HSLC/HsAdmissions"
import HrAdmissions from "../HR/HrAdmissions"
import JbAdmissions from "../JB/JbAdmissions"

const Admissions = () => {
  const {state} = useOutletContext()

  return (
    <div>
      {state === 'hs' ? (
          <HsAdmissions/>
      ) : state === 'hr' ? (
          <HrAdmissions/>
      ) : state === 'jb' ? (
          <JbAdmissions/>
      ) : (
          <HsAdmissions/>
      )}
    </div>
  )
}

export default Admissions