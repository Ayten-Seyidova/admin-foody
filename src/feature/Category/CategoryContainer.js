import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
<<<<<<< CATEGORY-PAGE
import { CategoryDiv, CategorySpan, CategoryStyled, TablePaginationStyle } from './CategoryContainer.styled';
import { useTranslation } from 'react-i18next';
import { AddProductBtn } from '../../shared/components/Header/AddProductBtn';
import { Image } from 'react-bootstrap';
=======
import { CategoryDiv, CategorySpan, CategoryStyled, DeleteImage, LoadingImage, TablePaginationStyle } from './CategoryContainer.styled';
import { useTranslation } from 'react-i18next';
import { AddProductBtn } from '../../shared/components/Header/AddProductBtn';
import { Image } from 'react-bootstrap';
import { categoryAPI, categoryDeleteAPI } from '../../api/category';
import DeleteIcon from '../../Image/icon/delete.svg';
import LoadGif from '../../Image/icon/loading.gif'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
>>>>>>> local

const columns = [

    { id: 'id', label: 'id', minWidth: 100, align: 'center', },
    { id: 'image', label: 'image', minWidth: 100, align: 'center' },
    { id: 'name', label: 'name', minWidth: 170, align: 'center' },
    { id: 'slug', label: 'slug', minWidth: 170, align: 'center' },
];

export default function CategoryContainer() {
    const { t } = useTranslation();

<<<<<<< CATEGORY-PAGE
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
=======
    const [category, setCategory] = React.useState(null);

    React.useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () => {
        categoryAPI
            .then((res) => {
                setCategory(res.data.category);
            })
            .catch((err) => { });
    };

    const deleteCateory = (id) => {
        Swal.fire({
            title: t('title delete'),
            text: t('subtitle category delete'),
            showCancelButton: true,
            cancelButtonColor: 'transparent',
            cancelButtonText: t('cancel'),
            confirmButtonColor: '#D63626',
            confirmButtonText: t('delete'),
        }).then((result) => {
            if (result.isConfirmed) {
                categoryDeleteAPI(id)
                    .then((res) => {
                        let newArray = [...category].filter((categoryItem) => categoryItem.id !== id);
                        setCategory(newArray);
                    })
                    .catch(() => { });
                toast.success(t("deleted"), {
                    autoClose: 1000,
                    pauseOnHover: true,
                });
            }
        })

    };
>>>>>>> local

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
        return <LoadingImage src={LoadGif} />;
    }

    return (
        <CategoryStyled>
            <CategoryDiv>
                <CategorySpan>{t('menu.category')}</CategorySpan>
                <AddProductBtn name={t('add category')} pagename='category' placement='end' />
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
<<<<<<< CATEGORY-PAGE
=======
                                <TableCell align={"right"}
                                    cellwidth={"20"}></TableCell>
>>>>>>> local
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {category
                                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={`table-${row.id}`}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.id === 'image'
                                                            ? <Image width="60" className='rounded' src={value} />
                                                            : value.length > 30 ? `${value.slice(0, 30)}...` : value}
                                                    </TableCell>
                                                );
                                            })}
<<<<<<< CATEGORY-PAGE
=======

                                            <TableCell key={row.id} align={"right"} >
                                                <DeleteImage onClick={() => deleteCateory(row.id)} src={DeleteIcon} />
                                            </TableCell>
>>>>>>> local
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

