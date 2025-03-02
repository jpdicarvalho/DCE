import './SearchSupplie.css'
import Logo from '../assets/image.png'
import image_section from '../assets/image-section.png'
import { FaArrowRightLong } from "react-icons/fa6";



function SearchSupplie () {
    return (
        <>
           <div className='header__SearchSupplie'>
                <div className='box__image'>
                    <img className='logo' src={Logo} alt="" />
                </div>
           </div>
           <div className='section__main'>
                <div className='get__started'>
                    <h1>Nossas <br/>Soluções</h1>
                    <p>Confira o serviço de busca de fornecedores da Clarke Energia!
                        Informe seu consumo mensal de energia e encontre as melhores opções de fornecimento para a sua empresa.
                    </p>
                    <button>
                        <p>Encontrar fornecedor</p>
                        <FaArrowRightLong />

                    </button>
                </div>

                <div className='image__section'>
                    <img className='inner_image_section' src={image_section} alt="" />
                </div>
           </div>
        </>
    )
}
export default SearchSupplie;