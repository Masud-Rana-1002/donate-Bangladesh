console.log(typeof 100 !== 'number')
function hideHistory(idNameShow){
    document.getElementById('historySection').classList.add('hidden');
    document.getElementById(idNameShow).classList.remove('hidden')
    document.getElementById('donationPage').classList.add('hidden');
    document.getElementById(idNameShow).classList.remove('hidden')
   
   
}