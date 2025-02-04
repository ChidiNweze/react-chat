import { recipe } from '@vanilla-extract/recipes';

import { COLORS } from '@/styles/colors';
import { SIZES } from '@/styles/sizes';
import { transition } from '@/styles/transitions';

export const promptContainer = recipe({
  base: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    boxSizing: 'border-box',
    transition: 'transform 320ms cubic-bezier(0.45, 1.29, 0.64, 1), box-shadow 300ms ease',
    transform: 'translateY(100%)',
    padding: '12px 12px 30px 12px',
    borderRadius: SIZES.radius.lg,
    backgroundColor: COLORS.white,
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.06), 0px 0px 32px 0px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    zIndex: 3,
  },

  variants: {
    visible: {
      true: {
        transform: 'translateY(18px)',
      },
      false: {
        boxShadow: 'none',
      },
    },
  },
});

export const chatOverlay = recipe({
  base: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.16)',
    opacity: 0,
    transition: transition(['opacity']),
    pointerEvents: 'none',
  },
  variants: {
    visible: {
      true: {
        display: 'block',
        opacity: 1,
        zIndex: 2,
        pointerEvents: 'auto',
      },
    },
  },
});
