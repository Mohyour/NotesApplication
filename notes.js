class Notes {
    constructor(authors, content, note_id) {
        this.authors = author;
        this.content = content;
        this.note_id = note_id;
    }
}

class NotesApplication {
    constructor(author) {
        this.author = author;
        this.note_list = [];
    }

    create(note_content) {
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
        if (note_id >= this.note_list.length) {
            return "Note Id not available";
        }
        return String(this.note_list[note_id]);
    }

    search(search_text) {
        for (var i = 0; i < this.note_list.length; i++) {
            if( this.note_list[i].indexOf(search_text) >= 0){
                console.log("Note ID: ", i);
                console.log(this.note_list[i]);
                console.log("By ", this.author);
                console.log(" ");
            }
            else {
                return "Note not found";
            }
        }
    }

    delete(note_id) {
        if (note_id >= this.note_list.length) {
            return "Note Id not available";
        }
        else {
        this.note_list.splice(note_id, 1);
        return "Note deleted";
        }
    }

    edit(note_id, new_content) {
        if (note_id >= this.note_list.length) {
        return "Note Id not valid";
        }

        else {
            this.note_list[note_id] = new_content;
            return "Note ontent has been changed";
    }
   }

}
