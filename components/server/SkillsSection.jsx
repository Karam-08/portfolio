const SkillsSection = () =>{
    return(
        <div className="py-20">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <li className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700">HTML</li>
                <li className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700">CSS</li>
                <li className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700">Javascript</li>
                <li className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700">React</li>
                <li className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700">Node.js</li>
                <li className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700">Python</li>
            </ul>
        </div>
    )
}

export default SkillsSection