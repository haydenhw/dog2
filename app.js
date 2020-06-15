const BASE_URL = 'https://dog.ceo/api/breeds/image/random';

const fetchRandDogs = (numDogs) => axios(`${BASE_URL}/${numDogs}`);
const renderImg = (imgUrl) => $(`<img src=${imgUrl} class="dog-image">`);
const renderDogs = (dogImgUrls) => dogImgUrls.map(url => renderImg(url));

$(async () => {
  $(document).on('input', '#slider', function () {
    $('#slider_value').html($(this).val());
  });

  $('#js-dogs-form').submit(async function (event) {
    event.preventDefault();
    const numDogsInputVal = $('#slider').val();
    const {data} = await fetchRandDogs(numDogsInputVal);
    const dogImages = renderDogs(data.message);
    $('.js-dog-list').html(dogImages)
    $('.js-hide').removeClass('hidden')
  });
});











