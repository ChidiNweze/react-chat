import React from 'react';

import { ClassName } from '@/constants';
import { tagFactory } from '@/hocs';
import { styled } from '@/old-styles';

import Icon from '../Icon';
import { iconClassName } from '../Icon/styles.css';

export const tag = tagFactory(ClassName.PROACTIVE_CLOSE);

export const CloseContainer = styled(tag('div'), {
  width: 32,
  height: 32,
  borderRadius: '$round',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#656D75',
  cursor: 'pointer',
  background: '$white',
  boxShadow: '$surfaceZ1Light',

  [`& .${iconClassName}`]: {
    width: 10,
    height: 10,
  },

  '&:hover, &:active': {
    color: '#2B3239',
  },
});

const Close: React.FC<React.ComponentProps<typeof CloseContainer>> = ({ ...props }) => (
  <CloseContainer {...props}>
    <Icon svg="closeV2" />
  </CloseContainer>
);

export default Close;
