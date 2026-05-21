import { style } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1rem',
  textAlign: 'center',
});

const rocket = style({
  marginTop: '9rem',
});

const icon = style({
  marginTop: '9rem',
  width: '88px',
  height: '88px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '44px',
  lineHeight: 1,
  marginBottom: '24px',
  background: '#FEF0EF',
});

export const thxSt = {
  container,
  rocket,
  icon,
};
