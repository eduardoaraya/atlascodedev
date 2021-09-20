import { useMemoizedMergedObject } from '@atlascode/frontend-hooks';
import { BoxProps, ButtonBase, Theme, Box } from '@mui/material';
import { ResponsiveStyleValue, SxProps } from '@mui/system';
import { SvgIconComponent } from '@mui/icons-material';
import { Property } from 'csstype';
import React from 'react';

/* eslint-disable-next-line */
export interface CircleIconButtonProps extends BoxProps<typeof ButtonBase> {
  fontSize?: ResponsiveStyleValue<Property.FontSize>;
  color?: 'primary' | 'secondary';
  icon?: SvgIconComponent;
}

export function CircleIconButton({
  sx,
  color = 'primary',
  fontSize = '10px',
  icon: Icon,
  ...rest
}: CircleIconButtonProps) {
  const defaultStylesMemo = useMemoizedMergedObject(
    defaultStyles(fontSize, color),
    sx,
    [fontSize, color]
  );

  return (
    <Box {...rest} sx={defaultStylesMemo} component={ButtonBase}>
      <Box component={Icon} className="icon-inner" />
    </Box>
  );
}

export default CircleIconButton;

const defaultStyles = (
  fontSize: ResponsiveStyleValue<Property.FontSize> = '10px',
  color: 'primary' | 'secondary'
) => {
  return {
    fontSize: fontSize,
    width: '4em',
    height: '4em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    padding: '2em',
    bgcolor: (theme) => theme.palette[color].contrastText,
    color: (theme) => `${theme.palette[color].main}`,

    '.icon-inner': {
      fontSize: '2.6em',
    },
  } as SxProps<Theme>;
};
