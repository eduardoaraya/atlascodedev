import { Box, BoxProps } from '@mui/material';
/* eslint-disable-next-line */
export interface NodeLogoProps extends BoxProps<'svg'> {}

export function NodeLogo(props: NodeLogoProps) {
  return (
    <Box
      width="72"
      height="44"
      viewBox="0 0 72 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      component="svg"
    >
      <path
        d="M35.5079 44C35.2691 43.9997 35.0345 43.9369 34.8275 43.8177L32.6621 42.5354C32.3384 42.3547 32.4971 42.2903 32.6039 42.2526C33.0345 42.1033 33.1225 42.0687 33.5829 41.8063C33.6301 41.7796 33.6929 41.7906 33.7432 41.8189L35.4089 42.8057C35.4398 42.8215 35.474 42.8297 35.5087 42.8297C35.5434 42.8297 35.5776 42.8215 35.6085 42.8057L42.0984 39.061C42.1285 39.0426 42.1532 39.0167 42.1703 38.9859C42.1874 38.955 42.1962 38.9203 42.1959 38.885V31.3988C42.1959 31.3628 42.1867 31.3274 42.1691 31.2961C42.1515 31.2647 42.1261 31.2384 42.0953 31.2197L35.6101 27.4797C35.5797 27.4622 35.5453 27.453 35.5103 27.453C35.4752 27.453 35.4408 27.4622 35.4105 27.4797L28.9268 31.2197C28.8956 31.2377 28.8696 31.2636 28.8514 31.2947C28.8332 31.3259 28.8235 31.3612 28.8231 31.3973V38.8835C28.8231 38.9558 28.8624 39.0249 28.9237 39.0563L30.701 40.084C31.6658 40.5665 32.2567 39.9976 32.2567 39.4256V32.0368C32.2567 31.9315 32.3384 31.8498 32.4437 31.8498H33.2655C33.3677 31.8498 33.4525 31.9315 33.4525 32.0384V39.4288C33.4525 40.7157 32.7501 41.4559 31.5307 41.4559C31.1551 41.4559 30.8597 41.4559 30.0347 41.0473L28.3328 40.0683C28.1258 39.9475 27.954 39.7745 27.8346 39.5666C27.7152 39.3587 27.6524 39.1232 27.6524 38.8835V31.3973C27.6524 30.9101 27.9117 30.4544 28.3328 30.214L34.8275 26.4677C35.0366 26.3534 35.2712 26.2935 35.5095 26.2935C35.7478 26.2935 35.9823 26.3534 36.1915 26.4677L42.6783 30.2171C42.8851 30.3374 43.0567 30.5099 43.1761 30.7172C43.2955 30.9246 43.3585 31.1596 43.3587 31.3988V38.885C43.3583 39.1245 43.2952 39.3596 43.1759 39.5672C43.0565 39.7748 42.885 39.9475 42.6783 40.0683L36.1915 43.8146C35.9836 43.9344 35.7478 43.9973 35.5079 43.9969"
        fill="#3C4661"
      />
      <path
        d="M37.5141 38.8436C34.6761 38.8436 34.0805 37.5393 34.0805 36.4472C34.0805 36.3434 34.1638 36.2586 34.2691 36.2586H35.1067C35.1516 36.2588 35.195 36.2751 35.229 36.3045C35.263 36.3339 35.2853 36.3744 35.2921 36.4189C35.4178 37.2721 35.7949 37.7027 37.5109 37.7027C38.878 37.7027 39.4595 37.3947 39.4595 36.6687C39.4595 36.2523 39.2945 35.9412 37.1699 35.7337C35.3942 35.5593 34.2958 35.168 34.2958 33.7459C34.2958 32.4369 35.4005 31.6575 37.2501 31.6575C39.3275 31.6575 40.3567 32.3788 40.4872 33.9282C40.4893 33.9542 40.4861 33.9804 40.4776 34.0052C40.4691 34.0299 40.4556 34.0526 40.4378 34.0718C40.4201 34.091 40.3986 34.1063 40.3746 34.1168C40.3506 34.1272 40.3247 34.1325 40.2986 34.1325H39.4563C39.4138 34.1327 39.3725 34.1183 39.3393 34.0917C39.3061 34.0651 39.2831 34.0279 39.274 33.9863C39.0698 33.089 38.5795 32.8015 37.2469 32.8015C35.7541 32.8015 35.5812 33.32 35.5812 33.7097C35.5812 34.1827 35.7855 34.321 37.7985 34.5866C39.7942 34.8522 40.7402 35.2262 40.7402 36.6279C40.7402 38.0406 39.5616 38.8498 37.5046 38.8498L37.5141 38.842V38.8436ZM45.4073 30.9111H45.6257C45.8033 30.9111 45.8378 30.7853 45.8378 30.7131C45.8378 30.5213 45.7058 30.5214 45.6335 30.5214H45.4088V30.9111H45.4073ZM45.1433 30.2966H45.6257C45.7907 30.2966 46.116 30.2966 46.116 30.6675C46.116 30.9252 45.9494 30.9786 45.8504 31.0116C46.0437 31.0242 46.0578 31.1515 46.083 31.3291C46.0955 31.4422 46.1175 31.6355 46.1568 31.6999H45.8583C45.8504 31.6355 45.8048 31.2772 45.8048 31.2583C45.786 31.1798 45.7577 31.1389 45.6587 31.1389H45.4151V31.7015H45.1448V30.2966H45.1433ZM44.5618 30.9943C44.5618 31.5758 45.0333 32.0472 45.6084 32.0472C45.8155 32.0472 46.018 31.9858 46.1902 31.8709C46.3625 31.7559 46.4968 31.5925 46.5763 31.4012C46.6558 31.21 46.6768 30.9995 46.6367 30.7963C46.5967 30.5931 46.4973 30.4064 46.3512 30.2596C46.2051 30.1128 46.0188 30.0126 45.8158 29.9716C45.6128 29.9307 45.4022 29.9508 45.2106 30.0294C45.019 30.108 44.8549 30.2416 44.7392 30.4133C44.6235 30.5851 44.5612 30.7872 44.5603 30.9943H44.5634H44.5618ZM46.8608 30.9991C46.8596 31.3303 46.7273 31.6475 46.493 31.8816C46.2586 32.1157 45.9412 32.2475 45.61 32.2483C45.2788 32.2471 44.9615 32.1149 44.7274 31.8805C44.4934 31.6461 44.3615 31.3287 44.3607 30.9975C44.3607 30.6662 44.4923 30.3484 44.7266 30.1141C44.9609 29.8798 45.2787 29.7482 45.61 29.7482C45.9413 29.7482 46.2591 29.8798 46.4933 30.1141C46.7276 30.3484 46.8593 30.6662 46.8593 30.9975"
        fill="#3C4661"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4171 14.7061C15.4171 14.4075 15.26 14.1325 15.0023 13.9832L8.12421 10.0264C8.00954 9.9591 7.87995 9.92131 7.74707 9.91643H7.67478C7.54092 9.92137 7.41033 9.95915 7.2945 10.0264L0.416425 13.9864C0.289904 14.06 0.184879 14.1655 0.111815 14.2923C0.0387505 14.4191 0.00019842 14.5629 0 14.7092L0.0157141 25.3681C0.0146461 25.4409 0.0330174 25.5126 0.0689302 25.5758C0.104843 25.6391 0.156995 25.6916 0.219998 25.728C0.347282 25.8066 0.507567 25.8066 0.63328 25.728L4.72367 23.3866C4.84979 23.3127 4.95442 23.2071 5.02718 23.0803C5.09995 22.9535 5.13833 22.8099 5.13852 22.6637V17.6855C5.13852 17.3869 5.29566 17.1135 5.55337 16.9658L7.2945 15.9632C7.42053 15.8901 7.56365 15.8516 7.70935 15.8516C7.85506 15.8516 7.99818 15.8901 8.12421 15.9632L9.86376 16.9642C9.99046 17.0368 10.0957 17.1416 10.1688 17.268C10.242 17.3944 10.2804 17.5379 10.2802 17.6839V22.6653C10.2802 22.9592 10.4389 23.231 10.6966 23.385L14.7823 25.7264C14.8452 25.7641 14.9172 25.784 14.9905 25.784C15.0638 25.784 15.1358 25.7641 15.1987 25.7264C15.2617 25.6895 15.3139 25.6367 15.35 25.5733C15.3861 25.5098 15.4049 25.438 15.4046 25.365L15.4171 14.7077V14.7061ZM47.8763 20.2563C47.8763 20.3302 47.837 20.3993 47.7725 20.4355L45.4107 21.7979C45.3791 21.8159 45.3434 21.8254 45.307 21.8254C45.2706 21.8254 45.2349 21.8159 45.2033 21.7979L42.8399 20.4355C42.8083 20.4174 42.7821 20.3914 42.7639 20.3599C42.7456 20.3284 42.7361 20.2927 42.7362 20.2563V17.5284C42.7362 17.4545 42.7754 17.3869 42.8383 17.3492L45.2001 15.9852C45.232 15.967 45.268 15.9575 45.3046 15.9575C45.3413 15.9575 45.3773 15.967 45.4091 15.9852L47.7725 17.3492C47.804 17.3674 47.8301 17.3935 47.8483 17.4249C47.8665 17.4564 47.8762 17.492 47.8763 17.5284V20.2563ZM48.5158 0.0526708C48.4524 0.0173145 48.3808 -0.000833152 48.3082 2.93717e-05C48.2355 0.000891895 48.1644 0.0207346 48.1018 0.0575877C48.0392 0.0944407 47.9874 0.147022 47.9514 0.210113C47.9154 0.273203 47.8965 0.344608 47.8967 0.417239V10.9724C47.8965 11.0233 47.883 11.0733 47.8576 11.1173C47.8321 11.1613 47.7954 11.1979 47.7514 11.2234C47.7073 11.2488 47.6573 11.2623 47.6065 11.2623C47.5556 11.2624 47.5055 11.2492 47.4614 11.2238L45.7376 10.2323C45.6114 10.1595 45.4683 10.1211 45.3227 10.1211C45.1771 10.1211 45.034 10.1595 44.9079 10.2323L38.0266 14.2032C37.9006 14.276 37.7959 14.3807 37.723 14.5068C37.6502 14.6328 37.6119 14.7758 37.6118 14.9214V22.8664C37.6118 23.1634 37.7689 23.4353 38.0266 23.5846L44.9079 27.5603C45.0343 27.6331 45.1776 27.6714 45.3235 27.6714C45.4694 27.6714 45.6127 27.6331 45.7391 27.5603L52.6203 23.5846C52.7464 23.5114 52.8511 23.4064 52.9239 23.2801C52.9967 23.1538 53.0351 23.0107 53.0352 22.8649V3.06507C53.0352 2.91672 52.9956 2.77106 52.9205 2.64315C52.8453 2.51524 52.7374 2.40972 52.6078 2.33751L48.5158 0.0526708ZM71.4286 17.4592C71.5543 17.3861 71.6586 17.2813 71.7311 17.1553C71.8036 17.0293 71.8418 16.8865 71.8419 16.7411V14.813C71.8419 14.5175 71.6847 14.2441 71.4286 14.0948L64.5914 10.1254C64.4649 10.052 64.3212 10.0134 64.1749 10.0134C64.0287 10.0134 63.885 10.052 63.7585 10.1254L56.8789 14.0964C56.7523 14.1691 56.6471 14.2739 56.574 14.4003C56.5009 14.5267 56.4624 14.6701 56.4625 14.8161V22.758C56.4625 23.0566 56.6243 23.3332 56.882 23.4809L63.7177 27.3764C63.9691 27.521 64.2771 27.5225 64.5332 27.3811L68.6676 25.0837C68.7315 25.0475 68.7846 24.9952 68.8217 24.9319C68.8588 24.8685 68.8785 24.7966 68.8788 24.7232C68.8791 24.6498 68.86 24.5777 68.8235 24.5141C68.787 24.4504 68.7343 24.3976 68.6708 24.3609L61.7487 20.3883C61.685 20.3523 61.6321 20.3 61.5954 20.2368C61.5586 20.1735 61.5394 20.1016 61.5397 20.0285V17.5378C61.5397 17.3885 61.6183 17.2518 61.7471 17.1779L63.9 15.9365C63.9629 15.8996 64.0345 15.8802 64.1074 15.8802C64.1803 15.8802 64.2519 15.8996 64.3148 15.9365L66.4708 17.1779C66.5337 17.2143 66.586 17.2665 66.6224 17.3293C66.6588 17.3922 66.678 17.4636 66.6782 17.5362V19.4958C66.6782 19.6435 66.7568 19.7818 66.8856 19.8572C66.9493 19.8931 67.0212 19.9117 67.0943 19.9112C67.1673 19.9106 67.239 19.8909 67.3021 19.854L71.4286 17.4576V17.4592Z"
        fill="#3C4661"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.0763 17.0865C64.1003 17.0724 64.1277 17.065 64.1556 17.065C64.1835 17.065 64.2109 17.0724 64.235 17.0865L65.5549 17.8486C65.6052 17.8769 65.6351 17.9288 65.6351 17.9869V19.5112C65.6351 19.5677 65.6052 19.6212 65.5565 19.6495L64.2365 20.4116C64.2123 20.426 64.1846 20.4336 64.1564 20.4336C64.1282 20.4336 64.1005 20.426 64.0763 20.4116L62.7563 19.6495C62.7318 19.6357 62.7114 19.6156 62.6973 19.5913C62.6832 19.5669 62.6759 19.5393 62.6761 19.5112V17.9869C62.6757 17.9589 62.6828 17.9314 62.6966 17.9071C62.7104 17.8828 62.7305 17.8626 62.7547 17.8486L64.0763 17.0865Z"
        fill="#3C4661"
      />
      <path
        d="M33.966 23.2471V14.4896L26.3824 10.1148L18.7987 14.4896V23.2471L26.3824 27.6266L33.966 23.2471Z"
        fill="#3C4661"
      />
      <path
        d="M26.3792 10.1116L33.9629 23.2439L26.3792 27.6234L18.7987 14.4896L26.3792 10.1116ZM18.7987 23.2486L21.4026 19.0011L18.7987 14.4911V23.2486Z"
        fill="#3C4661"
      />
      <path
        d="M31.4326 18.8691L33.9626 14.4896L26.3806 10.1148L31.4326 18.8676V18.8691Z"
        fill="#3C4661"
      />
    </Box>
  );
}

export default NodeLogo;
