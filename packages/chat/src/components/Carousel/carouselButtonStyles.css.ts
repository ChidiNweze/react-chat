import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { COLORS } from '@/styles/colors';
import { transition } from '@/styles/transitions';

import { buttonStyles } from '../Button/styles.css';
import { CARD_WIDTH } from '../Card/styles.css';
import { BUTTON_SIZE, carouselContainer } from './styles.css';

const xOrigin = 'translateX(0)';
const fadeInFromLeft = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-10px)',
  },
  to: {
    opacity: 1,
    transform: xOrigin,
  },
});

const fadeOutToLeft = keyframes({
  from: {
    opacity: 1,
    transform: xOrigin,
  },
  to: {
    opacity: 0,
    transform: 'translateX(-10px)',
  },
});

const fadeInFromRight = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(10px)',
  },
  to: {
    opacity: 1,
    transform: xOrigin,
  },
});

const fadeOutToRight = keyframes({
  from: {
    opacity: 1,
    transform: xOrigin,
  },
  to: {
    opacity: 0,
    transform: 'translateX(10px)',
  },
});

export const carouselButton = recipe({
  base: [
    buttonStyles({ round: true }),
    {
      height: BUTTON_SIZE,
      width: BUTTON_SIZE,
      color: COLORS.NEUTRAL_DARK[100],
      border: `solid 1px ${COLORS.NEUTRAL_LIGHT[100]}`,
      backgroundColor: COLORS.white,
      boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.02), 0px 8px 42px -16px rgba(0, 0, 0, 0.06)',
      transition: transition(['opacity', 'color', 'transform']),
      ':hover': {
        color: COLORS.NEUTRAL_DARK[600],
        transform: 'scale(1.15)',
      },
      ':active': {
        color: COLORS.NEUTRAL_DARK[800],
        transform: 'scale(0.8)',
      },

      // When the buttons are inside a carousel
      [`.${carouselContainer} &`]: {
        position: 'absolute',
        top: '64px',
      },
    },
  ],

  variants: {
    visible: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
      false: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },

    direction: {
      right: {
        [`.${carouselContainer} &`]: {
          left: `${CARD_WIDTH - BUTTON_SIZE / 2}px`,
        },
      },
      left: {
        [`.${carouselContainer} &`]: {
          left: `-${BUTTON_SIZE / 2}px`,
        },
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        visible: true,
        direction: 'left',
      },
      style: {
        opacity: 1,
        animation: `${fadeInFromLeft} .15s ease-in`,
      },
    },
    {
      variants: {
        visible: false,
        direction: 'left',
      },
      style: {
        opacity: 0,
        animation: `${fadeOutToLeft} .15s ease-in`,
      },
    },

    {
      variants: {
        visible: true,
        direction: 'right',
      },
      style: {
        opacity: 1,
        animation: `${fadeInFromRight} .15s ease-in`,
      },
    },
    {
      variants: {
        visible: false,
        direction: 'right',
      },
      style: {
        opacity: 0,
        animation: `${fadeOutToRight} .15s ease-in`,
      },
    },
  ],
});

export const rotate180 = style({
  transform: 'rotate(180deg)',
});
