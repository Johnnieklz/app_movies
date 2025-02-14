export interface Movie{
    id:number,
    title: string,
    poster_path: string,
    overview: string,
    vote_average: number,

}

export default function MovieCard(props: Movie){
    return(
        <li  key={props.id} className='move-card'>
                              
                <p>{props.title}</p>

                <p className='description'> 
                    {props.overview}
                </p>
              
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={movie.title} />                    

                <p>{props.vote_average}</p>
                        
                    
        </li>
    )
}