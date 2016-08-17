"use strict"

class Note {
    constructor(author, content, note_id) {
        this.author = author;
        this.content = content;
        this.note_id = note_id;
    }
}

class NotesApplication {
    constructor() {
        this.note_list = [];
    }

    create(note) {
        this.note_list.push(note);
    }

    listNotes() {
        for (var i = 0; i < this.note_list.length; i++) {
            console.log("Note ID: ", this.note_list[i]["note_id"]);
            console.log(this.note_list[i]["content"]);
            console.log(" ");
            console.log("By ", this.note_list[i]["author"]);
            console.log(" ");
        }

    }

    get(note_id) {
        for (var i = 0; i < this.note_list.length; i++){
            if(this.note_list[i].note_id == note_id) {
                return this.note_list[i]["content"]
            }
        }
 console.log("not found")
    }

    search(search_text) {
        console.log('Showing results for', [search_text]);
        for (var i = 0; i < this.note_list.length; i++) {
            if (this.note_list[i]["content"].indexOf(search_text) >= 0) {
            console.log("Note ID: ", this.note_list[i]["note_id"]);
            console.log(this.note_list[i]["content"]);
            console.log(" ");
            console.log("By ", this.note_list[i]["author"]);
            console.log(" ");
            }
            else{
            return ("Note not found")
        }
        }

    }

    delete(note_id) {
            for (var i = 0; i < this.note_list.length; i++){
                if(this.note_list[i].note_id == note_id) {
                    delete this.note_list[i]
                    console.log ("Note deleted");
                }

        }
    }

    edit(note_id, new_content) {
            for (var i = 0; i < this.note_list.length; i++) {
                if(this.note_list[i].note_id == note_id){
                    this.note_list[i]["content"] = new_content
                    console.log("Note content changed");
                }
        }
    }

}
