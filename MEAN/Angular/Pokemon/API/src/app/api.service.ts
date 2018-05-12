import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private _http: HttpClient) { 
    this.getPokemon();
    this.getPokemonAbility();
  }

  getPokemon(){
    let vileplume = this._http.get('https://pokeapi.co/api/v2/pokemon/44/');
    vileplume.subscribe(data => console.log("My faveorite pokemon is Vileplume:", data))
  }

  getPokemonAbility(){
    let vileplume = this._http.get('https://pokeapi.co/api/v2/pokemon/44/');
    vileplume.subscribe(data => console.log("Vileplume's special ability", ""+data.abilities[1].ability.name, this.getAllWithAbility(data.abilities[1].ability.name)));
    
  }

  getAllWithAbility(ability){
    let pokemon = this._http.get("https://pokeapi.co/api/v2/ability/"+ability);
    pokemon.subscribe(data => console.log("Pokemon with ", data));
  }
}
