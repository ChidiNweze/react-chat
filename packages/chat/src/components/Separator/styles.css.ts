import { style } from '@vanilla-extract/css';

import { COLORS } from '@/styles/colors';
import { FAMILY } from '@/styles/font';

export const separatorContainer = style({
  height: 17,
  display: 'flex',
  gap: 12,
  alignItems: 'center',
});

export const line = style({
  backgroundColor: COLORS.NEUTRAL_LIGHT[50],
  height: 1,
  flexGrow: 1,
});

export const separatorText = style({
  backgroundColor: COLORS.white,
  color: COLORS.NEUTRAL_DARK[200],
  fontFamily: FAMILY,
  fontSize: '12px',
  lineHeight: '17px',
  flexShrink: 0,
});
