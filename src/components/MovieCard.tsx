import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';
import { useMemo } from 'react';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function MovieCard(props: MovieCardProps) {

  const StarIcon = useMemo(() => {
    return <Star />
  }, [])

  const ClockIcon = useMemo(() => {
    return <Clock />
  }, [])

  return (
    <div className="movie-card">
      <img
        src={props.poster}
        alt={props.title}
      />

      <div>
        <div className="movie-info">
          <span>{props.title}</span>
          <div className="meta">
            <div>
              {StarIcon} {props.rating}
            </div>

            <div>
              {ClockIcon} {props.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}