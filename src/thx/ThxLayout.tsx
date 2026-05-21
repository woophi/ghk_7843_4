import { Button } from '@alfalab/core-components/button/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { appSt } from '../style.css';
import { thxSt } from './style.css';

const link = 'alfabank://';

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <div className={thxSt.icon}>⚠️</div>
        <Typography.TitleResponsive style={{ marginBottom: '12px' }} tag="h1" view="medium" weight="bold">
          Функция пока недоступна
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Деньги не списывались — это была проверка интереса к сервису.
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" color="secondary" defaultMargins={false}>
          Мы видим, что функция нужна, и работаем над ней. Уведомим вас, когда подарок акциями можно будет отправить
          по-настоящему.
        </Typography.Text>
      </div>
      <div className={appSt.bottomBtn}>
        <Button block view="secondary" href={link}>
          Хорошо
        </Button>
      </div>
    </>
  );
};
