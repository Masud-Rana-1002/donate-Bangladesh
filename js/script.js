document.getElementById('blogBtn').addEventListener('click', function(){
  
    window.location.href = './faq.html';
})
let modals = document.getElementById('my_modal_1')
let donateNowBtnClassName = document.getElementsByClassName('donateNowBtn');
for(let donateNowBtn of donateNowBtnClassName){
    donateNowBtn.addEventListener("click", function(event){
        const donateAmountInputValue = getInputValueById(event.target.parentNode.childNodes[7]);
        let availableBalance = getInnerTextById('availableBalance');
        if(isNaN(donateAmountInputValue) || donateAmountInputValue <= 0){
            alert('Invalid Donation Amount')
            event.target.parentNode.childNodes[7].value ='';
            
            return
        }
        if(availableBalance < donateAmountInputValue){
            alert("You Don't Have Enough Balance");
            event.target.parentNode.childNodes[7].value ='';
            return
        }
        modals.showModal()
        const donateAmount =  getInnerTextValueById(event.target.parentNode.childNodes[1].childNodes[1].childNodes[3].childNodes[0]);
        let donate = donateAmount + donateAmountInputValue;
        event.target.parentNode.childNodes[1].childNodes[1].childNodes[3].childNodes[0].innerText = donate;
        document.getElementById('availableBalance').innerText = availableBalance - donateAmountInputValue;
        event.target.parentNode.childNodes[7].value ='';

        let placeName = event.target.parentNode.childNodes[3].innerText;
        
        donateHistory(donateAmountInputValue, placeName)
       
    })
}

//Donation history
function donateHistory(amount, place){
    let historyContainer = document.getElementById('historySection');
    const date = new Date();
    let text = date.toString();
    let divCreate = document.createElement('div');
    divCreate.innerHTML = `
    <div class="card lg:card-side bg-base-100 shadow-sm p-6 border flex flex-col gap-4 mb-5 ">
                <p class="text-xl font-bold space-x-2 ">
                    <span>${amount}</span><span>Taka</span> is <span>${place}</span>
                </p>
                <p>Date : ${text}</p>
            </div>
    `
    historyContainer.appendChild(divCreate)
}


document.getElementById('donationBtn').addEventListener('click', function(){
    document.getElementById('donationBtn').classList.add('bg-commonColor')
    document.getElementById('historyBtn').classList.remove('bg-commonColor')
    hideHistory('donationPage')
})
document.getElementById('historyBtn').addEventListener('click', function(){
    document.getElementById('historyBtn').classList.add('bg-commonColor')
    document.getElementById('donationBtn').classList.remove('bg-commonColor')
    hideHistory('historySection')
})
hideHistory()

 