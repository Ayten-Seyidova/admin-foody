import Image404 from '../../Image/components/404.png';
import { Img404, Btn404 } from "./Page404.styled.js";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/dashboard');
    }

    return (
        <div className='container d-flex justify-content-center'>
            <Btn404 onClick={() => goBack()}>{t('back')}</Btn404>
            <Img404 src={Image404} alt="404" />
        </div>
    )
}

export default Page404;