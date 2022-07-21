import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CategoryDiv, CategorySpan, CategoryStyled, TablePaginationStyle } from './CategoryContainer.styled';
import { useTranslation } from 'react-i18next';
import { AddProductBtn } from '../../shared/components/Header/AddProductBtn';
import { Image } from 'react-bootstrap';

const columns = [

    { id: 'id', label: 'id', minWidth: 100, align: 'center', },
    { id: 'image', label: 'image', minWidth: 100, align: 'center' },
    { id: 'name', label: 'name', minWidth: 170, align: 'center' },
    { id: 'slug', label: 'slug', minWidth: 170, align: 'center' },
];

function createData(id, image, name, slug) {
    return { id, image, name, slug };
}

const rows = [
    createData('001', 'IN', 1324171354, 3287263),
    createData('002', 'CN', 1403500365, 9596961),
    createData('003', 'IT', 60483973, 301340),
    createData('004', 'US', 327167434, 9833520),
    createData('005', 'CA', 37602103, 9984670),
    createData('006', 'AU', 25475400, 7692024),
    createData('007', 'DE', 83019200, 357578),
    createData('008', 'IE', 4857000, 70273),
    createData('009', 'MX', 126577691, 1972550),
    createData('010', 'JP', 126317000, 377973),
    createData('011', 'FR', 67022000, 640679),
    createData('012', 'GB', 67545757, 242495),
    createData('013', 'RU', 146793744, 17098246),
    createData('014', 'NG', 200962417, 923768),
    createData('015', 'BR', 210147125, 8515767),
    createData('016', 'IN', 1324171354, 3287263),
    createData('017', 'CN', 1403500365, 9596961),
    createData('018', 'IT', 60483973, 301340),
    createData('019', 'US', 327167434, 9833520),
    createData('020', 'CA', 37602103, 9984670),
    createData('021', 'AU', 25475400, 7692024),
    createData('022', 'DE', 83019200, 357578),
    createData('023', 'IE', 4857000, 70273),
    createData('024', 'MX', 126577691, 1972550),
    createData('025', 'JP', 126317000, 377973),
    createData('026', 'FR', 67022000, 640679),
    createData('027', 'GB', 67545757, 242495),
    createData('028', 'RU', 146793744, 17098246),
    createData('029', 'NG', 200962417, 923768),
    createData('030', 'BR', 210147125, 8515767),
    
];

export default function CategoryContainer() {
    const { t } = useTranslation();
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
        <CategoryStyled>
            <CategoryDiv>
                <CategorySpan>{t('menu.category')}</CategorySpan>
                <AddProductBtn name={t('add category')} placement='end' />
            </CategoryDiv>

            <Paper sx={{ width: '100%', boxShadow: "none" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns?.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        cellwidth={column.minWidth}>
                                        {t(`form.`+column.label).toUpperCase()}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {rows
                                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={`table-${row.id}`}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.id === 'image'
                                                            ? <Image height="45" src={value} />
                                                            : value.length > 30 ? `${value.slice(0, 30)}...` : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePaginationStyle
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </CategoryStyled>
    );
}

