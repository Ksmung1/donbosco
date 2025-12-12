import HsAbout from "../HSLC/HsAbout";
import HrAbout from "../HR/HrAbout";
import JbAbout from "../JB/JbAbout";
import { useOutletContext } from "react-router-dom";

const About = () => {
  const {state} = useOutletContext()
  return (
    <div>
      {state === 'hs' ? (
          <HsAbout/>
      ) : state === 'hr' ? (
          <HrAbout/>
      ) : state === 'jb' ? (
          <JbAbout/>
      ) : (
          <HsAbout/>
      )}
    </div>
  )
}

export default About