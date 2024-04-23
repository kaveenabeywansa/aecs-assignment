import React from 'react';

function QuoteItem(props) {
    return (
        <li>
            <div className="wrapper">
                <div className="content">
                    <div className="quote-area">
                        <i className="fas fa-quote-left"></i>
                        <p className="quote">{props.quoteItem.quote}</p>
                        <i className="fas fa-quote-right"></i>
                    </div>
                    <div className="author">
                        <span>__</span>
                        <span className="name">{props.quoteItem.author}</span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default QuoteItem;