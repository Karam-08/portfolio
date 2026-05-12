const ProjectFilter = ({categories, selectedCategory, onSelectCategory}) =>{
    return(
        <div>
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={selectedCategory === category ? 'active' : ''}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}