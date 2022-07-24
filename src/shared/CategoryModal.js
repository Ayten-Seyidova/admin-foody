import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { AddData, BtnDiv, CancelBtn, CreateBtn, DataDiv, DataInput, DataLabel, ImageDiv, ImageIconSection, ImageInput, ImageSpan, ImageTitle, ImageUpload } from "./AddModal.styled";
import UploadIcon from '../Image/icon/upload.svg';
import { categoryCreateAPI } from '../api/category';

export const CategoryModal = (props) => {
    const { t } = useTranslation();

    const [category, setCategory] = React.useState(null);

    const addCategory = (item) => {
        categoryCreateAPI(item)
            .then((res) => {

                let newArray = [...category, item];

                setCategory(newArray);
            })
            .catch(() => { });
    };

    return (
        <form>
            <ImageDiv>
                <ImageTitle>{t('form.upload-img')}</ImageTitle>
                <ImageUpload>
                    <ImageInput type="file" />
                    <ImageIconSection>
                        <img src={UploadIcon} alt="upload" />
                        <ImageSpan>{t('form.upload')}</ImageSpan>
                    </ImageIconSection>
                </ImageUpload>
            </ImageDiv>
            <DataDiv>
                <ImageTitle>{t('form.form title')}</ImageTitle>
                <AddData>
                    <DataLabel>{t('form.name')}</DataLabel>
                    <DataInput placeholder='Soup' />
                    <DataLabel>{t('form.slug')}</DataLabel>
                    <DataInput placeholder='yummy-soup' />
                </AddData>
            </DataDiv>

            <BtnDiv>
                <CancelBtn onClick={() => props.closeFunc()}>{t('cancel').charAt(0).toUpperCase() + t('cancel').slice(1)}</CancelBtn>
                <CreateBtn onClick={() => addCategory()
                }>{t('form.' + props.createname)}</CreateBtn>
            </BtnDiv>
        </form>
    );
}
