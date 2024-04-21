import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const DotsVerticalCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-dots-vertical-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M10.5 12a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5m0 4.5A1.5 1.5 0 0 1 12 15a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 18a1.5 1.5 0 0 1-1.5-1.5m0-9A1.5 1.5 0 0 1 12 6a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 9a1.5 1.5 0 0 1-1.5-1.5M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default DotsVerticalCircleOutlined;