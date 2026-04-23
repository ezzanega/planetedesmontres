import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from "src/app/shared/shared.module";

@Component({
  selector: 'app-about-us',
  imports: [CommonModule, RouterLink, SharedModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  Math = Math;
toRad(deg: number): number {
  return deg * Math.PI / 180;
}
  stats = [
    { number: '200+', label: 'Références en stock' },
    { number: '50+', label: 'Marques proposées' },
    { number: '5★', label: 'Satisfaction client' },
    { number: '10+', label: 'Années d\'expérience' },
  ];

  values = [
    {
      title: 'Sélection rigoureuse',
      desc: 'Chaque montre est choisie pour sa qualité, son mouvement et son esthétique.',
      icon: 'star'
    },
    {
      title: 'Authenticité garantie',
      desc: 'Toutes nos montres sont 100 % authentiques, avec certificat et garantie.',
      icon: 'shield'
    },
    {
      title: 'Présence locale',
      desc: 'Venez nous rendre visite à Agdal, Rabat — nous sommes à votre écoute.',
      icon: 'location'
    },
    {
      title: 'Conseil personnalisé',
      desc: 'Notre équipe vous guide pour trouver la montre qui vous correspond vraiment.',
      icon: 'chat'
    },
  ];

  brands = [
    'Rolex', 'Omega', 'Tag Heuer', 'Seiko',
    'Tissot', 'Casio', 'Longines', 'Citizen'
  ];
}
