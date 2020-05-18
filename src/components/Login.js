import React, {useState} from "react";

export default ({login}) => {
const [input, setInput] = useState({name:'',password:''})

return(
<div className="container">
<div className="row">
  <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
    <div className="card card-signin my-5">
      <div className="card-body">
        <h5 className="card-title text-center">Sign In</h5>
          <div className="form-label-group">
            <input  onChange={(e)=>{console.log(input); setInput({...input,email:e.target.value})}} type="name" id="inputname" className="form-control" placeholder="Name" required autofocus/>
            <label for="inputname">Name</label>
          </div>

          <div className="form-label-group">
            <input onChange={(e)=>{console.log(input); setInput({...input,password:e.target.value})}} type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <label for="inputPassword">Password</label>
          </div>

          <div className="custom-control custom-checkbox mb-3">
            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
            <label className="custom-control-label" for="customCheck1">Remember password</label>
          </div>
          <button onClick={()=> login(input)} className="btn btn-lg btn-primary btn-block text-uppercase">Sign in</button>
          <hr className="my-4"/>
      </div>
    </div>
  </div>
</div>
</div>
)}