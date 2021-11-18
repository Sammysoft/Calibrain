alert('Hello')

const file = document.querySelector('#file');
const img = document.querySelector('.image');
const uploadBtn = document.querySelector('#uploadBtn');


file.addEventListener('change', ()=>{
    const choosedFile = this.files[0];

    if (choosedFile){
        const reader= new FileReader();

        reader.addEventListener('load', ()=>{
            img.style.backgroundImage = reader.result;
        })

        reader.readAsDataURL(choosedFile)
    }
})