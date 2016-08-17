class NotesApplication {
    constructor(author) {
        this.author = author;
        this.note_list = [];
    }

    create(note_content) {
        this.note_content = note_content;
        this.note_list.push(note_content);
    }

    listNotes() {
        for (var i = 0; i < this.note_list.length; i++) {
            console.log("Note ID: ", i);
            console.log(this.note_list[i]);
            console.log("By ", this.author);
            console.log(" ");

        }

    }

    get(note_id) {
        return String(this.note_list[note_id]);
    }

}
