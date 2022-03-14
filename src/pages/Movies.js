import React, { useState } from 'react';
import MovieForm from '../components/MovieForm';
import Movie from '../components/Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const removeMovie = (id) => {
        setMovies(movies.filter(movie => {
          return movie.id !== id;
        }));
      };
    const renderMovies = movies.length ? movies.map(movie => {
        return (
          <Movie 
            movie={movie} 
            key={movie.id}
            removeMovie={removeMovie}
          />
        );
      }) : '추가된 영화가 없습니다.';
      const addMovie = (movie) => {
        setMovies([
          ...movies,
          movie
        ]);
      };

    return (
        <>
            <h1>Movie list</h1>
            
            <div class="container">
        <div id="formContainer" class="formContainer">
            <form id="memberForm">
                <div>
                    <input type="hidden" id="memberUid"/>
                    
                    <div>
                        <label for="memberName">Name </label>
                        <input type="text" id="memberName" class="input-sm"/>
                    </div>
                    
                    <div>
                        <label for="memberId">ID </label>
                        <input type="text" id="memberId" class="input-sm"/>
                    </div>
                    
                    <div>
                        <label for="memberPw">PW </label>
                        <input type="password" id="memberPw" class="input-sm"/>
                    </div>

                    <div>
                        <label for="memberRePw">RePW </label>
                        <input type="password" id="memberRePw" class="input-sm"/>
                    </div>

                    <div>
                        <label for="memberCPF">CPF </label>
                        <input type="text"  oninput="this.value = this.value.replace(/[^0-9.]/g,'').replace(/(\..*)\./g, '$1');" id="memberCPF" maxlength='14'/>
                    </div>
                    <div id="btnaru">
                        <button type="button" id="BackBtn" class="btn">BACK</button>
                        <button type="button" id="memberAddBtn" class="btn">MAKEid</button>
                        <button type="button" id="CleanBtn" class="btn">clean</button>
                    </div>
                </div>
            </form>
        </div>
      

        <table class="memberTable">
            <thead>
                <tr>
                    <th width="5%">MamberNum</th>
                    <th width="13%">Name</th>
                    <th width="13%">Id</th>
                    <th width="13%">PW</th>
                    <th width="13%">cpf</th>
                </tr>
            </thead>
            <tbody id="membersTbody">
            </tbody>
        </table>
      </div>
        </>
    );
};

export default Movies;