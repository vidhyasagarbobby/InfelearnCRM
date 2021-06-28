import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'name', label: 'Name', maxWidth: 50 },
    { id: 'email', label: 'Email', maxWidth: 30 },
    { id: 'phone', label: 'Phone Number', length: 10 },
    { id: 'leads', label: 'Leads' },
    { id: 'role', label:'Role'},

    
  ];
  
  function createData(name, email, phone, leads, role) {
    return { name, email, phone, leads, role };
  }
  
  const rows = [
    createData('Jane Doe', 'janedoe@infelearn.com', 1324171354, 328, 'Manager'),
    createData('Michtelle Ray', 'm.ray@yahoo.com', 1230812982, 24, 'Sales Executive'),
    createData('Jane Doe', 'janedoe@infelearn.com', 1324171354, 328, 'Manager'),
    createData('Michtelle Ray', 'm.ray@yahoo.com', 1230812982, 24, 'Sales Executive'),
    createData('Michtelle Ray', 'm.ray@yahoo.com', 1230812982, 24, 'Sales Executive'),
    createData('Jane Doe', 'janedoe@infelearn.com', 1324171354, 328, 'Manager'),
    createData('Michtelle Ray', 'm.ray@yahoo.com', 1230812982, 24, 'Sales Executive'),
    createData('Jane Doe', 'janedoe@infelearn.com', 1324171354, 328, 'Manager'),
    createData('Michtelle Ray', 'm.ray@yahoo.com', 1230812982, 24, 'Sales Executive'),
    createData('Jane Doe', 'janedoe@infelearn.com', 1324171354, 328, 'Manager'),
    createData('Michtelle Ray', 'm.ray@yahoo.com', 1230812982, 24, 'Sales Executive'),
  ];
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: '82vh',
    },
    headRow:{
        backgroundColor:'green',
    }
  });
  
  function EmployeesData() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className={classes.headRow}>
              <TableRow >
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }

export default EmployeesData
