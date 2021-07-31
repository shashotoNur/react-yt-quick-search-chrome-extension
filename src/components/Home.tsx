import { useState } from "react";
import { useHistory } from "react-router-dom";

export const Home = () =>
    {
        const [url, setUrl] = useState<string>('');
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
            const inputRef = document.getElementById('inputRef');
            if(!showURL)
            {
                setShowURL(true);
                if(inputRef) inputRef.innerHTML = "Hide search url";
            }
            else if(showURL)
            {
                setShowURL(false);
                if(inputRef) inputRef.innerHTML = "Show search url";
            }
        }
        
        const queryText = (event: React.FormEvent<HTMLFormElement> | undefined) =>
            {
                event?.preventDefault();

                const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
                if (newWindow) newWindow.opener = null;
            };
        

        return (
            <>
                <header className="App-header">
                    <p>YouTube Quick Search</p>

                    <form onSubmit={ queryText }>
                        <input type="text" onChange={ onInputChange }/>
                        <input type="submit" value="Search" />
                    </form>

                    <input type="button" id="inputRef" onClick={ toggleURLVisibility } value="Show search url" />
                    <p>{ showURL && url }</p>

                    <button onClick={() => { push('/about') }}>About page </button>
                </header>
            </>
        )
    };
