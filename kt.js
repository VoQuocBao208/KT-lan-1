//bai1
document.getElementById('submit').addEventListener('click', () => {
    const fullname=document.getElementById('fullname').value 
    const password=document.getElementById('password').value 
    const email=document.getElementById('email').value 

    const account ={
        fullname:fullname,
        password: password,
        email : email
    }

    const taikhoan = JSON.parse(localStorage.getItem('account'))
    taikhoan.push(account)
    localStorage.setItem('taikhoan', JSON.stringify(taikhoan))
}
)


if(localStorage.getItem('account')===null){
    localStorage.setItem('account',JSON.stringify([]))
}

//bai2

