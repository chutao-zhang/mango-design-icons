import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiLinkSquareFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-link-square', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5.06 11.81L11.73 17c-.65.67-1.51 1-2.37 1c-.86 0-1.72-.33-2.36-1c-1.33-1.29-1.33-3.42 0-4.74l1.35-1.36l-.01.6c-.01.5.07 1 .23 1.44l.05.15l-.4.41a1.597 1.597 0 0 0 0 2.28c.61.62 1.67.62 2.28 0l2.2-2.19c.3-.31.48-.72.48-1.15c0-.44-.18-.83-.48-1.14a.87.87 0 0 1 0-1.24c.33-.33.91-.32 1.24 0c.63.64.98 1.48.98 2.38c0 .9-.35 1.74-.98 2.37M17 11.74l-1.34 1.36v-.6c.01-.5-.07-1-.23-1.44l-.05-.14l.4-.42a1.597 1.597 0 0 0 0-2.28c-.61-.62-1.68-.61-2.28 0l-2.2 2.2c-.3.3-.48.71-.48 1.14c0 .44.18.83.48 1.14c.17.16.26.38.26.62s-.09.46-.26.62a.86.86 0 0 1-.62.25c-.22 0-.45-.08-.62-.25a3.362 3.362 0 0 1 0-4.75L12.27 7A3.311 3.311 0 0 1 17 7c.65.62 1 1.46 1 2.36c0 .9-.35 1.74-1 2.38Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiLinkSquareFilled;