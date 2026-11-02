import {ArticleBlock} from "../common/ArticleBlock.tsx";
import counselingPhoto from '../../assets/images/counseling.jpg';

export function RecordBlock() {

    return (
        <ArticleBlock
            title={'Консультация'}
            text={`Запишитесь на консультацию. Мы рядом и готовы помочь там, где вам будет удобно.
                В тихой обстановке: ждем вас в наших кабинетах в Челябинске и Миассе.
                Из дома: проведем встречу онлайн, если нет сил никуда ехать.
                В больнице: наш психолог сам приедет к вам в палату.
                Не откладывайте заботу о себе.`}
            photo={counselingPhoto}
            isReversed={false}
            buttonText={'Записаться на консультацию'}
            headerForForm={'Запись на консультацию'}
            height={500}
        />
    );
}