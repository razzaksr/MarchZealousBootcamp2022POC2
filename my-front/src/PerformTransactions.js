import { useEffect, useState } from "react"
import { Credit } from "./Credit"

export const Perform=()=>{

    const[account,setAccount]=useState({})

    const hey=()=>{
        const t = JSON.parse(localStorage.getItem("loggedperson"))
        setAccount(t)
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
                    {(which=='credit')?<Credit/>:<></>}
                </div>
            </div>
        </div>
    </>
    )
}