import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        size,
        disabled,
        ...otherProps
    } = props;
    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    };
    return (
        <button
            disabled={disabled}
            type="button"
            className={classNames(cls.button, mods, [
                className,
                cls[theme],
                cls[size],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
