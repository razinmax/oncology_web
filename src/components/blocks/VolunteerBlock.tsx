import {ArticleBlock} from "../common/ArticleBlock.tsx";
import volunteerPhoto from '../../assets/images/volunteer.jpg'

export function VolunteerBlock() {
    return (
        <ArticleBlock
            title={'Волонтёрство'}
            text={'Если вы хотите сделать важное дело и поддержать тех, кто сталкивается с онкодиагнозом, присоединяйтесь к нашей команде волонтёров. Вместе мы создаём пространство заботы и силы. Ждём в команду волонтёров специалистов в области продвижения НКО, копирайтинга, smm-менеджмента, фандрайзинга и других сферах. Сотрудничаем со студентами и образовательными учреждениями.'}
            photo={volunteerPhoto}
            isReversed={true}
            imgWidth={100}
            buttonText={'Стать волонтёром'}
            headerForForm={'Запись на волонтёрство'}
            height={560}
            />
    );
}