const InitialExplanation = () => {

    const styleParagraph = {
        textAlign: 'left',
        paddingTop: '0.5em'
    }

    return (
        <section className='explanation-section'>

            <div className='what-is-it-for'>
                <h1>What is this for ?</h1>
                <p style={styleParagraph}>It's a a way to declutter your brain from both the day to day emotions that clog your brain and to understand the long held ones</p>
            </div>
            <div className='explanation-style'>
                <h1>How does this work ?</h1>
                <ul>
                    <li>
                        Search for a key term about something using the above bar
                    </li>
                    <li>
                        Pick an image that inspires you at first glance
                    </li>
                    <li>
                        Answer to the questionnaire and step by step come to a defined understanding of what it means to
                        you
                    </li>
                    <li>
                        Remember to be open minded as you are an open ocean of unexpressed feelings ❤️
                    </li>
                    <li>
                        If you want to reset the questionnaire click on the logo 👀
                    </li>
                </ul>
            </div>

        </section>
    )


}

export default InitialExplanation