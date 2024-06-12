let envelope = document.getElementById("envelope")
let shadowEnvelope = document.getElementById('shadow')


envelope.addEventListener('mouseenter', () =>{
    shadowEnvelope.style.transform = 'translateY(4rem)'
    shadowEnvelope.style.transition = '.3s ease-in-out'
})

envelope.addEventListener('mouseleave', () =>{
    shadowEnvelope.style.transform = 'translateY(0rem)'
    shadowEnvelope.style.transition = '.3s ease-in-out'
})



