import { Box, BoxProps } from '@mui/material';

/* eslint-disable-next-line */
export interface AWSLogoProps extends BoxProps<'svg'> {}

export function AWSLogo({ component = 'svg', ...rest }: AWSLogoProps) {
  return (
    <Box
      width="256"
      height="153"
      viewBox="0 0 256 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      component={component}
      {...rest}
    >
      <path
        d="M72.3925 55.438C72.3925 58.575 72.7325 61.118 73.3255 62.983C74.0783 65.0812 74.9848 67.121 76.0375 69.086C76.4615 69.764 76.6305 70.442 76.6305 71.036C76.6305 71.883 76.1225 72.731 75.0205 73.579L69.6805 77.139C68.9175 77.648 68.1545 77.902 67.4755 77.902C66.6285 77.902 65.7805 77.478 64.9325 76.715C63.7905 75.4875 62.7688 74.1534 61.8815 72.731C61.0335 71.291 60.1855 69.679 59.2535 67.73C52.6415 75.528 44.3335 79.428 34.3315 79.428C27.2115 79.428 21.5315 77.393 17.3775 73.325C13.2245 69.255 11.1055 63.83 11.1055 57.049C11.1055 49.844 13.6485 43.995 18.8195 39.587C23.9895 35.179 30.8565 32.975 39.5875 32.975C42.4695 32.975 45.4365 33.229 48.5725 33.653C51.7095 34.077 54.9305 34.755 58.3215 35.518V29.33C58.3215 22.887 56.9645 18.395 54.3365 15.767C51.6245 13.139 47.0465 11.867 40.5195 11.867C37.5525 11.867 34.5015 12.207 31.3645 12.97C28.2285 13.732 25.1765 14.665 22.2095 15.852C20.8535 16.445 19.8365 16.784 19.2425 16.954C18.6495 17.124 18.2255 17.208 17.8865 17.208C16.6995 17.208 16.1065 16.36 16.1065 14.58V10.426C16.1065 9.06996 16.2765 8.05296 16.6995 7.45996C17.1235 6.86596 17.8865 6.27296 19.0735 5.67996C22.0405 4.15396 25.6005 2.88196 29.7535 1.86496C33.9085 0.762961 38.3165 0.254961 42.9785 0.254961C53.0665 0.254961 60.4415 2.54296 65.1885 7.12096C69.8505 11.698 72.2245 18.649 72.2245 27.974V55.438H72.3945H72.3925ZM37.9765 68.323C40.7745 68.323 43.6565 67.815 46.7075 66.797C49.7595 65.78 52.4725 63.915 54.7605 61.372C56.1175 59.762 57.1345 57.982 57.6425 55.947C58.1515 53.913 58.4905 51.454 58.4905 48.572V45.012C55.9198 44.3863 53.316 43.9052 50.6915 43.571C48.0487 43.2353 45.3875 43.0653 42.7235 43.062C37.0435 43.062 32.8905 44.164 30.0935 46.453C27.2955 48.742 25.9395 51.963 25.9395 56.201C25.9395 60.185 26.9565 63.152 29.0755 65.187C31.1105 67.306 34.0775 68.323 37.9765 68.323ZM106.045 77.478C104.519 77.478 103.502 77.224 102.824 76.63C102.146 76.122 101.552 74.935 101.044 73.325L81.1245 7.79896C80.6145 6.10296 80.3605 5.00096 80.3605 4.40796C80.3605 3.05196 81.0385 2.28796 82.3955 2.28796H90.7025C92.3125 2.28796 93.4155 2.54296 94.0085 3.13596C94.6865 3.64496 95.1955 4.83196 95.7035 6.44196L109.944 62.559L123.168 6.44196C123.592 4.74696 124.101 3.64496 124.778 3.13596C125.457 2.62796 126.644 2.28896 128.17 2.28896H134.951C136.561 2.28896 137.664 2.54296 138.341 3.13596C139.02 3.64496 139.613 4.83196 139.952 6.44196L153.346 63.237L168.01 6.44196C168.518 4.74696 169.112 3.64496 169.705 3.13596C170.383 2.62796 171.485 2.28896 173.011 2.28896H180.894C182.251 2.28896 183.014 2.96696 183.014 4.40796C183.014 4.83196 182.929 5.25596 182.844 5.76396C182.759 6.27296 182.59 6.95096 182.251 7.88396L161.821 73.409C161.313 75.105 160.72 76.207 160.041 76.715C159.363 77.224 158.261 77.563 156.821 77.563H149.531C147.92 77.563 146.818 77.309 146.139 76.715C145.461 76.122 144.868 75.02 144.529 73.325L131.389 18.649L118.335 73.239C117.912 74.935 117.403 76.037 116.725 76.63C116.047 77.224 114.86 77.478 113.335 77.478H106.044H106.045ZM214.972 79.767C210.564 79.767 206.156 79.258 201.918 78.241C197.679 77.224 194.374 76.121 192.17 74.851C190.813 74.087 189.88 73.24 189.542 72.477C189.212 71.7287 189.039 70.9208 189.033 70.103V65.78C189.033 64 189.711 63.152 190.983 63.152C191.503 63.1539 192.018 63.24 192.509 63.407C193.017 63.577 193.78 63.915 194.628 64.254C197.622 65.5709 200.748 66.5655 203.952 67.221C207.273 67.8948 210.652 68.2355 214.04 68.238C219.38 68.238 223.534 67.306 226.416 65.441C229.298 63.576 230.824 60.864 230.824 57.388C230.824 55.015 230.061 53.065 228.535 51.454C227.009 49.844 224.127 48.403 219.974 47.046L207.682 43.232C201.494 41.282 196.917 38.4 194.119 34.585C191.322 30.855 189.881 26.702 189.881 22.294C189.881 18.734 190.644 15.597 192.17 12.884C193.695 10.172 195.73 7.79896 198.273 5.93396C200.816 3.98396 203.698 2.54296 207.089 1.52596C210.479 0.508961 214.039 0.0849609 217.769 0.0849609C219.634 0.0849609 221.584 0.169961 223.449 0.423961C225.399 0.677961 227.179 1.01696 228.959 1.35596C230.654 1.77996 232.265 2.20396 233.791 2.71296C235.317 3.22096 236.503 3.72996 237.351 4.23796C238.538 4.91696 239.385 5.59496 239.894 6.35796C240.403 7.03596 240.657 7.96796 240.657 9.15496V13.139C240.657 14.919 239.979 15.852 238.707 15.852C238.029 15.852 236.927 15.512 235.487 14.834C230.654 12.63 225.229 11.528 219.211 11.528C214.379 11.528 210.564 12.291 207.936 13.902C205.309 15.512 203.952 17.971 203.952 21.446C203.952 23.82 204.8 25.854 206.495 27.465C208.191 29.075 211.327 30.686 215.82 32.127L227.857 35.942C233.96 37.892 238.368 40.604 240.996 44.079C243.624 47.555 244.896 51.539 244.896 55.947C244.896 59.592 244.132 62.898 242.691 65.78C241.166 68.662 239.131 71.205 236.503 73.24C233.875 75.359 230.739 76.885 227.094 77.987C223.279 79.174 219.295 79.767 214.972 79.767V79.767Z"
        fill="#252F3E"
      />
      <path
        d="M230.993 120.964C203.105 141.563 162.585 152.498 127.746 152.498C78.9188 152.498 34.9248 134.442 1.69578 104.434C-0.932222 102.061 1.44078 98.8402 4.57678 100.704C40.5188 121.558 84.8528 134.188 130.713 134.188C161.653 134.188 195.645 127.746 226.925 114.522C231.587 112.402 235.571 117.574 230.993 120.964V120.964ZM242.607 107.74C239.047 103.163 219.041 105.536 209.971 106.638C207.258 106.978 206.834 104.604 209.293 102.824C225.229 91.6342 251.423 94.8562 254.474 98.5852C257.526 102.4 253.626 128.593 238.707 141.139C236.419 143.089 234.215 142.072 235.232 139.529C238.622 131.136 246.167 112.233 242.607 107.74V107.74Z"
        fill="#FF9900"
      />
    </Box>
  );
}

export default AWSLogo;
