import './SearchSupplie.css'
import Logo from '../assets/image.png'
import image_section from '../assets/image-section.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from 'react';
import { motion } from "framer-motion";


function SearchSupplie () {
    const [inputEnergia, setInputEnergia] = useState (false)

    return (
        <>
            <div className='main__SearchSupplie'>
                <div className='header__SearchSupplie'>
                    <div className='box__image'>
                        <img className='logo' src={Logo} alt="" />
                    </div>
                </div>
                <div className='section__main'>
                    <div className="get__started">
                        <h1 className="text__solution">Nossas <br/>Soluções</h1>
                        <p className="text__information">
                            Confira o serviço de busca de fornecedores da Clarke Energia! Informe seu consumo
                            mensal de energia e encontre as melhores opções de fornecimento para a sua empresa.
                        </p>

                        {!inputEnergia && (
                            <button 
                            className="btn__get__started" 
                            onClick={() => setInputEnergia(true)}
                            >
                            <p>Encontrar fornecedor</p>
                            <IoIosArrowRoundForward className="icon__IoIosArrowRoundForward" />
                            </button>
                        )}

                        {inputEnergia && (
                            <motion.div 
                            className="input-wrapper"
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                            <input 
                                placeholder="Informe um valor, ex.: 30000" 
                                className="input" 
                                name="text" 
                                type="text" 
                            />
                            <button className="Search-btn">Encontrar</button>
                            </motion.div>
                        )}
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