import React from 'react';

export default ({data})=> <table class="table">
<thead>
  <tr>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Phone</th>
    <th scope="col">Email</th>
    <th scope="col">Location</th>
  </tr>
</thead>
<tbody>
    {data.map(a => <tr>
    <td>{a.name.first}</td>
    <td>{a.name.last}</td>
    <td>{a.phone}</td>
    <td>{a.email}</td>
    <td>{a.location.state}</td>
  </tr>)}
</tbody>
</table>