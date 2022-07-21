import styled from "styled-components";
import TablePagination from '@mui/material/TablePagination';

export const CategoryStyled = styled.div`
   margin-bottom: 50px;
   padding-left: 30px;
`
export const CategoryDiv = styled.div`
   background-color: rgba(39, 40, 60, 1);
   border-radius: 14px;
   padding: 18px 21px;
   margin-bottom: 40px;
   display: flex; 
   justify-content: space-between;
`

export const CategorySpan = styled.span`
    font-weight: 500;
    font-size: 20px;
    color: rgba(242, 242, 242, 0.87);
`

export const TablePaginationStyle = styled(TablePagination)`
  /* display: flex; */
  /* justify-content: space-between; */
  background-color: #1E1E30;
  color: #fff !important;
  /* box-shadow: none !important; */
  /* flex-direction: row-reverse; */
`