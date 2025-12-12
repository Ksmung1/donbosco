import { useOutletContext } from "react-router-dom"
import HsManagement from "../HSLC/HsManagement"
import HrManagement from "../HR/HrManagement"
import JbManagement from "../JB/JbManagement"

const Management = () => {
  const {state} = useOutletContext()

  return (
    <div>
      {state === 'hs' ? (
          <HsManagement/>
      ) : state === 'hr' ? (
          <HrManagement/>
      ) : state === 'jb' ? (
          <JbManagement/>
      ) : (
          <HsManagement/>
      )}
    </div>
  )
}

export default Management