const mappedSelectorForUrl = {
    'https://www.amazon.com.br': {
        titulo: 'teste',
        imagem: 'teste',
        preco: 'teste',
        descricao: 'teste',
    }
}
const getSplitedUrl = (url) =>{
    return url.split('/')[0];
}
export default getSelectorsFromMappedUrl = (url) => {
   return mappedSelectorForUrl[getSplitedUrl(url)];
}