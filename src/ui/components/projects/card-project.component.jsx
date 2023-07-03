
import iconDefault from '../../../assets/icons/icon-default.png'
import iconGit from '../../../assets/icons/icon-git.png'

export function CardProjectComponent({ project }) {
    return (
        <div className="card-project-component">
            <div className="card-project-images">
                <img src={iconDefault} alt="icon folder" />
                <a href=""><img src={iconGit} alt="icon github" /></a>
            </div>
            <h1>{project.title}</h1>
            <p className='card-project-text'>{project.text}</p>
            <ul className='card-project-technologies'>
                {
                    project.technologies.map((tec, index) => (
                        <li key={index}>{tec}</li>
                    ))
                }
            </ul>
        </div>
    )
}