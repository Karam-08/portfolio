const AnimatedHero = () =>{
    return(
        <>
            <div className="text-center py-20" style={{animation: 'fadeIn 0.7s ease-in forwards'}}>
                <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio!</h1>
                <p className="text-lg">Discover my projects, skills, and experience.</p>
            </div>
            <style>{`
                @keyframes fadeIn{
                    from{opacity: 0;}
                    to{opacity: 1;}
                }
            `}</style>
        </>
    )
}

export default AnimatedHero