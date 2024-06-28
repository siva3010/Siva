import React from 'react'

const ProjectItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="Work Picture" className='work__img'/>

        <h3 className="work__title">{item.title}</h3>
        <a href="#" className="work__button" target='_blank'>
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default ProjectItems