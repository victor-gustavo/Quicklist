const form = document.querySelector('form')
const input = document.querySelector('#item-name')
const list = document.querySelector('ul')
const messageRemoved = document.querySelector('#item-removed')

//valida o que está sendo digitado no input
input.addEventListener('input', () =>{
    const nameItemValid = /\d+/g

    input.value = input.value.replace(nameItemValid, "")
})

form.addEventListener('submit', (event) =>{
    event.preventDefault()

    if(input.value.length >= 2){
      list.append(createItemOfList())
    }else{
        alert('Digite um item valido')
    }

    input.value = ""
    
})

function createItemOfList(){
    //cria a li com nome do item, botao de remover e check
    const itemList = document.createElement('li')
    itemList.classList.add('item-list')

    //cria div que vai conter checkbox e span
    const container = document.createElement('div')

    //
    const checkContainer = document.createElement('div')
    checkContainer.classList.add('check-container')

    const check = document.createElement('input')
    check.setAttribute('type','checkbox')

    const itemName = document.createElement('span')

    const removedItem = document.createElement('button')
    removedItem.classList.add('removed-item')

    checkContainer.append(check)

    container.append(checkContainer)
    container.append(itemName)

    itemList.append(container)
    itemList.append(removedItem)
    

    itemName.textContent = input.value
    
    if(check.checked){
        itemList.style.display = 'none'
        console.log('hello')
    }

    //função que remove a li quando ocorre click no removed
    removedItem.addEventListener('click', () =>{
        itemList.remove()
        messageRemoved.style.animationName = 'item-removed'
        messageRemoved.style.display = 'flex'
    })

    return itemList
}