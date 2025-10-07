const ArrowDiagonal = ({stroke, strokeWidth}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.17139 14.8284L14.8282 9.17151M14.8282 9.17151H9.8785M14.8282 9.17151V14.1213" stroke={stroke} stroke-width={strokeWidth} stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )
}

export default ArrowDiagonal