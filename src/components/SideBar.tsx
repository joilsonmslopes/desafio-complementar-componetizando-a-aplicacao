import { useState, useEffect } from 'react'
import { api } from '../services/api'

import { Button } from './Button'
import { GenreResponseProps } from '../App'

interface handleClickButtonProps {
  handleClickButton: Function,
  selectedGenreId: number
  genres: GenreResponseProps[]
}

export function SideBar({ genres, handleClickButton, selectedGenreId }: handleClickButtonProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}