import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const UpSquareOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-up-square', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14m-2.41-3.29L12 11.12l-4.59 4.59L6 14.29l6-6l6 6l-1.41 1.42Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default UpSquareOutlined;