import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
}

export const Logo: React.FC<LogoProps> = ({ color = '#C2F23C', ...props }) => {
    return (
        <svg
            width="95"
            height="27"
            viewBox="0 0 95 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1_157)">
                <circle cx="13" cy="13" r="13" fill={color} />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M55 3.5H35V23.5H55V3.5ZM33.5 2V25H56.5V2H33.5Z"
                    fill="#A6ABB3"
                />
                <path
                    d="M78.5 0L92.7894 24.75H64.2106L78.5 0Z"
                    fill="#A6ABB3"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_157">
                    <rect width="95" height="27" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};
