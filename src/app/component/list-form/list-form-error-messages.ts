export class ListFormErrorMessages {



   constructor(
        public forControl: string, public forValidator: string, public text: string
    ) { } }
export const BookFormErrorMessages = [ new ListFormErrorMessages('title', 'required', 'Ein Buchtitel muss angegeben werden'),
    new ListFormErrorMessages('title', 'required', 'Es muss ein Titel angegeben werden'),
    new ListFormErrorMessages('dueDate', 'required', 'Es muss ein DueDate angegeben werden'),
];



