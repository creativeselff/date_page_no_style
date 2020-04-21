const users = [
    {
        name: 'Lucy',
        gender: 'F',
        hobby: 'pets',
        avatar: 'female.png'
    },
    {
        name: 'Betty',
        gender: 'F',
        hobby: 'pets',
        avatar: 'female.png'
    },
    {
        name: 'Ronald',
        gender: 'M',
        hobby: 'music',
        avatar: 'male.png'
    },
    {
        name: 'Christian',
        gender: 'M',
        hobby: 'sports',
        avatar: 'male.png'
    },
    {
        name: 'Ximena',
        gender: 'F',
        hobby: 'reading',
        avatar: 'female.png'
    },
    {
        name: 'Paul',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'male.png'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'male.png'
    }
]

window.addEventListener('load', () => {

    const searchBtn = document.querySelector('#searchBtn')
    const results = document.querySelector('#results')

    const search = () => {

        // get hobby
        const hobbyField = document.querySelector('#hobby')
        const hobby = hobbyField.value;

        // get gender
        const genderField = document.querySelector('#gender')
        const genderSelected = genderField.selectedIndex;
        const gender = genderField.options[genderSelected].value;

        let resultsHTML = '';
        let numUsers = users.length;

        for (let i = 0; i < numUsers; i++) {

            if (gender === 'A' || gender === users[i].gender) {
                if (hobby === '' || hobby === users[i].hobby) {

                    resultsHTML += '<div class="person-row">\
                <img src="'+ users[i].avatar + '"/>\<div class="person-info">\
                <div>'+ users[i].name + '</div>\
                <div>' + users[i].hobby + '</div>\
                <button>Add as friend</button></div>'
                }
            }
        }
        results.innerHTML = resultsHTML;


    }

    searchBtn.addEventListener('click', search)

});