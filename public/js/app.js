

const file = document.querySelector('#file');
const img = document.querySelector('.image-wrapper');
const uploadBtn = document.querySelector('#uploadBtn');

document.querySelector('.ship').style.display = 'none';
uploadBtn.addEventListener('click', function(){
    document.querySelector('.plus').style.display = 'none';
    document.querySelector('.ship').style.display = 'block';
})

file.addEventListener('change', function(){
    const choosedFile = this.files[0];


    if (choosedFile){
        const reader= new FileReader();

        reader.addEventListener('load', function(){
            alert(reader.result)
            img.style.backgroundImage  = reader.result
            alert('hello')



        })


        reader.readAsDataURL(choosedFile)

    }
})