import {ArticleBlock} from "../common/ArticleBlock.tsx";
import groupsPhoto from '../../assets/images/groups.jpg'

export function GroupsBlock() {
    return (
        <ArticleBlock
            title={'Группы поддержки'}
            text={`Группы поддержки — это пространство доверия и взаимопонимания.
                Это безопасная среда, где не нужно притворяться сильным. Здесь мы разделяем тяжелые мысли, отпускаем бессилие и бережно помогаем друг другу найти точку опоры и вернуть надежду. 
                Встречи проходят бесплатно. Выберите комфортный для вас формат: в доверительной обстановке в Челябинске и Миассе или онлайн, не выходя из дома.`}
            photo={groupsPhoto}
            isReversed={false}
            height={650}
            buttonText={'Присоединиться к группе поддержки'}
            headerForForm={'Запись в группы поддержки'}
            formType={'supportGroup'}
        />
    );
}