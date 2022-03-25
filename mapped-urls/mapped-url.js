const END_OF_HTTPS = 8;

const mappedSelectorForUrl = {
    'www.amazon.com.br': {
        titulo: '#productTitle',
        imagem: '#imgTagWrapperId #landingImage',
        preco: '.a-price .a-offscreen',
        descricao: '#productDescription > p',
    }
}

const getSelectorsFromMappedUrl = (url) => {
   return mappedSelectorForUrl[getSplitedUrl(url)];
}

const getSplitedUrl = (url) =>{
    return url.slice(END_OF_HTTPS, url.length - 1).split('/')[0]
}

export default getSelectorsFromMappedUrl;