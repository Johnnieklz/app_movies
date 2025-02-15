export interface Props{
    rating: number;
}

export default function StarRating(props: Props) {
    const numStars = Math.round(props.rating /2 );
    console.log(numStars, props.rating);
    
    return (
        // {numStars}
        <div> teste </div>
        
    );
}