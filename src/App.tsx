import { AmountInput } from '@alfalab/core-components/amount-input/cssm';
import { Button } from '@alfalab/core-components/button/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { InputMobile } from '@alfalab/core-components/input/cssm/mobile';
import { PhoneInput } from '@alfalab/core-components/phone-input/cssm';
import { PureCell } from '@alfalab/core-components/pure-cell/cssm';
import { Radio } from '@alfalab/core-components/radio/cssm';
import { SelectMobile } from '@alfalab/core-components/select/cssm/mobile';
import { Steps } from '@alfalab/core-components/steps/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { GiftBoxMIcon } from '@alfalab/icons-glyph/GiftBoxMIcon';
import { useEffect, useState } from 'react';
import bannerImg from './assets/banner.png';
import g1Img from './assets/g1.png';
import g2Img from './assets/g2.png';
import g3Img from './assets/g3.png';
import g4Img from './assets/g4.png';
import hbImg from './assets/hb.png';
import { useStocksData } from './hooks/useStocksData';
import { LS, LSKeys } from './ls';
import { Shape } from './Shape';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';
import { getRatingColor } from './utils/round';
import { formatWord, getWordEnding } from './utils/words';

const steps = [
  {
    title: 'Выберите сумму',
    subtitle: 'От 500 ₽ — любая сумма',
  },
  {
    title: 'Выберите актив',
    subtitle: 'Яндекс, Сбер, Газпром и другие',
  },
  {
    title: 'Укажите получателя',
    subtitle: 'Просто по номеру телефона',
  },
  {
    title: 'Подарок отправлен',
    subtitle: 'СМС + зачисление на брокерский счёт',
  },
];

const gifts = [
  {
    title: 'Может вырасти в цене',
    subtitle: 'Не просто деньги',
    img: g1Img,
  },
  {
    title: 'Необычный подарок',
    subtitle: 'Запомнится надолго',
    img: g2Img,
  },
  {
    title: 'Любая сумма',
    subtitle: 'Начните с малого',
    img: g3Img,
  },
  {
    title: 'Моментально',
    subtitle: 'В тот же день',
    img: g4Img,
  },
];

