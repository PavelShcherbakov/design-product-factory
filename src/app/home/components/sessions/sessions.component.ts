import { Component, OnInit } from '@angular/core';
import { Session, Author } from 'src/app/shared/models/home/session';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  public sessions: Session[] = [];

  constructor() {
    this.InitSessions();
  }

  ngOnInit() {
  }

  private InitSessions() {
    const s0 = new Session();
    s0.name = 'First session';
    s0.duration = 6;
    s0.date = new Date('November 5');
    s0.authors = [
      new Author('assets/img/home/sessions/avatars/avatar0.svg')
    ];
    s0.description = `In the first session, we will consider design thinking and its understanding as well as different models of design thinking and the design process, and we will better remember this process with various examples. We will also discuss problem solving techniques together and understand the concept of user experience and usability.`;
    this.sessions.push(s0);

    const s1 = new Session();
    s1.name = 'Second session';
    s1.duration = 6;
    s1.date = new Date('November 5');
    s1.authors = [
      new Author('assets/img/home/sessions/avatars/avatar1.svg')
    ];
    s1.description = `In the second session, we will discuss service design, first discussing “What is a service?” Then we practice how to create the right conditions for them in the long run to stay loyal to our product based on the actual needs of our audience and to create solutions that will reduce the hassle of the user in the short run. We are also going to create a way to measure the performance of our product so that we can ensure the quality of the design solution’s performance.`;
    this.sessions.push(s1);

    const s2 = new Session();
    s2.name = 'Third session';
    s2.duration = 6;
    s2.date = new Date('November 5');
    s2.authors = [
      new Author('assets/img/home/sessions/avatars/avatar0.svg')
    ];
    s2.description = `In the third session we will discuss the most important design phase, which is the initial research and review process. We will explore user experience research and user research methods. At the end of the session we will be able to build user personas as well as user scenarios and narrated user stories in the product.`;
    this.sessions.push(s2);

    const s3 = new Session();
    s3.name = 'Fourth Session';
    s3.duration = 6;
    s3.date = new Date('November 5');
    s3.authors = [
      new Author('assets/img/home/sessions/avatars/avatar2.svg')
    ];
    s3.description = `Building experience is one of the key points in product management and design. But how does this experience come about? The experience is made by creating a unique feeling in the mind. In the fourth session, we will learn how to identify users’ behavior and motivate them as well as build stimuli to drive the minds of the target audience together.`;
    this.sessions.push(s3);

    const s4 = new Session();
    s4.name = 'Fifth meeting';
    s4.duration = 6;
    s4.date = new Date('November 5');
    s4.authors = [
      new Author('assets/img/home/sessions/avatars/avatar0.svg'),
      new Author('assets/img/home/sessions/avatars/avatar3.svg')
    ];
    s4.description = `It’s time to get started.The fifth session is intended to capture the audiences’ minds and create a new experience for them, like a humorist, sculptor or painter.But with one big difference - and the difference is that we will solve their problems at the same time by targeting users with product design. The fifth session is actually the beginning of the user experience design process, where we will learn about the concepts of user-centered design and data-driven design.`;
    this.sessions.push(s4);

    const s5 = new Session();
    s5.name = 'Sixth Session';
    s5.duration = 6;
    s5.date = new Date('November 5');
    s5.authors = [
      new Author('assets/img/home/sessions/avatars/avatar4.svg'),
      new Author('assets/img/home/sessions/avatars/avatar5.svg')
    ];
    s5.description = `Today, the world is a world of interaction, in the sixth session we understand users trying to find the best way to interact with them and bring the emotions, perceptions, and awareness of the users to the forefront. We will explore the concept of Interaction Design and also explore it in terms of user experience design, usability and intuitive interface design. In the second part of the sixth session, we go into marketing and practice the marketing strategy of digital products together, as well as discussing the appropriate digital marketing toolkit.`;
    this.sessions.push(s5);

    const s6 = new Session();
    s6.name = 'Seventh Session';
    s6.duration = 6;
    s6.date = new Date('November 5');
    s6.authors = [
      new Author('assets/img/home/sessions/avatars/avatar6.svg')
    ];
    s6.description = `In the seventh session, we are in the world of product management. We will examine software companies’ structures as well as in-team and in-team interactions. In this session, we will look at the duties and characteristics of product team members as well as identify product strategies and learn about different software development methodologies. And finally, we’ll look at a product designer’s red line.`;
    this.sessions.push(s6);

    const s7 = new Session();
    s7.name = 'Eighth Session';
    s7.duration = 6;
    s7.date = new Date('November 5');
    s7.authors = [
      new Author('assets/img/home/sessions/avatars/avatar7.svg'),
      new Author('assets/img/home/sessions/avatars/avatar8.svg')
    ];
    s7.description = `In this session, we will get our hands into the color, learn the basics of user interface design with colored hands, and learn about various interface design tools. We also explore the concepts and fundamentals of iconography and learn about testing the usability of icon design and finally learn the process of visualization in digital products from idea to implementation.`;
    this.sessions.push(s7);

    const s8 = new Session();
    s8.name = 'Ninth Session';
    s8.duration = 6;
    s8.date = new Date('November 5');
    s8.authors = [
      new Author('assets/img/home/sessions/avatars/avatar7.svg'),
      new Author('assets/img/home/sessions/avatars/avatar9.svg')
    ];
    s8.description = `In the ninth session we will continue to immerse ourselves in the world of color and image, identifying the elements of the interface and learning how to properly represent the data. We also remotely team up with Moslem Ebrahimi, a typeface designer, and look at the typography of digital products from the perspective of someone who has had a lifetime of concern for typefaces and Persian fonts.`;
    this.sessions.push(s8);

    const s9 = new Session();
    s9.name = 'Tenth meeting';
    s9.duration = 6;
    s9.date = new Date('November 5');
    s9.authors = [
      new Author('assets/img/home/sessions/avatars/avatar7.svg')
    ];
    s9.description = `In the 10th session we will start with the software and together we will learn what design software capabilities are and what ideas can be made with them and that they are not as complex as the cockpit!`;
    this.sessions.push(s9);
  }
}
