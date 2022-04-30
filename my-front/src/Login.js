import AccountCircle from "@mui/icons-material/AccountCircle"
import { Button, InputAdornment, TextField } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import CancelIcon from '@mui/icons-material/Cancel';
import { Carousel } from "react-bootstrap"
import { useState } from "react";
import { stepIn } from "./Connect";

export const Login=()=>{

    const[log,setLog]=useState({
        "user":0,
        "pass":""
    })

    const observe=(pro)=>{
        const{name,value}=pro.target

        setLog((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const logging=async()=>{
        const t = await stepIn(log)
        if(t.data)
        {
            localStorage.setItem("loggedperson",t.data.accountNumber)
            window.location.assign("/home");
        }
        else{
            cancel()
        }
    }

    const cancel=()=>{
        setLog(()=>{
            return{
                "user":"",
                "pass":""
            }
        })
    }

    return(
        <>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/bank1.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/bank2.jpg"
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/bank3.jpeg"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 align-self-center shadow p-3">
                        <TextField
                            name="user"
                            value={log.user}
                            onChange={observe}
                            id="input-with-icon-textfield"
                            label="Customer Id"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>
                            ),
                            }}
                            variant="outlined"
                            className='form-control'
                        />
                        <input value={log.pass} onChange={observe} name="pass" type="password" placeholder="Password" className='mt-2 form-control'/>
                        <div className="mt-2 row justify-content-around">
                            <Button className='col-4' variant="outlined" color="primary" onClick={logging}>
                                <LoginIcon/>Login
                            </Button>
                            <Button className='col-4' variant="outlined" color="error" onClick={cancel}>
                                <CancelIcon/>Cancel
                            </Button>
                        </div>
                        <a href="/sign" className="link-success text-decoration-none">Want a new account?</a>
                    </div>
                </div>
            </div>
        </>
    )
}