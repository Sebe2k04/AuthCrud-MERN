import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className='flex justify-center items-center pt-10'>
     <h1>A <span><Link to={"https://sebe2k04.vercel.app"} target="_blank" className="font-semibold">Sebe2k04</Link></span> Project</h1>
    </div>
  )
}

export default Footer
