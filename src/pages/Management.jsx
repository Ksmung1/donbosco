import { useOutletContext } from "react-router-dom"
import HsManagement from "../HSLC/HsManagement"


const Management = () => {
  const {state} = useOutletContext()

  return (
    <div>
      {state === 'hs' ? (
          <HsManagement/>
      ) : ""}

    </div>
  )
}

export default Management