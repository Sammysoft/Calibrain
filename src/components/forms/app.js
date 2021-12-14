
const file = document.querySelector('#file');
const img = document.querySelector('.image-wrapper');
const uploadBtn = document.querySelector('#uploadBtn');
const push = document.querySelector('#push');


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

            img.style.backgroundImage  = reader.result
        })
        reader.readAsDataURL(choosedFile)
    }
})


push.addEventListener('click', function(){
    Swal.fire({
        title: 'Wait Patiently',
        text: 'Image will take a while to upload, wait for response',
        icon: 'warning'
    })
    const ref = firebase.storage().ref()
    const file = document.querySelector('#file').files[0]
    const name = new Date() + '-Calibrain' + file.name
    const metadata = {
      contentType: file.type
    }
    const task = ref.child(name).put(file,metadata)
    task
    .then(snapshot=> snapshot.ref.getDownloadURL())
    .then(url=>{
      document.querySelector("#imageInput").value = url;
      Swal.fire({
        title: 'Image Added To Calibrain',
        text: 'Proceed with registration',
        input: `${url}`,
        icon: 'success'
    })
    })
  })
