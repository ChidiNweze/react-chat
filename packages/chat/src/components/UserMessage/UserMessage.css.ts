import { createVar, style } from '@vanilla-extract/css';

import { COLORS } from '@/styles/colors';
import { PALETTE } from '@/styles/colors.css';
import { FAMILY } from '@/styles/font';

export const background = createVar();

export const messageContainer = style({
  backgroundColor: PALETTE.colors[500],
  color: COLORS.ACCENT[50],
  padding: '11px 16px 10px',
  fontFamily: FAMILY,
  position: 'relative',
  fontSize: '14px',
  lineHeight: '20px',
  width: 'fit-content',
  borderRadius: '10px',
});
