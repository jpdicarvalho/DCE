import { useQuery, useLazyQuery } from "@apollo/client";
import { gql } from "../config/apolloClient";

import './SearchSupplie.css'

import Logo from '../assets/image.png'
import image_section from '../assets/image-section.png'
import image_example from '../assets/energy.jpg'

import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";

import { useState } from 'react';
import { motion } from "framer-motion";

const GET_FORNECEDORES = gql`
    query GetFornecedores($consumo: Int!) {
        fornecedores(consumo: $consumo) {
            id
            nome
            logo
            estado
            custo_por_kwh
            limite_minimo_kwh
            avaliacaoMedia
            clientesAtendidos
        }
    }
`;


function SearchSupplie () {
    const [inputEnergia, setInputEnergia] = useState (false);
    const [valorConsumo, setValorConsumo] = useState ("");
    const [buscarFornecedores, { data, loading, error }] = useLazyQuery(GET_FORNECEDORES);


    const handleBuscarFornecedores = () => {
        const consumo = parseInt(valorConsumo, 10); // Convertendo string para número
        if (isNaN(consumo) || consumo <= 0) {
            alert("Por favor, insira um valor válido de consumo.");
            return;
        }
        buscarFornecedores({ variables: { consumo } });
    };

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
                                    value={valorConsumo}
                                    onChange={(e) => setValorConsumo(e.target.value)}
                                />
                                <button 
                                    className="Search-btn"
                                    onClick={handleBuscarFornecedores}
                                >
                                    Encontrar
                                </button>
                            </motion.div>
                        )}
                    </div>

                    <div className='image__section'>
                        <img className='inner_image_section' src={image_section} alt="" />
                    </div>
                </div>

                {/* Exibindo os fornecedores */}
                <div className="result__section">
                    {loading && <p>Buscando fornecedores...</p>}
                    {error && <p>Erro ao buscar fornecedores: {error.message}</p>}
                    {data && data.fornecedores.length === 0 && <p>Nenhum fornecedor encontrado.</p>}
                    {data && data.fornecedores.map((fornecedor) => (
                        
                        <div key={fornecedor.id} className="fornecedor__card">
                            <div className="box__fornecedor__logo">
                                <img src={image_example} alt={fornecedor.nome} className="fornecedor__logo"/>
                            </div>

                            <div className="box__fornecedor__information">
                                <h4>{fornecedor.nome} ● {fornecedor.estado}</h4>
                                
                                <div className="box__rating">
                                    <MdOutlineStar className="icon__MdOutlineStar"/>
                                    <p className="text__rating">{fornecedor.avaliacaoMedia.toFixed(1)} (422 avaliações)</p>
                                </div>

                                <div className="container__insights">
                                    <div className="box__insights">
                                        <BsBarChartFill className="icon__insights"/>
                                        <p className="text__insights">
                                            Limite mínimo<br/>
                                            {fornecedor.limite_minimo_kwh} kWh
                                        </p>
                                    </div>

                                    <div className="box__insights">
                                        <FaUsers className="icon__insights"/>
                                        <p className="text__insights">
                                            Clientes atendidos<br/>
                                            {fornecedor.clientesAtendidos}+
                                        </p>
                                    </div>
                                    
                                </div>
                                
                                
                                <div className="bottom__card">
                                    <div className="box__value__kwh">
                                        <h3>R$ {fornecedor.custo_por_kwh.toFixed(2)}</h3>
                                        <p className="text__kwh">/kWh</p>
                                    </div>
                                    

                                    <button>
                                        aa
                                    </button>
                                </div>

                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default SearchSupplie;