document.getElementById('passwords').click()

document.body.addEventListener('click', function(event) {
    hideAllSectionsAndDeselectButtons()

    if (event.target.dataset.section) {
        event.target.classList.add('is-selected')

        // Display the current section
        const sectionId = event.target.dataset.section
        document.getElementById(sectionId).classList.add('is-shown')
    }
})

function hideAllSectionsAndDeselectButtons() {
    const sections = document.querySelectorAll('.js-section.is-shown')
    Array.prototype.forEach.call(sections, function(section) {
        section.classList.remove('is-shown')
    })

    const buttons = document.querySelectorAll('.nav-group-item.is-selected')
    Array.prototype.forEach.call(buttons, function(button) {
        button.classList.remove('is-selected')
    })
}
