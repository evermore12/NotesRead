function Note(text, date) {
    this.text = text;
    this.date = date;
  }

window.addEventListener('load', () => {
    notes = fetch('api/GetNotes/jonathan')
    .then(response => response.json())
    .then(json => 
        json.forEach(json => {
            let note = document.createElement('p')
            note.innerText = json.Note
            note.className = "note"
        
            let date = document.createElement('p')
            date.innerText = new Date(json.Date* 1000).toLocaleString("sv-SE", {day: "numeric", month: "long"})
            date.className = "date"

            let li = document.createElement('li')
            li.appendChild(note)
            li.appendChild(date)
            document.getElementById("notes").append(li)
        })
    )
})

