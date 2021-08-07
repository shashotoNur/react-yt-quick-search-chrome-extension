import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Home = () =>
    {
        const [url, setUrl] = useState<string>('');
        const [visibilityStatus, setVisibilityStatus] = useState<string>("Show search url");
        const [showURL, setShowURL] = useState<boolean>(false);

        let { push } = useHistory();

        const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
            {
                const queryText = event.target.value;
                const queryTextInURLFormat = queryText.replace(/\s+/g, '+');

                const searchURL = `https://www.youtube.com/results?search_query=${ queryTextInURLFormat }`;
                setUrl(searchURL);
            };
        
        const toggleURLVisibility = () =>
            {
                if(!showURL)
                {
                    setShowURL(true);
                    setVisibilityStatus("Hide search url");
                }
                else if(showURL)
                {
                    setShowURL(false);
                    setVisibilityStatus("Show search url");
                };
            };
        
        const queryText = (event: React.FormEvent<HTMLFormElement> | undefined) =>
            {
                event?.preventDefault();

                const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
                if (newWindow) newWindow.opener = null;
            };
        

        return (
            <>
                <header className="App-header">
                    <h2>YouTube Quick Search</h2>

                    <input type="button" value="Go to Library"
                    onClick={ () => { window.open('https://www.youtube.com/feed/library', '_blank', 'noopener,noreferrer') } }/>
                    <form onSubmit={ queryText }>
                        <input type="text" id='text-iput' onChange={ onInputChange }/>
                        <input type="submit" value="Search" />
                    </form>
                    <input type="button" onClick={ toggleURLVisibility } value={ visibilityStatus } />
                    <p>{ showURL && url }</p>

                    <button id='about' onClick={() => { push('/about') }}> About page </button>
                </header>
            </>
        )
    };
