import * as React from "react";
import './Products.css'
import TableContainer from "@mui/material/TableContainer";
import {
  ProductDiv,
  ProductSpan,
  ProductStyled,
  LoadingImage,
  TablePaginationStyle,
  ProductImage,
  ProductImageContainer,
  DeleteImage,
  ProductPriceDelete,
  Price,
} from "./ProductContainer.styled";
import { useTranslation } from "react-i18next";
import { AddProductBtn } from "../../shared/components/Header/AddProductBtn";
import LoadGif from "../../Image/icon/loading.gif";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import DeleteIcon from "../../Image/icon/delete.svg";
import { CardContent, Grid, Pagination, Typography } from "@mui/material";
import { productsAPI, productsDeleteAPI } from "../../api/products";
import { Stack } from "react-bootstrap";

export default function ProductContainer() {
  const { t } = useTranslation();

  const [products, setProducts] = React.useState(null);

  React.useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    productsAPI
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {});
  };

  const deleteProduct = (id) => {
    Swal.fire({
      title: t("title delete"),
      text: t("subtitle product delete"),
      showCancelButton: true,
      cancelButtonColor: "transparent",
      cancelButtonText: t("cancel"),
      confirmButtonColor: "#D63626",
      confirmButtonText: t("delete"),
    }).then((result) => {
      if (result.isConfirmed) {
        productsDeleteAPI(id)
          .then((res) => {
            let newArray = [...products].filter((item) => item.id !== id);
            setProducts(newArray);
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

  if (!products) {
    return <LoadingImage src={LoadGif} alt="loading" />;
  }

  return (
    <ProductStyled>
      <ProductDiv>
        <ProductSpan>{t("menu.products")}</ProductSpan>
        <AddProductBtn
          name={t("add product")}
          pagename="products"
          placement="end"
        />
      </ProductDiv>

      <TableContainer
        sx={{
          width: "100%",
          height: "500px",
          background: "inherit",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {products.map((item) => {
          return (
            <Grid
              key={item.id}
              sx={{
                width: 196,
                height: 273,
                background: "#FFFFFF",
                boxShadow: "0px 4px 4px rgba(57, 57, 57, 0.25)",
                borderRadius: "5px",
                marginRight: 3,
                marginBottom: 3,
              }}
            >
              <ProductImageContainer>
                <ProductImage src={item.image} alt={item.product_name} />
              </ProductImageContainer>
              <CardContent sx={{ display: "grid" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="span"
                  sx={{ color: "#1E1E30", fontSize: 18 }}
                >
                  {item.product_name}
                </Typography>
                <Typography
                  variant="body2"
                  color="#8E8E93"
                  sx={{ fontSize: 14 }}
                  component="span"
                >
                  {item.restaurant_name}
                </Typography>
                <Typography
                  variant="body2"
                  color="#00B2A9"
                  sx={{
                    fontSize: 12,
                    fontWeight: 500,
                    display: "grid",
                  }}
                  component="span"
                >
                  <ProductPriceDelete sx={{ backgroundColor: "red" }}>
                    <Price>${item.product_price}</Price>
                    <DeleteImage
                      size="small"
                      onClick={() => deleteProduct(item.id)}
                      src={DeleteIcon}
                      alt="delete"
                    />
                  </ProductPriceDelete>
                </Typography>
              </CardContent>
            </Grid>
          );
        })}
      </TableContainer>
      {/* <TablePaginationStyle
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={products?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      <Stack spacing={5}>
        <Pagination count={page || 1} color="primary" />
      </Stack>
      <ToastContainer />
    </ProductStyled>
  );
}
