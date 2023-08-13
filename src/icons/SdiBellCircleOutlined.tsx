import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiBellCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-bell-circle', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M17 16H7v-1l1-1v-2.61c0-1.09.27-2.05.79-2.86C9.3 7.72 10.04 7.21 11 7v-.5a1 1 0 0 1 1-1a1 1 0 0 1 1 1V7c.96.21 1.7.72 2.21 1.53c.52.81.79 1.77.79 2.86V14l1 1v1m-3.5 1a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5h3M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiBellCircleOutlined;