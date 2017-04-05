document.getElementById('passwords').click()

document.body.addEventListener('click', function(event) {

    if (event.target.dataset.section) {
        hideAllSectionsAndDeselectButtons()
        //event.target.classList.add('is-selected')

        selectItem('.navigationItem, .button', event.target.dataset.section)

        // Display the current section
        const sectionId = event.target.dataset.section
        document.getElementById(sectionId).classList.add('is-shown')
    }
})

function selectItem(itemClass, sectionName) {
    const items = document.querySelectorAll(itemClass)
    Array.prototype.forEach.call(items, function(item) {
        if (item.dataset.section === sectionName) {
            item.classList.add('active')
        }
    })
}

function hideAllSectionsAndDeselectButtons() {
    const sections = document.querySelectorAll('.section.is-shown')
    Array.prototype.forEach.call(sections, function(section) {
        section.classList.remove('is-shown')
    })

    const buttons = document.querySelectorAll('.button.active')
    Array.prototype.forEach.call(buttons, function(button) {
        button.classList.remove('active')
    })

    const navItems = document.querySelectorAll('.navigationItem.active')
    Array.prototype.forEach.call(navItems, function(item) {
        item.classList.remove('active')
    })
}
