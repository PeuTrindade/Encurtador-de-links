import React from 'react';
import styles from './Shorter.module.css';

const Shorter = () => {
    const [text,setText] = React.useState('');
    const [link,setLink] = React.useState('');
    const [shortLink,setShortLink] = React.useState([]);
    const [msg,setMsg] = React.useState(false);
    const [error,setError] = React.useState(false);

    function handleClick(event){
        event.preventDefault();
        if(text){
           const formatedText = text.toLowerCase();
           setLink(formatedText);
           setMsg(true);
           setError(false); 
        }
        else {
            setError(true); 
        }
    }

    React.useEffect(() => {
        if(link){
            async function getData(){
                const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}/`);
                const data = await response.json();
                if(response.ok){
                    setShortLink([...shortLink,data]);
                    setText('');
                    setMsg(false);
                }
                else {
                    setError(true);
                }
            }
            getData();
        }
    },[link]);

    console.log(shortLink);

    return (
        <>
        <section className={styles.container}>
            <form className={styles.shorterContainer}>
                <input onChange={({target}) => setText(target.value)} value={text} type='text' placeholder='Shorten a link here...'/>
                <button onClick={handleClick}>Shorten it!</button>
            </form>
        </section>
        {error && !msg && <p className={styles.error}>Ops,try again!</p>}
        {msg && <p className={styles.loading}>It will take a few seconds!</p>}
        {shortLink && <div className={styles.links}>
                {shortLink && shortLink.map((link) => {
                    const { original_link, full_short_link, code} = link.result;
                    return (
                        <div key={code} className={styles.item}>
                            <h3 className={styles.original}>{original_link}</h3>
                            <div className={styles.otherItems}>
                            <a id='link' href={full_short_link} style={{textDecoration:'none',fontWeight:'bold'}} className={styles.short}>{full_short_link}</a>
                            <a href={full_short_link}><button>Visit!</button></a>
                            </div>
                        </div>
                    )
                })}
        </div>}
        </>
    )
}

export default Shorter;
