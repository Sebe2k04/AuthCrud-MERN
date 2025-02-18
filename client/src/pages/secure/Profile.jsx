import { useAuth } from '../../context/AuthProvider'

const Profile = () => {
    const {user} = useAuth()
  return (
    <div className='lg:px-20 px-8'>
        <div className="">
            <h1 className='text-xl font-semibold'>My Profile</h1>
        </div>
        <div className="">
            <div className="pt-5 grid gap-2">
                <h2><span className='font-semibold'>Username :</span> {user.username} <span className='bg-gray-300 py-1 px-3 rounded-xl'>verified</span></h2>
                <h2><span className='font-semibold'>Email :</span> {user.email}</h2>
                <h2><span className='font-semibold'>Mobile Number :</span> {user.mobile_no}</h2>
            </div>
            
        </div>

      
    </div>
  )
}

export default Profile
