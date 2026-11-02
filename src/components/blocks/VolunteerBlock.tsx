import {ArticleBlock} from "../common/ArticleBlock.tsx";
import volunteerPhoto from '../../assets/images/volunteer.jpg'

export function VolunteerBlock() {
    return (
        <ArticleBlock
            title={'Волонтёрство'}
            text={`Если вы хотите сделать важное дело и поддержать тех, кто сталкивается с онкодиагнозом, присоединяйтесь к нашей команде волонтёров. Вместе мы создаём пространство заботы и силы. Если вам важно видеть осязаемую, живую ценность своего труда и применять талант там, где он действительно необходим — давайте объединим усилия.`}
            photo={volunteerPhoto}
            isReversed={true}
            imgWidth={100}
            buttonText={'Стать волонтёром'}
            headerForForm={'Запись на волонтёрство'}
            height={500}
            formType={'volunteer'}
            />
    );
}