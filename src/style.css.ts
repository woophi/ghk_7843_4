import { globalStyle, style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  position: 'relative',
  zIndex: 1,
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
  backgroundColor: '#fff',
  marginTop: '-1rem',
});

const heroBanner = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  background: 'linear-gradient(170.48deg, #392DEB -2.42%, #8B65EC 14.61%, #A99CEC 31.65%)',
  color: '#ffffff',
  position: 'relative',
});

const tag = style({
  backgroundColor: '#FFFFFF33',
  borderRadius: '16px',
  border: '1px solid #FFFFFF',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '0 8px',
  width: 'fit-content',
  marginTop: '1rem',
  zIndex: 1,
  position: 'relative',
});

const img = style({
  position: 'absolute',
  right: 0,
  top: '29px',
  zIndex: 0,
});

const stepStyle = style({});
globalStyle(`${stepStyle} > div > div > div[class^="_option_"]`, {
  backgroundColor: '#030306E0',
  color: 'var(--color-light-text-primary-inverted)',
});

const box = style({
  backgroundColor: '#F6F6FD',
  borderRadius: '16px',
  padding: '12px 12px 1rem',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const shapeContainer = style({
  position: 'relative',
  marginLeft: 'auto',
  width: '41px',
  height: '40px',
});
const shapeBg = style({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
});
const shapeText = style({
  position: 'absolute',
  zIndex: 2,
  top: '54%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const appSt = {
  bottomBtn,
  container,
  heroBanner,
  tag,
  img,
  stepStyle,
  box,
  row,
  shapeContainer,
  shapeBg,
  shapeText,
};
