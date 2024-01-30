import React from 'react'
import CategoryButton from './CategoryButton'

function ProjectsCategories({categories}) {
  return (
    <div className='portfolio_categories'>
      {
        categories.map(category => (
          <CategoryButton key={category} category={category} className={`btn cat_btn white`}/>
        ))
      }
    </div>
  )
}

export default ProjectsCategories