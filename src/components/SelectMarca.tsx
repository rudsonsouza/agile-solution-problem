// components/SelectMarca.tsx
import React from 'react';

interface SelectMarcaProps {
    marcas: string[];
    marcaSelecionada: string;
    onMarcaChange: (marca: string) => void;
    disabled: boolean;
}

const SelectMarca: React.FC<SelectMarcaProps> = ({ marcas, marcaSelecionada, onMarcaChange, disabled }) => {
    return (
        <div>
            <label>Marca: </label>
            <select value={marcaSelecionada} onChange={(e) => onMarcaChange(e.target.value)} disabled={disabled}>
                <option value="">Selecione uma Marca</option>
                {marcas.map((marca) => (
                    <option key={marca} value={marca}>
                        {marca}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectMarca;
