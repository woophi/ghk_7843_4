import { Button } from '@alfalab/core-components/button/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { appSt } from '../style.css';
import { thxSt } from './style.css';

const link =
  'alfabank://investments/market_asset_card?title=%D0%9D%D0%9E%D0%92%D0%90%D0%A2%D0%AD%D0%9A&id=RU000A0DKVS5&subtitle=NVTK&url=v1%2Fscreen-details-prefiller%2Fproducts%2Fbrokerage%2FSTOCK%2FRU000A0DKVS5&type=STOCK';

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
