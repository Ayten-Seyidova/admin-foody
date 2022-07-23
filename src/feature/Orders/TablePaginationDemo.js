import * as React from "react";
import TablePagination from "@mui/material/TablePagination";

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(10);
  };

  return (
    <TablePagination
      component="div"
      count={16}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[1, 2, 3]}
      onRowsPerPageChange={handleChangeRowsPerPage}
      style={{
        backgroundColor: "white",
        marginTop: "20px",
        maxWidth: "1108px",
        justifyContent: "space-between",
        borderRadius: "5px",
      }}
    />
  );
}
