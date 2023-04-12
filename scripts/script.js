let darkThene = false;

function handleDarkThemeClick() {

    if(darkThene == false) {
        darkThene = true;
        document.body.style.backgroundColor = 'black';
    }

    else {
        darkThene = false;
        document.body.style.backgroundColor = 'white';
    }
}
