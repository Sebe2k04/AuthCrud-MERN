import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-600px">
        <h1 className="text-black lg:text-7xl text-4xl font-semibold">Auth<span className="text-gray-400">Crud</span></h1>
        <p className="pt-2">Welcome To AuthCrud !</p>
        <div className="flex justify-center pt-3">
            <Link to={"/auth/login"} className="px-4 py-0.5 text-white rounded-tr-xl rounded-bl-xl hover:rounded-xl  bg-black hover:scale-105 duration-200">Get Started</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
