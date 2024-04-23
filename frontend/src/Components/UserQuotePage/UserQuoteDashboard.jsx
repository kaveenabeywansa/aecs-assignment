import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authGuard from '../../Helpers/auth-guard';
import userQuoteService from '../../Helpers/user-quote-service';
import QuoteItem from './QuoteItem';
import MainQuoteItem from './MainQuoteItem';

function UserQuoteDashboard() {
    const navigate = useNavigate();

    const [userQuotesArr, setUserQuotesArr] = React.useState([]);

    useEffect(() => {
        if (!authGuard.isAuthenticated()) {
            navigate('/');
            return;
        }
        getUserQuotes();
    }, []);

    const getUserQuotes = async () => {
        let results = await userQuoteService.getUserQuotes(localStorage.getItem('loggedUsername'));
        if (results && results.quotes) {
            console.log(results);
            setUserQuotesArr(results.quotes);
        }
    };

    const getLastQuote = () => {
        return userQuotesArr[userQuotesArr.length-1];
    };
    const handleOnSubmit = async evt => {
        evt.preventDefault();
        let results = await userQuoteService.generateNewQuote(localStorage.getItem('loggedUsername'));
        if (results.success) {
            getUserQuotes();
        }
    };

    return (
        <div className="user-likes-container">
            <button className='transparent-btn' onClick={() => navigate('/dashboard')}>
                <img height={50} src={require('../../assets/home.png')} />
            </button>
            {userQuotesArr.length ?  <MainQuoteItem quoteItem={getLastQuote()}/> : ''}
            <form onSubmit={handleOnSubmit}>
                <div className="add-likes-div">
                    <button>Generate New Quote</button>
                </div>
            </form>

            <hr className="hr-separtor" />
            <h2>Previously Generated Quotes</h2>
            <ol>
                {
                    userQuotesArr.map(
                        (element, index) => <QuoteItem quoteItem={element} key={index} />
                    )
                }
            </ol>
        </div>
    );
}

export default UserQuoteDashboard;
