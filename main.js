const blog_para = document.querySelector('#demo');
const blog_form = document.querySelector('#blog_form');
const blog_input = document.querySelector('#blog_input');
const blog_button = document.querySelector('#blog_btn');
const blog_user = document.querySelector('#blog_user');
const blog_txtarea = document.querySelector('#blog_textarea');
const blog_copy = document.querySelector('#copy');
const blog_delete = document.querySelector('#del');
const blog_update = document.querySelector('#update');
const blog_edit = document.querySelector('#edit');

const ourPost = {
    "blog_input": "",
    "blog_txtarea": ""
}

blog_input.addEventListener('input', function (e) {
    let text = e.target.value;
    blog_copy.querySelector('h4.blog_inp_copy').innerHTML = text;
    ourPost.blog_input = text;
})

blog_txtarea.addEventListener('input', function (e) {
    let text = e.target.value;
    blog_copy.querySelector('p.txtarea_copy').innerHTML = text;
    ourPost.blog_txtarea = text;
})

blog_form.addEventListener('submit', function (e) {
    ourPost.blog_input = blog_input.value
    ourPost.blog_txtarea = blog_txtarea.value
    console.log(ourPost)
    e.preventDefault();
    //let postArray=JSON.parse(localStorage.getItem('post'));
    localStorage.setItem("ourPost1", JSON.stringify(ourPost));
let li = document.createElement('li');
//let liContent = document.createTextNode('')
const uList = document.getElementById('blog_user').appendChild(li) ;
uList.innerHTML = `result into_${ourPost.blog_input}:${ourPost.blog_txtarea}`;

blog_input.value = "";
blog_txtarea.value = ""
});
// blog_delete.addEventListener('click', function(e){
// blog_delete = `result into_${ourPost.blog_input}:${ourPost.blog_txtarea}`.splice(1,3);

//const ar =[1, "hhh", true, "hhhhhhhh"]






