import { Modal } from "bootstrap";
import React from "react";
import { useForm } from 'react-hook-form';
import "bootstrap/dist/css/bootstrap.min.css";
import {  useNavigate } from "react-router";
import "./style.css"
function Signup() {
  const { handleSubmit, register, formState:{errors} } = useForm();
  const Navigate=useNavigate()
  const handerGoToSignIn =()=>{
    Navigate("/")
  }
  const handerclick =(data)=>{
console.log(data);
  }
  return (
    <div className="signun">
  
        <form onSubmit={handleSubmit(handerclick)}>
          <div className="form-group">
            <h1>Đăng Ký</h1>
            <label >Tài Khoản</label>
            <input
              type="text"
          
              name='username'
              {...register('username', {required:true,minLength:8,maxLength:32})}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
             
            />
            {errors.username &&errors.username.type==="required" &&(
              <div className="invalid-feedback">Không được để trống tài khoản</div>
            )}
            {errors.username&&errors.username.type==="minLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
            {errors.username&&errors.username.type==="maxLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
          </div>
          <div className="form-group">
            <label >Mật Khẩu</label>
            <input
              type="password"
          
              name='password'
              {...register('password', {required:true,minLength:8,maxLength:32,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/})}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
             
            />
            {errors.password && errors.password.type==="required"&& (
              <div className="invalid-feedback">Không được để trống mật khẩu</div>
            )}
             {errors.password&&errors.password.type==="minLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
            {errors.password&&errors.password.type==="maxLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
            {errors.password&&errors.password.type==="pattern"&&
            <div className="invalid-feedback">Nhập đúng định dạng</div>}
          </div>
          <div className="form-group">
            <label >Nhập Lại Mật Khẩu</label>
            <input
              type="password"
          
              name='confimpassword'
              {...register('confimpassword', {required:true,minLength:8,maxLength:32,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/})}
              className={`form-control ${errors.confimpassword ? "is-invalid" : ""}`}
             
            />
            {errors.confimpassword && errors.confimpassword.type==="required"&& (
              <div className="invalid-feedback">Không được để trống mật khẩu</div>
            )}
             {errors.confimpassword&&errors.confimpassword.type==="minLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
            {errors.confimpassword&&errors.confimpassword.type==="maxLength"&&
            <div className="invalid-feedback">Vui lòng nhập tài khoản có độ dài từ 8 đến 32 ký tự</div>}
                        {errors.password&&errors.password.type==="pattern"&&
            <div className="invalid-feedback">Nhập đúng định dạng gồm ít nhất 1 chữ thường 1 chữ in hoa 1 ký tự đặc biệt và 1 số bất kỳ</div>}
          </div>
          <button type="submit" className="btn btn-primary" style={{marginTop:"10px"}}> 
          Đăng ký
          </button>
        </form>
        <a className="goSignIn" onClick={handerGoToSignIn}>Nếu đã có tài khoản tiến đến đăng nhập</a>

      
    </div>
  );
}

export default Signup;