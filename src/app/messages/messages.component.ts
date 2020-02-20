import { Component, OnInit } from '@angular/core';

// Importing the messages service into the component
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  // By adding the service into the constructor, Angular will inject the singleton
  // MessagesService into that property whenever it creates the MessagesComponent.
  // It MUST be public because I am going to bind it to the template.
  // Angular ONLY binds to public component properties
  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void {
  }

}
