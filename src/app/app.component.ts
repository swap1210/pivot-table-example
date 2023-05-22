import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  inputJSON = [
    {
      name: 'Record1',
      fields: {
        id: {
          integerValue: 1,
        },
        name: {
          stringValue: 'Ted Right',
        },
        address: {
          stringValue: 'Wall Street',
        },
      },
    },
    {
      name: 'Record2',
      fields: {
        id: {
          integerValue: 2,
        },
        name: {
          stringValue: 'Frank Honest',
        },
        address: {
          stringValue: 'Pennsylvania Avenue',
        },
      },
    },
    {
      name: 'Record3',
      fields: {
        id: {
          integerValue: 3,
        },
        name: {
          stringValue: 'Joan Well',
        },
        address: {
          stringValue: 'Broadway',
        },
      },
    },
    {
      name: 'Record4',
      fields: {
        id: {
          integerValue: 4,
        },
        name: {
          stringValue: 'Gail Polite',
        },
        address: {
          stringValue: 'Bourbon Street',
        },
      },
    },
    {
      name: 'Record5',
      fields: {
        id: {
          integerValue: 5,
        },
        name: {
          stringValue: 'Michael Fair',
        },
        address: {
          stringValue: 'Lombard Street',
        },
      },
    },
    {
      name: 'Record6',
      fields: {
        id: {
          integerValue: 6,
        },
        name: {
          stringValue: 'Mia Fair',
        },
        address: {
          stringValue: 'Rodeo Drive',
        },
      },
    },
    {
      name: 'Record7',
      fields: {
        id: {
          integerValue: 7,
        },
        name: {
          stringValue: 'Cora Fair',
        },
        address: {
          stringValue: 'Sunset Boulevard',
        },
      },
    },
    {
      name: 'Record8',
      fields: {
        id: {
          integerValue: 8,
        },
        name: {
          stringValue: 'Jack Right',
        },
        address: {
          stringValue: 'Michigan Avenue',
        },
      },
    },
  ];

  dataset: any[] = [];
  //expected format
  // dataset: any[] = [
  //   { id: 1, name: 'Ted Right', address: 'Wall Street' },
  //   { id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue' },
  //   { id: 3, name: 'Joan Well', address: 'Broadway' },
  //   { id: 4, name: 'Gail Polite', address: 'Bourbon Street' },
  //   { id: 5, name: 'Michael Fair', address: 'Lombard Street' },
  //   { id: 6, name: 'Mia Fair', address: 'Rodeo Drive' },
  //   { id: 7, name: 'Cora Fair', address: 'Sunset Boulevard' },
  //   { id: 8, name: 'Jack Right', address: 'Michigan Avenue' },
  // ];
  ngOnInit(): void {
    this.inputJSON.forEach((element: any) => {
      let temp: any = {};
      Object.keys(element.fields).forEach((keyVal: string) => {
        let realValue;
        if (element.fields[keyVal].hasOwnProperty('stringValue')) {
          realValue = element.fields[keyVal]['stringValue'];
        } else if (element.fields[keyVal].hasOwnProperty('integerValue')) {
          realValue = element.fields[keyVal]['integerValue'];
        }

        temp[keyVal] = realValue;
      });

      this.dataset.push(temp);
    });
  }
}
