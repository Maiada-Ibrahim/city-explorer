import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';



class Wether extends React.Component {
    render() {
        return (
            <>
                {/* <div>wether</div> */}
                {   console.log(this.props.whether),
                    this.props.whether.map(value => {
                        return (

                            <Card style={{ width: '18rem', display: 'inline-block' }}>
                                {/* <Card.Img variant="top" src={mov.image_url} /> */}
                                <Card.Body>
                                    {/* <Card.Title>'whether'</Card.Title> */}
                                    <Card.Text>
                                        <p> {value.data} </p>
                                        <p>{value.description}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>)
                    })
                }
            </>
        )
    }
}

export default Wether
