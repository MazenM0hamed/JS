import  { menuArray } from './data.js'

const feed = document.getElementById('feed')
const addBtn = document.getElementById('add-btn')
const orderContainer = document.getElementById('order-container')
const payBtn = document.getElementById('pay-btn')
const modalOverlay = document.getElementById('modal-overlay')
const closeModalBtn = document.getElementById('modal-close-btn')


document.addEventListener('click', function(e){
    const addButton = e.target.closest('.add-item-btn')
    const removeBtn = e.target.closest('.remove-btn')

    if(addButton){
        handleAddClick(addButton.dataset.add)
    }

    
    if(removeBtn){
        handleRemoveClick(removeBtn.dataset.remove)
    }
})

function handleAddClick(addId){
    const targetAddIndex = menuArray.find(function(item){
        return item.id === Number(addId)
    })
        order.push(targetAddIndex)
        

        addItems()
        totalPrice(order)
}

function handleRemoveClick(removeId){
    const targetRemoveIndex = order.findIndex(function(item){
        return item.id === Number(removeId)
    })

    order.splice(targetRemoveIndex, 1)

    addItems()
}

payBtn.addEventListener('click',function(e){
    e.preventDefault()

    order.length =0
    modalOverlay.style.display = 'none'
    orderContainer.style.display = 'none'
    
    feed.innerHTML = `
        ${itemsRendering()}
        <div class="message">
        <h2>Thanks, James! Your order is on its way!</h2>
        </div>
        <button class="order-completion-menu">Back To Menu</button>
        <button class="order-completion-menu">Track your order</button>
    `
})

function itemsRendering(){
    return  menuArray.map(item => {
    return`
        <div class="item">
          <div class="item-img">${item.emoji}</div>
            <div class="item-details">
                <h5>${item.name}</h5>
                <p>${item.ingredients}</p>
                <h5>$${item.price}</h5>
            </div>
          <div class="add-item">
            <button class="add-item-btn" id="add-btn" data-add="${item.id}"><div>+</div></button>
          </div>
        </div>  
    `
    }).join('')
}


const order =[]
function addItems(){

    if(order.length === 0){
        orderContainer.innerHTML =''
        return
    }
    
    orderContainer.innerHTML = `
            <div class="order">
                <h5 class="order-label">Your order</h5>
                
                    ${order.map(item => `
                        <div class="order-item">
                            <p>${item.name} <button class="remove-btn" data-remove="${item.id}"> remove </button></p>
                            <p>$${item.price}</p>
                        </div>
                        
                        
                    `).join('')} 

                    <div class="total-price order-item">
                            <p> Total Price: </p>
                            <p> $${totalPrice(order)}</p>
                    </div>
                    <button id="complete-order-btn" class="order-completion"> Complete Order </button>
                
                
            </div>

    `

    const completeOrderBtn = document.getElementById('complete-order-btn')

    completeOrderBtn.addEventListener('click',function(){
    modalOverlay.style.display = 'flex';
            })
    

    closeModalBtn.addEventListener('click',function(){
        modalOverlay.style.display = 'none'
    })

}

function totalPrice(arr){
    return arr.reduce((total , item) =>  total + item.price , 0)
}

feed.innerHTML = itemsRendering()



        