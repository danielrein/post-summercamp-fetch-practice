const radioheadRemainingMembers = ["Jonny Greenwood", "Colin Greenwood", "Ed O'Brien", "Philip Selway"]

const addMembersTrigger = document.getElementById('add-members-trigger')

addMembersTrigger.addEventListener('click', addRemaningRadioheadMembers)


function addRemaningRadioheadMembers() {
  radioheadRemainingMembers.forEach(memberName => {
    let memberObj = {name: memberName, band_id: 2}
    addMember(memberObj)
  })
}

function addMember(member) {
  fetch('http://localhost:3000/members', {
    method: 'POST',
    body: JSON.stringify(member),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(data => console.log(data.id))
}
