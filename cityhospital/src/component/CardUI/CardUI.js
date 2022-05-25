import React from 'react';
import {Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap';

function CardUI({data}) {
    return (
        <Row>
                {data.map((d, i) => {
                    return(<Col sm="4" key={i}>
                    <Card body>
                    <CardTitle tag="h5">
                        {d.name}
                    </CardTitle>
                    <CardText>
                        age : {d.age}
                    </CardText>
                    <Button>
                        View More
                    </Button>
                    </Card>
                </Col>);
                })}
                
        </Row>
    );
}

export default CardUI;