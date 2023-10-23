
async function getData(){
    const res=await fetch('https://api.github.com/users/selmanfariz18')
    const data=await res.json()

    const card5 =document.getElementById('stat1')
    const name =document.createElement('h3')
    name.textContent=data.name

    card5.appendChild(name)


    const card =document.getElementById('stat2')
    const repo_name =document.createElement('p')
    repo_name.textContent= data.public_repos
    card.appendChild(repo_name)


    const card2 =document.getElementById('stat3')
    const folo_name =document.createElement('p')
    folo_name.textContent= data.followers

    card2.appendChild(folo_name)


    const card3 =document.getElementById('stat4')
    const folow_name =document.createElement('p')
    folow_name.textContent= data.following

    card3.appendChild(folow_name)

    const org=await fetch('https://api.github.com/users/selmanfariz18/orgs')
    const data4=await org.json()

    const card4 =document.getElementById('stat5')
    const org_name =document.createElement('p')
    org_name.textContent= data4.length

    card4.appendChild(org_name)

}
getData();