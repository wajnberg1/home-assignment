import React, { useMemo, useEffect, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';


const JobsDetails = ({job}) => {
  
  const [data, setData] = useState([]);
  
  const columns = useMemo(
    () => [
      {
        accessorKey: 'user',
        header: 'User',
      },
	  {
        accessorKey: 'group',
        header: 'Group',
      },
	  {
        accessorKey: 'submitted',
        header: 'Date Submitted',
      },
	  {
        accessorKey: 'completed',
        header: 'Date Completed',
      },
	  {
        accessorKey: 'command',
        header: 'CLI command',
      },
	  {
        accessorKey: 'log',
        header: 'Log Data',
      },
	  {
        accessorKey: 'status',
        header: 'Status',
      },     
    ],
    [],
  );
  

  
  useEffect(() => {
		setData([job]);
	}, [job]);
  
  var table = useMaterialReactTable({
    columns,
    data,
  }) 
  
  
  return (
		<MaterialReactTable table={table} />	
    );
};


export default JobsDetails;

