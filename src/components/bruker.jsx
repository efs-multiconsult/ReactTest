import React from "react";


function UserRow({ user }) {
    return (
        <tr>
            <td>{user.brukernavn}</td>
            <td>{user.alder}</td>
            <td>{user.empYr}</td>
            <td>
                <img 
                    className="profilBilde"
                    src={user.bildeUrl} 
                    alt="Random 50px sz" 
                /> 
            </td>
        </tr>
    );
};

export default UserRow;