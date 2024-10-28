import clsx from 'clsx';
import { type ComponentPropsWithRef, forwardRef, type PropsWithChildren } from 'react';

import { ClassName } from '@/constants';

import { ButtonVariant } from './constants';
import { buttonStyles } from './styles.css';

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: ButtonVariant;
  large?: boolean;
  round?: boolean;
  testID?: string;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(({ children, ...props }, ref) => {
  const { variant: type, large, round } = props;

  return (
    <button
      ref={ref}
      className={clsx(
        ClassName.BUTTON,
        buttonStyles({ type: type ?? ButtonVariant.PRIMARY, large, round }),
        props.className
      )}
      {...props}
    >
      {children}
    </button>
  );
});
