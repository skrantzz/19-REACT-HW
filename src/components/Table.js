import React from 'react';

export default ({data})=> <table class="table">
<thead>
  <tr>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Phone</th>
    <th scope="col">Email</th>
  </tr>
</thead>
<tbody>
    {data.map(a => <tr>
    <td>{a.name.first}</td>
    <td>{a.name.last}</td>
    <td>{a.phone}</td>
    <td>{a.email}</td>
  </tr>)}
 
</tbody>
</table>