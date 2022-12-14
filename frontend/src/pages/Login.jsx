import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login(){
    const [formData, setFormData] = useState({
        email : '',
        password: '',
    })
        const {email, password} = formData
        //funtions

        // 
        const onChange = (e)=>{
            setFormData((prevState)=>({
                ...prevState,
                [e.target.name] : e.target.value
        }))
        }

        const onSubmit = (e)=>{
           e.preventDefault()
        }
    return(
        <>
            <section className='heading'>
            <h1> <FaSignInAlt /> Login</h1>
            <p>Login to see tickets</p>
            </section>
           
            <section className='form'>
                <form onSubmit={onSubmit}>
                     <div className='form-group' >
                        <input type="text" className="form-control" name="email" id="email" value={email} placeholder="enter email" onChange={onChange} />
                     </div>

                    <div className='form-group' >
                        <input type="password" className="form-control" name="password" id="password" value={password} placeholder="enter password" onChange={onChange} />
                  
                    </div>

                    <div className="form-group">
                     <button className='btn btn-block' type='submit' onSubmit={onSubmit}>Submit</button>
                    </div>
                </form>
            </section>
        </>
        
    )
}

export default Login