import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText); // we use these two plugins globally

const App = () => {
  return (
    <div className="flex-center">
      <h1 className="text-3xl text-indigo-300">Hello, GSAP</h1>
    </div>
  )
}

export default App