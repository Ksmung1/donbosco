import { useOutletContext } from "react-router-dom"
import HsStaffs from "../HSLC/HsStaffs"


const Staffs = () => {
  const {state} = useOutletContext()

  return (
    <div>
      {state === 'hs' ? (
          <HsStaffs/>
      ) : ""}

    </div>
  )
}

export default Staffs