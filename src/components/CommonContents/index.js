import _imgUrlWhitePcURL from '../../assets/themes/default/images/logo-newtouch-full-white-pc.png'
import _imgUrlWhiteSpURL from '../../assets/themes/default/images/logo-newtouch-full-white-pc.png'
import _imgUrlBluePcURL from '../../assets/themes/default/images/logo-newtouch-full-blue-pc.png'
import _imgUrlBlueSpURL from '../../assets/themes/default/images/logo-newtouch-full-blue-pc.png'

export default {
    name: 'CommonContents',
    data: {
        images: {
            imgUrlWhitePcURL: _imgUrlWhitePcURL,
            imgUrlWhiteSpURL: _imgUrlWhiteSpURL,
            imgUrlBluePcURL: _imgUrlBluePcURL,
            imgUrlBlueSpURL: _imgUrlBlueSpURL,
        },
        variables: {
            scrollSpeed: 500,
        },
        api: {
            url: "/data/",
        }
    }
}