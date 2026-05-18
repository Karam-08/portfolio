const ProjectFilter = ({categories, selectedCategory, onSelectCategory }) =>{
    return(
        <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) =>(
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-5 py-2 rounded-xl border transition font-medium ${
                        selectedCategory === category
                            ? `bg-blue-500 border-blue-500 text-white`
                            : `bg-[var(--surface)] border-[var(--border)] hover:border-white`
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default ProjectFilter