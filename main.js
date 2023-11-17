 const pictures = [{src:'grey-hoodie-240_x_300.png', name:'grey hoodie'}, {src:'mens-t-shirt-black-240_x_300.png', name:'black mens shirt'}, {src:'mens-t-shirt-green-240_x_300.png', name:'green mens shirt'}, {src:'mens-t-shirt-grey-240_x_300.png', name:'grey mens shirt'}, {src:'mens-t-shirt-red-240_x_300.png', name:'red mens shirt'}, {src:'mens-t-shirt-white-240_x_300.png', name:'white mens shirt'}, {src:'white-hoodie-240_x_300.png', name:'white hoodie'}, {src:'womens-t-shirt-black-240_x_300.png', name:'black womens shirt'}, {src:'womens-t-shirt-green-240_x_300.png', name:'green womens shirt'}, {src:'womens-t-shirt-grey-240_x_300.png', name:'grey womens shirt'}, {src:'womens-t-shirt-red-240_x_300.png', name:'red womens shirt'}, {src:'mens-t-shirt-white-240_x_300.png', name:'white mens shirt'}]
 const HDpictures = [{src:'grey-hoodie-480_x_600.png', name:'hd grey hoodie'}, {src:'mens-t-shirt-black-480_x_600.png', name:'hd black mens shirt'}, {src:'mens-t-shirt-green-480_x_600.png', name:'hd green mens shirt'}, {src:'mens-t-shirt-grey-480_x_600.png', name:'hd grey mens shirt'}, {src:'mens-t-shirt-red-480_x_600.png', name:'hd red mens shirt'}, {src:'mens-t-shirt-white-480_x_600.png', name:'hd white mens shirt'}, {src:'white-hoodie-480_x_600.png', name:'hd white hoodie'}, {src:'womens-t-shirt-black-480_x_600.png', name:'hd black womens shirt'}, {src:'womens-t-shirt-green-480_x_600.png', name:'hd green womens shirt'}, {src:'womens-t-shirt-grey-480_x_600.png', name:'hd grey womens shirt'}, {src:'womens-t-shirt-red-480_x_600.png', name:'hd red womens shirt'}, {src:'mens-t-shirt-white-480_x_600.png', name:'hd white mens shirt'}]
const html =[]
 for (let i=0; i< pictures.length; i++){
    console.log(pictures[i])
    html.push(`<img data-index="${i}" src="images/${pictures[i].src}" alt="${pictures[i].name}" id="grey hoodie"  data-bs-toggle="modal" data-bs-target="#exampleModal">`)
 }
    document.getElementById('pictures').innerHTML = html.join('')

    const $modalBody = document.querySelector('.modal-body')

    document.getElementById('pictures').addEventListener('click', function(){
        $modalBody.innerHTML = `<img src="images/${e.target.dataset.index}" alt="${pictures[i].name}">`
        
    })

// export default function PicDivs () {
// return <div> 
//     {pics.map(
//          pic =>
//         <img src={pic} alt="test" width="20" height="20"/> 
//        )}
//  </div> }

 /** Uses code https://www.reddit.com/r/learnjavascript/comments/1764m6c/dynamically_adding_pictures_into_a_grid/*/

 