export const App = () => {
  const [view, setView] = useState<'init' | 'select'>('init');
  const [data, setData] = useState<{ phone: string; ticker: string; lots: number; message: string; error: string }>({
    phone: '',
    ticker: '',
    lots: 1,
    message: '',
    error: '',
  });
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const { stocks } = useStocksData();

  const selectedStock = stocks.find(item => item.ticker === data.ticker);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    if (!data.phone || !data.ticker || !data.lots || !data.message) {
      setData({ ...data, error: 'Заполните все поля' });
      return;
    }
    setData({ ...data, error: '' });

    // LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  if (view === 'select') {
    return (
      <>
        <div className={appSt.container}>
          <Gap size={12} />
          <div>
            <Typography.TitleMobile tag="h2" view="xsmall" weight="semibold" style={{ marginBottom: '6px' }}>
              Получатель
            </Typography.TitleMobile>

            <PhoneInput
              block
              placeholder="Введите номер получателя"
              value={data.phone}
              onChange={(_, { value }) => setData({ ...data, phone: value })}
              size={48}
            />
          </div>

          <div style={{ marginTop: '12px' }}>
            <Typography.TitleMobile tag="h2" view="xsmall" weight="semibold" style={{ marginBottom: '6px' }}>
              Актив
            </Typography.TitleMobile>

            <SelectMobile
              block
              placeholder="Выберите актив"
              onChange={p => setData({ ...data, ticker: p.selected?.key ?? '' })}
              options={stocks.map(stock => ({
                key: stock.ticker,
                content: (
                  <div className={appSt.row}>
                    <img src={stock.icon} width={24} height={24} alt={stock.name} /> {stock.name}
                  </div>
                ),
              }))}
              Option={props => {
                const stock = stocks.find(item => item.ticker === props.option.key)!;
                return (
                  <div className={props.className} {...props.innerProps}>
                    <PureCell>
                      <PureCell.Graphics verticalAlign="center">
                        <img src={stock.icon} width={48} height={48} alt={stock.name} />
                      </PureCell.Graphics>
                      <PureCell.Content>
                        <PureCell.Main>
                          <Typography.Text view="primary-medium">{stock.name}</Typography.Text>
                          <Typography.Text view="primary-small" color="secondary">
                            {stock.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}
                          </Typography.Text>
                        </PureCell.Main>
                      </PureCell.Content>
                      <PureCell.Graphics verticalAlign="center">
                        <div className={appSt.shapeContainer}>
                          <Shape color={getRatingColor(stock.rating)} className={appSt.shapeBg} />
                          <Typography.Text view="primary-small" color="primary-inverted" className={appSt.shapeText}>
                            {stock.rating}
                          </Typography.Text>
                        </div>
                      </PureCell.Graphics>
                      <PureCell.Graphics verticalAlign="center">
                        <Radio block={true} size={24} checked={props.selected} />
                      </PureCell.Graphics>
                    </PureCell>
                  </div>
                );
              }}
              size={48}
            />
          </div>
          <div style={{ marginTop: '12px' }}>
            <Typography.TitleMobile tag="h2" view="xsmall" weight="semibold">
              Количество лотов
            </Typography.TitleMobile>
            {selectedStock && (
              <Typography.Text view="component-secondary" color="secondary" style={{ marginBottom: '6px' }}>
                1 лот = {formatWord(selectedStock.lots, ['акция', 'акции', 'акций'])}
              </Typography.Text>
            )}

            <AmountInput
              value={data.lots}
              minority={1}
              suffix={getWordEnding(data.lots, ['лот', 'лота', 'лотов'])}
              block
              size={48}
              onChange={(_, { value }) => setData({ ...data, lots: value ?? 0 })}
              stepper={{ step: 1, min: 1, max: 100 }}
            />
          </div>
          <div style={{ marginTop: '12px' }}>
            <Typography.TitleMobile tag="h2" view="xsmall" weight="semibold" style={{ marginBottom: '6px' }}>
              Сообщение получателю (*)
            </Typography.TitleMobile>

            <InputMobile
              value={data.message}
              placeholder="Введите сообщение"
              block
              size={48}
              onChange={(_, { value }) => setData({ ...data, message: value })}
              maxLength={128}
            />
          </div>
        </div>
        <div className={appSt.bottomBtn}>
          <Button
            block
            view="primary"
            onClick={submit}
            hint={
              <Typography.Text view="component-secondary" color="accent">
                {data.error}
              </Typography.Text>
            }
          >
            Отправить подарок
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={appSt.heroBanner}>
        <div className={appSt.tag}>
          <GiftBoxMIcon />
          <Typography.Text view="primary-small" weight="bold">
            Подарок, который работает
          </Typography.Text>
        </div>
        <Typography.TitleMobile
          style={{ marginTop: '1rem', zIndex: 1, position: 'relative' }}
          tag="h1"
          view="large"
          weight="medium"
        >
          Подари акции
        </Typography.TitleMobile>
        <Typography.Text view="primary-small" style={{ marginBottom: '1.5rem', zIndex: 1, position: 'relative' }}>
          Реальные ценные бумаги
          <br />
          близкому человеку
        </Typography.Text>

        <img className={appSt.img} src={hbImg} alt="hb" width={200} height={200} />
      </div>
      <div className={appSt.container}>
        <Typography.TitleMobile style={{ marginTop: '1rem' }} tag="h2" view="small" weight="semibold">
          Как это работает
        </Typography.TitleMobile>

        <Steps isVerticalAlign={true} interactive={false} className={appSt.stepStyle}>
          {steps.map(item => (
            <span key={item.title}>
              <Typography.Text tag="p" defaultMargins={false} view="component-primary">
                {item.title}
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                {item.subtitle}
              </Typography.Text>
            </span>
          ))}
        </Steps>

        <Typography.TitleMobile style={{ marginTop: '1rem' }} tag="h2" view="small" weight="semibold">
          Почему это хороший подарок
        </Typography.TitleMobile>

        {gifts.map(item => (
          <PureCell key={item.title} style={{ marginTop: '12px' }}>
            <PureCell.Graphics verticalAlign="center">
              <img src={item.img} width={48} height={48} alt="smile" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.TitleMobile view="xsmall" tag="h3" weight="medium">
                  {item.title}
                </Typography.TitleMobile>
                <Typography.Text view="primary-small" color="secondary">
                  {item.title}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        ))}

        <PureCell className={appSt.box} style={{ marginTop: '12px' }}>
          <PureCell.Graphics verticalAlign="top">
            <img src={bannerImg} width={48} height={48} alt="banner" style={{ objectFit: 'contain' }} />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.Text view="primary-medium" weight="bold">
                Нет брокерского счёта?
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Поможем открыть — прямо в процессе получения подарка
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <Button block view="primary" onClick={() => setView('select')}>
          Подарить акции
        </Button>
      </div>
    </>
  );
};
