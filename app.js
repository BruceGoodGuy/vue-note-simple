var vm = new Vue({
    el: "#app",
    data: {
        notes: [],
        isAdd: false,
        note: ''
    },
    created: function() {
        if (this.notes.length === 0 && window.localStorage.notes !== undefined && window.localStorage.notes.length > 0) {
            this.notes = JSON.parse(window.localStorage.getItem('notes'));
        }
    },
    methods: {
        saveNote: function() {
            this.notes.push(this.note)
            this.isAdd = !this.isAdd;
            this.note = '';
            this.updateStorage();
        },
        addItem: function() {
            // console.log()
            this.$refs.note.setAttribute('autoFocus', true)
                // this.$refs.input.$el.children[0].focus();
            this.isAdd = !this.isAdd;
        },
        deleteNote: function(id) {
            this.notes.splice(id, 1);
            this.updateStorage();
        },
        updateStorage: function() {
            window.localStorage.setItem("notes", JSON.stringify(this.notes));
        }
    }
})