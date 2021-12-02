
import { DataGrid } from '@mui/x-data-grid';
import {useState} from 'react';
import TextField from '@mui/material/TextField';

//table component
export default function DataGridDemo(props) {

  //input query state
  const [query, setQuery] = useState('');

  const columns = [
  {field: 'id', headerName: 'ID', width: 90 },
  {field: 'values',headerName:'Values', width:150},
  {field: 'data',headerName:'Data', width:150},

];
const rows = [
  { id: 1, values: 'First Name', data: `${props.data.FirstName}`  },
  { id: 2, values: 'Last name', data: `${props.data.LastName}`},
  { id: 3, values: 'Email', data: `${props.data.Email}`}
];

//input query
function handleChange(e){
  setQuery(e.target.value);
  
}

// custom search filter 
function MyDataGrid(rows, query) {
  if(query.length === 0) return rows;
  return rows.filter(function(el){
    return el.values.includes(query) || el.data.includes(query);
  })
}
return(
  <>
  <TextField style={{position:'relative',top:'10px', width:'90%'}} label="Search" variant="outlined" onChange={handleChange} />
  <div style={{ height:'100%' , width: '90%', margin: '0 auto', position:'relative', top: 30, textAlign:'center' }}>
        <DataGrid xs={12}
        variant="outlined"
        rows={MyDataGrid(rows,query)}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        style={{ width:'100%' }}
        components={{
          NoRowsOverlay:() => (
      <div style={{positon:'relative', top:50}}>
        Custom Filter returns no result
      </div>
          )
    }}
      />
  </div> 
  </>
)
}
