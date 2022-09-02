import React from 'react'

interface WrapperProps {
    text: string,
    children?: JSX.Element
}
const Wrapper: React.FC<WrapperProps> = (props) => {

    return (
        <React.Fragment>
            <div>
                {props.text}
            </div>
            <div>
                {props.children}
            </div>
        </React.Fragment>


    )
}

export default Wrapper