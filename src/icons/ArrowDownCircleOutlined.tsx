import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const ArrowDownCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-arrow-down-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M11 6h2v8l3.5-3.5l1.42 1.42L12 17.84l-5.92-5.92L7.5 10.5L11 14V6m1 16A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10m0-2a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default ArrowDownCircleOutlined;