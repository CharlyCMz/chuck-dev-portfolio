import { Component, signal } from '@angular/core';
import { HobbyCardComponent } from '../../components/hobby-card/hobby-card.component';
import { Hobby } from '../../models/hobby.model';
import { Value } from '../../models/value.model';
import { ValueCardComponent } from '../../components/value-card/value-card.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ValueCardComponent, HobbyCardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  formationSelected = signal<number>(0);

  studies = [
    {
      entity: 'National University of Colombia',
      title: 'Chemical Engineer',
      description:
        'My foundation in Chemical Engineering has gifted me with a unique perspective on problem-solving and analytical thinking. This field taught me to approach challenges methodically, balancing creativity with scientific precision, skills that have proven invaluable in my software development career. It has been more that 8 years of learning.',
      story:
        '8 years of expirience in different fields of the industry, directing production teams of up to 150 people towards the mos challenging situations which includes industrial process design, administration and control, waste water treatment plants optimization and operation, energy suply for process from different sources as coal, gas and other fuelsOver 8 years, I worked across various areas of the chemical industry, leading production teams of up to 150 people through complex challenges. My role involved industrial process design, administration, and control. I gained hands-on experience in optimizing and operating wastewater treatment plants, contributing to environmental protection efforts. Additionally, I managed energy supply for processes, working with diverse sources including coal, gas, and other fuels. This experience sharpened my technical skills, leadership abilities, and adaptability',
    },
    {
      entity: 'Digital House',
      title: 'Full Stack Software Developer',
      description:
        'Transitioning into Software Development was an exciting leap that opened up a world of endless possibilities. This program nurtured my passion for creating digital solutions and honed my ability to write clean, efficient code. The joy of bringing ideas to life through programming continues to inspire me every day.',
      story:
        'The IT field opened doors to work with exceptional teams. I started in FinTech as a full stack developer, contributing to a startup aiming to make banking services more accessible in Latin America. This experience inspired me to freelance, participating in various local startup projects. My journey then expanded internationally, leading me to focus on C# and .NET development. This shift brings me closer to my childhood dream of game development with Unreal Engine. Each step has been a learning opportunity, allowing me to grow both professionally and personally in the dynamic world of software development.',
    },
    {
      entity: 'Platzi',
      title: 'Never Stop Learning!',
      description:
        "My learning journey extends beyond traditional education. Through Platzi, an innovative online academy, I've had the pleasure of exploring a variety of short courses. These have been instrumental in helping me integrate new tools and skills into my repertoire. The flexibility of online learning combined with Platzi's engaging content has made continuous learning an enjoyable and enriching part of my professional life.",
      story:
        "Through Platzi's online platform, I've refined both technical and soft skills. I've completed full-stack programs using JavaScript, working with Vue for front-end and Express for back-end development. I've also delved into TypeScript, exploring Nest and Angular frameworks. My studies extended to .NET technologies, enhancing my C# skills. Additionally, I've strengthened my grasp on programming fundamentals and theory, building a solid foundation for my software development career. These courses have not only expanded my technical toolkit but also improved my problem-solving abilities and adaptability in the ever-evolving tech landscape.",
    },
  ];

  values: Value[] = [
    {
      name: 'Discipline',
      imgUrl: '../../../assets/images/auron.jpg',
      description: 'As my favorite character in FFX, Auron has taught me about true dedication and commitment to a cause, giving yourself over to larger goals.',
    },
    {
      name: 'Inventiveness',
      imgUrl: '../../../assets/images/megaman.jpg',
      description: "There is no character more skilled at handling new skills, tools and knowledge than Megaman's trusty X! He taught me that inventiveness is the best weapon.",
    },
    {
      name: 'Pride',
      imgUrl: '../../../assets/images/vegeta.jpg',
      description: 'When we were young we loved Goku but, maturing means accepting that the proud Vegeta is more accurate, he carries each of his visions of life with poise, with conscience but above all he is proud of the person he has become.',
    },
    {
      name: 'Tenacity',
      imgUrl: '../../../assets/images/hellscream.jpg',
      description: 'The good Grom Hellscream from WoW, is the image I see when I think about never giving up, that a will must be unbreakable and that no matter the challenge I must continue the path with firmness.',
    },
  ];

  hobbies: Hobby[] = [
    {
      name: 'Video Games',
      imgUrl:
        'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
        'Like any 90s kid, I enjoy remembering great moments with my old consoles or trying out the wonders of new games. I like to share this hobby through streaming, feel free to join me in any of my channels!!',
      extra: {
        subTitle: 'Connect with me:',
        links: [
          {
            linkImgUrl: 'assets/images/kick.png',
            anchorUrl: 'https://kick.com/chuckgames',
            tooltip: 'Kick Channel',
          },
          {
            linkImgUrl: 'assets/images/twitch.png',
            anchorUrl: 'https://www.twitch.tv/chuckgames9104',
            tooltip: 'Twitch Channel',
          },
        ],
      },
    },
    {
      name: 'Motorcycles',
      imgUrl:
        'https://images.pexels.com/photos/22845781/pexels-photo-22845781/free-photo-of-a-royal-enfield-gt-650-motorcycle-parked-on-the-pavement.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      description: 'I have been a motorcyclist for most of my life, and have had the opportunity and fortune to experience all kinds of motorcycles, currently I proudly ride my Continental GT650. Next you will find some of my dream bikes!',
      extra: {
        subTitle: 'My dream bikes:',
        links: [
          {
            linkImgUrl: 'assets/images/yamaha.png',
            anchorUrl:
              'https://www.incolmotos-yamaha.com.co/vehiculo/wr450f/8418/',
            tooltip: 'Todoterreno WR-450',
          },
          {
            linkImgUrl: 'assets/images/triumph.png',
            anchorUrl: 'https://triumphcolombia.com/motos/tiger-900-rally/',
            tooltip: 'Touring/Offroad Tigger 900',
          },
          {
            linkImgUrl: 'assets/images/arch.png',
            anchorUrl: 'https://archmotorcycle.com/arch-krgt-1/',
            tooltip: 'Hand-Made Keanu Reves Motorcycle',
          },
        ],
      },
    },
    {
      name: 'Guitar',
      imgUrl:
        'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: "One of my great dreams was always to be an excellent musician, even though I didn't achieve it, the guitar became my channel of expression and following the notes of a good song is today one of my greatest pleasures. Here you got a sample list of my musical taste!!",
      extra: {
        subTitle: "Charly's sounds:",
        links: [
          {
            linkImgUrl: 'assets/images/Spotify.png',
            anchorUrl:
              'https://open.spotify.com/playlist/4mGY2MA3ppUieP7Rytk6xX?si=2e4339c82d064fbe',
            tooltip: 'Spotify playlist for my life soundtrack',
          },
        ],
      },
    },
    {
      name: 'Drawing & Photography',
      imgUrl:
        'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'These topics have always interested me. I discovered in photography and drawing a way to express my emotions and thoughts and let them flow to share them with others. It is a little escape for new scenarios or even for rainy afternoons at home.',
    },
  ];

  toogleFormation(i: number) {
    this.formationSelected.set(i);
  }
}
