import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
    this.getPokemonAbility();
    this.getAllWithAbility("chlorophyll");
  }

  getPokemon(){
    let vileplume = this._http.get('https://pokeapi.co/api/v2/pokemon/44/');
    vileplume.subscribe(data => console.log("My faveorite pokemon is Vileplume:", data))
  }

  getPokemonAbility(){
    let vileplume = this._http.get('https://pokeapi.co/api/v2/pokemon/44/');
    vileplume.subscribe(data => {
      var move = data.abilities[1].ability.name;
      console.log("Vileplume's special ability", move);
    });
    
  }

  getAllWithAbility(ability){
    let pokemon = this._http.get("https://pokeapi.co/api/v2/ability/"+ability+"/");
    pokemon.subscribe(data => {
                                console.log("All the pokemon who use "+ability+":");
                                for(pokemon of data.pokemon){
                                console.log(pokemon.pokemon.name);
                              }});
  }
}
