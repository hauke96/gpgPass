document.getElementById('passwords').click()

document.body.addEventListener('click', function(event) {
    hideAllSectionsAndDeselectButtons()

    if (event.target.dataset.section) {
        //event.target.classList.add('is-selected')

        selectItem('.nav-group-item', event.target.dataset.section, 'is-selected')
        selectItem('.btn', event.target.dataset.section, 'active')

        // Display the current section
        const sectionId = event.target.dataset.section
        document.getElementById(sectionId).classList.add('is-shown')
    }
})

function selectItem(itemClass, sectionName, itemProperty) {
    const items = document.querySelectorAll(itemClass)
    Array.prototype.forEach.call(items, function(item) {
        if (item.dataset.section === sectionName) {
            item.classList.add(itemProperty)
        }
    })
}

function hideAllSectionsAndDeselectButtons() {
    const sections = document.querySelectorAll('.js-section.is-shown')
    Array.prototype.forEach.call(sections, function(section) {
        section.classList.remove('is-shown')
    })

    const buttons = document.querySelectorAll('.btn')
    Array.prototype.forEach.call(buttons, function(button) {
        button.classList.remove('active')
    })

    const navItems = document.querySelectorAll('.nav-group-item.is-selected')
    Array.prototype.forEach.call(navItems, function(item) {
        item.classList.remove('is-selected')
    })
}
