
const mappedSelectorForUrl = {
    'www.amazon.com.br': {
        title: {
            selector: '#productTitle',
            attributeType: 'text'
        },
        image: {
            selector: '#imgTagWrapperId #landingImage',
            attributeType: 'src'
        },
        price: {
            selector: '.a-price .a-offscreen',
            attributeType: 'text'
        },
        description: {
            selector: '#productDescription > p',
            attributeType: 'text'
        },
        url: {
            selector: '',
            attributeType: 'url'
        }
    },
    'www.americanas.com.br': {
        title: {
            selector: '.product-title__Title-sc-1hlrxcw-0',
            attributeType: 'text'
        },
        image: {
            selector: '.main-image__Container-sc-1i1hq2n-1 .src__LazyImage-sc-xr9q25-0',
            attributeType: 'src'
        },
        price: {
            selector: '.priceSales',
            attributeType: 'text'
        },
        description: {
            selector: '.src__SpecsCell-sc-70o4ee-5',
            attributeType: 'text'
        },
        url: {
            selector: '',
            attributeType: 'url'
        }
    },
    'www.saraiva.com.br': {
        title: {
            selector: '.title',
            attributeType: 'text'
        },
        image: {
            selector: '.imgGaleryResponsive',
            attributeType: 'src'
        },
        price: {
            selector: '.price-destaque',
            attributeType: 'text'
        },
        description: {
            selector: '#descricao',
            attributeType: 'text'
        },
        url: {
            selector: '',
            attributeType: 'url'
        }
    }
}

export default mappedSelectorForUrl;
