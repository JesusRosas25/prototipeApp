// src/views/profile.js

import React from 'react';
import PaginateTable from '../components/paginateTable';
// import { useAuth0 } from '@auth0/auth0-react';

 const Profile = () => {
  return (
    <div className="table-responsive text-nowrap">
      <table className="table table-sm"
        style={{ marginTop: "10vh" }}>
        <thead>
          <tr className="table-success">
            <th>#</th>
            <th>Imagen</th>
            <th>Titulo</th>
            <th>partNumber</th>
            <th>idMeli</th>
            <th>CategoriaMG</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Ml1245252</td>
            <td>slf</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fsdsdsdt</td>
            <td>Ml1245252</td>
            <td>slf</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@dddfgt</td>
            <td>Ml1245252</td>
            <td>slf</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fatlon</td>
            <td>Ml1245252</td>
            <td>slf</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@sdfg</td>
            <td>Ml1245252</td>
            <td>slf</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fatds</td>
            <td>Ml1245252</td>
            <td>slf</td>
          </tr>
        </tbody>        
      </table>
      <PaginateTable />
    </div>
  );
};

//export default BasicExample;


export default Profile;