import React from "react";
import styled from "styled-components";

// template literal
const List = styled.ul`
    list-style: none;
    padding-left: 0;
`
const ListItem = styled.li`
    margin-bottom: 1em;
    text-align: right;
    img {
        border: ${props => props.active ? "5px solid palevioletred" : "2px solid gray"};
        border-radius: 10px;
        curser: pointer;
        &:hover {
            border-color: red;
        }
    }
`
export const VideoList = props => {
    // gives permission for this to act as a wrapper element and for other elements components) to be rendered inside
    return (
        <List>{props.children}</List>
    )
};

export const VideoListItem = ({ video, selectedVideo, onVideoSelect }) => {
    return (
        // set active to true or false if currect selected video or not
        <ListItem active={video === selectedVideo}>
            <img src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
            // annon function so that it doesn't call the action asap.
            onClick={() => onVideoSelect(video)}  />
        </ListItem>
    )
}