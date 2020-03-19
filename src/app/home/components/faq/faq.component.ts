import { Component, OnInit } from '@angular/core';
import { FAQItem } from 'src/app/shared/models/home/faq-item';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public faqData: FAQItem[] = []
  constructor() { }

  ngOnInit() {
    this.initFAQData();
  }

  public initFAQData() {
    const item0 = new FAQItem();
    item0.question = 'Does this course need any special requirements?';
    item0.answer = 'No';
    this.faqData.push(item0);

    const item1 = new FAQItem();
    item1.question = 'Who are the audiences of the product design period of the product factory?';
    item1.answer = 'You';
    this.faqData.push(item1);

    const item2 = new FAQItem();
    item2.question = 'Is it possible to pay by installments?';
    item2.answer = 'Yes';
    this.faqData.push(item2);

    const item3 = new FAQItem();
    item3.question = 'Can I start an internship after I finish the course?';
    item3.answer = 'Maybe';
    this.faqData.push(item3);

    const item4 = new FAQItem();
    item4.question = 'What should I do after I finish the course?';
    item4.answer = 'Nothing';
    this.faqData.push(item4);
  }


}
