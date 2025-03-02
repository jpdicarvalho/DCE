import './SearchSupplie.css'
import Logo from '../assets/image.png'
import image_section from '../assets/image-section.png'
import { IoIosArrowRoundForward } from "react-icons/io";



function SearchSupplie () {
    return (
        <>
            <div className='main__SearchSupplie'>
                <div className='header__SearchSupplie'>
                    <div className='box__image'>
                        <img className='logo' src={Logo} alt="" />
                    </div>
                </div>
                <div className='section__main'>
                    <div className='get__started'>
                        <h1 className='text__solution'>Nossas <br/>Soluções</h1>
                        <p className='text__information'>Confira o serviço de busca de fornecedores da Clarke Energia!
                            Informe seu consumo mensal de energia e encontre as melhores opções de fornecimento para a sua empresa.
                        </p>
                        <button className='btn__get__started'>
                            <p>Encontrar fornecedor</p>
                            <IoIosArrowRoundForward className='icon__IoIosArrowRoundForward'/>

                        </button>
                    </div>

                    <div className='image__section'>
                        <img className='inner_image_section' src={image_section} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchSupplie;