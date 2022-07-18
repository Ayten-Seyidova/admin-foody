import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useTranslation } from 'react-i18next';
import plusIcon from '../../../Image/icon/plus.svg';
import { AddModal } from "../../AddModal";


export function AddProductBtn({ name, ...props }) {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="add-btn">
                <img src={plusIcon} alt="plus"/> <span className="mobile-add-btn">{(t('add product')).toUpperCase()}</span>
            </Button>
            <Offcanvas className="right-sidebar" show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{t('add product').charAt(0).toUpperCase() + t('add product').slice(1)}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <AddModal/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

