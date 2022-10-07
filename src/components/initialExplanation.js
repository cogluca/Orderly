const InitialExplanation = () => {

    const styleExplanation = {
        display: 'flex',
        flexFlow: 'column',
        gap: '2em',
    }

    const styleBulletPoint = {
        padding: '0.5em',
        textAlign: 'left'
    }

    return (
        <div style={styleExplanation}>
            <h1>How does this work ?</h1>
            <ul >
                <li style={styleBulletPoint}>
                    Search for a key term about something using the above bar
                </li>
                <li style={styleBulletPoint}>
                    Pick an image that inspires you at first glance
                </li>
                <li style={styleBulletPoint}>
                    Answer to the questionnaire and step by step come to a defined understanding of what it means to you
                </li>
                <li style={styleBulletPoint}>
                    Remember to be open minded as you are an open ocean of unexpressed feelings ❤️
                </li>
            </ul>
        </div>

    )


}

export default InitialExplanation