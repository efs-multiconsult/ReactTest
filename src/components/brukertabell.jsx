import React from "react";
import UserRow from "./bruker";
import Table from 'react-bootstrap/Table';

function UserTable({ tbx }) {
    const rader = [];
    tbx.forEach(usr => {
        rader.push(
            <UserRow user={usr} />
        );
    });

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Navn</th>
                <th>Alder</th>
                <th>Ansettelsesår</th>
            </tr>
            </thead>
            <tbody>{rader}</tbody>
        </Table>

    );

};

export default UserTable;

