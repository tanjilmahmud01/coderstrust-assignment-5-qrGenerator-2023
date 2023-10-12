const getQR = (event) => {
    event.preventDefault();
    const width = parseInt(document.getElementById('qr-width').value);
    const height = parseInt(document.getElementById('qr-height').value);
    let data = encodeURI(document.getElementById('qr-data').value);
    data = 'WIFI Name: Tp-Link-4321 \nWIFI Password: ' + data;

    fetchQR(width, height, data);
    
}

const fetchQR = async(width, height, data) => {
    const API = `https://api.qrserver.com/v1/create-qr-code/?size=${width}x${height}&data=${data}`;

    const res = await fetch(API);
    
    document.getElementById('qr-img').setAttribute('src',`${res.url}`);

}




const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', getQR);