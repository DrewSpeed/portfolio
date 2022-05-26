import './index.scss'

import IMG1 from '../../assets/images/bountybook.png';
import IMG2 from '../../assets/images/notwork.png';
import IMG3 from '../../assets/images/super-song-search.png'




const Work = () => {
    const data = [
        {
            id: 1,
            image: IMG1,
            title: 'Bounty Book',
            github: 'https://github.com/Atticus-Robinson/Bounty_Book',
            demo: 'https://bountybook.herokuapp.com/'
        },
        {
            id: 2,
            image: IMG2,
            title: 'NotWork',
            github: 'https://github.com/DrewSpeed/NotWork',
            demo: 'https://fast-wave-33945.herokuapp.com/'
        },
        {
            id: 3,
            image: IMG3,
            title: 'Super Song Search',
            github: 'https://github.com/Jasonwesleysmith/super-song-search',
            demo: 'https://jasonwesleysmith.github.io/super-song-search/'
        },
    
    ]
    
    return (
        <>
        
        <section className="section-wrap">
            <div className="portfolio-container">
            <h2 className="contact-header">My Recent Work</h2>
                <div className='items-container'>
                {
                    data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className='portfolio-item'>
                        <div className='portfolio-item-img'>
                        <img src={image} alt={title} />
                        </div>
                            <h3>{title}</h3>
                            <a href={github} className='btn'>Github</a>
                            <a href={demo} rel='noreferrer' className='btn btn-primary' target='_blank'>Live Demo</a>
                        </article>
                    )
                    })
                }

                </div>
            </div>
             

        </section>
        </>
    )
}
export default Work;