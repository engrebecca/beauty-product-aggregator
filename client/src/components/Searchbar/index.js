import React from 'react';
import { FormGroup, Button, Input, Container, Form, Label } from 'reactstrap';

const Searchbar = (props) => {
    return (
        <Container>
            <Form className="text">
                <FormGroup>
                    <Label for="searchUrl">Enter a Sephora URL for product search results you would like to analyze.</Label>
                    <Input type="url" name="url" id="searchUrl" placeholder="https://www.sephora.com" />
                </FormGroup>
                <Button type="submit">Search</Button>
            </Form>
        </Container>
    );
};

export default Searchbar;