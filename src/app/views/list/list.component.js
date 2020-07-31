var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
let ListComponent = class ListComponent {
    constructor() {
        this.selectedPkm = null;
        this.pokemonList = [
            { name: 'Bulbasaur', number: 1 },
            { name: 'Charmander', number: 4 },
            { name: 'Squirtle', number: 7 },
            { name: 'Pikachu', number: 25 }
        ];
    }
    get pkmSprite() {
        const number = ('000' + this.selectedPkm.number).slice(-3);
        return `//serebii.net/sunmoon/pokemon/${number}.png`;
    }
    ngOnInit() {
    }
    selectPokemon(pkm) {
        this.selectedPkm = pkm;
    }
};
ListComponent = __decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.css']
    })
], ListComponent);
export { ListComponent };
