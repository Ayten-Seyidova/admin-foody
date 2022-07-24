import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  CategoryDiv,
  CategorySpan,
  CategoryStyled,
  DeleteImage,
  LoadingImage,
  TablePaginationStyle,
} from "./CategoryContainer.styled";
import { useTranslation } from "react-i18next";
import { AddProductBtn } from "../../shared/components/Header/AddProductBtn";
import { Image } from "react-bootstrap";
import { categoryAPI, categoryDeleteAPI } from "../../api/category";
import DeleteIcon from "../../Image/icon/delete.svg";
import LoadGif from "../../Image/icon/loading.gif";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

const columns = [
  { id: "id", label: "id", minWidth: 100, align: "center" },
  { id: "image", label: "image", minWidth: 100, align: "center" },
  { id: "name", label: "name", minWidth: 170, align: "center" },
  { id: "slug", label: "slug", minWidth: 170, align: "center" },
];

export default function CategoryContainer() {
  const { t } = useTranslation();

  const [category, setCategory] = React.useState(null);

  React.useEffect(() => {
    getCategory();
  }, []);

  const getCategory = () => {
    categoryAPI
      .then((res) => {
        setCategory(res.data.category);
      })
      .catch((err) => {});
  };

  const deleteCategory = (id) => {
    Swal.fire({
      title: t("title delete"),
      text: t("subtitle category delete"),
      showCancelButton: true,
      cancelButtonColor: "transparent",
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#D63626",
      confirmButtonText: t("delete"),
    }).then((result) => {
      if (result.isConfirmed) {
        categoryDeleteAPI(id)
          .then((res) => {
            let newArray = [...category].filter(
              (categoryItem) => categoryItem.id !== id
            );
            setCategory(newArray);
          })
          .catch(() => {});
        toast.success(t("The operation is succesful!"), {
          autoClose: 1000,
          pauseOnHover: true,
        });
      }
    });
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (!category) {
    return <LoadingImage src={LoadGif} alt="loading" />;
  }

  return (
    <CategoryStyled>
      <CategoryDiv>
        <CategorySpan>{t("menu.category")}</CategorySpan>
        <AddProductBtn
          name={t("add category")}
          pagename="category"
          placement="end"
        />
      </CategoryDiv>

      <Paper sx={{ width: "100%", boxShadow: "none" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns?.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    cellwidth={column.minWidth}
                  >
                    {t(`form.` + column.label).toUpperCase()}
                  </TableCell>
                ))}
                <TableCell align={"right"} cellwidth={"20"}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {category
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={`table-${row.id}`}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "image" ? (
                              <Image
                                width="60"
                                className="rounded"
                                alt={column.id}
                                src={value}
                              />
                            ) : value.length > 30 ? (
                              `${value.slice(0, 30)}...`
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}

                      <TableCell key={row.id} align={"right"}>
                        <DeleteImage
                          onClick={() => deleteCategory(row.id)}
                          src={DeleteIcon}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePaginationStyle
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={category?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <ToastContainer />
    </CategoryStyled>
  );
}
