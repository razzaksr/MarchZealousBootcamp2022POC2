import { Button, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { adding, newTrans } from "./Connect"
import PaidIcon from '@mui/icons-material/Paid';

export const Credit=()=>{

    const[account,setAccount]=useState({
        "accountNumber":0,
        "accountHolder":"",
        "accountBalance":0,
        "contact":0,
        "password":"",
        "email":"",
        "customerId":0,
    })

    const hey=()=>{
        const t = JSON.parse(localStorage.getItem("loggedperson"))
        setAccount(t)
    }

    useEffect(()=>{
        hey()
    },[])

    const[transaction,setTransaction]=useState({
        "dot":new Date().toISOString(),
        "amount":0,
        "account":{},
        "type":"credit"
    })

    const fun1=(eve)=>{
        const{name,value}=eve.target
        setTransaction((old)=>{
            return{
                ...old,
                [name]:value,
            }
        })
    }

    const add=async()=>{
        account.accountBalance=Number(account.accountBalance)+Number(transaction.amount)
        transaction.account=account
        alert(JSON.stringify(transaction))
        const t = await newTrans(transaction)
        alert(JSON.stringify(t.data))
    }

    return(
        <>
            <h1 className="text-success text-center">Credit amount to your account {account.accountNumber}</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12 shadow p-4">
                    <div className="form-group">
                        <label>Selected Account</label>
                            <TextField 
                                id="filled-basic" 
                                variant="filled" 
                                name="accountHolder"
                                value={account.accountHolder}
                                className="form-control"
                                disabled
                            />
                        </div>
                    <div className="form-group">
                        <label>Enter the amount to credit</label>
                        <TextField 
                            id="filled-basic" 
                            variant="filled" 
                            name="amount"
                            value={transaction.amount}
                            onChange={fun1}
                            className="form-control"
                        />
                    </div>
                    <div className="row justify-content-center">
                        <Button color="primary" className="col-1" onClick={add}>
                            <PaidIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}