import React, { useMemo, useEffect, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import JobsDetails from './JobsDetails';



const JobsList = () => {
  const [data, setData] = useState([]);
  const [job, setJob] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [displayJob, setDisplayJob] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const columns = useMemo(
    () => [
      {
        accessorKey: 'user',
        header: 'User',
      },
	  {
        accessorKey: 'submitted',
        header: 'Date Submitted',
      },
	  {
        accessorKey: 'status',
        header: 'Status',
      },     
    ],
    [],
  );
  
  const handleError = (error) => {
	  setError(true);
	  setErrorText(error.message);
	  setLoading(false);
  }
  
  const table = useMaterialReactTable({
    columns,
    data,
	enableRowSelection: true,
	enableMultiRowSelection: false,
    initialState: { showColumnFilters: true },
	onRowSelectionChange: setRowSelection,
	state: { rowSelection }
  }) 
  
 
  useEffect(() => {
	    setLoading(true);
		fetch('http://127.0.0.1:8080/jobs')
		 .then((response) => response.json())
		 .then((json) => {setData(json);setLoading(false)})
		 .catch((error) => {handleError(error)});
	}, []);
	
  useEffect(() => {
    if (Object.keys(rowSelection).length > 0) {
		var id = Object.keys(rowSelection)[0];
		setDisplayJob(true);
		setJob(data[id]);
	} else {		
		setDisplayJob(false);
	}
  }, [rowSelection]);
	
  
  return (
	<Grid container spacing={2}>
		<Grid item sm={6}>
			<MaterialReactTable table={table} />
		</Grid>
		<Grid item sm={6}>
			{displayJob && <JobsDetails job={job} />}
		</Grid>

		{loading && <Box sx={{ display: 'flex' }}>
						<CircularProgress />
				   </Box>}
		{hasError && <Stack sx={{ width: '100%' }} spacing={2}>      
					<Alert severity="error">{errorText}</Alert>
				  </Stack>}
	</Grid>
  );
};

export default JobsList

