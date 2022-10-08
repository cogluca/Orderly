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

    const styleSection = {
        display: 'flex',
        flexFlow: 'row'
    }

    const styleWhatIsIt = {
        display: 'flex',
        flexFlow: 'column',
        gap: '2em',

    }
    const styleParagraph = {
        textAlign: 'left',
        paddingTop: '0.5em'
    }

    return (
        <section style={styleSection}>

            <div style={styleWhatIsIt}>
                <h1>What is this for ?</h1>
                <p style={styleParagraph}>It's a a way to declutter your brain from both the day to day emotions that clog your brain and to understand the long held ones</p>
            </div>
            <div style={styleExplanation}>
                <h1>How does this work ?</h1>
                <ul>
                    <li style={styleBulletPoint}>
                        Search for a key term about something using the above bar
                    </li>
                    <li style={styleBulletPoint}>
                        Pick an image that inspires you at first glance
                    </li>
                    <li style={styleBulletPoint}>
                        Answer to the questionnaire and step by step come to a defined understanding of what it means to
                        you
                    </li>
                    <li style={styleBulletPoint}>
                        Remember to be open minded as you are an open ocean of unexpressed feelings ❤️
                    </li>
                    <li style={styleBulletPoint}>
                        If you want to reset the questionnaire click on the logo 👀
                    </li>
                </ul>
            </div>

        </section>
    )


}

export default InitialExplanation