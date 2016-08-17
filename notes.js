class NotesApplication {
    constructor(author){
        this.author = author;
        this.note_list = [];
    }

    notes(){
        return this.note_list;
    }

    create(note_content) {
        this.note_content = note_content;
        this.note_list.push(note_content);
    }

}
