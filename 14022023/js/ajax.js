var xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status == 201){
        console.log(xhr.responseText);
    }

}
xhr.open('GET','https://gorest.co.in/public/v2/users',true);
xhr.send();