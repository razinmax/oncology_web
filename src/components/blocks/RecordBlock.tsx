import {ArticleBlock} from "../common/ArticleBlock.tsx";
import counselingPhoto from '../../assets/images/counseling.jpg';

export function RecordBlock() {

    return (
        <ArticleBlock
            title={'Консультация'}
            text={'Запишитесь на консультацию к психологу. Мы оказываем психологические поддержку в кабинетах доверия в Челябинске и Миассе, работаем онлайн для тех, у кого нет возможности прийти лично, а также по запросу выходим в стационар. Мы готовы выслушать и поддержать вас в любой ситуации.'}
            photo={counselingPhoto}
            isReversed={false}
            buttonText={'Записаться на консультацию'}
            headerForForm={'Запись на консультацию'}
            height={555}
        />
    );
}