import React from 'react'
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
                                    <Card.Text>

                                        {value.data} &nbsp; {value.description} &nbsp; {value.temp}
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
