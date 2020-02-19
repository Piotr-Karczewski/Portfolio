import React, { Component } from 'react'

import devgrub from '../assets/images/git.png';
import recipe from '../assets/images/papu.png';
import iss from '../assets/images/iss.png';
import Card from '../components/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub',
                    subTitle: 'My Github repositories',
                    imgSrc: devgrub,
                    link: 'https://github.com/Piotr-Karczewski',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Recipe App',
                    subTitle: 'Food recipe application',
                    imgSrc: recipe,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'International Space Station',
                    subTitle: 'Check current location of ISS',
                    imgSrc: iss,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                ]

        }
    }
            handleCardClick = (id, card) => {
                let items = [...this.state.items];
    
                items[id].selected = items[id].selected ? false : true;

                items.forEach(item => {
                    if(item.id !== id) {
                        item.selected = false;
                    }
                });
                this.setState({
                    items
                });

            }


            makeItems = (items) => {
                return items.map(item => {
                    return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id}/>
                })
            } 
    render() {
        return (
        <Container fluid={true}>
            <Row className="justify-content-around">
                {this.makeItems(this.state.items)};
            </Row>
        </Container>
        )

    }
}
export default Carousel
