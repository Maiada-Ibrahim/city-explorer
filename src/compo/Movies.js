import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';



class Movies extends React.Component {
    render() {
        return (
            <>
                
                {   
                    this.props.citymoviesdata.map(value => {
                        return (
                            <Card style={{ width: '25rem' },{ width: '15rem' }}>
                                <Card.Header as="h5">{value.title}</Card.Header>
                                <Card.Img variant="top" src={value.image_url} />
                                
                                <Card.Body>
                                    
                                    <Card.Text>
                                        <p> overview &nbsp; {value.overview}</p>
                                        <p> vote_average &nbsp; {value.vote_average}</p>
                                        <p> vote_count &nbsp; {value.vote_count}</p>
                                        <p> popularity &nbsp; {value.popularity}</p>
                                        <p> vote_average &nbsp; {value.vote_average}</p>
                                        <p> release_date &nbsp; {value.release_date}</p>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            )
                    })
                }
            </>
        )
    }
}

export default Movies