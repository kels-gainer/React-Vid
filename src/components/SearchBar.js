import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import styled from "styled-components";

const FromWrapper = styled(FormGroup)`
    position: relative;
    span {
        position: absolute;
        right: 10px;
        top: -2px;
        font-weight: 700;
        font-size: 24px;
        color: gray;
        :hover {
            color: black;
            cursor: pointer;
        }
    }
`

class SearchBar extends Component {
    state = {
        term: ""
    }

    handleInputChange = event => {
        // update state or term
        this.setState({ term: event.target.value });
        // run a utube search based on this term
        this.props.searchUTube(event.target.value);
    }

    render() {
        return (
            <Form onSubmit={event => event.preventDefault()}>
                <FromWrapper>
                    <Label for="utubeSearch" hidden>UTube Search</Label>
                    <Input
                        type="text"
                        name="utubeSearch"
                        id="utubeSearch"
                        placeholder="puppies"
                        value={this.state.term}
                        onChange={this.handleInputChange}
                        /> 
                        <span onClick={ () => this.setState({ term: "" })} >x</span>
                </FromWrapper>
            </Form>
        )
    }
}

export default SearchBar;

// alt way to write component above:
// Parth around h2 means whatever is inside of it means explicently return. Can't add props or etc or anything else like the above ex.
// const SearchBar = () +> (
//     <h2>SearchBar</h2>
// )