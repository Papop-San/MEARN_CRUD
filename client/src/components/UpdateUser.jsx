import  axios  from 'axios';
import React, { useEffect  ,useState} from 'react'
import {useNavigate ,useParams}  from 'react-router-dom'




function UpdateUser() {
  const {id} = useParams()
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [age , setAge ]= useState();
  const navigate = useNavigate();

  // Create API search before  Chnage 
  useEffect((e)=>{
    axios.get("http://localhost:3001/getUser/"+id)
    .then(result => {
      console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
  }  ,[])
   

  // Don't forget to Change PUT 
  const UpdateOlder = (e)=>{
    e.preventDefault()
    axios.put('http://localhost:3001/UpdateUser/'+id, { name, age, email })
    .then(result =>{ 
      console.log(result)
      navigate('/')
    
  })
    .catch(err =>  console.log(err))
  }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={UpdateOlder}>
          <h2>Update</h2>

          <div className="mb-2">
            <label htmlFor=''>Name</label>
            <input type='text' placeholder='Enter Name' className='form-control'
            value={name} onChange={(e)=> setName(e.target.value)}></input>
          </div>
          <div className="mb-2">
            <label htmlFor=''>Email</label>
            <input type='text' placeholder='Enter Email' className='form-control'
            value={email} onChange={(e)=> setEmail(e.target.value)}></input>
          </div>
          <div className="mb-2">
            <label htmlFor=''>Age</label>
            <input type='text' placeholder='Enter Age' className='form-control'
            value={age} onChange={(e)=> setAge(e.target.value)}></input>
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateUser