import React, { Component } from 'react'

export default class ProfileComponent extends Component {
    render() {
        return (
            <div style={Styles.profileComponentContainer}>
                <div style={Styles.profileInformationContainer}></div>
                <div style={Styles.profilePasswordContainer}></div>
                <button style={Styles.deleteAccountButton}>Delete My Account</button>
            </div>
        )
    }
}
const Styles={
    profileInformationContainer:{
        
    },
    deleteAccountButton:{
        textDecoration:"none",
        color:"white",
        fontSize:"14px",
        fontWeight:"500",
        width:"168px",
        height:"50px",
        borderRadius:"3px",
        border:"none",
        background:"#FF0000"
    }
}