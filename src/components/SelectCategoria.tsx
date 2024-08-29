// components/SelectCategoria.tsx
import React from 'react';

interface SelectCategoriaProps {
    categorias: string[];
    categoriaSelecionada: string;
    onCategoriaChange: (categoria: string) => void;
}

const SelectCategoria: React.FC<SelectCategoriaProps> = ({ categorias, categoriaSelecionada, onCategoriaChange }) => {
    return (
        <div>
            <label>Categoria: </label>
            <select value={categoriaSelecionada} onChange={(e) => onCategoriaChange(e.target.value)}>
                <option value="">Selecione uma Categoria</option>
                {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                        {categoria}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectCategoria;