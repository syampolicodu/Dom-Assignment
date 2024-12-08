// 1. Write a JavaScript program to remove items from a drop-down list.
{
    document.getElementsByTagName('button')[0].addEventListener('click', elementRemove)

    function elementRemove() {
        let rem = document.getElementById('colorSelect').firstElementChild
        document.getElementById('colorSelect').removeChild(rem)
        alert(rem.innerHTML + ' Removed')
        document.getElementById('colorSelect').setAttribute(selected, rem)
    }
}

// 2. Write a JavaScript program to change the  color given text in p tag  
{
    let elm = document.getElementsByTagName('p')[0]
    function textBlue() {
        elm.style.color = 'blue'
    }
    function textRed() {
        elm.style.color = 'red'
    }
    function textGreen() {
        elm.style.color = 'Green'
    }
    function textViolet() {
        elm.style.color = 'violet'
    }
    function textOrange() {
        elm.style.color = 'orange'
    }
}

{
    function changeColor() {
        const selectText = document.getElementById('textElement')
        const selectColor = document.getElementById('colorSelect2')
        const selectValue = selectColor.value
        selectText.style.color = selectValue
    }

}
// 3. Write a JavaScript function to get the values of First and Last names of the following form.
{ 
    function fsubmit() {
        let fname = document.getElementById('firstName').value
        let lname = document.getElementById('lastName').value
        alert('Name Entered ' + fname + ' ' + lname)
    }
}

// 4. Write a JavaScript program to display a random image (clicking on a button) from the following list.
{
    let image = document.getElementById('imge')
    function image1() {
        image.style.width = '240px'
        image.style.height = '150px'
        image.src ='https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot'
    }
    function image2() {
        image.style.width = '320px';
        image.style.height = '195px';
        image.src = 'https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot';
    }
    function image3() {
        image.style.width = '500px';
        image.style.height = '343px';
        image.src = 'https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot';
    }
}