import { useEffect, useState } from "react"
import { gets } from "./Connect"
import { Credit } from "./Credit"
import { Transfer } from "./Transfer"

export const Perform=()=>{

    const[account,setAccount]=useState({
        "accountNumber":0,
        "accountHolder":"",
        "accountBalance":0,
        "contact":0,
        "password":"",
        "email":"",
        "customerId":0
    })

    const hey=async()=>{
        const t = Number(localStorage.getItem("loggedperson"))
        const yet=await gets(t)
        setAccount(yet.data)
    }

    useEffect(()=>{
        hey()
    },[])

    const[which,setWhich]=useState("")

    const earn=(eve)=>{
        const{name,value}=eve.target;
        setWhich(value)
    }

    return(
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 shadow p-5">
                    <div className="form-line">
                        <label>Select Transaction Type</label>
                        <input type="radio" onChange={earn} name="which" value="credit"/>Credit
                        <input type="radio" onChange={earn} name="which" value="transfer"/>Transfer
                    </div>
                    {(which==='credit')?<Credit/>:(which==='transfer')?<Transfer/>:<></>}
                </div>
            </div>
        </div>
    </>
    )
}