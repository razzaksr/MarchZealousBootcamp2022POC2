import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { useState } from 'react';
import { adding } from './Connect';




export const NewAccount=()=>{

    const[validate,setValidate]=useState({
        "pass1":"",
        "pass2":""
    })

    const[account,setAccount]=useState({
        "accountHolder":"",
        "accountBalance":0.0,
        "contact":0,
        "password":"",
        "email":"",
        "customerId":0,
    })

    const eve=(prop)=>{
        const{name,value}=prop.target;

        setAccount((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const eves=(prop)=>{
        const{name,value}=prop.target;

        setValidate((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }


    const isOkay=async()=>{
        if(validate.pass1===validate.pass2)
        {
            account.password=validate.pass1
            const o = await adding(account)
            alert(o.data)
            reset()
        }
        else{
            alert("Invalid credentials")
        }
    }

    const reset=()=>{
        setAccount(()=>{
            return{
                "accountHolder":"",
                "accountBalance":0.0,
                "contact":0,
                "email":"",
                "customerId":0,
            }
        })

        setValidate(()=>{
            return{
                "pass1":"",
                "pass2":""
            }
        })
    }


    return(
        <>
            <div className="container-fluid">
                <Typography className='text-center text-success' variant="h4" component="div" gutterBottom>
                    New Account Openning
                </Typography>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12 shadow p-4">
                        <TextField
                            name="accountHolder"
                            value={account.accountHolder}
                            onChange={eve}
                            id="input-with-icon-textfield"
                            label="Account Holder"
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
                        <div className='row mt-2'>
                            <div className='col-lg-6 col-sm-12'>
                                <TextField
                                    name="contact"
                                    value={account.contact}
                                    onChange={eve}
                                    id="input-with-icon-textfield"
                                    label="Account Contact"
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PhoneAndroidIcon/>
                                        </InputAdornment>
                                    ),
                                    }}
                                    variant="outlined"
                                    className='form-control'
                                />
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <TextField
                                    name="email"
                                    value={account.email}
                                    onChange={eve}
                                    id="input-with-icon-textfield"
                                    label="Account Email"
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlineIcon/>
                                        </InputAdornment>
                                    ),
                                    }}
                                    variant="outlined"
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <TextField
                            name="accountBalance"
                            value={account.accountBalance}
                            onChange={eve}
                            id="input-with-icon-textfield"
                            label="Account Openning balance"
                                InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        ₹
                                    </InputAdornment>
                                ),
                                }}
                            variant="outlined"
                            className='form-control mt-2'
                        />
                        <TextField
                            name="customerId"
                            value={account.customerId}
                            onChange={eve}
                            id="input-with-icon-textfield"
                            label="Customer Id"
                            variant="outlined"
                            className='form-control mt-2'
                        />
                        <div className='row mt-2'>
                            <div className='col-lg-6 col-sm-12'>
                                <input onChange={eves} value={validate.pass1} name="pass1" type="password" placeholder="Password" className='form-control'/>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <input onChange={eves} value={validate.pass2}  name="pass2" type="password" placeholder="Password" className='form-control'/>
                            </div>
                        </div>
                        <div className='row justify-content-around mt-2'>
                            <Button className='col-2' variant="outlined" color="primary" onClick={isOkay}>
                                <AccountBalanceIcon/>Open
                            </Button>
                            <Button className='col-2' variant="outlined" color="error" onClick={reset}>
                                <CancelPresentationIcon/>Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}