import React from 'react';

type IconWebstormPropsType = {
    width?: string
    height?: string
}
export const IconWebstorm = (props: IconWebstormPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox="0 0 51 50" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_761_1061)">
                <path
                    d="M7.34961 45.1562L0.630859 5.23438L13.1309 0.078125L21.0215 4.76562L28.3652 0.859375L43.5215 6.71875L35.0059 50L7.34961 45.1562Z"
                    fill="url(#grad1)"/>
                <path
                    d="M50.6309 16.9531L44.1465 1.01562L32.5059 0L14.3809 17.3438L19.2246 39.7656L28.3652 46.0938L50.6309 32.8906L45.1621 22.6562L50.6309 16.9531Z"
                    fill="url(#grad2)"/>
                <path
                    d="M40.6309 14.5313L45.1621 22.6562L50.6309 16.9531L46.6465 7.03125L40.6309 14.5313Z"
                    fill="url(#grad3)"/>
                <path d="M10.0059 9.375H41.2559V40.625H10.0059V9.375Z" fill="black"/>
                <path
                    d="M12.9746 34.7656H24.6934V36.7188H12.9746V34.7656ZM28.2871 24.5313L29.9277 22.5C31.0996 23.4375 32.2715 24.0625 33.7559 24.0625C34.9277 24.0625 35.6309 23.5938 35.6309 22.8125C35.6309 22.1094 35.1621 21.7188 33.0527 21.1719C30.4746 20.4688 28.834 19.7656 28.834 17.1875V17.1094C28.834 14.7656 30.709 13.2031 33.2871 13.2031C35.0154 13.1959 36.6952 13.7742 38.0527 14.8438L36.5684 17.0313C35.6252 16.2942 34.4817 15.8586 33.2871 15.7813C32.2715 15.7813 31.6465 16.25 31.6465 16.9531C31.6465 17.8125 32.1934 18.125 34.3809 18.6719C36.959 19.375 38.4434 20.3125 38.4434 22.5781C38.4434 25.1563 36.4902 26.6406 33.7559 26.6406C31.7488 26.5668 29.8239 25.8244 28.2871 24.5313ZM25.7871 13.4375L23.834 20.9375L21.6465 13.4375H19.459L17.2715 20.9375L15.3184 13.4375H12.2715L16.0215 26.4063H18.4434L20.5527 18.9063L22.6621 26.4063H25.084L28.834 13.4375H25.7871Z"
                    fill="white"/>
            </g>
            <defs>
                <linearGradient id="grad1" x1="18.5176" y1="1.03906" x2="31.459" y2="47.6211"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.28" stopColor="#00CDD7"/>
                    <stop offset="0.94" stopColor="#2086D7"/>
                </linearGradient>
                <linearGradient id="grad2" x1="22.5332" y1="6.97266" x2="44.4238" y2="39.0703"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.14" stopColor="#FFF045"/>
                    <stop offset="0.37" stopColor="#00CDD7"/>
                </linearGradient>
                <linearGradient id="grad2" x1="44.2676" y1="10.9102" x2="47.1426" y2="21.0937"
                                gradientUnits="userSpaceOnUse">
                    <stop offset="0.28" stopColor="#00CDD7"/>
                    <stop offset="0.94" stopColor="#2086D7"/>
                </linearGradient>
                <clipPath id="clip0_761_1061">
                    <rect width="50" height="50" fill="white" transform="translate(0.630859)"/>
                </clipPath>
            </defs>
        </svg>
    );
};

export const IconPhotoshop = () => {
    return (
    <svg width="50" height="50" viewBox="0 123.30600000000001 595.279 595.279" xmlns="http://www.w3.org/2000/svg">
        <radialGradient id="a" cx="-183.69" cy="328.972" r=".76"
                        gradientTransform="matrix(545.6736 0 0 528.3113 100439.305 -173525.125)"
                        gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#34364e" stop-opacity=".98"/>
            <stop offset="1" stop-color="#0c0824"/>
        </radialGradient>
        <path d="M24.803 155.549h545.674v530.792H24.803V155.549z" fill="url(#a)"/>
        <path d="M24.803 155.549h545.674v530.792H24.803V155.549zM0 711.145h595.28V130.746H0v580.399zm401.318-342.287c-19.595 0-26.291 9.921-26.291 18.106 0 8.929 4.464 15.13 30.756 28.772 38.941 18.851 51.095 36.957 51.095 63.497 0 39.685-30.26 61.016-71.186 61.016-21.579 0-40.182-4.465-50.847-10.665-1.736-.744-1.984-1.984-1.984-3.969v-36.461c0-2.48 1.24-3.225 2.977-1.984 15.626 10.17 33.484 14.634 49.854 14.634 19.595 0 27.78-8.185 27.78-19.347 0-8.929-5.705-16.866-30.757-29.764-35.221-16.866-49.854-33.98-49.854-62.504 0-31.997 25.052-58.536 68.457-58.536 21.331 0 36.213 3.225 44.398 6.945 1.984 1.24 2.48 3.224 2.48 4.96v33.98c0 1.984-1.24 3.225-3.721 2.48-10.913-6.943-27.035-11.16-43.157-11.16zm-213.309 29.516c5.705.496 10.17.496 20.091.496 29.021 0 56.304-10.169 56.304-49.606 0-31.5-19.595-47.375-52.583-47.375-9.921 0-19.347.496-23.812.744v95.741zM143.86 266.668c0-1.736 3.473-2.977 5.456-2.977 15.875-.744 39.438-1.24 63.993-1.24 68.705 0 95.492 37.701 95.492 85.82 0 63-45.638 90.036-101.693 90.036-9.425 0-12.649-.496-19.347-.496v95.245c0 1.984-.744 2.976-2.976 2.976h-37.949c-1.984 0-2.977-.744-2.977-2.976V266.668z"
              fill="#31c5f0"/>
    </svg>
    );
};