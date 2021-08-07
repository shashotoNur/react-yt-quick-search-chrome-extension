import { useHistory } from "react-router-dom";

export const About = () =>
    {
        let { push } = useHistory();

        return (
            <>
                <header className="App-header">
                    <h2>About</h2>
                    <p>
                        A chrome extension to search YouTube videos quickly without waiting for youtube homepage to load
                    </p>

                    <button onClick={() => { push('/') }}> Home page </button>
                </header>
            </>
        )
    };
