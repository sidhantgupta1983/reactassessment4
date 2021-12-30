import React from 'react'
import image from './gurukul-image.png'

const Home = () => {
    return (
        <div>
            <h2>Welcome to Gurukul</h2>
            <div className="displayFlex">
                <img src={image} alt="Gurukul Image" className="alignImage"/>  
                <pre className="msgBox"><h2>A one of its kind, hi-tech international learning center <br/>
                    offering different career and lifestyle-oriented activities</h2>
                    <br/>
                    <h2>🤷That's all your child needs, to Learn and Grow!!🤷‍♂️</h2>
                </pre>
            </div>
            <br/>  
            <h2 className='endMsg'>🥳Hurry Up! Dont forget to miss out the early bird offers!!🥳</h2>
            
        </div>
    )
}

export default Home
