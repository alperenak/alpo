import * as React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  width: 55px;
  height: 55px;
`;
function SvgCss(props) {
  return (
    <StyledSvg
      width="1em"
      height="1em"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#Css_svg__clip0)">
        <path
          d="M75.29 86.793L50 93.603l-25.291-6.81-5.836-63.226h62.254L75.29 86.793z"
          fill="#000"
        />
        <path
          d="M50 28.688v59.484l.057.015 20.466-5.51 4.724-53.989H50z"
          fill="#3C3C3C"
        />
        <path
          d="M35.646 14.278v-3.763h5.49V6.397h-9.608v11.639h9.609v-3.758h-5.49zm15.368-3.763h3.838V6.397h-9.61v4.118c1.287 1.285 1.957 1.9 3.816 3.76-1.087 0-3.815.004-3.815.004v3.757h9.61v-3.758l-3.84-3.763zm13.619 0h3.838V6.397h-9.61v4.118c1.286 1.285 1.957 1.9 3.817 3.76-1.087 0-3.816.004-3.816.004v3.757h9.61v-3.758l-3.839-3.763z"
          fill="#000"
        />
        <path
          d="M49.977 44.498l-18.101 7.538.6 7.464 17.501-7.483 18.616-7.96.772-7.634-19.388 8.075z"
          fill="#fff"
        />
        <path
          d="M31.876 52.036l.6 7.464 17.5-7.483v-7.52l-18.1 7.54z"
          fill="url(#Css_svg__paint0_linear)"
        />
        <path
          d="M69.365 36.423l-19.388 8.075v7.52l18.616-7.96.772-7.635z"
          fill="url(#Css_svg__paint1_linear)"
        />
        <path
          d="M31.904 52.036l.6 7.464 26.853.086-.6 9.951-8.837 2.488-8.494-2.145-.515-6.177H33.02l1.03 11.925 15.957 4.718 15.87-4.632 2.06-23.678H31.903z"
          fill="url(#Css_svg__paint2_linear)"
        />
        <path
          opacity={0.05}
          d="M49.977 52.036H31.876l.6 7.464 17.501.056v-7.52zm0 19.965l-.086.024-8.493-2.145-.515-6.176h-7.892l1.03 11.924 15.956 4.719V72z"
          fill="#000"
        />
        <path
          d="M30.246 36.423h39.12l-.773 7.635H31.19l-.943-7.635z"
          fill="url(#Css_svg__paint3_linear)"
        />
        <path
          opacity={0.05}
          d="M49.977 36.423H30.246l.943 7.635h18.788v-7.635z"
          fill="#000"
        />
      </g>
      <defs>
        <linearGradient
          id="Css_svg__paint0_linear"
          x1={40.926}
          y1={59.5}
          x2={40.926}
          y2={44.498}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.387} stopColor="#D1D3D4" stopOpacity={0} />
          <stop offset={1} stopColor="#D1D3D4" />
        </linearGradient>
        <linearGradient
          id="Css_svg__paint1_linear"
          x1={59.671}
          y1={52.017}
          x2={59.671}
          y2={36.423}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.387} stopColor="#D1D3D4" stopOpacity={0} />
          <stop offset={1} stopColor="#D1D3D4" />
        </linearGradient>
        <linearGradient
          id="Css_svg__paint2_linear"
          x1={31.904}
          y1={66.192}
          x2={67.936}
          y2={66.192}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8E7E5" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="Css_svg__paint3_linear"
          x1={30.246}
          y1={40.24}
          x2={69.365}
          y2={40.24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8E7E5" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <clipPath id="Css_svg__clip0">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </StyledSvg>
  );
}

export default SvgCss;
