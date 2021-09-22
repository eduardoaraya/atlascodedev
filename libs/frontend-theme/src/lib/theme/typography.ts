import { ThemeOptions } from '@mui/material';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

const titleStyle = (size: string): TypographyStyleOptions => ({
  fontSize: size,
  fontFamily: 'Nunito Sans, sans-serif',
  fontStyle: 'normal',
  fontWeight: 900,
  color: '#323232',
});

const typography: ThemeOptions['typography'] = {
  fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
  htmlFontSize: 10,
  h1: titleStyle('33px'),
  h2: titleStyle('26px'),
  h3: titleStyle('22px'),
  h4: titleStyle('18px'),
  h5: titleStyle('16px'),
  h6: titleStyle('12px'),
  body1: {
    color: '#757575',
    fontSize: '1.2em',
  },
};
export default typography;
