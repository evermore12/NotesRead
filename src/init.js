/* function Note(text, date) {
    this.text = text;
    this.date = date;
  }

window.addEventListener('load', () => {
    notes = fetch('api/GetNotes/?name=jonathan')
    .then(response => response.json())
    .then(json => 
        json.forEach(json => {
            note = document.createElement('title').innerText = json.Note
            document.getElementById("notes").append(note)

        })
    )
}) */

