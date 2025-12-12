import SlideIn from "../effects/SlideIn";
import HsAbout from "../HSLC/HsAbout";
import { useOutletContext } from "react-router-dom";


const About = () => {
  const {state} = useOutletContext()
  return (
    <div>
      {state === 'hs' ? (
          <HsAbout/>
      ) : ""}

    </div>
  )
}

export default About