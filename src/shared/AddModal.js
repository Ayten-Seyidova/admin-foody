import * as React from 'react';
import { ModalDiv } from "./AddModal.styled";
import { CategoryModal } from './CategoryModal';


export const AddModal = (props) => {

    return (
        <ModalDiv>
            <CategoryModal name={props.name} pagename = {props.pagename}/>
        </ModalDiv>
    );
}
