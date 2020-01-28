import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
             <p>Anim pariatur incididunt nulla velit quis est aliquip excepteur eu ullamco culpa.</p>
             <p>Anim pariatur incididunt nulla velit quis est aliquip excepteur eu ullamco culpa.</p>
             <p>Anim pariatur incididunt nulla velit quis est aliquip excepteur eu ullamco culpa.</p>
             <p>Anim pariatur incididunt nulla velit quis est aliquip excepteur eu ullamco culpa.</p>
             <p>Anim pariatur incididunt nulla velit quis est aliquip excepteur eu ullamco culpa.</p>
            </Content>
        </div>
    );
}

export default AboutPage;
