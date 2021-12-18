import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from "./Dashboard.module.css"
export const DashboardScreen = () => {
    const history = useHistory()
    return (
        <div className={styles.mainBox}>
            
        <div className={styles.optionBoxs}>

        

        <section onClick={()=>{
            history.push("/requesttab")
        }}>
            <h3>Request Tab</h3>
        </section>
        <section onClick={()=>{
            history.push("/acceptreq")
        }}>
        <h3>Request Approved Tab</h3>

        </section>
        <section onClick={()=>{
            history.push("/rejectreq")
        }}>
        <h3>Request Rejected Tab</h3>

        </section>
        <section onClick={()=>{
            history.push("/createmanager")
        }}>
        <h3 >Branch Manager Tab</h3>

        </section>
        </div>

        </div>
    )
}
