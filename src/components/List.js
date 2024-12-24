// src/components/List.js
import React from 'react';
import Article from './Article';
import Video from './Video';
import withHighlight from './withHighlight';

const HighlightedArticle = withHighlight(Article);
const HighlightedVideo = withHighlight(Video);

function List(props) {
    return props.list.map((item, index) => {
        switch (item.type) {
            case 'video':
                return <HighlightedVideo key={index} {...item} />;
            case 'article':
                return <HighlightedArticle key={index} {...item} />;
            default:
                return null;
        }
    });
}

export default List;