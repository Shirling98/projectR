
let animeValue = '';
let content = [];

function getName() {
   animeValue = document.getElementById('animeName').value;
   console.log(animeValue);
   return animeValue;
}


 function getAnime() {
 fetch(`https://api.anilibria.tv/v3/title?code=${animeValue}`)
  .then((response) => {
    // Проверяем успешность запроса и выкидываем ошибку
    if (!response.ok) {
      throw new Error('Error occurred!')
    }
    return response.json();
  })
  .then(data => {
    let title = document.querySelector('.animes');
    title.innerHTML += `
     <li class="anime">
            <p>${data.names.ru}</p>
            <p>${data.genres}</>
            <img src="${data.posters.original.url}" width="300">
        </li>
    `
  })
  // Теперь попадём сюда, так как выбросили ошибку
  .catch((err) => {
    console.log(err)
  }
)
}

function getContent() {
  let key;
  for(key in content) {
    console.log(content[key].names)
  }
}

