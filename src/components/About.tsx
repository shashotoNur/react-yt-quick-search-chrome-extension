import { useHistory } from "react-router-dom";

export const About = () =>
    {
        let { push } = useHistory();

        return (
            <>
                <header className="App-header">
                    <h2>About</h2>
                    <br /><br />
                    <p>
                        A chrome extension to search YouTube videos quickly without going to youtube homepage first.
                    </p>

                    <br /><br /><br /><br />
                    <button onClick={() => { push('/') }}> Home page </button>
                </header>
            </>
        )
    };
