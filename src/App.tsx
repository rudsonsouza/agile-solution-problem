import {useEffect, useState} from 'react'
import './App.css'

import SelectCategoria from './components/SelectCategoria';
import SelectProduto from './components/SelectProduto';
import SelectMarca from './components/SelectMarca';
import GraficoVendas from './components/GraficoVendas';

// @ts-ignore
import faker from "faker";

interface ProdutoData {
    [key: string]: string[];
}

interface CategoriaData {
    [key: string]: {
        produtos: ProdutoData;
    };
}

interface VendasData {
    [key: string]: number[];
}

interface MockData {
    categorias: CategoriaData;
    vendas: VendasData;
}

const labels = ['January', 'February', 'March', 'April'];

// Dados mockados
const mockData: MockData = {
    categorias: {
        Eletronicos: {
            produtos: {
                Celular: ['Samsung', 'Apple', 'Xiaomi'],
                Laptop: ['Dell', 'Lenovo', 'HP'],
            },
        },
        Eletrodomesticos: {
            produtos: {
                Geladeira: ['Brastemp', 'Electrolux', 'LG'],
                MaquinaDeLavar: ['Samsung', 'LG', 'Bosch'],
            },
        },
    },
    vendas: {
        Samsung: labels.map(() => faker.datatype.number({min: 1, max: 1000})),
        Apple: labels.map(() => faker.datatype.number({min: 1, max: 1000})),
        Xiaomi: labels.map(() => faker.datatype.number({min: 1, max: 1000})),
        Dell: labels.map(() => faker.datatype.number({min: 1, max: 1000})),
        Lenovo: labels.map(() => faker.datatype.number({min: 1, max: 1000})),
        HP: labels.map(() => faker.datatype.number({min: 1, max: 1000})),
        Brastemp: labels.map(() => faker.datatype.number({min: 1, max: 1000})),
        Electrolux: labels.map(() => faker.datatype.number({min: 1, max: 1000})),
        LG: labels.map(() => faker.datatype.number({min: 1, max: 1000})),
        Bosch: labels.map(() => faker.datatype.number({min: 1, max: 1000})),
    },
};

function App() {
    const [categorias, setCategorias] = useState<string[]>([]);
    const [produtos, setProdutos] = useState<string[]>([]);
    const [marcas, setMarcas] = useState<string[]>([]);
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>('');
    const [produtoSelecionado, setProdutoSelecionado] = useState<string>('');
    const [marcaSelecionada, setMarcaSelecionada] = useState<string>('');
    const [dadosVendas, setDadosVendas] = useState<number[]>([]);

    // Carregar as categorias ao montar o componente
    useEffect(() => {
        setCategorias(Object.keys(mockData.categorias));
    }, []);

    // Atualizar o filtro de produtos quando a categoria mudar
    useEffect(() => {
        if (categoriaSelecionada) {
            const produtosDaCategoria = Object.keys(mockData.categorias[categoriaSelecionada].produtos);
            setProdutos(produtosDaCategoria);
            setMarcas([]);
            setProdutoSelecionado('');
            setMarcaSelecionada('');
        }
    }, [categoriaSelecionada]);

    // Atualizar o filtro de marcas quando o produto mudar
    useEffect(() => {
        if (categoriaSelecionada && produtoSelecionado) {
            const marcasDoProduto = mockData.categorias[categoriaSelecionada].produtos[produtoSelecionado];
            setMarcas(marcasDoProduto);
            setMarcaSelecionada('');
        }
    }, [produtoSelecionado, categoriaSelecionada]);

    // Atualizar dados de vendas quando a marca mudar
    useEffect(() => {
        if (marcaSelecionada) {
            const vendas = mockData.vendas[marcaSelecionada];
            setDadosVendas(vendas);
        }
    }, [marcaSelecionada]);

  return (
      <div style={{padding: '20px'}}>
          <h1>Gráfico de Vendas</h1>
          <SelectCategoria
              categorias={categorias}
              categoriaSelecionada={categoriaSelecionada}
              onCategoriaChange={setCategoriaSelecionada}
          />
          <SelectProduto
              produtos={produtos}
              produtoSelecionado={produtoSelecionado}
              onProdutoChange={setProdutoSelecionado}
              disabled={!categoriaSelecionada}
          />
          <SelectMarca
              marcas={marcas}
              marcaSelecionada={marcaSelecionada}
              onMarcaChange={setMarcaSelecionada}
              disabled={!produtoSelecionado}
          />
          {marcaSelecionada && <GraficoVendas marcaSelecionada={marcaSelecionada} dadosVendas={dadosVendas} />}
      </div>
  );
}

export default App
