import styled from "styled-components";
import TablePagination from "@mui/material/TablePagination";

export const ProductStyled = styled.div`
  margin-bottom: 50px;
  padding-left: 30px;
`;
export const ProductDiv = styled.div`
  background-color: rgba(39, 40, 60, 1);
  border-radius: 14px;
  padding: 18px 21px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

export const ProductSpan = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: rgba(242, 242, 242, 0.87);
`;

export const DeleteImage = styled.img`
  cursor: pointer;
`;

export const TablePaginationStyle = styled(TablePagination)`
  background-color: #1e1e30;
  color: #fff !important;
`;

export const LoadingImage = styled.img`
  width: 50px;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
`;

export const ProductImage = styled.img`
  height: 158px;
`;

export const ProductImageContainer = styled.div`
  justify-content: "center";
  align-items: "center";
  display: "flex";
  object-fit: "cover";
  background-color: red;
`;
