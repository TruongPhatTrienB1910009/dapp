import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" style={{fill:"#FFFFFF"}} {...props}>
      <path d="M9.31015 13.4109L12.8564 15.6576C13.3097 15.9448 13.8725 15.5177 13.738 14.9886L12.7134 10.9581C12.6845 10.8458 12.688 10.7277 12.7233 10.6173C12.7586 10.5069 12.8243 10.4087 12.9129 10.334L16.093 7.68719C16.5108 7.33941 16.2951 6.64595 15.7583 6.61111L11.6054 6.34158C11.4935 6.33359 11.3862 6.29399 11.296 6.22738C11.2058 6.16078 11.1363 6.06991 11.0957 5.96537L9.54688 2.06492C9.50478 1.95396 9.42992 1.85843 9.33224 1.79102C9.23456 1.7236 9.11868 1.6875 9 1.6875C8.88132 1.6875 8.76544 1.7236 8.66777 1.79102C8.57009 1.85843 8.49523 1.95396 8.45312 2.06492L6.90426 5.96537C6.86367 6.06991 6.79423 6.16078 6.70401 6.22738C6.61378 6.29399 6.5065 6.33359 6.39464 6.34158L2.24171 6.61111C1.70486 6.64595 1.4892 7.33941 1.90704 7.68719L5.08709 10.334C5.17571 10.4087 5.24145 10.5069 5.27674 10.6173C5.31204 10.7277 5.31546 10.8458 5.2866 10.9581L4.33641 14.6959C4.175 15.3309 4.85036 15.8434 5.39432 15.4988L8.68985 13.4109C8.78254 13.3519 8.89013 13.3205 9 13.3205C9.10987 13.3205 9.21747 13.3519 9.31015 13.4109V13.4109Z"
       stroke="#5155F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Icon;
